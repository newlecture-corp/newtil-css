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

// dist/style.css(리셋 + 토큰 + 유틸리티)는 여기서 전개하지 않는다. 13MB 짜리 utils.css 를 통째로 한 번 더
// 품게 되어 패키지가 두 배(26MB)가 됐다. 대신 generator/compose.js 가 세 파일을 @import 로 묶는 조합 파일을 쓴다 (0.6.4).
export default [
	// Utility-only (no reset, no tokens — caller manages those).
	// Entry is css/util/index.css directly (no redundant wrapper file).
	cssBundle("css/util/index.css", "utils.css"),
	// Reset standalone
	cssBundle("css/reset.css", "reset.css"),
	// design-tokens 사본 — style.css 조합용. 예전엔 style.css 안에 인라인돼 있던 그 사본이다.
	cssBundle("node_modules/@newtil/design-tokens/dist/tokens.css", "tokens.css"),
];
