# JIT 설정 (Production 빌드)

## 왜 JIT 가 필요한가

전개본(`@newtil/css` → `dist/style.css`)은 모든 유틸리티 × 반응형 4단계 × 상태 8종을 미리 전개한 파일이라 약 12MB 입니다. 개발 중에는 그대로 써도 되지만 운영 배포에는 **실제로 쓴 클래스만** 들어가야 합니다.

JIT 는 소스 파일을 스캔해 쓰인 클래스만 골라 수십 KB 수준의 CSS 를 만듭니다. 출력에는 design-tokens 가 함께 인라인되므로 별도 로드가 필요 없습니다.

## 동작 방식

1. `content` 경로 아래의 `.html .htm .tsx .jsx .vue .svelte .astro .php .erb .md .mdx .pug .hbs .ejs .njk` 파일을 읽습니다 (`node_modules`, `.git` 제외).
2. `class="…"`, `className="…"`, `:class="…"`, `` className={`…`} `` 안의 토큰과, 파일 본문 어디에 있든 `속성:값` 꼴(`sm:hover:padding:4` 등)의 토큰을 후보로 모읍니다.
3. 후보를 생성기와 같은 규칙표로 해석해 존재하는 클래스만 CSS 로 씁니다. 해석되지 않는 토큰은 버립니다.

PostCSS·Vite 플러그인은 CSS 안의 `@import "@newtil/css"` 를 이 결과로 바꿔칩니다. 그래서 개발용 CSS 를 그대로 두고 플러그인만 붙이면 됩니다.

## Vite

```js
// vite.config.js
import newtilCss from '@newtil/css/jit/vite-plugin.js';

export default defineConfig({
  plugins: [newtilCss()],
});
```

```js
// main.tsx — 변경 없음
import '@newtil/css';
```

- `content` 를 생략하면 `./src ./pages ./app ./components ./views ./layouts ./public ./index.html` 중 존재하는 것을 스캔합니다.
- 개발 서버에서 `.html .tsx .jsx .vue .svelte .astro` 파일이 바뀌면 다시 스캔합니다.

### 옵션

```js
newtilCss({
  content: ['./src', './public/index.html'],   // 스캔할 디렉터리·파일
  tokensDir: './node_modules/@newtil/design-tokens/css', // 생략 시 자동 탐색
})
```

`content` 항목은 디렉터리 또는 파일 경로입니다. `./src/**/*.tsx` 처럼 글롭을 적어도 `**` 앞까지만 잘라 디렉터리 전체를 위 확장자 기준으로 걷습니다.

## PostCSS (Next.js, Webpack)

플러그인은 ESM(`postcss-plugin.js`)과 CommonJS(`postcss-plugin.cjs`) 둘 다 제공하며 `@newtil/css/jit/postcss-plugin` 하나로 환경에 맞게 해석됩니다.

Next.js 는 `postcss.config.js` 를 문자열 키 객체로 씁니다.

```js
// postcss.config.js
module.exports = {
  plugins: {
    '@newtil/css/jit/postcss-plugin': {
      content: ['./app', './components'],
    },
  },
};
```

```css
/* app/globals.css */
@import "@newtil/css";
```

함수형 설정도 됩니다.

```js
// postcss.config.js
import newtilJit from '@newtil/css/jit/postcss-plugin';

export default {
  plugins: [newtilJit({ content: ['./src'] })],
};
```

옵션은 Vite 와 같이 `content`, `tokensDir` 둘입니다.

## CLI (범용)

빌드 도구와 무관하게 파일로 뽑을 수 있습니다.

```bash
node node_modules/@newtil/css/jit/jit.js \
  --content "src,public" \
  --output dist/newtil.css
```

| 옵션 | 설명 |
|---|---|
| `--content <경로>` | 쉼표 구분 스캔 경로 (필수) |
| `--output <파일>` | 출력 파일 경로 (미지정 시 stdout) |
| `--no-tokens` | design-tokens 를 출력에서 제외 (토큰을 따로 로드할 때) |

```json
{
  "scripts": {
    "build:css": "node node_modules/@newtil/css/jit/jit.js --content src --output dist/newtil.css"
  }
}
```

## 동적 클래스

문자열을 조립해 만든 클래스는 스캐너가 볼 수 없습니다.

```js
// 스캔 안 됨 — 'background-color:danger' 라는 글자가 파일에 없다
const color = isError ? 'danger' : 'success';
className={`background-color:${color}`}
```

스캐너는 스캔 대상 파일 본문에 `속성:값` 꼴로 적힌 토큰을 위치와 무관하게 모두 줍습니다. 완성된 클래스 이름을 파일 어딘가에 그대로 적어 두면 됩니다.

```jsx
// 완성형으로 분기하거나
className={isError ? 'background-color:danger' : 'background-color:success'}

// 주석에 나열해도 된다 (스캔 대상 확장자 안이면 어디든)
{/* background-color:danger background-color:success */}
```

별도의 safelist 설정 파일이나 전용 주석 문법은 없습니다.

## 다크모드 수동 토글과 JIT

JIT 출력은 design-tokens 의 배포본(`dist/tokens.css`)을 인라인합니다(0.6.2). 시스템 다크와 `[data-theme="dark"]` 수동 강제, deprecated 별칭이 모두 들어 있으므로 토큰을 따로 임포트할 필요가 없습니다. 배포본이 없는 특수한 설치에서만 소스(`css/index.css`)를 풀어 인라인하며, 그 경우 수동 강제 사본이 빠집니다.

자세한 내용은 [다크모드](/guide/dark-mode) 를 보세요.
