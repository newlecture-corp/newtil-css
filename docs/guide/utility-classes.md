# Utility 클래스

## 네이밍 원칙

> CSS를 아는 사람이면 newtil-css를 바로 쓸 수 있어야 한다.

Tailwind는 `p-4`, `bg-blue-500` 같은 자체 명칭을 사용합니다. newtil-css는 **실제 CSS 속성명**을 그대로 쓰거나 **누구나 유추할 수 있는 축약**을 제공합니다.

```
.padding:4          → padding: var(--space-4)
.p:4                → 같은 것 (축약)
.background-color:primary → background-color: var(--color-primary)
.bg:primary         → 같은 것 (축약)
```

## 유틸 활용하기

### 유틸만 사용하기

디자인 시스템의 토큰만 활용해서 컴포넌트를 직접 만들 수 있습니다. 라이브러리에 없는 모양이나 빠르게 프로토타이핑할 때 유용합니다.

**버튼 만들기**

<Demo>
<button class="d:inline-flex ai:center g:3 p:4 h:9 bg:primary c:on-primary bdr:full fs:sm fw:medium cur:pointer bd:none">
  유틸로 만든 버튼
</button>
<button class="d:inline-flex ai:center g:3 p:4 h:9 bg:transparent c:primary bdw:1 bds:solid bdc:primary bdr:full fs:sm fw:medium cur:pointer">
  Outlined
</button>
</Demo>

**카드 만들기**

<Demo>
<div class="d:flex fd:column g:4 p:7 bg:surface-subtle bdr:5 bsh:sm w:auto" style="max-width: 20rem;">
  <h3 class="fs:lg fw:semibold m:0">카드 제목</h3>
  <p class="fs:sm c:text-muted m:0">이 카드는 유틸리티 클래스만으로 만들어졌습니다. 배경, 그림자, 패딩, 간격 모두 토큰 기반입니다.</p>
  <div class="d:flex g:3 jc:end">
    <button class="p:3 bg:transparent c:primary bd:none cur:pointer fs:sm">취소</button>
    <button class="p:3 bg:primary c:on-primary bd:none bdr:3 cur:pointer fs:sm">확인</button>
  </div>
</div>
</Demo>

### 컴포넌트에 유틸로 커스텀하기

`@newtil/components` 같은 컴포넌트 라이브러리 위에 유틸리티를 조합하면, 컴포넌트의 기본 모양은 유지하면서 **특정 상황에 맞는 조정**을 빠르게 할 수 있습니다.

**버튼에 간격/정렬 추가**

<Demo>
<div class="d:flex g:4 jc:center p:5 bg:surface-muted bdr:4">
  <button class="m3-btn">기본</button>
  <button class="m3-btn btn:outlined">Outlined</button>
  <button class="m3-btn btn-color:danger">삭제</button>
</div>
</Demo>

**카드를 그리드 레이아웃에 배치**

<Demo>
<div class="d:grid gtc:repeat-3 g:5">
  <div class="m3-card card:outlined">
    <div class="card-content">첫 번째 카드</div>
  </div>
  <div class="m3-card card:outlined">
    <div class="card-content">두 번째 카드</div>
  </div>
  <div class="m3-card card:outlined">
    <div class="card-content">세 번째 카드</div>
  </div>
</div>
</Demo>

**컴포넌트 변수를 유틸로 재정의**

컴포넌트 변수는 일반 CSS 변수이므로 유틸이나 인라인 스타일로 오버라이드 가능합니다.

<Demo>
<button class="m3-btn" style="--btn-background-color: purple; --btn-border-radius: 0.25rem;">
  변수 오버라이드
</button>
</Demo>

::: tip 함께 쓰기 좋은 이유
`@newtil/components`는 모든 속성을 **컴포넌트 변수**로 노출하고, `@newtil/css`는 그 변수를 **유틸리티 클래스**로 조작할 수 있는 수단을 제공합니다. 두 라이브러리는 같은 [design-tokens](/guide/design-tokens)를 공유해서 색/간격/그림자가 자연스럽게 맞습니다.
:::

## 전체 카테고리 목록

### Core

| 카테고리 | 속성 | 축약 |
|---|---|---|
| **Display** | `display:flex` | `d:flex` |
| **Position** | `position:absolute`, `top:4`, `z-index:modal` | `pos:absolute`, `z:modal` |
| **Spacing** | `margin:4`, `margin-top:3`, `margin-x:auto`, `padding:5`, `gap:3` | `m:4`, `mt:3`, `mx:auto`, `p:5`, `g:3` |
| **Sizing** | `width:full`, `height:11`, `min-width:14`, `max-height:screen-h` | `w:full`, `h:11`, `min-w:14`, `max-h:screen-h` |
| **Color** | `color:primary`, `background-color:surface`, `border-color:border` | `c:primary`, `bg:surface`, `bdc:border` |
| **Typography** | `font-size:md`, `font-weight:bold`, `line-height:normal`, `text-align:center` | `fs:md`, `fw:bold`, `lh:normal`, `ta:center` |
| **Border** | `border-width:1`, `border-style:solid`, `border-radius:3` | `bdw:1`, `bds:solid`, `bdr:3` |
| **Flexbox** | `flex-direction:column`, `justify-content:center`, `align-items:center` | `fd:column`, `jc:center`, `ai:center` |
| **Grid** | `grid-template-columns:3`, `grid-column:span-2` | `gtc:3`, `gcs:span-2` |
| **Effects** | `opacity:50`, `box-shadow:md`, `cursor:pointer`, `overflow:hidden` | `op:50`, `bsh:md`, `cur:pointer`, `of:hidden` |
| **Transition** | `transition:default`, `transition-duration:fast` | `tr:default`, `tdur:fast` |
| **Transform** | `translate-x:4`, `rotate:45`, `scale:110` | `trx:4`, `rot:45`, `scl:110` |
| **Outline** | `outline-width:2`, `outline-style:solid`, `outline-color:focus-ring` | `olw:2`, `ols:solid`, `olc:focus-ring` |
| **Background** | `background-size:cover`, `background-position:center` | `bgs:cover`, `bgp:center` |
| **Font Family** | `font-family:sans`, `font-family:mono` | `ff:sans`, `ff:mono` |
| **Text Extras** | `text-shadow:md`, `text-wrap:balance`, `text-overflow:ellipsis` | `tsh:md`, `tw:balance`, `to:ellipsis` |

### 추가 카테고리

| 카테고리 | 속성 예시 | 축약 |
|---|---|---|
| **Filter** | `blur:md`, `brightness:110`, `grayscale:100` | `blr:md`, `brt:110`, `gray:100` |
| **Backdrop Filter** | `backdrop-blur:lg` | `bdblr:lg` |
| **Aspect Ratio** | `aspect-ratio:video`, `aspect-ratio:square` | `ar:video`, `ar:square` |
| **Object** | `object-fit:cover`, `object-position:center` | `ofit:cover`, `opos:center` |
| **Animation** | `animation:spin`, `animation:pulse` | `anim:spin`, `anim:pulse` |
| **Scroll** | `scroll-snap-type:y`, `scroll-behavior:smooth` | `sst:y`, `sb:smooth` |
| **Interaction** | `user-select:none`, `pointer-events:none` | `us:none`, `pe:none` |
| **Blend** | `mix-blend-mode:multiply`, `isolation:isolate` | `mbm:multiply`, `iso:isolate` |
| **SVG** | `fill:primary`, `stroke:border`, `stroke-width:1` | — |
| **Tables** | `table-layout:fixed`, `border-collapse:collapse` | `tl:fixed` |
| **Lists** | `list-style-type:disc` | `lst:disc` |
| **Columns** | `column-count:3` | `cc:3` |
| **Legacy** | `float:left`, `clear:both` | `fl:left`, `cl:both` |
| **Logical** | `margin-inline:4`, `padding-block:3`, `inset-inline:0` | — |

### 합성 유틸 (Composite)

| 클래스 | 효과 |
|---|---|
| `.truncate` | 한 줄 말줄임표 (overflow:hidden + text-overflow:ellipsis + white-space:nowrap) |
| `.line-clamp:3` | 3줄 말줄임표 |
| `.sr-only` | 시각 숨김, 스크린리더 접근 가능 |
| `.not-sr-only` | sr-only 해제 |
| `.center` | flex 중앙정렬 |
| `.center-col` | flex column 중앙정렬 |
| `.fixed-center` | absolute 중앙 (translate -50%) |
| `.stack:3` | flex column + gap:3 |
| `.hstack:3` | flex row + align-center + gap:3 |

## 값 체계

### Spacing / Sizing (rem 기반, 4px 그리드)

| 인덱스 | 값 (rem) | 약 px |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0.125rem | 2px |
| 2 | 0.25rem | 4px |
| 3 | 0.5rem | 8px |
| 4 | 0.75rem | 12px |
| 5 | 1rem | 16px |
| 6 | 1.25rem | 20px |
| 7 | 1.5rem | 24px |
| 8 | 2rem | 32px |
| 9 | 2.5rem | 40px |
| 10 | 3rem | 48px |
| 11 | 4rem | 64px |
| 12 | 5rem | 80px |
| 13 | 6rem | 96px |
| 14 | 8rem | 128px |

### 분수 Size

`width:1-2` (50%), `width:1-3` (33.3%), `width:2-3` (66.7%), `width:1-4` (25%), `width:3-4` (75%) 등.

### 색상

→ [Design Tokens 가이드](/guide/design-tokens) 참고
