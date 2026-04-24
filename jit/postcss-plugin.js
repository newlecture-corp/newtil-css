// PostCSS plugin for newtil-css JIT.
// Scans user content files and replaces @newtil/css import with only used utility CSS.
//
// Usage in postcss.config.js:
//   import newtilJit from '@newtil/css/jit/postcss-plugin.js';
//   export default {
//     plugins: [
//       newtilJit({ content: ['./src/**/*.{html,tsx,vue}'] }),
//     ],
//   };
//
// Or with default content paths (auto-detects src/, pages/, app/, components/):
//   plugins: [ newtilJit() ]

import fs from "node:fs";
import path from "node:path";
import { scan } from "./scanner.js";
import { parse } from "./parser.js";
import { resolve, resolveAbbrev } from "./resolver.js";
import { resolveTokensDir } from "../generator/catalog.js";

function escapeClassName(name) {
	return name.replace(/([:.\/])/g, "\\$1");
}

// Read and inline all design-tokens CSS (resolve @import chains).
function inlineTokens(tokensDir) {
	const indexPath = path.join(tokensDir, "index.css");
	if (!fs.existsSync(indexPath)) return "";

	let css = fs.readFileSync(indexPath, "utf8");
	// Resolve relative @import statements.
	css = css.replace(/@import\s+["']([^"']+)["']\s*;/g, (_match, importPath) => {
		const fullPath = path.resolve(tokensDir, importPath);
		if (fs.existsSync(fullPath)) {
			return fs.readFileSync(fullPath, "utf8");
		}
		return _match;
	});
	// Second pass for nested imports (primitive files imported by semantic).
	css = css.replace(/@import\s+["']([^"']+)["']\s*;/g, (_match, importPath) => {
		// Try resolving relative to tokensDir.
		for (const base of [tokensDir, path.join(tokensDir, "semantic"), path.join(tokensDir, "primitive")]) {
			const fullPath = path.resolve(base, importPath);
			if (fs.existsSync(fullPath)) {
				return fs.readFileSync(fullPath, "utf8");
			}
		}
		return _match;
	});
	return css;
}

// Build CSS from resolved candidates.
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
			(parsed.property === "animation" ||
				resolveAbbrev(parsed.property) === "animation") &&
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

	// Inline design-tokens.
	if (tokensDir) {
		const tokensCss = inlineTokens(tokensDir);
		if (tokensCss) parts.push(tokensCss);
	}

	// Keyframes.
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

// Default content paths to auto-detect.
const DEFAULT_CONTENT_DIRS = [
	"./src",
	"./pages",
	"./app",
	"./components",
	"./views",
	"./layouts",
	"./public",
	"./index.html",
];

// PostCSS plugin factory.
export default function newtilJit(options = {}) {
	const contentPaths = options.content || DEFAULT_CONTENT_DIRS.filter(
		(p) => fs.existsSync(path.resolve(p))
	);
	const tokensDir = options.tokensDir || resolveTokensDir();

	return {
		postcssPlugin: "newtil-css-jit",
		Once(root, { result }) {
			// Check if this CSS file imports @newtil/css.
			// Look for: @import "@newtil/css" or @import "@newtil/css/style.css"
			let hasNewtilImport = false;
			root.walkAtRules("import", (atRule) => {
				if (
					atRule.params.includes("@newtil/css") ||
					atRule.params.includes("newtil-css")
				) {
					hasNewtilImport = true;
					atRule.remove();
				}
			});

			if (!hasNewtilImport) return;

			// Scan content files.
			const { candidates } = scan(contentPaths);

			// Build JIT CSS.
			const jitCss = buildJitCss(candidates, tokensDir);

			// Parse and append JIT CSS to the root.
			const { parse: postcssParse } = require("postcss");
			const jitRoot = postcssParse(jitCss);
			root.append(jitRoot);

			result.messages.push({
				type: "newtil-jit",
				plugin: "newtil-css-jit",
				candidates: candidates.size,
			});
		},
	};
}

newtilJit.postcss = true;
