# 반응형 & 상호작용 상태

## 반응형 (Responsive)

### Breakpoints

| Prefix | 최소 너비 | 대상 |
|---|---|---|
| (없음) | 0 | 모바일 (기본) |
| `sm:` | 640px | 큰 모바일 |
| `md:` | 768px | 태블릿 |
| `lg:` | 1024px | 데스크톱 |
| `xl:` | 1280px | 큰 데스크톱 |

### 사용법

모바일 우선 (mobile-first). 기본 class가 모든 화면에 적용되고, prefix가 붙은 class가 해당 breakpoint 이상에서 덮어씁니다.

<Demo>
<div class="padding:3 md:padding:5 lg:padding:8 bg-color:primary-subtle color:on-primary">
  모바일: padding 3, 태블릿+: padding 5, 데스크톱+: padding 8
</div>
</Demo>

### 반응형 레이아웃 예시

<Demo>
<div class="display:grid grid-template-columns:1 md:grid-template-columns:2 lg:grid-template-columns:4 gap:3 width:full">
  <div class="padding:4 bg-color:primary color:on-primary text-align:center">1</div>
  <div class="padding:4 bg-color:secondary color:on-secondary text-align:center">2</div>
  <div class="padding:4 bg-color:tertiary color:on-tertiary text-align:center">3</div>
  <div class="padding:4 bg-color:primary color:on-primary text-align:center">4</div>
</div>
</Demo>

## 상호작용 상태 (Pseudo-state)

### 지원 상태

| Prefix | CSS Pseudo | 용도 |
|---|---|---|
| `hover:` | `:hover` | 마우스 오버 |
| `focus:` | `:focus` | 포커스 (키보드/클릭) |
| `focus-visible:` | `:focus-visible` | 키보드 포커스만 |
| `focus-within:` | `:focus-within` | 자식 포커스 |
| `active:` | `:active` | 클릭/터치 중 |
| `disabled:` | `:disabled` | 비활성 |
| `checked:` | `:checked` | 체크됨 |
| `visited:` | `:visited` | 방문한 링크 |

### 사용법

<Demo>
<button class="background-color:primary color:on-primary padding:4 border-radius:3 border-width:0 cursor:pointer hover:background-color:primary-hover active:background-color:primary-active focus:outline-width:2 focus:outline-color:focus-ring disabled:opacity:50 disabled:cursor:not-allowed transition:default">
  버튼
</button>
</Demo>

### 반응형 × 상태 조합

prefix를 중첩할 수 있습니다: `{breakpoint}:{pseudo}:{property}:{value}`

<Demo>
<div class="padding:5 bg-color:surface-subtle color:text hover:background-color:danger lg:hover:background-color:secondary cursor:pointer transition:default">
  모바일: hover 시 빨강, 데스크톱: hover 시 파랑
</div>
</Demo>
