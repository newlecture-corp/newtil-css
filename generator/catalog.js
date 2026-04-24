// Parse @newtil/design-tokens .css files to build a token catalog.
// Locates design-tokens via Node module resolution so flat-install, nested,
// pnpm, and symlinked-workspace layouts all work.
// Returns: { category: { name: 'var(--full-token-name)', ... }, ... }

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve the @newtil/design-tokens `css/` directory. Returns null if the
// package is not installed and no monorepo-sibling checkout is present.
export function resolveTokensDir() {
	try {
		const pkgPath = require.resolve("@newtil/design-tokens/package.json");
		return path.join(path.dirname(pkgPath), "css");
	} catch {
		const sibling = path.resolve(__dirname, "../../newtil-design-tokens/css");
		return fs.existsSync(sibling) ? sibling : null;
	}
}

const TOKENS_ROOT = resolveTokensDir();

// Extracts all `--name: value;` declarations from a CSS string.
// Skips lines inside @media (...) blocks for breakpoint vars (none expected, but defensive).
function extractDeclarations(css) {
	const decls = [];
	const re = /^\s*(--[a-zA-Z0-9_-]+)\s*:\s*([^;]+);/gm;
	let m;
	while ((m = re.exec(css)) !== null) {
		decls.push({ name: m[1], value: m[2].trim() });
	}
	return decls;
}

// Read a single CSS file (recursively follow @import for primitive imports).
function readCssFile(filePath) {
	if (!fs.existsSync(filePath)) {
		throw new Error(`Token file missing: ${filePath}`);
	}
	return fs.readFileSync(filePath, "utf8");
}

// Categorize a token by its name prefix.
// Returns { category, key } where key is the part after the category prefix.
// Examples:
//   --color-primary       -> { category: 'color', key: 'primary' }
//   --color-primary-hover -> { category: 'color', key: 'primary-hover' }
//   --space-4             -> { category: 'space', key: '4' }
//   --size-1-3            -> { category: 'size', key: '1-3' }
//   --size-screen-h-25    -> { category: 'size', key: 'screen-h-25' }
//   --font-size-sm        -> { category: 'font-size', key: 'sm' }
//   --line-height-tight   -> { category: 'line-height', key: 'tight' }
//   --border-width-1      -> { category: 'border-width', key: '1' }
//   --letter-spacing-tight-> { category: 'letter-spacing', key: 'tight' }
//   --_scale-1 (private)  -> null (skip)
function categorize(name) {
	if (name.startsWith("--_")) return null; // private primitive
	const stripped = name.slice(2); // drop --
	const knownPrefixes = [
		"color",
		"space",
		"size",
		"radius",
		"border-width",
		"font-size",
		"font-weight",
		"line-height",
		"letter-spacing",
		"z",
		"opacity",
		"shadow",
		"duration",
		"ease",
	];
	for (const p of knownPrefixes) {
		if (stripped === p) return { category: p, key: "" };
		if (stripped.startsWith(p + "-")) {
			return { category: p, key: stripped.slice(p.length + 1) };
		}
	}
	return null; // unrecognized — skip
}

// Build catalog: { category: { key: 'var(--full-name)' } }
export function buildCatalog() {
	const catalog = {};
	const allFiles = [];

	if (!TOKENS_ROOT) {
		throw new Error(
			"Cannot locate @newtil/design-tokens. Install it as a dependency or " +
			"provide it via a monorepo-sibling checkout."
		);
	}
	// Walk semantic/ folder (semantic tokens are what utility consumes)
	const semanticDir = path.join(TOKENS_ROOT, "semantic");
	if (!fs.existsSync(semanticDir)) {
		throw new Error(`Semantic tokens dir missing: ${semanticDir}`);
	}
	for (const f of fs.readdirSync(semanticDir).sort()) {
		if (f.endsWith(".css")) allFiles.push(path.join(semanticDir, f));
	}

	for (const filePath of allFiles) {
		const css = readCssFile(filePath);
		const decls = extractDeclarations(css);
		for (const { name } of decls) {
			const cat = categorize(name);
			if (!cat) continue;
			catalog[cat.category] ||= {};
			// First definition wins (e.g., :root over [data-theme]). All same-name
			// declarations across files map to the same var() reference.
			if (!(cat.key in catalog[cat.category])) {
				catalog[cat.category][cat.key] = `var(${name})`;
			}
		}
	}

	return catalog;
}

// Convenience: assert a token exists
export function getToken(catalog, category, key) {
	const cat = catalog[category];
	if (!cat) throw new Error(`Unknown token category: ${category}`);
	if (!(key in cat)) {
		throw new Error(
			`Token not found: --${category}-${key}. Available keys in '${category}': ${Object.keys(
				cat
			).join(", ")}`
		);
	}
	return cat[key];
}
