// Vite plugin for newtil-css JIT.
// Zero-config: auto-detects content files, generates minimal CSS.
//
// Usage in vite.config.js:
//   import newtilCss from '@newtil/css/jit/vite-plugin.js';
//   export default defineConfig({
//     plugins: [newtilCss()],
//   });
//
// With options:
//   newtilCss({ content: ['./src/**/*.{tsx,vue}'] })

import fs from "node:fs";
import path from "node:path";
import { scan } from "./scanner.js";
import { parse } from "./parser.js";
import { resolve, resolveAbbrev } from "./resolver.js";
import { resolveTokensDir } from "../generator/catalog.js";

function escapeClassName(name) {
	return name.replace(/([:.\/])/g, "\\$1");
}

function inlineTokens(tokensDir) {
	const indexPath = path.join(tokensDir, "index.css");
	if (!fs.existsSync(indexPath)) return "";

	let css = fs.readFileSync(indexPath, "utf8");
	css = css.replace(/@import\s+["']([^"']+)["']\s*;/g, (_match, importPath) => {
		const fullPath = path.resolve(tokensDir, importPath);
		if (fs.existsSync(fullPath)) return fs.readFileSync(fullPath, "utf8");
		return _match;
	});
	css = css.replace(/@import\s+["']([^"']+)["']\s*;/g, (_match, importPath) => {
		for (const base of [tokensDir, path.join(tokensDir, "semantic"), path.join(tokensDir, "primitive")]) {
			const fullPath = path.resolve(base, importPath);
			if (fs.existsSync(fullPath)) return fs.readFileSync(fullPath, "utf8");
		}
		return _match;
	});
	return css;
}

function buildJitCss(candidates, tokensDir) {
	const baseRules = [];
	const pseudoRules = {};
	const responsiveRules = {};
	const responsivePseudoRules = {};
	const keyframesNeeded = new Set();

	for (const className of candidates) {
		const parsed = parse(className);
		if (!parsed) continue;
		const result = resolve(parsed.property, parsed.value);
		if (!result) continue;

		if (
			(parsed.property === "animation" || resolveAbbrev(parsed.property) === "animation") &&
			["spin", "pulse", "bounce", "ping"].includes(parsed.value)
		) {
			keyframesNeeded.add(parsed.value);
		}

		const escapedClass = escapeClassName(className);
		const selector = parsed.pseudoCss
			? `.${escapedClass}${parsed.pseudoCss}`
			: `.${escapedClass}`;
		const declStr = result.declarations
			.map((d) => `${d.property}: ${d.value} !important;`)
			.join(" ");
		const rule = `${selector} { ${declStr} }`;

		if (parsed.breakpoint) {
			const key = parsed.breakpointWidth;
			if (parsed.pseudo) {
				(responsivePseudoRules[key] ||= []).push(rule);
			} else {
				(responsiveRules[key] ||= []).push(rule);
			}
		} else if (parsed.pseudo) {
			(pseudoRules[parsed.pseudo] ||= []).push(rule);
		} else {
			baseRules.push(rule);
		}
	}

	const parts = [];
	if (tokensDir) {
		const tokensCss = inlineTokens(tokensDir);
		if (tokensCss) parts.push(tokensCss);
	}
	const kfDefs = {
		spin: `@keyframes newtil-spin { from { rotate: 0deg; } to { rotate: 360deg; } }`,
		pulse: `@keyframes newtil-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`,
		bounce: `@keyframes newtil-bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }`,
		ping: `@keyframes newtil-ping { 75%, 100% { transform: scale(2); opacity: 0; } }`,
	};
	for (const name of keyframesNeeded) {
		if (kfDefs[name]) parts.push(kfDefs[name]);
	}
	if (baseRules.length) parts.push(baseRules.join("\n"));
	for (const rules of Object.values(pseudoRules)) parts.push(rules.join("\n"));
	for (const [width, rules] of Object.entries(responsiveRules)) {
		parts.push(`@media (min-width: ${width}) {\n${rules.map((r) => "  " + r).join("\n")}\n}`);
	}
	for (const [width, rules] of Object.entries(responsivePseudoRules)) {
		parts.push(`@media (min-width: ${width}) {\n${rules.map((r) => "  " + r).join("\n")}\n}`);
	}

	return parts.join("\n\n");
}

const DEFAULT_DIRS = ["./src", "./pages", "./app", "./components", "./views", "./layouts", "./public", "./index.html"];

// Virtual module ID for the JIT CSS.
const VIRTUAL_ID = "virtual:newtil-css";
const RESOLVED_ID = "\0" + VIRTUAL_ID;

export default function newtilCssPlugin(options = {}) {
	const contentPaths = options.content || DEFAULT_DIRS.filter((p) => fs.existsSync(path.resolve(p)));
	const tokensDir = options.tokensDir || resolveTokensDir();
	let generatedCss = "";

	return {
		name: "newtil-css-jit",
		enforce: "pre",

		resolveId(id) {
			// Intercept @newtil/css imports.
			if (id === "@newtil/css" || id === "@newtil/css/style.css") {
				return RESOLVED_ID;
			}
			return null;
		},

		load(id) {
			if (id === RESOLVED_ID) {
				// Scan and generate on first load.
				const { candidates } = scan(contentPaths);
				generatedCss = buildJitCss(candidates, tokensDir);
				return generatedCss;
			}
			return null;
		},

		handleHotUpdate({ file, server }) {
			// When a content file changes, re-scan and invalidate the virtual module.
			const ext = path.extname(file).toLowerCase();
			const watchedExts = [".html", ".tsx", ".jsx", ".vue", ".svelte", ".astro"];
			if (watchedExts.includes(ext)) {
				const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
				if (mod) {
					server.moduleGraph.invalidateModule(mod);
					return [mod];
				}
			}
		},
	};
}
