<script setup>
</script>

# 버튼 (Button)

`n-btn` 컴포넌트는 프로젝트 전역에서 일관된 버튼 UI를 제공하기 위한 기본 컴포넌트입니다. 아래 예제들은 `test/components/btn.html` 데모 페이지와 동일한 구성요소를 문서화한 것입니다.

## 1. 버튼 타입

<div class="vp-doc">
  <div class="d:flex gap:2 jc:flex-start wrap">
    <button class="n-btn btn:elevated">Elevated</button>
    <button class="n-btn btn:filled">Filled (Default)</button>
    <button class="n-btn btn:tonal">Tonal</button>
    <button class="n-btn btn:outlined">Outlined</button>
    <button class="n-btn btn:text">Text</button>
  </div>
</div>

```html
<!-- Elevated 버튼 -->
<button class="n-btn btn:elevated">Elevated</button>

<!-- Filled 버튼 -->
<button class="n-btn btn:filled">Filled</button>

<!-- Tonal 버튼 -->
<button class="n-btn btn:tonal">Tonal</button>

<!-- Outlined 버튼 -->
<button class="n-btn btn:outlined">Outlined</button>

<!-- Text 버튼 -->
<button class="n-btn btn:text">Text</button>
```

## 2. 색상 옵션

`btn-color:*` 클래스를 통해 프로젝트에서 정의한 팔레트를 손쉽게 재사용할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn">Default</button>
    <button class="n-btn btn-color:main-1">main-1</button>
    <button class="n-btn btn-color:sub-1">sub-1</button>
    <button class="n-btn btn-color:accent-1">accent-1</button>
  </div>
</div>

```html
<!-- 색상 옵션 적용 -->
<button class="n-btn">기본 버튼</button>
<button class="n-btn btn-color:main-1">main-1</button>
<button class="n-btn btn-color:sub-1">sub-1</button>
<button class="n-btn btn-color:accent-1">accent-1</button>
```

### 팔레트 요약

| 계열 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Main | `btn-color:main-1`, `main-2`, `main-3` | 브랜드 기본 색상 |
| Sub  | `btn-color:sub-1`, `sub-2`, `sub-3` | 보조 색상 |
| Accent | `btn-color:accent-1`, `accent-2`, `accent-3` | 강조 색상 |

## 3. 색상 커스터마이징

CSS 변수를 재정의하면 커스텀 팔레트를 적용할 수 있습니다.

```css
:root {
  --color-main-1: #1976d2;
  --color-main-2: #1565c0;
  --color-main-3: #0d47a1;
  --color-sub-1: #9c27b0;
  --color-sub-2: #7b1fa2;
  --color-sub-3: #6a1b9a;
  --color-accent-1: #ff9800;
  --color-accent-2: #f57c00;
  --color-accent-3: #e65100;
}
```

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn btn-color:main-1">main-1</button>
    <button class="n-btn btn-color:main-2">main-2</button>
    <button class="n-btn btn-color:main-3">main-3</button>
    <button class="n-btn btn-color:sub-1">sub-1</button>
    <button class="n-btn btn-color:sub-2">sub-2</button>
    <button class="n-btn btn-color:sub-3">sub-3</button>
    <button class="n-btn btn-color:accent-1">accent-1</button>
    <button class="n-btn btn-color:accent-2">accent-2</button>
    <button class="n-btn btn-color:accent-3">accent-3</button>
  </div>
</div>

```html
<button class="n-btn btn-color:main-1">main-1</button>
<button class="n-btn btn-color:main-2">main-2</button>
<button class="n-btn btn-color:main-3">main-3</button>
<button class="n-btn btn-color:sub-1">sub-1</button>
<button class="n-btn btn-color:sub-2">sub-2</button>
<button class="n-btn btn-color:sub-3">sub-3</button>
<button class="n-btn btn-color:accent-1">accent-1</button>
<button class="n-btn btn-color:accent-2">accent-2</button>
<button class="n-btn btn-color:accent-3">accent-3</button>
```

## 4. 버튼 모양

`btn-shape:*` 클래스로 라운드 값을 손쉽게 변경할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:2 jc:flex-start wrap">
    <button class="n-btn btn-shape:round">Round (Default)</button>
    <button class="n-btn btn-shape:square">Square</button>
    <button class="n-btn btn-shape:sharp">Sharp</button>
  </div>
</div>

```html
<button class="n-btn btn-shape:round">Round</button>
<button class="n-btn btn-shape:square">Square</button>
<button class="n-btn btn-shape:sharp">Sharp</button>
```

## 5. 버튼 상태

상태는 `btn-state:*` 클래스로 제어합니다. 디자인 가이드에 따라 타입별 데모를 제공합니다.

### Filled 타입 (기본)

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn btn-state:enabled">Enabled</button>
    <button class="n-btn btn-state:disabled">Disabled</button>
    <button class="n-btn btn-state:hover">Hovered</button>
    <button class="n-btn btn-state:focused">Focused</button>
    <button class="n-btn btn-state:pressed">Pressed</button>
  </div>
</div>

```html
<button class="n-btn btn-state:enabled">Enabled</button>
<button class="n-btn btn-state:disabled">Disabled</button>
<button class="n-btn btn-state:hover">Hovered</button>
<button class="n-btn btn-state:focused">Focused</button>
<button class="n-btn btn-state:pressed">Pressed</button>
```

### 타입별 상태 예제

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn btn:tonal btn-state:enabled">Tonal · Enabled</button>
    <button class="n-btn btn:tonal btn-state:disabled">Tonal · Disabled</button>
    <button class="n-btn btn:tonal btn-state:hover">Tonal · Hovered</button>
    <button class="n-btn btn:tonal btn-state:focused">Tonal · Focused</button>
    <button class="n-btn btn:tonal btn-state:pressed">Tonal · Pressed</button>
  </div>
</div>

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn btn:outlined btn-state:enabled">Outlined · Enabled</button>
    <button class="n-btn btn:outlined btn-state:disabled">Outlined · Disabled</button>
    <button class="n-btn btn:outlined btn-state:hover">Outlined · Hovered</button>
    <button class="n-btn btn:outlined btn-state:focused">Outlined · Focused</button>
    <button class="n-btn btn:outlined btn-state:pressed">Outlined · Pressed</button>
  </div>
</div>

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn btn:elevated btn-state:enabled">Elevated · Enabled</button>
    <button class="n-btn btn:elevated btn-state:disabled">Elevated · Disabled</button>
    <button class="n-btn btn:elevated btn-state:hover">Elevated · Hovered</button>
    <button class="n-btn btn:elevated btn-state:focused">Elevated · Focused</button>
    <button class="n-btn btn:elevated btn-state:pressed">Elevated · Pressed</button>
  </div>
</div>

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <button class="n-btn btn:text btn-state:enabled">Text · Enabled</button>
    <button class="n-btn btn:text btn-state:disabled">Text · Disabled</button>
    <button class="n-btn btn:text btn-state:hover">Text · Hovered</button>
    <button class="n-btn btn:text btn-state:focused">Text · Focused</button>
    <button class="n-btn btn:text btn-state:pressed">Text · Pressed</button>
  </div>
</div>

## 6. 토글 버튼 타입

토글 버튼은 `label` 요소 안에서 `input[type="checkbox"]`와 함께 사용합니다. `:has()` 기반 상태 스타일을 활용합니다.

### 기본 타입

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <label class="n-btn btn:elevated">
      <span>Elevated</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn:filled">
      <span>Filled</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn:tonal">
      <span>Tonal</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn:outlined">
      <span>Outlined</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn:text">
      <span>Text</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
  </div>
</div>

```html
<label class="n-btn btn:elevated">
  <span>Elevated</span>
  <input type="checkbox" class="n-checkbox d:none">
</label>
<!-- Filled / Tonal / Outlined / Text 도 동일한 패턴 -->
```

### 색상 프리셋 적용

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <label class="n-btn btn-color:main-1 btn:elevated">
      <span>Elevated</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-color:main-1 btn:filled">
      <span>Filled</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-color:main-1 btn:tonal">
      <span>Tonal</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-color:main-1 btn:outlined">
      <span>Outlined</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-color:main-1 btn:text">
      <span>Text</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
  </div>
</div>

### Square 모양 토글 버튼

<div class="vp-doc">
  <div class="d:flex gap:2 wrap">
    <label class="n-btn btn-shape:square btn:elevated">
      <span>Elevated</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-shape:square btn:filled">
      <span>Filled</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-shape:square btn:tonal">
      <span>Tonal</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-shape:square btn:outlined">
      <span>Outlined</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
    <label class="n-btn btn-shape:square btn:text">
      <span>Text</span>
      <input type="checkbox" class="n-checkbox d:none">
    </label>
  </div>
</div>

## 7. 버튼 크기

<div class="vp-doc">
  <div class="d:flex gap:2 wrap ai:center">
    <button class="n-btn btn-size:1">Extra small</button>
    <button class="n-btn btn-size:2">Small</button>
    <button class="n-btn btn-size:3">Medium</button>
    <button class="n-btn btn-size:4">Large</button>
    <button class="n-btn btn-size:5">Extra large</button>
  </div>
</div>

```html
<button class="n-btn btn-size:1">Extra small</button>
<button class="n-btn btn-size:2">Small</button>
<button class="n-btn btn-size:3">Medium</button>
<button class="n-btn btn-size:4">Large</button>
<button class="n-btn btn-size:5">Extra large</button>
```

`btn-size:*`는 높이, 좌우 패딩, 글꼴 크기를 모두 맞춰 주므로 추가적인 커스터마이징 없이 디자인 가이드 수치를 재현할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:2 wrap ai:center">
    <button class="n-btn btn-shape:square btn-size:1">Extra small</button>
    <button class="n-btn btn-shape:square btn-size:2">Small</button>
    <button class="n-btn btn-shape:square btn-size:3">Medium</button>
    <button class="n-btn btn-shape:square btn-size:4">Large</button>
    <button class="n-btn btn-shape:square btn-size:5">Extra large</button>
  </div>
</div>

## 8. 아이콘 버튼

아이콘 전용 버튼(`n-icon`)과 라벨이 함께 있는 버튼(`n-deco`)을 모두 지원합니다.

### 상태 예제 (n-icon)

<div class="vp-doc">
  <div class="d:flex gap:2 wrap ai:center">
    <button class="n-btn n-icon icon:home">Enabled</button>
    <button class="n-btn n-icon icon:home btn-state:disabled">Disabled</button>
    <button class="n-btn n-icon icon:home btn-state:hover">Hovered</button>
    <button class="n-btn n-icon icon:home btn-state:focused">Focused</button>
    <button class="n-btn n-icon icon:home btn-state:pressed">Pressed</button>
  </div>
</div>

```html
<button class="n-btn n-icon icon:home">Enabled</button>
<button class="n-btn n-icon icon:home btn-state:disabled">Disabled</button>
<button class="n-btn n-icon icon:home btn-state:hover">Hovered</button>
<button class="n-btn n-icon icon:home btn-state:focused">Focused</button>
<button class="n-btn n-icon icon:home btn-state:pressed">Pressed</button>
```

### 상태 예제 (n-deco)

<div class="vp-doc">
  <div class="d:flex gap:2 wrap ai:center">
    <button class="n-btn n-deco icon:home">Enabled</button>
    <button class="n-btn n-deco icon:home btn-color:main-1">Colored</button>
    <button class="n-btn n-deco icon:home btn-state:disabled">Disabled</button>
    <button class="n-btn n-deco icon:home btn-state:hover">Hovered</button>
    <button class="n-btn n-deco icon:home btn-state:focused">Focused</button>
    <button class="n-btn n-deco icon:home btn-state:pressed">Pressed</button>
  </div>
</div>

### 아이콘 버튼 크기

<div class="vp-doc">
  <div class="d:flex gap:2 wrap ai:center">
    <button class="n-btn n-deco icon:home btn-size:1">Size 1</button>
    <button class="n-btn n-deco icon:home btn-size:2">Size 2</button>
    <button class="n-btn n-deco icon:home btn-size:3">Size 3</button>
    <button class="n-btn n-deco icon:home btn-size:4">Size 4</button>
    <button class="n-btn n-deco icon:home btn-size:5">Size 5</button>
  </div>
</div>

```html
<button class="n-btn n-deco icon:home btn-size:1">Size 1</button>
<button class="n-btn n-deco icon:home btn-size:2">Size 2</button>
<button class="n-btn n-deco icon:home btn-size:3">Size 3</button>
<button class="n-btn n-deco icon:home btn-size:4">Size 4</button>
<button class="n-btn n-deco icon:home btn-size:5">Size 5</button>
```

:::tip 아이콘 크기 가이드
`n-btn`과 `n-icon`을 함께 사용할 때는 `btn-size:*`가 아이콘 크기와 패딩을 함께 조정합니다. `n-deco`는 동일한 `--icon-size` 변수를 사용하므로 텍스트와 아이콘 간 간격도 일관되게 유지됩니다.
:::

---

### 추가 참고

- 스타일 커스터마이징 변수는 `css/component/n-btn.css` 파일에 정의되어 있습니다.
- 버튼에 적용되는 글로벌 색상 값은 `css/util/variables.css`에서 확인할 수 있습니다.
- 디자인 시스템 전반의 규칙과 함께 사용할 때 가장 큰 효과를 얻습니다.
