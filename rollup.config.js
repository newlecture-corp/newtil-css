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
					{ src: "index.d.ts", dest: "dist" }, // Copy index.d.ts to the dist directory
				],
			}),
			// index.js를 복사하고 CSS import 경로를 수정
			{
				name: "copy-and-fix-index-js",
				writeBundle() {
					const indexJsPath = path.join(process.cwd(), "index.js");
					const distIndexJsPath = path.join(process.cwd(), "dist", "index.js");
					if (fs.existsSync(indexJsPath)) {
						let content = fs.readFileSync(indexJsPath, "utf8");
						// dist 폴더 안에 있으므로 ./dist/가 아닌 ./로 시작해야 함
						content = content.replace(/import\s+["']\.\/dist\//g, 'import "./');
						fs.writeFileSync(distIndexJsPath, content, "utf8");
					}
				},
			},
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
					postcssImport({
						// 외부 URL은 그대로 유지
						filter: (id) => {
							// 외부 URL은 import하지 않고 그대로 유지
							return !id.startsWith("http://") && !id.startsWith("https://");
						},
					}),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
				],
				extract: "style.css", // Extract CSS into a single file
				minimize: {
					preset: ["default", {
						discardComments: { removeAll: true },
						normalizeWhitespace: true,
					}],
				},
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
					postcssImport({
						// 외부 URL은 그대로 유지
						filter: (id) => {
							return !id.startsWith("http://") && !id.startsWith("https://");
						},
					}),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
				],
				extract: "utils.css", // Extract utils.css into a single file
				minimize: {
					preset: ["default", {
						discardComments: { removeAll: true },
						normalizeWhitespace: true,
					}],
				},
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
					postcssImport({
						// 외부 URL은 그대로 유지
						filter: (id) => {
							return !id.startsWith("http://") && !id.startsWith("https://");
						},
					}),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
				],
				extract: "components.css", // Extract components.css into a single file
				minimize: {
					preset: ["default", {
						discardComments: { removeAll: true },
						normalizeWhitespace: true,
					}],
				},
			}),
		],
	},
];