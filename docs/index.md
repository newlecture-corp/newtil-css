---
layout: home
hero:
  name: "@newtil/css"
  text: "CSS 속성명 그대로 쓰는 utility CSS"
  tagline: CSS를 잊지 않으면서 빠르게 스타일링. Tailwind의 편리함 + CSS 본연의 이름.
  actions:
    - theme: brand
      text: 시작하기
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/newlecture-corp/newtil-css
---

## 왜 CSS Utility가 필요한가?

스타일을 다루다 보면 자주 반복되는 패턴은 **클래스로 정의**해 놓고 재사용하는 것이 유지보수에 도움이 됩니다. 하지만 모든 패턴을 미리 정의할 수는 없습니다. 작은 변화 — 간격 조정, 색상 미세 변경, 특정 요소의 레이아웃 — 에는 별도 클래스를 만들기보다 **인라인처럼 빠르게 적용할 수 있는 utility class**가 더 효율적입니다.

이것이 CSS utility의 존재 이유입니다.

### Utility가 주가 되는 경우

Tailwind처럼 **모든 스타일을 utility로 작성**하는 방식이 유효한 상황도 있습니다:

- 디자인 패턴이 아직 정해지지 않은 **프로토타입** 단계
- 패턴을 염두에 두지 않은 **일회성 UI** 제작
- 컴포넌트 라이브러리 없이 **빠르게 화면을 만들어야** 할 때

## Tailwind의 문제

Tailwind는 강력한 도구이지만 한 가지 심각한 부작용이 있습니다:

<div style="display: flex; gap: 1.5rem; margin: 1.5rem 0;">
<div style="flex: 1; padding: 1.25rem; border-radius: 0.5rem; border: 1px solid #fca5a5; background: #fef2f2;">

**Tailwind 방식**
```
p-4  →  padding
mt-2  →  margin-top
bg-blue-500  →  background-color
rounded-lg  →  border-radius
```
외워야 할 **자체 명칭**이 CSS와 다름

</div>
<div style="flex: 1; padding: 1.25rem; border-radius: 0.5rem; border: 1px solid #86efac; background: #f0fdf4;">

**newtil/css 방식**
```
padding:4  →  padding
margin-top:2  →  margin-top
background-color:primary  →  background-color
border-radius:3  →  border-radius
```
CSS 속성 이름 **그대로**

</div>
</div>

Tailwind에 익숙해지면 **원래 CSS 속성명을 잊어버리는 악순환**이 시작됩니다. `p-4`는 기억나는데 `padding`이 기억 안 나는 상황. CSS 지식이 휘발됩니다.

## newtil/css의 해법

**CSS 속성명을 그대로** 유틸리티 클래스 이름으로 사용합니다. CSS를 아는 사람이면 **즉시 사용 가능**하고, 사용할수록 **CSS 지식이 강화**됩니다.

```html
<!-- 이 클래스 이름만 보고도 어떤 CSS가 적용되는지 즉시 알 수 있음 -->
<div class="display:flex justify-content:space-between align-items:center padding:5">
  <h1 class="font-size:heading-lg font-weight:bold color:text">제목</h1>
  <p class="color:text-muted font-size:sm">설명</p>
</div>
```

자주 쓰는 속성은 축약도 가능합니다 (선택):

```html
<!-- 풀네임과 축약 — 취향에 따라 -->
<div class="d:flex jc:space-between ai:center p:5">
  <h1 class="fs:heading-lg fw:bold c:text">제목</h1>
</div>
```

## utility만으로 만드는 UI 예제

### 프로필 카드

```html
<div class="max-width:14 margin:auto padding:6 background-color:surface border-radius:4 box-shadow:lg">
  <div class="display:flex align-items:center gap:4 margin-bottom:5">
    <div class="width:11 height:11 border-radius:full background-color:primary-subtle
                display:flex align-items:center justify-content:center
                font-size:2xl font-weight:bold color:primary">
      N
    </div>
    <div>
      <h2 class="font-size:lg font-weight:semibold color:text">김뉴렉</h2>
      <p class="font-size:sm color:text-muted">Frontend Developer</p>
    </div>
  </div>
  <p class="color:text-muted font-size:sm line-height:loose margin-bottom:5">
    newtil 생태계를 만들고 있습니다. CSS를 사랑하는 개발자.
  </p>
  <div class="display:flex gap:2">
    <button class="flex:1 padding-y:3 background-color:primary color:on-primary
                   border-radius:3 border-width:0 font-weight:medium cursor:pointer
                   hover:background-color:primary-hover transition:default">
      팔로우
    </button>
    <button class="flex:1 padding-y:3 background-color:transparent color:primary
                   border-radius:3 border-width:1 border-style:solid border-color:primary
                   font-weight:medium cursor:pointer
                   hover:background-color:primary-subtle transition:default">
      메시지
    </button>
  </div>
</div>
```

### 알림 배너

```html
<div class="display:flex align-items:center gap:4 padding:5
            background-color:warning-subtle border-radius:3
            border-width:1 border-style:solid border-color:warning">
  <span class="font-size:xl">⚠️</span>
  <div class="flex:1">
    <p class="font-weight:semibold color:text margin-bottom:1">주의</p>
    <p class="font-size:sm color:text-muted">
      서버 점검이 예정되어 있습니다. 04/20 02:00~06:00
    </p>
  </div>
  <button class="padding:2 background-color:transparent border-width:0 cursor:pointer
                 color:text-muted hover:color:text font-size:lg">
    ✕
  </button>
</div>
```

### 반응형 그리드 레이아웃

```html
<div class="display:grid grid-template-columns:1 md:grid-template-columns:2 lg:grid-template-columns:3 gap:4 padding:5">

  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm
              hover:box-shadow:md transition:default">
    <h3 class="font-size:lg font-weight:semibold margin-bottom:2">디자인 토큰</h3>
    <p class="color:text-muted font-size:sm">
      색상, 간격, 타이포 — 변수 하나로 전체 UI 일관 변경.
    </p>
  </div>

  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm
              hover:box-shadow:md transition:default">
    <h3 class="font-size:lg font-weight:semibold margin-bottom:2">반응형</h3>
    <p class="color:text-muted font-size:sm">
      sm: md: lg: xl: — 모바일 우선 breakpoint prefix.
    </p>
  </div>

  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm
              hover:box-shadow:md transition:default">
    <h3 class="font-size:lg font-weight:semibold margin-bottom:2">다크모드</h3>
    <p class="color:text-muted font-size:sm">
      시스템 자동 + 수동 토글. 별도 설정 0.
    </p>
  </div>

</div>
```

### 네비게이션 바

```html
<nav class="display:flex justify-content:space-between align-items:center
            padding-x:6 padding-y:3 background-color:surface box-shadow:sm">
  <a class="font-size:lg font-weight:bold color:primary text-decoration:none">newtil</a>
  <div class="display:flex gap:5">
    <a class="color:text-muted hover:color:primary font-size:sm font-weight:medium
              text-decoration:none transition:default cursor:pointer">홈</a>
    <a class="color:text-muted hover:color:primary font-size:sm font-weight:medium
              text-decoration:none transition:default cursor:pointer">소개</a>
    <a class="color:text-muted hover:color:primary font-size:sm font-weight:medium
              text-decoration:none transition:default cursor:pointer">문서</a>
  </div>
  <button class="padding-x:4 padding-y:2 background-color:primary color:on-primary
                 border-radius:full border-width:0 font-size:sm font-weight:medium
                 cursor:pointer hover:background-color:primary-hover transition:default">
    시작하기
  </button>
</nav>
```

## 핵심 특징

| 특징 | 설명 |
|------|------|
| **CSS 이름 유지** | `padding:4`, `bg:primary` — 외우는 게 아니라 CSS를 쓰는 것 |
| **디자인 토큰** | 브랜드 색상 하나 바꾸면 전체 UI 일관 변경 |
| **반응형** | `sm:` `md:` `lg:` `xl:` prefix. Mobile-first. |
| **Pseudo 상태** | `hover:` `focus:` `active:` `disabled:` 등 |
| **다크모드** | 시스템 자동 + `data-theme="dark"` 수동 토글 |
| **JIT** | 사용한 class만 포함. 11MB → ~14KB. |

## 가이드

- [시작하기](/guide/getting-started) — 설치, 기본 사용, 네이밍 규칙
- [Utility 클래스](/guide/utility-classes) — 전체 카테고리 + 축약형 목록
- [Design Tokens](/guide/design-tokens) — 2-레이어 토큰, 커스터마이징
- [반응형 & 상호작용](/guide/responsive) — Breakpoint + Pseudo 상태
- [다크모드](/guide/dark-mode) — 자동/수동 + 커스텀 다크 색상
- [JIT 설정](/guide/jit-setup) — Vite/PostCSS/CLI 프로덕션 최적화
