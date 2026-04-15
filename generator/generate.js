// Main generator entry. Loads rule modules, generates utility CSS files.
// Validates output via PostCSS at the end (generator/validate.js if present).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildCatalog } from "./catalog.js";
import { resetSelectorsRegistry } from "./emit.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.resolve(__dirname, "../css/util");

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
	let totalRules = 0;
	for (const ruleMod of rules) {
		resetSelectorsRegistry();
		const css = ruleMod.generate(catalog);
		const outPath = path.join(OUT_ROOT, ruleMod.fileName);
		fs.mkdirSync(path.dirname(outPath), { recursive: true });
		fs.writeFileSync(outPath, css);
		const ruleCount = (css.match(/^\./gm) || []).length;
		totalRules += ruleCount;
		console.log(`  ✓ ${ruleMod.fileName} (~${ruleCount} selectors)`);
	}

	console.log(`\nDone. Total selectors generated: ~${totalRules}`);
}

main().catch((err) => {
	console.error("\n✗ Generation failed:");
	console.error(err.message);
	if (process.env.DEBUG) console.error(err.stack);
	process.exit(1);
});
