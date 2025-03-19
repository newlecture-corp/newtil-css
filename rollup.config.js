import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import copy from "rollup-plugin-copy";
import fs from "fs";
import path from "path";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript"; // Add TypeScript plugin

function generateIconListFromResource() {
  return {
    name: "generate-icons-list-from-resource",
    buildStart() {
      const iconListDirectory = "./icon";
      const outputPath = "./docs/shared/icon-list.json";

      // Check if the directory exists
      if (!fs.existsSync(iconListDirectory)) {
        console.warn(`Warning: Directory "${iconListDirectory}" does not exist. Skipping icon list generation.`);
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
    input: fs.readdirSync("./js").filter((file) => file.endsWith(".js")).map((file) => `js/${file}`), // Process only JS files
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
          { src: "js/**/*.ts", dest: "dist/js" }, // Copy TS files as-is
        ],
      }),
    ],
  },
  // Configuration for CSS files
  {
    input: "css/bundle.css",
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
        extract: "bundle.css", // Extract CSS into a single file
        minimize: true, // Minify CSS
      }),
    ],
  },
];
