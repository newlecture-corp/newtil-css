<script setup>
</script>

# 아이콘 (Icon)

`m3-icon` 컴포넌트는 Google Material Symbols를 활용하여 프로젝트 전역에서 일관되고 유연한 아이콘 시스템을 제공합니다. Material Symbols의 다양한 변형 옵션을 클래스 기반으로 손쉽게 제어할 수 있습니다.

## 1. 기본 사용법

아이콘을 사용하려면 `m3-icon` 클래스와 `icon:*` 클래스를 함께 사용합니다. 아이콘 이름은 Google Material Symbols의 이름을 그대로 사용하며, 공백은 언더스코어(`_`)로 변환합니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <span class="m3-icon icon:home"></span>
    <span class="m3-icon icon:menu"></span>
    <span class="m3-icon icon:close"></span>
    <span class="m3-icon icon:arrow_back"></span>
    <span class="m3-icon icon:arrow_forward"></span>
    <span class="m3-icon icon:expand_more"></span>
    <span class="m3-icon icon:expand_less"></span>
    <span class="m3-icon icon:chevron_left"></span>
    <span class="m3-icon icon:chevron_right"></span>
    <span class="m3-icon icon:more_vert"></span>
  </div>
</div>

```html
<!-- 기본 아이콘 사용 -->
<span class="m3-icon icon:home"></span>
<span class="m3-icon icon:menu"></span>
<span class="m3-icon icon:close"></span>
```

:::tip 아이콘 이름 찾기
Google Material Symbols의 모든 아이콘 목록은 [Material Symbols & Icons](https://fonts.google.com/icons)에서 확인할 수 있습니다. 아이콘 이름은 공백을 언더스코어(`_`)로 변환하여 사용합니다.
:::

## 2. 아이콘 스타일 (Style)

Material Symbols는 세 가지 스타일을 제공합니다. 기본값은 `outlined`이며, CSS 변수나 클래스를 통해 변경할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-style:outlined" style="font-size: 32px;"></span>
      <small>Outlined</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-style:rounded" style="font-size: 32px;"></span>
      <small>Rounded</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-style:sharp" style="font-size: 32px;"></span>
      <small>Sharp</small>
    </div>
  </div>
</div>

```html
<!-- 아이콘 스타일 설정 -->
<span class="m3-icon icon:home icon-style:outlined"></span>
<span class="m3-icon icon:home icon-style:rounded"></span>
<span class="m3-icon icon:home icon-style:sharp"></span>
```

### 기본 스타일 커스터마이징

CSS 변수를 재정의하여 프로젝트 전역의 기본 스타일을 변경할 수 있습니다.

```css
:root {
  --icon-family: "Material Symbols Outlined"; /* 기본값 */
  /* 또는 */
  --icon-family: "Material Symbols Rounded";
  /* 또는 */
  --icon-family: "Material Symbols Sharp";
}
```

## 3. Filled 옵션

아이콘의 채움 정도를 조절합니다. `0`은 비어있고, `1`은 완전히 채워집니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:favorite icon-filled:0" style="font-size: 32px;"></span>
      <small>Filled: 0</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:favorite icon-filled:1" style="font-size: 32px;"></span>
      <small>Filled: 1</small>
    </div>
  </div>
</div>

```html
<!-- Filled 옵션 -->
<span class="m3-icon icon:favorite icon-filled:0"></span>
<span class="m3-icon icon:favorite icon-filled:1"></span>
```

## 4. Weight 옵션

아이콘의 두께를 조절합니다. 값은 100부터 700까지 가능하며, 숫자가 클수록 더 두껍습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-weight:100" style="font-size: 32px;"></span>
      <small>100</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-weight:300" style="font-size: 32px;"></span>
      <small>300</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-weight:400" style="font-size: 32px;"></span>
      <small>400 (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-weight:600" style="font-size: 32px;"></span>
      <small>600</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-weight:700" style="font-size: 32px;"></span>
      <small>700</small>
    </div>
  </div>
</div>

```html
<!-- Weight 옵션 -->
<span class="m3-icon icon:home icon-weight:100"></span>
<span class="m3-icon icon:home icon-weight:400"></span>
<span class="m3-icon icon:home icon-weight:700"></span>
```

### 사용 가능한 Weight 값

| 값 | 설명 |
| :--- | :--- |
| `100` | 가장 얇음 |
| `200` | 얇음 |
| `300` | 가벼움 |
| `400` | 보통 (기본값) |
| `500` | 중간 |
| `600` | 두꺼움 |
| `700` | 가장 두꺼움 |

## 5. Grade 옵션

아이콘의 그라데이션 강도를 조절합니다. 음수 값은 더 얇게, 양수 값은 더 두껍게 만듭니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-grade:-25" style="font-size: 32px;"></span>
      <small>Grade: -25</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-grade:0" style="font-size: 32px;"></span>
      <small>Grade: 0 (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-grade:200" style="font-size: 32px;"></span>
      <small>Grade: 200</small>
    </div>
  </div>
</div>

```html
<!-- Grade 옵션 -->
<span class="m3-icon icon:home icon-grade:-25"></span>
<span class="m3-icon icon:home icon-grade:0"></span>
<span class="m3-icon icon:home icon-grade:200"></span>
```

## 6. Optical Size 옵션

아이콘의 광학적 크기를 조절합니다. 작은 크기에서는 더 두껍게, 큰 크기에서는 더 얇게 보이도록 최적화됩니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:20"></span>
      <small>Optical: 20</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:24"></span>
      <small>Optical: 24 (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:40"></span>
      <small>Optical: 40</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:48"></span>
      <small>Optical: 48</small>
    </div>
  </div>
</div>

```html
<!-- Optical Size 옵션 -->
<span class="m3-icon icon:home icon-optical-size:20"></span>
<span class="m3-icon icon:home icon-optical-size:24"></span>
<span class="m3-icon icon:home icon-optical-size:40"></span>
<span class="m3-icon icon:home icon-optical-size:48"></span>
```

## 7. 색상 옵션

`icon-color:*` 클래스를 통해 프로젝트에서 정의한 색상 팔레트를 손쉽게 재사용할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:3 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:main-1" style="font-size: 32px;"></span>
      <small>main-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:main-2" style="font-size: 32px;"></span>
      <small>main-2</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:main-3" style="font-size: 32px;"></span>
      <small>main-3</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:sub-1" style="font-size: 32px;"></span>
      <small>sub-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:accent-1" style="font-size: 32px;"></span>
      <small>accent-1</small>
    </div>
  </div>
</div>

```html
<!-- 색상 옵션 적용 -->
<span class="m3-icon icon:home icon-color:main-1"></span>
<span class="m3-icon icon:home icon-color:sub-1"></span>
<span class="m3-icon icon:home icon-color:accent-1"></span>
```

### 색상 팔레트 요약

| 계열 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Main | `icon-color:main-1`, `main-2`, `main-3` | 브랜드 기본 색상 |
| Sub  | `icon-color:sub-1`, `sub-2`, `sub-3` | 보조 색상 |
| Accent | `icon-color:accent-1`, `accent-2`, `accent-3` | 강조 색상 |
| Base | `icon-color:base-1` ~ `base-10` | 기본 색상 팔레트 (10단계) |

### 다크 모드 지원

아이콘 색상은 다크 모드를 자동으로 지원합니다. 기본적으로 라이트 모드에서는 `--color-base-9`, 다크 모드에서는 `--color-base-2`가 적용됩니다.

```css
/* CSS 변수로 자동 처리됨 */
@media (prefers-color-scheme: dark) {
  :root {
    --icon-color: var(--color-base-2);
  }
}
```

## 8. 크기 옵션

`icon-size:*` 클래스를 사용하여 아이콘의 크기를 조절할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:20"></span>
      <small>20px</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:24"></span>
      <small>24px (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:40"></span>
      <small>40px</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:48"></span>
      <small>48px</small>
    </div>
  </div>
</div>

```html
<!-- 크기 옵션 -->
<span class="m3-icon icon:home icon-size:20"></span>
<span class="m3-icon icon:home icon-size:24"></span>
<span class="m3-icon icon:home icon-size:40"></span>
<span class="m3-icon icon:home icon-size:48"></span>
```

### CSS 변수로 크기 커스터마이징

CSS 변수를 재정의하여 원하는 크기를 설정할 수 있습니다.

```css
:root {
  --icon-size: 24px; /* 기본값 */
}

.custom-icon {
  --icon-size: 32px;
}
```

```html
<span class="m3-icon icon:home custom-icon"></span>
```

## 9. 호버 효과

`hover` 클래스를 추가하면 호버 시 원형 배경과 확대 효과가 적용됩니다. 이 효과는 `n-deco` 클래스와 함께 사용할 때는 적용되지 않습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <span class="m3-icon icon:home hover" style="font-size: 32px;"></span>
    <span class="m3-icon icon:menu hover" style="font-size: 32px;"></span>
    <span class="m3-icon icon:close hover" style="font-size: 32px;"></span>
  </div>
</div>

```html
<!-- 호버 효과 적용 -->
<span class="m3-icon icon:home hover"></span>
```

:::tip 호버 효과 주의사항
`hover` 클래스는 `n-deco` 클래스와 함께 사용할 때는 적용되지 않습니다. 버튼 내부의 아이콘에는 버튼 자체의 호버 효과를 사용하는 것이 좋습니다.
:::

## 10. 반응형 아이콘

반응형 클래스를 사용하여 화면 크기에 따라 다른 아이콘 스타일을 적용할 수 있습니다. 모든 옵션(스타일, filled, weight, grade, optical-size, 색상, 크기)이 반응형으로 지원됩니다.

```html
<!-- 반응형 크기 -->
<span class="m3-icon icon:home icon-size:20 sm:icon-size:24 md:icon-size:32 lg:icon-size:40"></span>

<!-- 반응형 색상 -->
<span class="m3-icon icon:home icon-color:base-9 sm:icon-color:main-1 md:icon-color:accent-1"></span>

<!-- 반응형 스타일 -->
<span class="m3-icon icon:home icon-style:outlined sm:icon-style:rounded md:icon-style:sharp"></span>

<!-- 반응형 Weight -->
<span class="m3-icon icon:home icon-weight:300 sm:icon-weight:400 md:icon-weight:600"></span>
```

### 반응형 브레이크포인트

| 클래스 접두사 | 최소 너비 | 설명 |
| :--- | :--- | :--- |
| `sm:` | 640px | 작은 화면 (태블릿) |
| `md:` | 768px | 중간 화면 (태블릿 가로) |
| `lg:` | 1024px | 큰 화면 (데스크톱) |
| `xl:` | 1280px | 매우 큰 화면 (큰 데스크톱) |

:::info 반응형 사용법
반응형 클래스를 사용하려면 `sm:m3-icon`, `md:m3-icon`, `lg:m3-icon`, `xl:m3-icon` 클래스를 먼저 추가한 후, 그 안에서 다른 옵션 클래스를 사용합니다.
:::

## 11. CSS 변수 커스터마이징

아이콘의 모든 속성은 CSS 변수로 제어할 수 있습니다. 이를 통해 프로젝트 전역의 아이콘 스타일을 일관되게 관리할 수 있습니다.

### 기본 CSS 변수

```css
:root {
  /* 크기 */
  --icon-size: 24px;
  
  /* 스타일 */
  --icon-family: "Material Symbols Outlined";
  
  /* 색상 */
  --icon-color: var(--color-base-9);
  
  /* 변형 옵션 */
  --icon-fill: 0;
  --icon-weight: 400;
  --icon-grade: 0;
  --icon-optical-size: 24;
}

@media (prefers-color-scheme: dark) {
  :root {
    --icon-color: var(--color-base-2);
  }
}
```

### 커스텀 아이콘 스타일 예제

```css
/* 특정 아이콘에 커스텀 스타일 적용 */
.custom-icon {
  --icon-size: 32px;
  --icon-color: #1976d2;
  --icon-weight: 600;
  --icon-filled: 1;
  --icon-family: "Material Symbols Rounded";
}

/* 특정 컨텍스트에서 아이콘 스타일 변경 */
.card .m3-icon {
  --icon-size: 20px;
  --icon-color: var(--color-main-1);
}
```

```html
<span class="m3-icon icon:home custom-icon"></span>
```

## 12. 실전 예제

### 아이콘과 텍스트 함께 사용

```html
<button class="m3-btn d:flex ai:center gap:2">
  <span class="m3-icon icon:add"></span>
  <span>추가하기</span>
</button>
```

### 아이콘 버튼 그룹

```html
<div class="d:flex gap:2">
  <button class="m3-deco icon:edit icon-color:main-1"></button>
  <button class="m3-deco icon:delete icon-color:accent-1"></button>
  <button class="m3-deco icon:share icon-color:sub-1"></button>
</div>
```

### 반응형 아이콘 메뉴

```html
<nav class="d:flex gap:4">
  <a href="#" class="d:flex fd:column ai:center gap:1">
    <span class="m3-icon icon:home icon-size:20 sm:icon-size:24"></span>
    <span class="text:sm">홈</span>
  </a>
  <a href="#" class="d:flex fd:column ai:center gap:1">
    <span class="m3-icon icon:search icon-size:20 sm:icon-size:24"></span>
    <span class="text:sm">검색</span>
  </a>
  <a href="#" class="d:flex fd:column ai:center gap:1">
    <span class="m3-icon icon:settings icon-size:20 sm:icon-size:24"></span>
    <span class="text:sm">설정</span>
  </a>
</nav>
```

### 다양한 변형 조합

```html
<!-- 스타일과 Filled 조합 -->
<span class="m3-icon icon:star icon-style:rounded icon-filled:1 icon-color:accent-1"></span>

<!-- Weight와 Grade 조합 -->
<span class="m3-icon icon:home icon-weight:600 icon-grade:200"></span>

<!-- 크기와 색상 조합 -->
<span class="m3-icon icon:settings icon-size:40 icon-color:main-1"></span>
```

---

### 추가 참고

- 스타일 커스터마이징 변수는 `css/component/m3/m3-icon.css` 파일에 정의되어 있습니다.
- 아이콘에 적용되는 글로벌 색상 값은 `css/util/variables.css`에서 확인할 수 있습니다.
- Google Material Symbols의 모든 아이콘 목록은 [Material Symbols & Icons](https://fonts.google.com/icons)에서 확인할 수 있습니다.
- 디자인 시스템 전반의 규칙과 함께 사용할 때 가장 큰 효과를 얻습니다.
