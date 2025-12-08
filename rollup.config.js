import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import copy from "rollup-plugin-copy";
import fs from "fs";
import path from "path";
import terser from "@rollup/plugin-terser";

function generateIconListFromResource() {
	return {
		name: "generate-icons-list-from-resource",
		buildStart() {
			const iconListDirectory = "./icon";
			const outputPath = "./docs/shared/icon-list.json";

			// Check if the directory exists
			if (!fs.existsSync(iconListDirectory)) {
				console.warn(
					`Warning: Directory "${iconListDirectory}" does not exist. Skipping icon list generation.`
				);
				return;
			}

			const fileList = fs.readdirSync(iconListDirectory);

			const iconNameList = fileList
				.filter((file) => file.endsWith(".svg"))
				.map((file) => file.replace(".svg", ""));

			const jsonContent = JSON.stringify(iconNameList, null, 2);
			fs.writeFileSync(outputPath, jsonContent, "utf8");
		},
	};
}

export default [
	// Configuration for JavaScript files
	{
		input: fs
			.readdirSync("./js")
			.filter((file) => !file.endsWith(".d.ts")) // Exclude .d.ts files
			.map((file) => `js/${file}`), // Process JS files
		output: {
			dir: "dist/js", // Output directory for JavaScript files
			format: "es",
			entryFileNames: "[name].js", // Retain original filenames
			plugins: [terser()], // Minify JS files
		},
		plugins: [
			generateIconListFromResource(),
			copy({
				targets: [
					{ src: "icon/**.svg", dest: "dist/icon" },
					{ src: "types/**", dest: "dist/types" }, // Include types directory in the build
					{ src: "index.js", dest: "dist" }, // Copy index.js to the dist directory
					{ src: "index.d.ts", dest: "dist" }, // Copy index.d.ts to the dist directory
				],
			}),
		],
		external: (id) => id.endsWith(".d.ts"), // Ensure .d.ts files are treated as external
	},
	// Configuration for CSS files
	{
		input: "css/style.css",
		output: {
			dir: "dist", // Output directory for CSS
		},
		plugins: [
			postcss({
				plugins: [
					postcssImport(),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
				],
				extract: "style.css", // Extract CSS into a single file
				minimize: true, // Minify CSS
			}),
		],
	},
	// Configuration for utils.css
	{
		input: "css/utils.css",
		output: {
			dir: "dist", // Output directory for CSS
		},
		plugins: [
			postcss({
				plugins: [
					postcssImport(),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
				],
				extract: "utils.css", // Extract utils.css into a single file
				minimize: true, // Minify CSS
			}),
		],
	},
	// Configuration for components.css
	{
		input: "css/components.css",
		output: {
			dir: "dist", // Output directory for CSS
		},
		plugins: [
			postcss({
				plugins: [
					postcssImport(),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
				],
				extract: "components.css", // Extract components.css into a single file
				minimize: true, // Minify CSS
			}),
		],
	},
];
