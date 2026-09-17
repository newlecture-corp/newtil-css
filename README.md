# @newtil/css

실제 CSS 속성명 그대로 쓰는 유틸리티 CSS. Tailwind 대체재.

Tailwind 의 자체 명칭(`p-4`, `tracking-wide`) 대신 **실제 CSS 속성명**(`padding:4`, `letter-spacing:wide`) 또는 **유추 가능한 축약**(`p:4`, `ls:wide`)을 클래스 이름으로 씁니다. 모든 값은 `@newtil/design-tokens` 의 토큰을 참조하므로 토큰 하나를 바꾸면 전체 UI 가 함께 바뀝니다. 운영 빌드는 JIT 가 소스에서 실제로 쓴 클래스만 골라 출력하고, 모든 조합을 전개한 `dist/style.css`(약 12MB)는 개발·문서용입니다.

## 설치

```bash
npm install @newtil/css
```

`@newtil/design-tokens` 는 의존성으로 함께 설치됩니다.

## 빠른 시작

CSS 진입점에서 한 줄 임포트하면 전개본이 그대로 들어옵니다.

```css
@import "@newtil/css";
```

운영 빌드는 JIT 플러그인을 붙입니다. 플러그인이 위 `@import` 를 스캔 결과로 바꿔치기하므로 CSS 는 손대지 않습니다.

Next.js / Webpack (PostCSS):

```js
// postcss.config.js
module.exports = {
  plugins: {
    "@newtil/css/jit/postcss-plugin": {
      content: ["./app/**/*.{tsx,jsx,html}"],
    },
  },
};
```

Vite:

```js
// vite.config.js
import newtilCss from "@newtil/css/jit/vite-plugin.js";

export default defineConfig({ plugins: [newtilCss()] });
```

두 플러그인의 옵션은 `content`(스캔 경로 배열, 생략 시 `src/ pages/ app/ components/ views/ layouts/ public/ index.html` 중 존재하는 것), `tokensDir`(design-tokens `css/` 경로, 생략 시 자동 탐색), `tokens`(토큰을 함께 인라인할지) 셋입니다. PostCSS 플러그인의 `tokens` 기본은 `"auto"` — 같은 CSS 파일이 `@newtil/design-tokens` 를 이미 import 하면 넣지 않습니다(브랜드 테마가 덮은 램프를 되돌리지 않기 위해). Vite 플러그인은 가상 모듈이라 기본 `true` 이고, 앱이 토큰을 따로 import 하면 `tokens: false` 를 주세요.

```html
<div class="display:flex gap:3 padding:5 background-color:surface color:text border-radius:3 box-shadow:sm">
  <button class="padding-x:4 padding-y:2 background-color:primary color:on-primary border-radius:full border-width:0 hover:background-color:primary-hover">시작하기</button>
  <span class="font-size:body-sm color:text-muted">축약형: d:flex g:3 p:5 bg:surface c:text</span>
</div>
```

반응형은 `sm: md: lg: xl:`, 상태는 `hover: focus: active: disabled:` 등을 앞에 붙입니다 (`md:hover:background-color:primary`).

토큰 단계에 없는 값은 `속성:ex` 와 `--속성-ex` 변수로 줍니다. 규칙은 고정이라 CDN 으로 링크해도 되고, 값은 요소의 `style` 에 있어 도구가 바꾸기 쉽습니다.

```html
<div class="width:ex padding-x:ex" style="--width-ex: 20px; --padding-x-ex: 1.25rem">…</div>
```

축약·반응형·상태 접두는 그대로 됩니다(`sm:w:ex`, `hover:color:ex`). `blur:ex` 처럼 함수 값은 인자 자리에 변수가 들어갑니다(`filter: blur(var(--blur-ex))`). 페이지에 `ex` 가 몇 개인지가 곧 아직 부품(토큰·컴포넌트)이 못 담은 값의 수입니다.

임포트 가능한 경로는 `@newtil/css`(전개본), `@newtil/css/utils.css`(유틸리티만), `@newtil/css/reset.css`(리셋만), `@newtil/css/jit/postcss-plugin`, `@newtil/css/jit/vite-plugin.js`, `@newtil/css/jit/jit.js`(CLI) 입니다.

## 문서

- 가이드: https://newlecture-corp.github.io/newtil-css/
- 변경 기록: [CHANGELOG.md](./CHANGELOG.md)
- 마이그레이션(`newtil-css` → `@newtil/css`): [MIGRATION.md](./MIGRATION.md)

## newtil 패밀리

| npm | 한 줄 설명 | 문서 |
|---|---|---|
| `@newtil/design-tokens` | CSS 변수(토큰) — 색·간격·글꼴·모서리·그림자·층. 모든 패키지의 바닥 | https://newlecture-corp.github.io/newtil-design-tokens/ |
| `@newtil/css` | 실제 CSS 속성명 기반 유틸리티 클래스 + JIT | https://newlecture-corp.github.io/newtil-css/ |
| `@newtil/components` | n- 접두사 기본 컴포넌트 — prose·table·layout·resize-handle | https://newlecture-corp.github.io/newtil-components/ |
| `@newtil/materials` | Material Design 3 구현 m3- 컴포넌트 | https://newlecture-corp.github.io/newtil-materials/ |
| `@newtil/editor` | 마크다운↔HTML 양방향 편집기 웹 컴포넌트(React/Vue 래퍼) | https://newlecture-corp.github.io/newtil-editor/ |
| `@newtil/drawing` | 캡처 위에 화살표·상자·글자를 그리는 그림판(PNG+JSON) | https://newlecture-corp.github.io/newtil-drawing/ |

## 개발

```bash
npm run generate     # generator/ 규칙 + design-tokens 로 css/util/ 생성
npm run build        # generate 후 rollup 으로 dist/ 산출 (style.css, utils.css, reset.css)
npm run docs:dev     # VitePress 문서 개발 서버
npm run docs:build   # 문서 정적 빌드 (docs/.vitepress/dist)
```

클래스는 `generator/rules/*.js` 에서만 정의합니다. 규칙 하나가 전체 속성명과 축약 두 셀렉터를 함께 내보내고, JIT(`jit/resolver.js`)가 같은 표를 거꾸로 씁니다.

## 라이선스

MIT
