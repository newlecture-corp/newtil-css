import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

// CSS-only build: utility CSS bundled with @import inlined and minified.
// JavaScript and components live in @newtil/ui — not handled here.

const cssBundle = (input, outName) => ({
	input,
	output: { dir: "dist" },
	plugins: [
		postcss({
			plugins: [
				postcssImport({
					path: ["node_modules"],
					filter: (id) =>
						!id.startsWith("http://") && !id.startsWith("https://"),
				}),
			],
			extract: outName,
			minimize: {
				preset: [
					"default",
					{
						discardComments: { removeAll: true },
						normalizeWhitespace: true,
					},
				],
			},
		}),
	],
});

export default [
	// Full bundle: reset + design-tokens + utility classes
	cssBundle("css/style.css", "style.css"),
	// Utility-only (no reset, no tokens — caller manages those).
	// Entry is css/util/index.css directly (no redundant wrapper file).
	cssBundle("css/util/index.css", "utils.css"),
	// Reset standalone
	cssBundle("css/reset.css", "reset.css"),
];
