# Changelog

## 0.6.3 (2026-09-17) — `속성:ex`

- 모든 `속성:값` 클래스에 `속성:ex` 를 추가한다(413개, 축약·반응형·상태 접두 포함). 값은 같은 요소의 `--속성-ex` 변수: `<div class="width:ex" style="--width-ex: 20px">`. 합성 속성(`padding-x:ex`)은 변수 하나로 양쪽, 함수 값(`blur:ex`)은 인자 자리에 변수, 고정 선언이 섞인 합성 유틸(`line-clamp:ex`)은 바뀌는 선언만 변수.
- 스캐너가 `.js`/`.ts`/`.mjs`/`.cjs` 도 훑는다 — Next.js `app/**/page.js` 처럼 JSX 를 `.js` 에 쓰는 프로젝트에서 클래스를 못 찾던 것.
- PostCSS 플러그인: 같은 파일이 `@newtil/design-tokens` 를 import 하면 토큰을 다시 인라인하지 않는다(`tokens: "auto"`). 뒤에 덧붙이던 토큰 사본이 브랜드 테마의 램프 덮어쓰기를 기본값으로 되돌려 브랜드색이 사라지던 문제. JIT 결과는 파일 끝이 아니라 `@import` 자리에 넣는다. Vite 플러그인에 `tokens` 옵션.
- 규칙이 고정이라 CDN `<link>` 만으로 동작하고, JIT(postcss·vite·CLI)도 `ex` 를 해석한다(`jit/ex-table.json`, 생성기가 만든다).
- 왜 `[20px]` 가 아니라 `ex` 인가: 값이 클래스 이름이 아니라 `style` 에 있어 빌드 없이 되고, DOM 을 직접 다루는 도구가 값을 바꿀 때 CSS 를 다시 만들지 않으며, `속성:값` 표기가 깨지지 않는다.

## 0.6.2 (2026-09-16) — 문서

- JIT(postcss·vite·CLI)가 design-tokens 배포본 `dist/tokens.css` 를 우선 인라인한다 — 0.2.1 부터 `[data-theme="dark"]` 수동 강제 사본과 별칭이 배포본에만 있어 JIT 출력에서 빠지던 문제. 배포본이 없을 때만 소스를 푼다.
- README 재작성, 문서의 없는 클래스·잘못된 import 경로·옛 토큰 이름 정정, 중복 Pages 워크플로(deploy.yml) 삭제.

## 0.6.1 (2026-09-16) — design-tokens 0.2.1 반영

- 의존: `@newtil/design-tokens ^0.2.1`.
- 크기 유틸(`w:`, `h:`, `min-w:` …)은 `--space-N` + 리터럴 표(`generator/catalog.js` `SIZE_LITERALS`: 분수·뷰포트·`full/half/auto`)로 만든다. 토큰 `--size-*` 는 0.2.1 에서 별칭으로 내려갔고 생성기는 더 이상 읽지 않는다. **클래스 이름은 그대로**(`w:1-2`, `h:screen-h`, `w:full`), 값만 `var(--size-4)` → `var(--space-4)` / `50%` 리터럴.
- 글꼴 크기 클래스는 역할명만: `font-size:caption / body-sm / body / body-lg / heading-sm / heading-md / heading-lg / heading-xl / display`. 티셔츠명(`font-size:xs…4xl`)은 생성되지 않는다(토큰 별칭은 클래스로 만들지 않음).
- 사라진 클래스: `color:on-surface(-inverse)` 계열(→ `color:text(-inverse)`), `opacity:25 / 75`, `font-size:xs…4xl`.
- 새 클래스(토큰 추가분): `color/bg/border-color:{info, info-hover, info-active, info-subtle, on-info, link, link-hover, surface-hover, surface-active, surface-disabled, text-disabled, code-bg, code-fg, code-border, scrim}`, `font-size:heading-xl`, `z-index:fixed`.
- `box-shadow:none` 은 토큰이 아니라 리터럴로 유지(생성기·JIT 양쪽).
- 문서·테스트 페이지의 옛 토큰 이름(`surface-subtle/muted`, 티셔츠 글꼴)을 현재 이름으로 갱신.
