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
