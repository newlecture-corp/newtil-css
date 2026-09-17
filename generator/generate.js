// Main generator entry. Loads rule modules, generates utility CSS files.
// After each rule's base CSS, appends responsive variants (sm/md/lg/xl)
// wrapped in @media. Each variant prefixes selectors with breakpoint name.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildCatalog } from "./catalog.js";
import * as emit from "./emit.js";
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

// ex 규칙 — 모든 `속성:값` 클래스에 `속성:ex` 를 하나씩 더한다. 값은 요소의 `--속성-ex` 변수에서 온다.
//   .width\:ex, .w\:ex { width: var(--width-ex) !important; }
//   .padding-x\:ex, .px\:ex { padding-left: var(--padding-x-ex); padding-right: var(--padding-x-ex); }
//   .blur\:ex { filter: blur(var(--blur-ex)); }        ← 값 안에 var() 가 하나면 그 자리만 바꾼다
//   .display\:ex { display: var(--display-ex); }        ← 토큰 없는 리터럴 값이면 값 전체가 변수
// 토큰 단계 밖의 값이 필요할 때 페이지 CSS 대신 <div class="width:ex" style="--width-ex: 20px"> 로 마감한다.
// 규칙이 고정이라 JIT 없이(CDN) 도 동작하고, 도구가 값을 바꿀 때는 style 속성 하나만 고치면 된다.
// 각 모듈의 첫 규칙에서 선언 모양을 읽으므로 모듈을 고칠 필요가 없다. 결과 표는 jit/ex-table.json 에도 남긴다.
function deriveExRules(rawCss, exTable) {
	// 1) 같은 클래스 이름(base)의 규칙을 모두 모은다 — 값이 규칙마다 다른 선언만 변수로 바꾸고, 늘 같은 선언(line-clamp 의 display:-webkit-box)은 그대로 둔다
	const groups = new Map();
	const blockRe = /^(\.[^{]+?)\s*\{([^}]+)\}/gm;
	let m;
	while ((m = blockRe.exec(rawCss)) !== null) {
		const selectors = m[1].split(/,\s*\n?\s*/).map((x) => x.trim()).filter(Boolean);
		if (selectors.some((sel) => !/\\:/.test(sel))) continue; // 단항(.truncate)
		const bases = selectors.map((sel) => sel.replace(/^\./, "").replace(/\\:[^\\]*$/, ""));
		const decls = [];
		for (const line of m[2].split("\n")) {
			const d = line.match(/^\s*([a-z-]+)\s*:\s*(.+?)\s*!important;?\s*$/);
			if (d) decls.push({ property: d[1], value: d[2] });
		}
		if (!decls.length) continue;
		const g = groups.get(bases[0]) || { bases, rules: [] };
		g.rules.push(decls);
		groups.set(bases[0], g);
	}
	// 2) 선언 값에서 변수를 끼울 자리: var() 하나면 그 자리, fn(단일 인자) 면 인자 자리, 그 밖엔 값 전체
	const substitute = (value, varName) => {
		const vars = value.match(/var\(--[\w-]+\)/g) || [];
		if (vars.length === 1) return value.replace(vars[0], `var(${varName})`);
		const fn = value.match(/^([a-zA-Z-]+)\(([^()]*)\)$/);
		if (fn && !/[,\s]/.test(fn[2])) return `${fn[1]}(var(${varName}))`;
		return `var(${varName})`;
	};
	const out = [];
	for (const [, { bases, rules }] of groups) {
		const varName = `--${bases[0].replace(/\\/g, "")}-ex`;
		const first = rules[0];
		const declarations = first.map((d, idx) => {
			// 규칙 대부분(none/reset 하나를 빼고 전부)에서 값이 같으면 상수 — line-clamp 의 display:-webkit-box 처럼
			const values = rules.map((r) => (r[idx] && r[idx].property === d.property ? r[idx].value : null));
			const counts = new Map();
			for (const v of values) counts.set(v, (counts.get(v) || 0) + 1);
			const [commonValue, commonCount] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
			const constant = rules.length > 2 && commonValue !== null && commonCount >= rules.length - 1;
			return constant ? { property: d.property, value: commonValue } : { property: d.property, value: substitute(d.value, varName) };
		});
		if (!declarations.some((d) => d.value.includes(varName))) continue; // 변수가 들어갈 자리가 없으면 만들지 않는다
		out.push(emit.rule({ selectors: bases.map((b) => `.${b}\\:ex`), declarations }));
		for (const b of bases) exTable[b.replace(/\\/g, "")] = { variable: varName, declarations };
	}
	return out.join("\n\n");
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
	let totalEx = 0;
	const exTable = {};
	for (const ruleMod of rules) {
		resetSelectorsRegistry();
		const generated = ruleMod.generate(catalog);
		const exCss = deriveExRules(generated, exTable);
		totalEx += (exCss.match(/^\./gm) || []).length;
		const rawCss = exCss ? generated + "\n\n" + emit.header("ex — 값은 --속성-ex 변수") + "\n" + exCss : generated;
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

	const exTablePath = path.resolve(__dirname, "../jit/ex-table.json");
	fs.writeFileSync(exTablePath, JSON.stringify(exTable, null, "\t") + "\n");
	console.log(`  ✓ jit/ex-table.json (${Object.keys(exTable).length} class names, ${totalEx} ex rules)`);

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
