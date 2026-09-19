// dist/style.css 를 쓴다 — 전개본이 아니라 reset · tokens · utils 를 @import 로 묶는 조합 파일.
// 빌드 마지막 단계(rollup 뒤). 레이어 순서 선언은 css/style.css 소스와 같게 둔다.
// 번들러(postcss-import·Vite)는 상대 @import 를 인라인하고, CDN <link> 는 요청 세 개로 같은 결과를 낸다.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const parts = ["reset.css", "tokens.css", "utils.css"];
for (const f of parts) {
	if (!fs.existsSync(path.join(dist, f))) throw new Error(`dist/${f} 가 없다 — rollup 먼저`);
}
fs.writeFileSync(
	path.join(dist, "style.css"),
	`@layer reset, tokens, utilities;\n${parts.map((f) => `@import "./${f}";`).join("\n")}\n`,
);
console.log("dist/style.css: 조합 파일", parts.join(" + "));
