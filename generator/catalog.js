// Parse @newtil/design-tokens .css files to build a token catalog.
// Locates design-tokens by walking up node_modules from process.cwd(), which
// works under Turbopack's virtual FS (import.meta.url/require.resolve return
// unreadable "[project]/..." paths there) as well as plain Node, pnpm,
// Webpack, and Vite.
// Returns: { category: { name: 'var(--full-token-name)', ... }, ... }

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Walk up from `start`, checking for node_modules/@newtil/design-tokens/css.
// existsSync transparently follows pnpm/npm symlinks, so this covers flat
// hoist, nested install, and pnpm's .pnpm/ store layouts.
function walkUpForTokens(start) {
	let dir = start;
	while (true) {
		const candidate = path.join(dir, "node_modules/@newtil/design-tokens/css");
		if (fs.existsSync(candidate)) return candidate;
		const parent = path.dirname(dir);
		if (parent === dir) return null;
		dir = parent;
	}
}

// Resolve the @newtil/design-tokens `css/` directory. Returns null if the
// package is not installed and no monorepo-sibling checkout is present.
export function resolveTokensDir() {
	const fromCwd = walkUpForTokens(process.cwd());
	if (fromCwd) return fromCwd;
	// Monorepo fallback: sibling checkout when the package isn't installed.
	const sibling = path.resolve(__dirname, "../../newtil-design-tokens/css");
	return fs.existsSync(sibling) ? sibling : null;
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
//   --size-*              -> null (0.2.1 에서 사라짐; size 카테고리는 buildCatalog 이 합성)
//   --font-size-body-sm   -> { category: 'font-size', key: 'body-sm' }
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

// Sizing literals — design-tokens 0.2.1 부터 분수·뷰포트·키워드는 토큰이 아니다 (설계 결정이 없는 CSS 값).
// 크기 유틸(w:, h:, min-w: …)은 space 스케일 + 이 표로 만든다. 클래스 이름(w:1-2, h:screen-h, w:full …)은 그대로.
export const SIZE_LITERALS = {
	"1-2": "50%",
	"1-3": "33.333333%",
	"2-3": "66.666667%",
	"1-4": "25%",
	"3-4": "75%",
	"1-5": "20%",
	"2-5": "40%",
	"3-5": "60%",
	"4-5": "80%",
	"1-6": "16.666667%",
	"5-6": "83.333333%",
	"1-12": "8.333333%",
	"5-12": "41.666667%",
	"7-12": "58.333333%",
	"11-12": "91.666667%",
	"screen-w-25": "25vw",
	"screen-w-50": "50vw",
	"screen-w-75": "75vw",
	"screen-w": "100vw",
	"screen-h-25": "25vh",
	"screen-h-50": "50vh",
	"screen-h-75": "75vh",
	"screen-h": "100vh",
	full: "100%",
	half: "50%",
	auto: "auto",
};

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

	// size 카테고리는 토큰 파일이 아니라 space 스케일 + SIZE_LITERALS 로 합성한다.
	// (0.2.0 이 설치돼 있어도 --size-* 토큰을 쓰지 않도록 항상 덮어쓴다.)
	catalog.size = { ...(catalog.space || {}), ...SIZE_LITERALS };

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
