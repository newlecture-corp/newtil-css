// Main generator entry. Loads rule modules, generates utility CSS files.
// After each rule's base CSS, appends responsive variants (sm/md/lg/xl)
// wrapped in @media. Each variant prefixes selectors with breakpoint name.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildCatalog } from "./catalog.js";
import { resetSelectorsRegistry } from "./emit.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.resolve(__dirname, "../css/util");

// Responsive breakpoints (Tailwind-aligned, mobile-first)
const BREAKPOINTS = [
	{ prefix: "sm", minWidth: "640px" },
	{ prefix: "md", minWidth: "768px" },
	{ prefix: "lg", minWidth: "1024px" },
	{ prefix: "xl", minWidth: "1280px" },
];

// Pseudo-state variants — prefix adds to class name, pseudo appends to selector.
// Covers the most commonly needed interactive / form states.
const PSEUDO_VARIANTS = [
	{ prefix: "hover", pseudo: ":hover" },
	{ prefix: "focus", pseudo: ":focus" },
	{ prefix: "focus-visible", pseudo: ":focus-visible" },
	{ prefix: "focus-within", pseudo: ":focus-within" },
	{ prefix: "active", pseudo: ":active" },
	{ prefix: "disabled", pseudo: ":disabled" },
	{ prefix: "checked", pseudo: ":checked" },
	{ prefix: "visited", pseudo: ":visited" },
];

// Extract @keyframes blocks so they aren't duplicated in each
// pseudo/responsive expansion. @keyframes are global — they should appear
// exactly once per bundle, not inside @media nor repeated per pseudo variant.
function extractKeyframes(css) {
	const keyframesBlocks = [];
	const removals = [];
	const kwRegex = /@keyframes\s+[\w-]+\s*\{/g;
	let m;
	while ((m = kwRegex.exec(css)) !== null) {
		const startIdx = m.index;
		let depth = 1;
		let i = kwRegex.lastIndex;
		while (i < css.length && depth > 0) {
			if (css[i] === "{") depth++;
			else if (css[i] === "}") depth--;
			i++;
		}
		if (depth === 0) {
			keyframesBlocks.push(css.slice(startIdx, i));
			removals.push([startIdx, i]);
		}
	}
	let cleanCss = css;
	for (let j = removals.length - 1; j >= 0; j--) {
		const [s, e] = removals[j];
		cleanCss = cleanCss.slice(0, s) + cleanCss.slice(e);
	}
	return { cleanCss, keyframes: keyframesBlocks.join("\n\n") };
}

// Expand base CSS with pseudo-state variants.
// For each rule block, append 8 variant rules (hover, focus, etc.) with
// prefixed class name + pseudo-class suffix on selector.
function expandPseudoStates(baseCss) {
	const variants = [];
	for (const ps of PSEUDO_VARIANTS) {
		const wrapped = baseCss.replace(
			/^(\.[^{]+?)\s*\{([^}]+)\}/gm,
			(_match, sels, decls) => {
				const newSels = sels
					.split(/,\s*\n?\s*/)
					.map((s) => s.trim())
					.filter(Boolean)
					.map((s) => s.replace(/^\./, `.${ps.prefix}\\:`) + ps.pseudo)
					.join(",\n");
				return `${newSels} {${decls}}`;
			}
		);
		variants.push(wrapped);
	}
	return baseCss + "\n\n" + variants.join("\n\n");
}

// Parse base CSS and generate responsive variants.
// For each rule block matching `.selector(s) { decls }`, create prefixed
// versions wrapped in @media.
function expandResponsive(baseCss) {
	const variants = [];
	for (const bp of BREAKPOINTS) {
		// Match each rule block. ^\. anchors to line start with class selector.
		// [^{]+ captures all selectors (comma-separated, possibly multi-line).
		// [^}]+ captures the declaration block.
		const wrapped = baseCss.replace(
			/^(\.[^{]+?)\s*\{([^}]+)\}/gm,
			(_match, sels, decls) => {
				// Prefix each comma-separated selector with breakpoint prefix.
				// Selector pattern in file: `.margin\:4` -> `.sm\:margin\:4`.
				const newSels = sels
					.split(/,\s*\n?\s*/)
					.map((s) => s.trim())
					.filter(Boolean)
					.map((s) => s.replace(/^\./, `.${bp.prefix}\\:`))
					.join(",\n");
				return `${newSels} {${decls}}`;
			}
		);
		// Indent the wrapped block inside @media for readability.
		const indented = wrapped
			.split("\n")
			.map((line) => (line.length ? "\t" + line : line))
			.join("\n");
		variants.push(
			`@media (min-width: ${bp.minWidth}) {\n${indented}\n}`
		);
	}
	return baseCss + "\n\n" + variants.join("\n\n") + "\n";
}

// Discover rule modules (any .js file in rules/)
async function loadRules() {
	const rulesDir = path.join(__dirname, "rules");
	const files = fs.readdirSync(rulesDir).filter((f) => f.endsWith(".js"));
	const rules = [];
	for (const f of files.sort()) {
		const mod = await import(path.join(rulesDir, f));
		if (!mod.default || !mod.default.fileName || !mod.default.generate) {
			throw new Error(
				`Rule module ${f} must default-export { fileName, generate }`
			);
		}
		rules.push({ source: f, ...mod.default });
	}
	return rules;
}

async function main() {
	console.log("Building token catalog…");
	const catalog = buildCatalog();
	const counts = Object.fromEntries(
		Object.entries(catalog).map(([k, v]) => [k, Object.keys(v).length])
	);
	console.log("Token catalog:", counts);

	console.log("\nLoading rules…");
	const rules = await loadRules();
	console.log(`Loaded ${rules.length} rule module(s):`, rules.map((r) => r.source));

	console.log("\nGenerating files…");
	let totalBase = 0;
	let totalFinal = 0;
	for (const ruleMod of rules) {
		resetSelectorsRegistry();
		const rawCss = ruleMod.generate(catalog);
		// Pull @keyframes out first — they're global and shouldn't be
		// multiplied by pseudo/responsive expansion.
		const { cleanCss, keyframes } = extractKeyframes(rawCss);
		// Pipeline: base (no keyframes) -> pseudo -> responsive.
		// Keyframes prepended once at top if present.
		const withPseudo = expandPseudoStates(cleanCss);
		const expanded = expandResponsive(withPseudo);
		const finalCss = keyframes ? keyframes + "\n\n" + expanded : expanded;
		const outPath = path.join(OUT_ROOT, ruleMod.fileName);
		fs.mkdirSync(path.dirname(outPath), { recursive: true });
		fs.writeFileSync(outPath, finalCss);
		const baseCount = (rawCss.match(/^\./gm) || []).length;
		const multiplier = (1 + PSEUDO_VARIANTS.length) * (1 + BREAKPOINTS.length);
		const allCount = baseCount * multiplier;
		totalBase += baseCount;
		totalFinal += allCount;
		console.log(
			`  ✓ ${ruleMod.fileName} (~${baseCount} base, ~${allCount} with pseudo+responsive)`
		);
	}

	console.log(
		`\nDone. Selectors — base: ~${totalBase}, with pseudo+responsive: ~${totalFinal}`
	);
}

main().catch((err) => {
	console.error("\n✗ Generation failed:");
	console.error(err.message);
	if (process.env.DEBUG) console.error(err.stack);
	process.exit(1);
});
