# @newtil/css

**CSS 속성명 그대로 쓰는 utility CSS 프레임워크.** Tailwind 대체재.

Tailwind의 자체 명칭(`border`, `p-4`) 대신 **실제 CSS 속성명** 또는 **유추 가능한 축약**을 사용합니다. CSS 지식을 보존·강화합니다.

```html
<!-- newtil/css — CSS 이름 그대로 -->
<div class="display:flex align-items:center padding:5 background-color:primary color:on-primary border-radius:3 box-shadow:md">
```

## 설치

```bash
npm install @newtil/css @newtil/design-tokens
```

## 사용

```js
import "@newtil/css";
```

## Production (JIT)

사용한 class만 포함 (11MB → ~14KB):

```js
// vite.config.js
import newtilCss from "@newtil/css/jit/vite-plugin.js";
export default defineConfig({ plugins: [newtilCss()] });
```

## 문서

→ [newtil-css 가이드](https://newlecture-corp.github.io/newtil-css/guide/getting-started)

## 생태계

| 패키지 | 역할 |
|---|---|
| [`@newtil/design-tokens`](https://github.com/newlecture-corp/newtil-design-tokens) | 디자인 토큰 (색상, 간격, 타이포 등) |
| `@newtil/css` | utility CSS (이 패키지) |
| [`@newtil/components`](https://github.com/newlecture-corp/newtil-components) | UI 컴포넌트 (버튼, 카드 등) |

## 라이선스

MIT
