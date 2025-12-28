<script setup>
</script>

# 아이콘 (Icon)

`m3-icon` 컴포넌트는 Google Material Symbols를 활용하여 프로젝트 전역에서 일관되고 유연한 아이콘 시스템을 제공합니다.

## 1. 기본 사용법

아이콘을 사용하려면 `m3-icon` 클래스와 `icon:*` 클래스를 함께 사용합니다. 아이콘 이름은 Google Material Symbols의 이름을 그대로 사용하며, 공백은 언더스코어(`_`)로 변환합니다.


```html
<span class="m3-icon icon:아이콘이름 icon-옵션명:값"></span>
```

**아이콘 사용방법 : 아이콘 이름 - home**

<span class="m3-icon icon:home">홈</span> 

```html
<span class="m3-icon icon:home">홈</span>
```

**크기 옵션 사용방법 : icon-size 옵션**

<div>
  <span class="m3-icon icon:home icon-size:1">홈</span>
  <span class="m3-icon icon:home icon-size:2">홈</span>
  <span class="m3-icon icon:home icon-size:3">홈</span>
  <span class="m3-icon icon:home icon-size:4">홈</span>
</div>

```html
<div>
  <span class="m3-icon icon:home icon-size:1">홈</span>
  <span class="m3-icon icon:home icon-size:2">홈</span>
  <span class="m3-icon icon:home icon-size:3">홈</span>
  <span class="m3-icon icon:home icon-size:4">홈</span>
</div>
```


:::tip 아이콘 이름 찾기
Google Material Symbols의 모든 아이콘 목록은 [Material Symbols & Icons](https://fonts.google.com/icons)에서 확인할 수 있습니다. 아이콘 이름은 공백을 언더스코어(`_`)로 변환하여 사용합니다.
:::


### 2. 주요 옵션:

- `icon-style:outlined|rounded|sharp` - 스타일 변경
- `icon-size:1|2|3|4=>1(20px)|2(24px)|3(40px)|4(48px)` - 크기 조절
- `icon-color:main-1|sub-1|accent-1|base-1~10` - 색상 변경
- `icon-filled:0|1` - 채움 정도
- `icon-weight:100~700` - 두께 조절
- `icon-grade:1|2|3=>1(-25)|2(0)|3(200)` - 그라데이션 강도 조절
- `icon-optical-size:1|2|3|4=>1(20)|2(24)|3(40)|4(48)` - 광학적 크기 조절


<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <span class="m3-icon icon:home"></span>
    <span class="m3-icon icon:home icon-size:3"></span>
    <span class="m3-icon icon:home icon-size:4"></span>
    <span class="m3-icon icon:home icon-color:accent-2"></span>
    <span class="m3-icon icon:home icon-filled:1 icon-weight:700"></span>
  </div>
</div>

```html
<!-- home 아이콘의 다양한 옵션 사용 -->
<span class="m3-icon icon:home"></span>
<span class="m3-icon icon:home icon-size:3"></span>
<span class="m3-icon icon:home icon-size:4"></span>
<span class="m3-icon icon:home icon-color:accent-2"></span>
<span class="m3-icon icon:home icon-filled:1 icon-weight:700"></span>
```

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

## 3. 크기 옵션

`icon-size:*` 클래스를 사용하여 아이콘의 크기를 조절할 수 있습니다. <br/>
<span class="color:accent-1 fw:bold">이 색상</span>으로 표시된 크기는 기본 크기를 의미합니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:1"></span>
      <small>1 (20px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:2"></span>
      <small class="color:accent-2 fw:bold">2 (24px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:3"></span>
      <small>3 (40px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-size:4"></span>
      <small>4 (48px)</small>
    </div>
  </div>
</div>

```html
<!-- 크기 옵션 -->
<span class="m3-icon icon:home icon-size:1"></span>
<span class="m3-icon icon:home icon-size:2"></span>
<span class="m3-icon icon:home icon-size:3"></span>
<span class="m3-icon icon:home icon-size:4"></span>
```

### CSS 변수로 크기 커스터마이징

내가 원하는 크기가 없을 때는 CSS 변수를 재정의하여 원하는 크기를 설정할 수 있습니다.

```css
.icon-size\:custom {
  --icon-size: 32px;
}
```

```html
<span class="m3-icon icon:home icon-size:custom"></span>
```

## 4. 색상 옵션

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
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:base-5" style="font-size: 32px;"></span>
      <small>base-5</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-color:danger-1" style="font-size: 32px;"></span>
      <small>danger-1</small>
    </div>
  </div>
</div>

```html
<!-- 색상 옵션 적용 -->
<span class="m3-icon icon:home icon-color:main-1"></span>
<span class="m3-icon icon:home icon-color:main-2"></span>
<span class="m3-icon icon:home icon-color:main-3"></span>
<span class="m3-icon icon:home icon-color:sub-1"></span>
<span class="m3-icon icon:home icon-color:accent-1"></span>
<span class="m3-icon icon:home icon-color:base-5"></span>
<span class="m3-icon icon:home icon-color:danger-1"></span>
```

### 색상 팔레트 요약

| 계열 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Main | `icon-color:main-1`, `main-2`, `main-3` | 브랜드 기본 색상 |
| Sub  | `icon-color:sub-1`, `sub-2`, `sub-3` | 보조 색상 |
| Accent | `icon-color:accent-1`, `accent-2`, `accent-3` | 강조 색상 |
| Base | `icon-color:base-1` ~ `base-10` | 기본 색상 팔레트 (흰색~검은색 10단계) |
| Warning | `icon-color:warning-1`, `warning-2`, `warning-3` | 경고 색상 |
| Danger | `icon-color:danger-1`, `danger-2`, `danger-3` | 위험 색상 |

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

### CSS 변수로 색상 커스터마이징

원하는 색상 팔레트에 없는 색상을 사용하고 싶다면, CSS 변수를 덮어써 아이콘 색상을 직접 지정할 수 있습니다.

```css
.icon-color\:custom {
  --icon-color: #a020f0; /* CSS에서 "purple"에 해당하는 16진수입니다. */
}
.icon-color\:purple {
  --icon-color: purple;
}
```

```html
<span class="m3-icon icon:star icon-color:custom"></span>
<span class="m3-icon icon:star icon-color:purple"></span>
```

위와 같이 클래스를 만들고 원하는 색상 코드를 할당하면 됩니다.


## 5. Filled 옵션

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

## 6. Weight 옵션

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

## 7. Grade 옵션

아이콘의 그라데이션 강도를 조절합니다. 음수 값은 더 얇게, 양수 값은 더 두껍게 만듭니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-grade:1" style="font-size: 32px;"></span>
      <small>1 (-25)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-grade:2" style="font-size: 32px;"></span>
      <small class="color:accent-2 fw:bold">2 (0, 기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-grade:3" style="font-size: 32px;"></span>
      <small>3 (200)</small>
    </div>
  </div>
</div>

```html
<!-- Grade 옵션 -->
<span class="m3-icon icon:home icon-grade:1"></span>
<span class="m3-icon icon:home icon-grade:2"></span>
<span class="m3-icon icon:home icon-grade:3"></span>
```

## 8. Optical Size 옵션

아이콘의 광학적 크기를 조절합니다. 작은 크기에서는 더 두껍게, 큰 크기에서는 더 얇게 보이도록 최적화됩니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:1"></span>
      <small>1 (20)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:2"></span>
      <small class="color:accent-2 fw:bold">2 (24, 기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:3"></span>
      <small>3 (40)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-icon icon:home icon-optical-size:4"></span>
      <small>4 (48)</small>
    </div>
  </div>
</div>

```html
<!-- Optical Size 옵션 -->
<span class="m3-icon icon:home icon-optical-size:1"></span>
<span class="m3-icon icon:home icon-optical-size:2"></span>
<span class="m3-icon icon:home icon-optical-size:3"></span>
<span class="m3-icon icon:home icon-optical-size:4"></span>
```


## 9. 호버 효과

`hover` 클래스를 추가하면 호버 시 원형 배경과 확대 효과가 적용됩니다. 이 효과는 `n-deco` 클래스와 함께 사용할 때는 적용되지 않습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <span class="m3-icon icon:home icon-hover" style="font-size: 32px;"></span>
    <span class="m3-icon icon:menu icon-hover" style="font-size: 32px;"></span>
    <span class="m3-icon icon:close icon-hover" style="font-size: 32px;"></span>
  </div>
</div>

```html
<!-- 호버 효과 적용 -->
<span class="m3-icon icon:home icon-hover"></span>
```

:::tip 호버 효과 주의사항
`hover` 클래스는 `n-deco` 클래스와 함께 사용할 때는 적용되지 않습니다. 버튼 내부의 아이콘에는 버튼 자체의 호버 효과를 사용하는 것이 좋습니다.
:::


### 커스터마이징: 호버 효과 색상/크기 변경

`icon-hover` 클래스에 호버 시 추가적인 스타일을 직접 커스터마이징할 수 있습니다. 아래 예시처럼 CSS에서 색상이나 크기, 변수를 활용하여 스타일을 지정할 수 있습니다.

```css
/* .icon-hover에 커스텀 호버 효과 적용 예시 */
.icon-hover:not(.n-deco):hover {
  /* 호버 시 색상 변경 (직접 지정) */
  color: red;

  /* 또는 CSS 변수 활용하여 커스텀 */
  --icon-color: red;

}
.icon-hover:hover::before {
  /* 아이콘 크기/위치 변경 */
  transform: scale(1.2);
}
```

## 10. 반응형 아이콘

반응형 클래스를 사용하여 화면 크기에 따라 다른 아이콘 스타일을 적용할 수 있습니다. 모든 옵션(스타일, filled, weight, grade, optical-size, 색상, 크기)이 반응형으로 지원됩니다.

```html
<!-- 반응형 크기 -->
<span class="m3-icon icon:home icon-size:1 sm:icon-size:2 md:icon-size:custom lg:icon-size:3"></span>

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

### 기존 스타일을 원하는 스타일로 커스텀 할 수 있습니다.

```css
/* 나만의 커스텀 스타일로 적용 */
.m3-icon {
  --icon-size: 32px;
  --icon-color: #1976d2;
  --icon-weight: 600;
  --icon-filled: 1;
  --icon-family: "Material Symbols Rounded";
}

/* 특정 컨텍스트(.card 안쪽)에서만 스타일 변경 */
.card .m3-icon {
  --icon-size: 20px;
  --icon-color: var(--color-main-1);
}
```

사용방법은 동일합니다. 하지만 스타일은 내가 지정한 스타일로 바뀌어 표현됩니다.

```html
<span class="m3-icon icon:home"></span>
```

## 12. 실전 사용방법

### 1. global.css 또는 style.css 파일에 내가 원하는 색상이나 스타일러 커스텀하기

```css
:root{
  /* newtil-css 의 기본 색상 팔레트를 자신의 테마에 맞게 재정의하고 싶다면 */
  --color-main-1:red;
  --color-main-2:pink;
  --color-main-2:purple;
  --color-sub-1:...;    
}

/* newtil-css 가 제공하지 않는 아이콘을 추가하려면 */
.icon\:myicon::before {
  /* 아이콘의 코드 값은 위에서 알려준 Material 2 icons 링크를 통해서 확인할 수 있습니다. */
	content: "\e88a"; 
}

/* 아이콘에 없는 색이나 크기를 추가하고 싶다면 */
.icon-color\:mycolor{
  --icon-color:my-color;
}

.icon-size\:mysize{
  --icon-size:100px;
}
```

사용방법은 동일합니다.

```html
<button class="m3-btn d:flex ai:center gap:2">
  <span class="m3-icon icon:myicon"></span>  
  <span class="m3-icon icon:myicon icon-color:mycolor"></span>  
</button>
```

### 추가 참고

- 스타일 커스터마이징 변수는 `css/component/m3/m3-icon.css` 파일에 정의되어 있습니다.
- 아이콘에 적용되는 글로벌 색상 값은 `css/util/variables.css`에서 확인할 수 있습니다.
- Google Material Symbols의 모든 아이콘 목록은 [Material Symbols & Icons](https://fonts.google.com/icons)에서 확인할 수 있습니다.
- 디자인 시스템 전반의 규칙과 함께 사용할 때 가장 큰 효과를 얻습니다.
