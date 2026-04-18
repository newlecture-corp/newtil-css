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

자주 반복되는 UI — 버튼, 카드, 아이콘 등 — 은 미리 클래스로 정의해 놓고 재사용하는 것이 바람직합니다. [`@newtil/components`](https://github.com/newlecture-corp/newtil-components)가 바로 그런 역할을 합니다:

```html
<!-- 컴포넌트: 미리 정의된 패턴 -->
<button class="m3-btn">기본 버튼</button>
<button class="m3-btn btn:outlined">아웃라인 버튼</button>
<div class="m3-card card:elevated">카드</div>
<i class="m3-icon icon:home"></i>
```

하지만 **약간의 차이**가 필요한 순간이 반드시 옵니다. "이 버튼만 간격을 좀 더 주고 싶다", "이 카드만 그림자를 강하게 하고 싶다" — 이런 변형마다 새로운 버튼 클래스, 새로운 카드 클래스를 만드는 건 **개체수만 늘릴 뿐** 효율적이지 않습니다.

```html
<!-- ❌ 변형마다 새 클래스 → 클래스 폭발 -->
<button class="m3-btn btn-custom-spacing-large">...</button>
<button class="m3-btn btn-custom-shadow-strong">...</button>
<button class="m3-btn btn-custom-margin-top-extra">...</button>
```

**이럴 때 사용하는 것이 CSS utility입니다.** 컴포넌트 클래스는 그대로 두고, **작은 차이만 utility로 보충**합니다:

```html
<!-- ✅ 컴포넌트 + utility 조합 → 클래스 폭발 없이 커스텀 -->
<button class="m3-btn padding:6">간격 넓은 버튼</button>
<div class="m3-card card:elevated box-shadow:xl">강한 그림자 카드</div>
<button class="m3-btn margin-top:5">위 간격 추가 버튼</button>
<i class="m3-icon icon:home font-size:2xl color:danger">큰 빨간 아이콘</i>
```

### Utility만으로 전체 UI를 만들 수도 있다

프로토타입, 일회성 페이지, 또는 컴포넌트 라이브러리 없이 빠르게 화면을 만들어야 할 때 — utility **만으로도** 완전한 UI를 구성할 수 있습니다:

```html
<!-- 컴포넌트 없이 utility만으로 만든 버튼 -->
<button class="padding-x:5 padding-y:3 background-color:primary color:on-primary
               border-radius:full border-width:0 font-weight:medium cursor:pointer
               hover:background-color:primary-hover transition:default">
  버튼
</button>

<!-- utility만으로 만든 카드 -->
<div class="padding:6 background-color:surface border-radius:4 box-shadow:lg">
  <h3 class="font-size:lg font-weight:semibold margin-bottom:2">카드 제목</h3>
  <p class="color:text-muted font-size:sm">카드 내용</p>
</div>
```

**컴포넌트가 "자주 쓰는 패턴"이라면, utility는 "미세 조정 도구"입니다.** 둘은 대립이 아니라 보완 관계.

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
