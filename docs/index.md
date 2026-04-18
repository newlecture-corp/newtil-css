# @newtil/css

**CSS 속성명 그대로 쓰는 utility CSS 프레임워크.** Tailwind 대체재.

## 시작하기

```bash
npm install @newtil/css @newtil/design-tokens
```

```js
import "@newtil/css";
```

```html
<div class="display:flex align-items:center padding:5 gap:3">
  <h1 class="font-size:heading-lg font-weight:bold">제목</h1>
  <button class="padding:4 background-color:primary color:on-primary border-radius:full border-width:0 cursor:pointer hover:background-color:primary-hover">
    버튼
  </button>
</div>
```

## 핵심 특징

- **CSS 이름 그대로** — `padding:4`, `bg:primary` 등 실제 CSS 속성명 유지
- **디자인 토큰** — `@newtil/design-tokens`로 브랜드 색상·간격 일관 관리
- **반응형** — `sm:`, `md:`, `lg:`, `xl:` prefix로 breakpoint 대응
- **Pseudo 상태** — `hover:`, `focus:`, `active:`, `disabled:` 등
- **다크모드** — 시스템 자동 + 수동 토글 지원
- **JIT** — 사용한 class만 포함 (11MB → ~14KB)

## 가이드

- [시작하기](/guide/getting-started)
- [Utility 클래스](/guide/utility-classes)
- [Design Tokens](/guide/design-tokens)
- [반응형 & 상호작용](/guide/responsive)
- [다크모드](/guide/dark-mode)
- [JIT 설정](/guide/jit-setup)
