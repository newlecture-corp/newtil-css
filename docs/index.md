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

자주 반복되는 UI — 버튼, 카드, 아이콘 — 은 미리 정의된 컴포넌트 클래스를 사용하는 것이 바람직합니다.

하지만 **약간의 차이**가 필요한 순간이 반드시 옵니다. "이 버튼만 간격을 더 주고 싶다", "이 카드만 그림자를 강하게" — 이런 변형마다 **새로운 클래스를 만드는 건 개체수만 늘릴 뿐** 효율적이지 않습니다.

**이럴 때 사용하는 것이 CSS utility입니다.** 컴포넌트 클래스는 그대로 두고, 작은 차이만 utility로 보충:

```html
<!-- 컴포넌트 + utility 조합 → 새 클래스 없이 커스텀 -->
<button class="m3-btn padding:6">간격 넓은 버튼</button>
<div class="m3-card box-shadow:xl">강한 그림자 카드</div>
<i class="m3-icon icon:home font-size:2xl color:danger">큰 빨간 아이콘</i>
```

**컴포넌트가 "반복 패턴"이라면, utility는 "미세 조정 도구"입니다.** 둘은 대립이 아니라 보완.

## Tailwind의 문제

Tailwind는 강력하지만 **CSS 속성명과 완전히 다른 자체 명칭**을 사용합니다:

| Tailwind | 실제 CSS | newtil/css |
|---|---|---|
| `tracking-wide` | `letter-spacing` | `letter-spacing:wide` |
| `leading-tight` | `line-height` | `line-height:tight` |
| `rounded-lg` | `border-radius` | `border-radius:3` |
| `ring-2` | `box-shadow` | `box-shadow:md` |
| `shrink-0` | `flex-shrink` | `flex-shrink:0` |
| `space-x-4` | 자식 `margin` | `gap:4` |

`tracking`이 `letter-spacing`이고, `leading`이 `line-height`이고, `ring`이 `box-shadow`라는 걸 외워야 합니다. Tailwind에 익숙해질수록 **원래 CSS 이름은 머릿속에서 사라집니다.**

newtil/css는 CSS 속성명을 **그대로** 클래스 이름으로 사용합니다. 축약도 CSS에서 유추 가능:

```html
<div class="display:flex justify-content:space-between padding:5">...</div>
<!-- 축약형 -->
<div class="d:flex jc:space-between p:5">...</div>
```

## 언제 컴포넌트 우선? 언제 Utility 우선?

| 상황 | 접근 방식 | 이유 |
|------|-----------|------|
| 디자인 시스템이 있는 팀 프로젝트 | **컴포넌트 우선** + utility 보조 | 일관성 · 유지보수 · 역할 분담 |
| 프로토타입 / 초기 아이디어 검증 | **Utility 우선** | 빠른 실험. 패턴이 보이면 그때 컴포넌트화 |
| 일회성 랜딩 페이지 | **Utility 우선** | 재사용 없음. 컴포넌트 만들 이유 없음 |
| 기존 컴포넌트의 미세 커스텀 | **컴포넌트 + utility** | 클래스 폭발 없이 변형 |
| 디자인 패턴이 아직 정해지지 않은 단계 | **Utility 우선** | 구조를 잡기 전에 추상화하면 나중에 깨짐 |
| 장기 운영 서비스 | **컴포넌트 우선** + utility 보조 | 신규 멤버 온보딩 · 코드 리뷰 · 디자인 일관성 |

**newtil 생태계의 권장 방식**: `@newtil/components` (M3 컴포넌트)를 기본으로 사용하고, `@newtil/css` utility로 미세 조정. 두 패키지가 같은 `@newtil/design-tokens`를 공유하므로 시각적 일관성이 자동 유지됩니다.

## utility만으로 만드는 UI 예제

### 프로필 카드

<div style="max-width: 24rem; margin: 1.5rem auto;">
  <div class="padding:6 background-color:surface border-radius:4 box-shadow:lg">
    <div class="display:flex align-items:center gap:4 margin-bottom:5">
      <div class="width:11 height:11 border-radius:full background-color:primary-subtle display:flex align-items:center justify-content:center font-size:2xl font-weight:bold color:primary">N</div>
      <div>
        <div class="font-size:lg font-weight:semibold color:text">김뉴렉</div>
        <div class="font-size:sm color:text-muted">Frontend Developer</div>
      </div>
    </div>
    <div class="color:text-muted font-size:sm margin-bottom:5" style="line-height: 1.6;">newtil 생태계를 만들고 있습니다. CSS를 사랑하는 개발자.</div>
    <div class="display:flex gap:2">
      <button class="flex:1 padding-y:3 background-color:primary color:on-primary border-radius:3 border-width:0 font-weight:medium cursor:pointer hover:background-color:primary-hover transition:default">팔로우</button>
      <button class="flex:1 padding-y:3 background-color:transparent color:primary border-radius:3 border-width:1 border-style:solid border-color:primary font-weight:medium cursor:pointer hover:background-color:primary-subtle transition:default">메시지</button>
    </div>
  </div>
</div>

::: details 소스 코드
```html
<div class="padding:6 background-color:surface border-radius:4 box-shadow:lg">
  <div class="display:flex align-items:center gap:4 margin-bottom:5">
    <div class="width:11 height:11 border-radius:full background-color:primary-subtle
                display:flex align-items:center justify-content:center
                font-size:2xl font-weight:bold color:primary">N</div>
    <div>
      <div class="font-size:lg font-weight:semibold">김뉴렉</div>
      <div class="font-size:sm color:text-muted">Frontend Developer</div>
    </div>
  </div>
  <p class="color:text-muted font-size:sm margin-bottom:5">설명 텍스트</p>
  <div class="display:flex gap:2">
    <button class="flex:1 padding-y:3 background-color:primary color:on-primary
                   border-radius:3 border-width:0 font-weight:medium cursor:pointer
                   hover:background-color:primary-hover transition:default">팔로우</button>
    <button class="flex:1 padding-y:3 background-color:transparent color:primary
                   border-radius:3 border-width:1 border-style:solid border-color:primary
                   font-weight:medium cursor:pointer
                   hover:background-color:primary-subtle transition:default">메시지</button>
  </div>
</div>
```
:::

### 알림 배너

<div style="max-width: 36rem; margin: 1.5rem auto;">
  <div class="display:flex align-items:center gap:4 padding:5 background-color:warning-subtle border-radius:3 border-width:1 border-style:solid border-color:warning">
    <span class="font-size:xl">⚠️</span>
    <div style="flex: 1;">
      <div class="font-weight:semibold color:text margin-bottom:1">점검 안내</div>
      <div class="font-size:sm color:text-muted">서버 점검 예정: 04/20 02:00~06:00</div>
    </div>
    <button class="padding:2 background-color:transparent border-width:0 cursor:pointer color:text-muted font-size:lg">✕</button>
  </div>
</div>

::: details 소스 코드
```html
<div class="display:flex align-items:center gap:4 padding:5
            background-color:warning-subtle border-radius:3
            border-width:1 border-style:solid border-color:warning">
  <span class="font-size:xl">⚠️</span>
  <div style="flex: 1;">
    <div class="font-weight:semibold color:text margin-bottom:1">점검 안내</div>
    <div class="font-size:sm color:text-muted">서버 점검 예정: 04/20 02:00~06:00</div>
  </div>
  <button class="padding:2 background-color:transparent border-width:0
                 cursor:pointer color:text-muted font-size:lg">✕</button>
</div>
```
:::

### 피쳐 그리드

<div class="display:grid gap:4 padding:3" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm">
    <div class="font-size:2xl margin-bottom:3">🎨</div>
    <div class="font-size:lg font-weight:semibold margin-bottom:2">디자인 토큰</div>
    <div class="color:text-muted font-size:sm">색상 하나 바꾸면 전체 UI 일관 변경</div>
  </div>
  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm">
    <div class="font-size:2xl margin-bottom:3">📱</div>
    <div class="font-size:lg font-weight:semibold margin-bottom:2">반응형</div>
    <div class="color:text-muted font-size:sm">sm: md: lg: xl: 모바일 우선</div>
  </div>
  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm">
    <div class="font-size:2xl margin-bottom:3">🌙</div>
    <div class="font-size:lg font-weight:semibold margin-bottom:2">다크모드</div>
    <div class="color:text-muted font-size:sm">시스템 자동 + 수동 토글</div>
  </div>
</div>

::: details 소스 코드
```html
<div class="display:grid grid-template-columns:1 md:grid-template-columns:3 gap:4">
  <div class="padding:5 background-color:surface border-radius:3 box-shadow:sm">
    <div class="font-size:2xl margin-bottom:3">🎨</div>
    <div class="font-size:lg font-weight:semibold margin-bottom:2">디자인 토큰</div>
    <div class="color:text-muted font-size:sm">색상 하나 바꾸면 전체 UI 일관 변경</div>
  </div>
  <!-- 반복 -->
</div>
```
:::

### 네비게이션 바

<div style="margin: 1.5rem 0;">
  <nav class="display:flex justify-content:space-between align-items:center padding-x:6 padding-y:3 background-color:surface box-shadow:sm border-radius:3">
    <span class="font-size:lg font-weight:bold color:primary">newtil</span>
    <div class="display:flex gap:5">
      <span class="color:text-muted font-size:sm font-weight:medium cursor:pointer">홈</span>
      <span class="color:text-muted font-size:sm font-weight:medium cursor:pointer">소개</span>
      <span class="color:text-muted font-size:sm font-weight:medium cursor:pointer">문서</span>
    </div>
    <button class="padding-x:4 padding-y:2 background-color:primary color:on-primary border-radius:full border-width:0 font-size:sm font-weight:medium cursor:pointer">시작하기</button>
  </nav>
</div>

::: details 소스 코드
```html
<nav class="display:flex justify-content:space-between align-items:center
            padding-x:6 padding-y:3 background-color:surface box-shadow:sm">
  <a class="font-size:lg font-weight:bold color:primary">newtil</a>
  <div class="display:flex gap:5">
    <a class="color:text-muted hover:color:primary font-size:sm
              font-weight:medium cursor:pointer transition:default">홈</a>
    <a class="color:text-muted hover:color:primary font-size:sm
              font-weight:medium cursor:pointer transition:default">소개</a>
  </div>
  <button class="padding-x:4 padding-y:2 background-color:primary color:on-primary
                 border-radius:full border-width:0 font-size:sm font-weight:medium
                 cursor:pointer hover:background-color:primary-hover">시작하기</button>
</nav>
```
:::

## 핵심 특징

| 특징 | 설명 |
|------|------|
| **CSS 이름 유지** | `padding:4`, `border-radius:3` — 외우는 게 아니라 CSS를 쓰는 것 |
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
