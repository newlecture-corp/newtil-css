import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import copy from "rollup-plugin-copy";
import fs from "fs";
import { dir } from "console";
import { plugin } from "postcss";
import terser from "@rollup/plugin-terser";

function generateIconListFromResource() {
  return {
    name: "generate-icons-list-from-resource",
    buildStart() {
      const iconListDirectory = "./packages/icon";
      const outputPath = "./docs/shared/icon-list.json";

      const fileList = fs.readdirSync(iconListDirectory);

      const iconNameList = fileList
        .filter((file) => file.endsWith(".svg"))
        .map((file) => file.replace(".svg", ""));

      const jsonContent = JSON.stringify(iconNameList, null, 2);
      fs.writeFileSync(outputPath, jsonContent, "utf8");
    },
  };
}

export default {
  //  --- css -------------------------
  // input: "packages/css/style.css",
  // output: {
  //   // dir: "dist",
  //   file: "dist/style.min.css",
  //   format: "es",
  // },
  //  --- js -------------------------
  // input: "packages/js/script.js",
  // output: [{
  //   // dir: "dist",
  //   file: "dist/script.js",
  //   format: "es",
  //   minimize: true
  // },
  // {
  //   file: "dist/script.min.js",
  //   format: "es",
  //   plugins: [terser()] 
  // }],

  plugins: [
    postcss({
      plugins: [
        postcssImport(),
        // https://github.com/postcss/postcss-url
        url({
          // url("../icon/name.svg") -> url("icon/name.svg")
          url: (asset) => asset.url.replace(/\.\.\//g, ""),
        }),
      ],
      extract: true,
      minimize: true,
    }),
    generateIconListFromResource(),
    copy({
      targets: [{ src: "packages/icon/**.svg", dest: "dist/icon" }],
    }),
  ],
};
