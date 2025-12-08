import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 대체 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 아이콘 디렉토리 경로
const iconsDir = path.join(__dirname, 'icon');

// CSS 저장 경로
const outputDir = path.join(__dirname, 'css/component');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 아이콘 목록 생성
const icons = fs.readdirSync(iconsDir)
    .filter(file => file.endsWith('.svg'))
    .map(file => path.basename(file, '.svg'));

// CSS 생성
const cssClasses = icons.map(icon => `
.n-icon\\:${icon}::before {
  --icon: url("https://fonts.gstatic.com/s/i/materialicons/${icon}/v5/24px.svg");
}`);

// 결과 합치기
const cssCode = cssClasses.join("\n");

// 파일로 저장
const outputPath = path.join(outputDir, "material_icons.css");
fs.writeFile(outputPath, cssCode, (err) => {
    if (err) {
        console.error("CSS 파일 생성 실패:", err);
    } else {
        console.log("CSS 파일 생성 완료! 경로:", outputPath);
    }
});
