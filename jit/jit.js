#!/usr/bin/env node
// newtil-css JIT — scans user files, generates minimal CSS with only used classes.
//
// Usage:
//   node jit/jit.js --content "src/**" --output dist/newtil.css
//   node jit/jit.js --content "src,public" --output dist/newtil.css --tokens
//
// Options:
//   --content  Comma-separated paths/globs to scan (required)
//   --output   Output CSS file path (default: stdout)
//   --tokens   Include design-tokens in output (default: included)
//   --no-tokens  Exclude design-tokens from output

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { scan } from "./scanner.js";
import { parse } from "./parser.js";
import { resolve, resolveAbbrev } from "./resolver.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function escapeClassName(name) {
	return name.replace(/([:.\/])/g, "\\$1");
}

function buildCss(candidates, includeTokens) {
	const baseRules = [];
	const pseudoRules = {};
	const responsiveRules = {};
	const responsivePseudoRules = {};
	const keyframesNeeded = new Set();

	let resolved = 0;
	let skipped = 0;

	for (const className of candidates) {
		const parsed = parse(className);
		if (!parsed) {
			skipped++;
			continue;
		}

		const result = resolve(parsed.property, parsed.value);
		if (!result) {
			skipped++;
			continue;
		}

		resolved++;

		// Check if animation keyframes are needed.
		if (parsed.property === "animation" || resolveAbbrev(parsed.property) === "animation") {
			const kfMap = { spin: true, pulse: true, bounce: true, ping: true };
			if (kfMap[parsed.value]) keyframesNeeded.add(parsed.value);
		}

		// Build the CSS rule string.
		const escapedClass = escapeClassName(className);
		const selector = parsed.pseudoCss
			? `.${escapedClass}${parsed.pseudoCss}`
			: `.${escapedClass}`;
		const declStr = result.declarations
			.map((d) => `${d.property}: ${d.value} !important;`)
			.join(" ");
		const rule = `${selector} { ${declStr} }`;

		if (parsed.breakpoint) {
			const bpKey = parsed.breakpointWidth;
			if (parsed.pseudo) {
				responsivePseudoRules[bpKey] ||= [];
				responsivePseudoRules[bpKey].push(rule);
			} else {
				responsiveRules[bpKey] ||= [];
				responsiveRules[bpKey].push(rule);
			}
		} else if (parsed.pseudo) {
			pseudoRules[parsed.pseudo] ||= [];
			pseudoRules[parsed.pseudo].push(rule);
		} else {
			baseRules.push(rule);
		}
	}

	// Assemble output.
	const parts = [];

	// Tokens (design-tokens CSS).
	if (includeTokens) {
		const tokensPath = path.resolve(
			__dirname,
			"../node_modules/@newtil/design-tokens/css/index.css"
		);
		if (fs.existsSync(tokensPath)) {
			parts.push("/* @newtil/design-tokens */");
			parts.push(fs.readFileSync(tokensPath, "utf8"));
		}
	}

	// Keyframes (if animation classes used).
	if (keyframesNeeded.size > 0) {
		parts.push("/* Keyframes */");
		const kfDefs = {
			spin: `@keyframes newtil-spin { from { rotate: 0deg; } to { rotate: 360deg; } }`,
			pulse: `@keyframes newtil-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`,
			bounce: `@keyframes newtil-bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }`,
			ping: `@keyframes newtil-ping { 75%, 100% { transform: scale(2); opacity: 0; } }`,
		};
		for (const name of keyframesNeeded) {
			if (kfDefs[name]) parts.push(kfDefs[name]);
		}
	}

	// Base rules.
	if (baseRules.length) {
		parts.push("/* Base */");
		parts.push(baseRules.join("\n"));
	}

	// Pseudo rules.
	for (const [pseudo, rules] of Object.entries(pseudoRules)) {
		parts.push(`/* Pseudo: ${pseudo} */`);
		parts.push(rules.join("\n"));
	}

	// Responsive rules.
	for (const [width, rules] of Object.entries(responsiveRules)) {
		parts.push(`@media (min-width: ${width}) {`);
		parts.push(rules.map((r) => "  " + r).join("\n"));
		parts.push("}");
	}

	// Responsive + pseudo rules.
	for (const [width, rules] of Object.entries(responsivePseudoRules)) {
		parts.push(`@media (min-width: ${width}) {`);
		parts.push(rules.map((r) => "  " + r).join("\n"));
		parts.push("}");
	}

	return { css: parts.join("\n\n") + "\n", resolved, skipped };
}

// CLI
function main() {
	const args = process.argv.slice(2);
	let contentPaths = [];
	let outputPath = null;
	let includeTokens = true;

	for (let i = 0; i < args.length; i++) {
		if (args[i] === "--content" && args[i + 1]) {
			contentPaths = args[++i].split(",").map((s) => s.trim());
		} else if (args[i] === "--output" && args[i + 1]) {
			outputPath = args[++i];
		} else if (args[i] === "--no-tokens") {
			includeTokens = false;
		} else if (args[i] === "--tokens") {
			includeTokens = true;
		}
	}

	if (contentPaths.length === 0) {
		console.error("Usage: node jit/jit.js --content <paths> [--output <file>] [--no-tokens]");
		console.error("  --content  Comma-separated dirs/files to scan");
		console.error("  --output   Output file (default: stdout)");
		console.error("  --no-tokens  Exclude design-tokens from output");
		process.exit(1);
	}

	console.error("Scanning files...");
	const { candidates, fileCount } = scan(contentPaths);
	console.error(`  Scanned ${fileCount} files, found ${candidates.size} class candidates`);

	console.error("Resolving classes...");
	const { css, resolved, skipped } = buildCss(candidates, includeTokens);
	console.error(`  Resolved: ${resolved}, Skipped (not utility): ${skipped}`);

	if (outputPath) {
		const dir = path.dirname(outputPath);
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		fs.writeFileSync(outputPath, css);
		const size = Buffer.byteLength(css);
		console.error(`  Output: ${outputPath} (${(size / 1024).toFixed(1)} KB)`);
	} else {
		process.stdout.write(css);
	}
}

main();
