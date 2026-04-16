// Scanner — reads user source files and extracts class name candidates.
// Scans: .html, .tsx, .jsx, .vue, .svelte, .astro, .php, .erb, .md files.
// Returns a Set of unique class name strings.

import fs from "node:fs";
import path from "node:path";

// Simple glob implementation (no dependency).
// Supports: ** (recursive), * (segment), {a,b} (alternation).
function walkDir(dir, pattern, results = []) {
	if (!fs.existsSync(dir)) return results;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === "node_modules" || entry.name === ".git") continue;
			walkDir(full, pattern, results);
		} else if (entry.isFile() && pattern.test(entry.name)) {
			results.push(full);
		}
	}
	return results;
}

// Regex to match file extensions we care about.
const FILE_EXT_RE = /\.(html|htm|tsx|jsx|vue|svelte|astro|php|erb|md|mdx|pug|hbs|ejs|njk)$/i;

// Extract class-name-like tokens from file content.
// Looks for patterns inside class="...", className="...", :class="...", class:list={[...]},
// and also bare strings that look like utility classes.
//
// Strategy: extract ALL tokens that look like newtil utility classes.
// A newtil class looks like: [prefix:]property:value
// Examples: padding:4, hover:background-color:primary, sm:hover:display:flex
//
// We use a broad regex that captures word-colon-word patterns,
// then filter in the resolver stage.
function extractClassCandidates(content) {
	const candidates = new Set();

	// Strategy 1: Inside class/className attributes (quoted strings).
	// Matches content inside class="...", className="...", :class="..."
	const attrRe = /(?:class|className|:class)\s*=\s*["']([^"']+)["']/g;
	let m;
	while ((m = attrRe.exec(content)) !== null) {
		const classStr = m[1];
		// Split by whitespace to get individual class names.
		for (const token of classStr.split(/\s+/)) {
			if (token.length > 0) candidates.add(token);
		}
	}

	// Strategy 2: Inside template literals (JSX className={`...`}).
	const tmplRe = /(?:class|className)\s*=\s*\{`([^`]+)`\}/g;
	while ((m = tmplRe.exec(content)) !== null) {
		for (const token of m[1].split(/\s+/)) {
			if (token.length > 0 && !token.startsWith("$")) {
				candidates.add(token);
			}
		}
	}

	// Strategy 3: Broad scan — any token matching utility pattern.
	// Catches cases in JS strings, conditionals, arrays, etc.
	// Pattern: optional-prefixes + property:value
	// e.g., "sm:hover:padding:4" or "background-color:primary"
	const broadRe = /\b((?:sm|md|lg|xl|hover|focus|focus-visible|focus-within|active|disabled|checked|visited)\:)*[a-z][\w-]*\:[a-zA-Z0-9._\/-]+/g;
	while ((m = broadRe.exec(content)) !== null) {
		candidates.add(m[0]);
	}

	return candidates;
}

// Main scanner: glob files, extract all candidates, return unified Set.
export function scan(contentPaths) {
	const allCandidates = new Set();
	const files = [];

	for (const p of contentPaths) {
		const resolved = path.resolve(p);
		if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
			files.push(resolved);
		} else {
			// Treat as directory — walk recursively.
			const dir = resolved.replace(/\/\*\*.*$/, "").replace(/\/\*$/, "");
			if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
				walkDir(dir, FILE_EXT_RE, files);
			}
		}
	}

	for (const file of files) {
		const content = fs.readFileSync(file, "utf8");
		const candidates = extractClassCandidates(content);
		for (const c of candidates) {
			allCandidates.add(c);
		}
	}

	return { candidates: allCandidates, fileCount: files.length };
}
