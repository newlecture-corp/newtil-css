<script setup>
</script>

# 체크박스 (Checkbox)

`m3-checkbox` 컴포넌트는 Material Design 3 스타일의 체크박스를 제공합니다. 사용자 인터랙션에 따라 자동으로 상태가 변경되며, 다양한 색상 옵션과 상태를 지원합니다.

## 1. 기본 사용법

체크박스를 사용하려면 `m3-checkbox` 클래스와 `input[type="checkbox"]` 요소를 함께 사용합니다.

**기본 체크박스 사용방법**

<label class="m3-checkbox">
  <input type="checkbox">
  <span>기본 체크박스</span>
</label>

```html
<label class="m3-checkbox">
  <input type="checkbox">
  <span>기본 체크박스</span>
</label>
```

### 주요 옵션:

- `checkbox-color:main-1|main-3|sub-1~3|danger-1~3|accent-1~3` - 색상 변경
- `checkbox-mode:indeterminate` - 중간 상태 (일부 선택)
- `checkbox-state:enabled|unselected-disabled|hovered|focused|pressed` - 정적 상태 설정

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <label class="m3-checkbox">
      <input type="checkbox">
      <span>기본</span>
    </label>
    <label class="m3-checkbox">
      <input type="checkbox" checked>
      <span>체크됨</span>
    </label>
    <label class="m3-checkbox checkbox-color:sub-1">
      <input type="checkbox" checked>
      <span>파란색</span>
    </label>
    <label class="m3-checkbox checkbox-color:danger-1">
      <input type="checkbox" checked>
      <span>빨간색</span>
    </label>
  </div>
</div>

```html
<!-- 체크박스의 다양한 옵션 사용 -->
<label class="m3-checkbox">
  <input type="checkbox">
  <span>기본</span>
</label>
<label class="m3-checkbox">
  <input type="checkbox" checked>
  <span>체크됨</span>
</label>
<label class="m3-checkbox checkbox-color:sub-1">
  <input type="checkbox" checked>
  <span>파란색</span>
</label>
<label class="m3-checkbox checkbox-color:danger-1">
  <input type="checkbox" checked>
  <span>빨간색</span>
</label>
```

## 2. 색상 옵션

`checkbox-color:*` 클래스를 통해 프로젝트에서 정의한 색상 팔레트를 손쉽게 재사용할 수 있습니다. 기본 색상은 `main-2` (녹색)입니다.

<div class="vp-doc">
  <div class="d:flex gap:3 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:main-1">
        <input type="checkbox" checked>
        <span>main-1</span>
      </label>
      <small>main-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox">
        <input type="checkbox" checked>
        <span>main-2</span>
      </label>
      <small class="color:accent-2 fw:bold">main-2 (기본)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:main-3">
        <input type="checkbox" checked>
        <span>main-3</span>
      </label>
      <small>main-3</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:sub-1">
        <input type="checkbox" checked>
        <span>sub-1</span>
      </label>
      <small>sub-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:sub-2">
        <input type="checkbox" checked>
        <span>sub-2</span>
      </label>
      <small>sub-2</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:sub-3">
        <input type="checkbox" checked>
        <span>sub-3</span>
      </label>
      <small>sub-3</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:accent-1">
        <input type="checkbox" checked>
        <span>accent-1</span>
      </label>
      <small>accent-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:accent-2">
        <input type="checkbox" checked>
        <span>accent-2</span>
      </label>
      <small>accent-2</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:accent-3">
        <input type="checkbox" checked>
        <span>accent-3</span>
      </label>
      <small>accent-3</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:danger-1">
        <input type="checkbox" checked>
        <span>danger-1</span>
      </label>
      <small>danger-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:danger-2">
        <input type="checkbox" checked>
        <span>danger-2</span>
      </label>
      <small>danger-2</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-color:danger-3">
        <input type="checkbox" checked>
        <span>danger-3</span>
      </label>
      <small>danger-3</small>
    </div>
  </div>
</div>

```html
<!-- 색상 옵션 적용 -->
<label class="m3-checkbox checkbox-color:main-1">
  <input type="checkbox" checked>
  <span>main-1</span>
</label>
<label class="m3-checkbox checkbox-color:sub-1">
  <input type="checkbox" checked>
  <span>sub-1</span>
</label>
<label class="m3-checkbox checkbox-color:accent-1">
  <input type="checkbox" checked>
  <span>accent-1</span>
</label>
<label class="m3-checkbox checkbox-color:danger-1">
  <input type="checkbox" checked>
  <span>danger-1</span>
</label>
```

### 색상 팔레트 요약

| 계열 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Main | `checkbox-color:main-1`, `main-2`, `main-3` | 브랜드 기본 색상 (녹색 계열) |
| Sub  | `checkbox-color:sub-1`, `sub-2`, `sub-3` | 보조 색상 (파란색 계열) |
| Accent | `checkbox-color:accent-1`, `accent-2`, `accent-3` | 강조 색상 (주황색 계열) |
| Danger | `checkbox-color:danger-1`, `danger-2`, `danger-3` | 위험 색상 (빨간색 계열) |

### 다크 모드 지원

체크박스는 다크 모드를 자동으로 지원합니다. 다크 모드에서는 outline 색상이 자동으로 조정됩니다.

```css
/* CSS 변수로 자동 처리됨 */
@media (prefers-color-scheme: dark) {
  .m3-checkbox input[type="checkbox"]::before {
    --checkbox-outline-color: var(--color-transparent);
  }
}
```

## 3. 상태 (States)

체크박스는 다양한 상태를 지원합니다. 사용자 인터랙션에 따라 자동으로 상태가 변경되며, 정적 상태를 표시하기 위해 `checkbox-state:*` 클래스를 사용할 수 있습니다.

### 기본 상태

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox">
        <input type="checkbox">
        <span>선택 안됨</span>
      </label>
      <small>기본 상태</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox">
        <input type="checkbox" checked>
        <span>선택됨</span>
      </label>
      <small>체크됨</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox">
        <input type="checkbox" disabled>
        <span>비활성화</span>
      </label>
      <small>비활성화</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-mode:indeterminate">
        <input type="checkbox">
        <span>중간 상태</span>
      </label>
      <small>Indeterminate</small>
    </div>
  </div>
</div>

```html
<!-- 기본 상태 -->
<label class="m3-checkbox">
  <input type="checkbox">
  <span>선택 안됨</span>
</label>

<label class="m3-checkbox">
  <input type="checkbox" checked>
  <span>선택됨</span>
</label>

<label class="m3-checkbox">
  <input type="checkbox" disabled>
  <span>비활성화</span>
</label>

<label class="m3-checkbox checkbox-mode:indeterminate">
  <input type="checkbox">
  <span>중간 상태</span>
</label>
```

### 정적 상태 (Static States)

디자인 목적으로 특정 상태를 고정하여 표시하려면 `checkbox-state:*` 클래스를 사용합니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-state:enabled">
        <input type="checkbox">
        <span>Enabled</span>
      </label>
      <small>checkbox-state:enabled</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-state:unselected-disabled">
        <input type="checkbox">
        <span>Disabled</span>
      </label>
      <small>checkbox-state:unselected-disabled</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-state:hovered">
        <input type="checkbox">
        <span>Hovered</span>
      </label>
      <small>checkbox-state:hovered</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-state:focused">
        <input type="checkbox">
        <span>Focused</span>
      </label>
      <small>checkbox-state:focused</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <label class="m3-checkbox checkbox-state:pressed">
        <input type="checkbox">
        <span>Pressed</span>
      </label>
      <small>checkbox-state:pressed</small>
    </div>
  </div>
</div>

```html
<!-- 정적 상태 설정 -->
<label class="m3-checkbox checkbox-state:enabled">
  <input type="checkbox">
  <span>Enabled</span>
</label>

<label class="m3-checkbox checkbox-state:unselected-disabled">
  <input type="checkbox">
  <span>Disabled</span>
</label>

<label class="m3-checkbox checkbox-state:hovered">
  <input type="checkbox">
  <span>Hovered</span>
</label>

<label class="m3-checkbox checkbox-state:focused">
  <input type="checkbox">
  <span>Focused</span>
</label>

<label class="m3-checkbox checkbox-state:pressed">
  <input type="checkbox">
  <span>Pressed</span>
</label>
```

### 사용 가능한 상태 값

| 클래스 | 설명 |
| :--- | :--- |
| `checkbox-state:enabled` | 체크된 활성화 상태 |
| `checkbox-state:unselected-disabled` | 선택되지 않은 비활성화 상태 |
| `checkbox-state:hovered` | 호버 상태 |
| `checkbox-state:focused` | 포커스 상태 |
| `checkbox-state:pressed` | 눌림 상태 (active) |

## 4. Indeterminate 모드

일부 항목만 선택된 경우를 나타내는 중간 상태를 표시하려면 `checkbox-mode:indeterminate` 클래스를 사용합니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <label class="m3-checkbox checkbox-mode:indeterminate">
      <input type="checkbox">
      <span>일부 선택됨</span>
    </label>
  </div>
</div>

```html
<!-- Indeterminate 모드 -->
<label class="m3-checkbox checkbox-mode:indeterminate">
  <input type="checkbox">
  <span>일부 선택됨</span>
</label>
```

:::tip Indeterminate 사용 시나리오
Indeterminate 상태는 주로 부모-자식 관계의 체크박스에서 사용됩니다. 예를 들어, 여러 하위 항목 중 일부만 선택된 경우 부모 체크박스를 indeterminate 상태로 표시할 수 있습니다.
:::

## 5. 인터랙션 효과

체크박스는 사용자 인터랙션에 따라 자동으로 시각적 피드백을 제공합니다.

### 호버 효과

마우스를 올리면 원형 배경과 outline이 표시됩니다.

### 포커스 효과

키보드로 포커스할 때 outline이 표시되어 접근성을 향상시킵니다.

### 활성화 효과

클릭할 때 그라데이션 배경과 함께 눌림 효과가 표시됩니다.

모든 인터랙션 효과는 0.3초의 부드러운 트랜지션으로 처리됩니다.

## 6. CSS 변수 커스터마이징

체크박스의 모든 속성은 CSS 변수로 제어할 수 있습니다. 이를 통해 프로젝트 전역의 체크박스 스타일을 일관되게 관리할 수 있습니다.

### 기본 CSS 변수

```css
.m3-checkbox {
  /* 색상 */
  --checkbox-main-color: var(--color-main-2);
  --checkbox-icon-color: var(--color-white);
  --checkbox-border-color: var(--color-base-8);
  --checkbox-outline-color: var(--color-transparent);
  --checkbox-text-color: var(--color-base-8);
  
  /* 상태 */
  --checkbox-opacity: var(--opacity-0);
  --checkbox-icon-content: "\e5ca";
  
  /* 투명도 유틸리티 */
  --checkbox-transparent-0: transparent 0%;
  --checkbox-transparent-38: transparent 38%;
  --checkbox-transparent-92: transparent 92%;
  --checkbox-transparent-100: transparent 100%;
  
  /* 그라데이션 */
  --background-gradient: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(106, 142, 41, 0.3) 50%, rgba(106, 142, 41, 0.5) 100%);
}
```

### 기존 스타일을 원하는 스타일로 커스텀 할 수 있습니다.

```css
/* 나만의 커스텀 스타일로 적용 */
.m3-checkbox {
  --checkbox-main-color: #1976d2;
  --checkbox-border-color: #666;
  --checkbox-text-color: #333;
}

/* 특정 컨텍스트(.card 안쪽)에서만 스타일 변경 */
.card .m3-checkbox {
  --checkbox-main-color: var(--color-main-1);
  --checkbox-text-color: var(--color-base-9);
}
```

사용방법은 동일합니다. 하지만 스타일은 내가 지정한 스타일로 바뀌어 표현됩니다.

```html
<label class="m3-checkbox">
  <input type="checkbox" checked>
  <span>커스텀 스타일 체크박스</span>
</label>
```

## 7. 실전 사용방법

### 1. global.css 또는 style.css 파일에 내가 원하는 색상이나 스타일을 커스텀하기

```css
:root {
  /* newtil-css 의 기본 색상 팔레트를 자신의 테마에 맞게 재정의하고 싶다면 */
  --color-main-1: #4caf50;
  --color-main-2: #8bc34a;
  --color-main-3: #689f38;
  --color-sub-1: #2196f3;
  --color-sub-2: #1976d2;
  --color-sub-3: #1565c0;
}

/* 체크박스에 없는 색상을 추가하고 싶다면 */
.checkbox-color\:custom {
  --checkbox-main-color: #9c27b0;
  --color-main-2: #9c27b0;
  --background-gradient: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(156, 39, 176, 0.3) 50%, rgba(156, 39, 176, 0.5) 100%);
}
```

사용방법은 동일합니다.

```html
<label class="m3-checkbox checkbox-color:custom">
  <input type="checkbox" checked>
  <span>커스텀 색상 체크박스</span>
</label>
```

### 2. 폼과 함께 사용하기

```html
<form>
  <fieldset>
    <legend>선호하는 옵션을 선택하세요</legend>
    
    <label class="m3-checkbox">
      <input type="checkbox" name="options" value="option1">
      <span>옵션 1</span>
    </label>
    
    <label class="m3-checkbox">
      <input type="checkbox" name="options" value="option2">
      <span>옵션 2</span>
    </label>
    
    <label class="m3-checkbox">
      <input type="checkbox" name="options" value="option3">
      <span>옵션 3</span>
    </label>
  </fieldset>
</form>
```

### 3. 리스트와 함께 사용하기

```html
<ul style="list-style: none; padding: 0;">
  <li>
    <label class="m3-checkbox">
      <input type="checkbox">
      <span>항목 1</span>
    </label>
  </li>
  <li>
    <label class="m3-checkbox">
      <input type="checkbox" checked>
      <span>항목 2</span>
    </label>
  </li>
  <li>
    <label class="m3-checkbox">
      <input type="checkbox">
      <span>항목 3</span>
    </label>
  </li>
</ul>
```

### 추가 참고

- 스타일 커스터마이징 변수는 `css/component/m3/m3-checkbox.css` 파일에 정의되어 있습니다.
- 체크박스에 적용되는 글로벌 색상 값은 `css/util/variables.css`에서 확인할 수 있습니다.
- 체크박스 아이콘은 Material Symbols Outlined 폰트를 사용합니다.
- 디자인 시스템 전반의 규칙과 함께 사용할 때 가장 큰 효과를 얻습니다.

