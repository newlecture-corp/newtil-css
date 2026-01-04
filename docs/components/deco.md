<script setup>
</script>

# 데코 (Deco)

`m3-deco` 컴포넌트는 <span class="fw:bold color:danger-1">아이콘으로</span> <span class="fw:bold color:sub-1">텍스트를</span> 데코레이션하는 컴포넌트입니다. 아이콘의 위치와 간격을 조절하여 다양한 레이아웃을 구성할 수 있습니다.

## 1. 기본 사용법

데코를 사용하려면 `m3-deco` 클래스와 `icon:*` 클래스를 함께 사용합니다. 아이콘 이름은 Google Material Symbols의 이름을 그대로 사용하며, 공백은 언더스코어(`_`)로 변환합니다.

```html
<span class="m3-deco icon:아이콘이름 deco-pos:위치">텍스트</span>
```

**데코 사용방법 : 아이콘 이름 - home**

<span class="m3-deco icon:home">홈</span>

```html
<span class="m3-deco icon:home">홈</span>
```

:::tip 아이콘 이름 찾기
Google Material Symbols의 모든 아이콘 목록은 [Material Symbols & Icons](https://fonts.google.com/icons)에서 확인할 수 있습니다. 아이콘 이름은 공백을 언더스코어(`_`)로 변환하여 사용합니다.
:::

### 2. 주요 옵션:

- `deco-pos:top|bottom|left|right` - 아이콘 위치 설정
- `deco-size:1|2|3|4|5` - 아이콘 크기와 간격을 함께 조절
- `deco-gap:0|1|2|3|4|5` - 아이콘과 텍스트 간격 조절
- `deco-color:*` - 활성화 상태 배경색 설정
- `deco-active` - 활성화 상태 (배경색 추가)
- `icon:*` - 아이콘 이름 (m3-icon의 모든 옵션 사용 가능)

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <span class="m3-deco icon:home deco-pos:top">홈</span>
    <span class="m3-deco icon:home deco-pos:top deco-active">활성화</span>
    <span class="m3-deco icon:home deco-pos:left deco-gap:2 deco-active deco-size:3">간격 조절</span>
    <span class="m3-deco icon:home deco-pos:top deco-active deco-color:accent-1">색상 적용</span>
    <span class="m3-deco icon:home deco-pos:top deco-active deco-size:3 deco-color:accent-1">색상 적용</span>
  </div>
  
</div>

```html
<!-- 데코의 다양한 옵션 사용 -->
<span class="m3-deco icon:home deco-pos:top">홈</span>
<span class="m3-deco icon:home deco-pos:top deco-active">활성화</span>
<span class="m3-deco icon:home deco-pos:left deco-gap:2">간격 조절</span>
<span class="m3-deco icon:home deco-pos:top deco-active deco-color:accent-1">색상 적용</span>
```

## 2. 위치 옵션 (Position)

`deco-pos:*` 클래스를 사용하여 아이콘의 위치를 설정할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:20 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left">홈</span>
      <small>left(default)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:right">홈</span>
      <small>right</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:top">홈</span>
      <small>top</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:bottom">홈</span>
      <small>bottom</small>
    </div>
    
  </div>
</div>

```html
<!-- 위치 옵션 -->
<span class="m3-deco icon:home deco-pos:left">홈(default)</span>
<span class="m3-deco icon:home deco-pos:right">홈</span>
<span class="m3-deco icon:home deco-pos:top">홈</span>
<span class="m3-deco icon:home deco-pos:bottom">홈</span>
```

### 위치 옵션 설명

<table>
<thead>
<tr>
<th style="width: 20%;">위치</th>
<th style="width: 50%;">설명</th>
<th style="width: 30%;">레이아웃</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>deco-pos:left</code></td>
<td>아이콘이 텍스트 왼쪽에 배치(default)</td>
<td>가로 (row)</td>
</tr>
<tr>
<td><code>deco-pos:right</code></td>
<td>아이콘이 텍스트 오른쪽에 배치</td>
<td>가로 (row)</td>
</tr>

<tr>
<td><code>deco-pos:top</code></td>
<td>아이콘이 텍스트 위에 배치</td>
<td>세로 (column)</td>
</tr>
<tr>
<td><code>deco-pos:bottom</code></td>
<td>아이콘이 텍스트 아래에 배치</td>
<td>세로 (column)</td>
</tr>

</tbody>
</table>

## 3. 크기 옵션 (Size)

`deco-size:*` 클래스를 사용하여 아이콘 크기, 간격, 텍스트 크기를 함께 조절할 수 있습니다. 이 옵션은 버튼 크기 스타일을 참고하여 적절한 비율로 자동 설정합니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:edit deco-pos:left deco-size:1">편집</span>
      <small>size: 1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:edit deco-pos:left deco-size:2">편집</span>
      <small class="color:accent-2 fw:bold">size: 2 (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:edit deco-pos:left deco-size:3">편집</span>
      <small>size: 3</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:edit deco-pos:left deco-size:4">편집</span>
      <small>size: 4</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:edit deco-pos:left deco-size:5">편집</span>
      <small>size: 5</small>
    </div>
  </div>
</div>

```html
<!-- 크기 옵션 -->
<span class="m3-deco icon:edit deco-pos:left deco-size:1">편집</span>
<span class="m3-deco icon:edit deco-pos:left deco-size:2">편집</span>
<span class="m3-deco icon:edit deco-pos:left deco-size:3">편집</span>
<span class="m3-deco icon:edit deco-pos:left deco-size:4">편집</span>
<span class="m3-deco icon:edit deco-pos:left deco-size:5">편집</span>
```

### 크기 옵션 값

| 값 | 아이콘 크기 | Gap | 텍스트 크기 | 설명 |
| :--- | :--- | :--- | :--- | :--- |
| `deco-size:1` | 20px | 4px | 14px | 작은 크기 (btn-size:xs와 유사) |
| `deco-size:2` | 24px | 8px | 14px | 기본 크기 (btn-size:sm과 유사) |
| `deco-size:3` | 40px | 8px | 16px | 중간 크기 (btn-size:md와 유사) |
| `deco-size:4` | 48px | 12px | 24px | 큰 크기 (btn-size:lg와 유사) |
| `deco-size:5` | 48px | 16px | 32px | 매우 큰 크기 (btn-size:xl과 유사) |

:::tip 크기 옵션 vs 개별 옵션
`deco-size` 옵션은 아이콘 크기와 gap을 함께 조절합니다. 아이콘 크기만 변경하려면 `icon-size:*` 옵션을, gap만 변경하려면 `deco-gap:*` 옵션을 사용하세요.
:::

## 4. 간격 옵션 (Gap)

`deco-gap:*` 클래스를 사용하여 아이콘과 텍스트 사이의 간격을 조절할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-gap:0">홈</span>
      <small>gap: 0 (0px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-gap:1">홈</span>
      <small>gap: 1 (4px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-gap:2">홈</span>
      <small class="color:accent-2 fw:bold">gap: 2 (8px, 기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-gap:3">홈</span>
      <small>gap: 3 (12px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-gap:4">홈</span>
      <small>gap: 4 (16px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-gap:5">홈</span>
      <small>gap: 5 (20px)</small>
    </div>
  </div>
</div>

```html
<!-- 간격 옵션 -->
<span class="m3-deco icon:home deco-pos:left deco-gap:0">홈</span>
<span class="m3-deco icon:home deco-pos:left deco-gap:1">홈</span>
<span class="m3-deco icon:home deco-pos:left deco-gap:2">홈</span>
<span class="m3-deco icon:home deco-pos:left deco-gap:3">홈</span>
<span class="m3-deco icon:home deco-pos:left deco-gap:4">홈</span>
<span class="m3-deco icon:home deco-pos:left deco-gap:5">홈</span>
```

### 간격 옵션 값

| 값 | CSS 변수 | 픽셀 값 | 설명 |
| :--- | :--- | :--- | :--- |
| `deco-gap:0` | `0px` | 0px | 간격 없음 |
| `deco-gap:1` | `var(--space-3)` | 4px | 작은 간격 |
| `deco-gap:2` | `var(--space-4)` | 8px | 기본 간격 |
| `deco-gap:3` | `var(--space-6)` | 12px | 중간 간격 |
| `deco-gap:4` | `var(--space-10)` | 16px | 큰 간격 |
| `deco-gap:5` | `var(--space-13)` | 20px | 매우 큰 간격 |

## 5. 활성화 상태 (Active)

`deco-active` 클래스를 추가하면 배경색이 적용되어 활성화된 상태를 표현할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:top">홈</span>
      <small>일반 상태</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:top deco-active">홈</span>
      <small>활성화 상태</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-active">홈</span>
      <small>활성화 (left)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:right deco-active">홈</span>
      <small>활성화 (right)</small>
    </div>
  </div>
</div>

```html
<!-- 활성화 상태 -->
<span class="m3-deco icon:home deco-pos:top">홈</span>
<span class="m3-deco icon:home deco-pos:top deco-active">홈</span>
<span class="m3-deco icon:home deco-pos:left deco-active">홈</span>
<span class="m3-deco icon:home deco-pos:right deco-active">홈</span>
```

### 활성화 상태 스타일

- **top/bottom**: 아이콘에 둥근 배경 (높이 32px, border-radius: 16px)
- **left/right**: 전체 요소에 둥근 배경 (높이 40px, border-radius: 20px, padding: 0 20px)
- 배경색: `var(--deco-color)` (기본값: `var(--color-main-1)`)

## 6. 데코 색상 옵션 (Color)

`deco-color:*` 클래스를 사용하여 `deco-active` 상태의 배경색을 설정할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:6 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:top deco-active">홈</span>
      <small>기본 색상</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:top deco-active deco-color:accent-1">홈</span>
      <small>accent-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:top deco-active deco-color:warning-1">홈</span>
      <small>warning-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-active deco-color:danger-1">홈</span>
      <small>danger-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <span class="m3-deco icon:home deco-pos:left deco-active deco-color:base-3">홈</span>
      <small>base-3</small>
    </div>
  </div>
</div>

```html
<!-- 데코 색상 옵션 -->
<span class="m3-deco icon:home deco-pos:top deco-active">기본 색상</span>
<span class="m3-deco icon:home deco-pos:top deco-active deco-color:accent-1">accent-1</span>
<span class="m3-deco icon:home deco-pos:top deco-active deco-color:warning-1">warning-1</span>
<span class="m3-deco icon:home deco-pos:left deco-active deco-color:danger-1">danger-1</span>
<span class="m3-deco icon:home deco-pos:left deco-active deco-color:base-3">base-3</span>
```

### 사용 가능한 색상 옵션

| 색상 그룹 | 옵션 값 | 설명 |
| :--- | :--- | :--- |
| **Main** | `deco-color:main-1|main-2|main-3` | 메인 색상 (밝음/중간/어두움) |
| **Sub** | `deco-color:sub-1|sub-2|sub-3` | 서브 색상 (밝음/중간/어두움) |
| **Accent** | `deco-color:accent-1|accent-2|accent-3` | 강조 색상 (밝음/중간/어두움) |
| **Base** | `deco-color:base-1` ~ `base-10` | 기본 색상 (1=밝음, 10=어두움) |
| **Warning** | `deco-color:warning-1|warning-2|warning-3` | 경고 색상 (밝음/중간/어두움) |
| **Danger** | `deco-color:danger-1|danger-2|danger-3` | 위험 색상 (밝음/중간/어두움) |

:::tip 색상 옵션 참고
`deco-color` 옵션은 `deco-active` 상태에서만 배경색으로 적용됩니다. 아이콘 자체의 색상을 변경하려면 `icon-color:*` 옵션을 사용하세요.
:::

## 7. 아이콘 옵션 사용

`m3-deco`는 `m3-icon`의 모든 옵션을 사용할 수 있습니다. 아이콘의 색상, 크기, 스타일 등을 자유롭게 조절할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <span class="m3-deco icon:home deco-pos:top icon-color:main-1">홈</span>
    <span class="m3-deco icon:home deco-pos:top icon-size:3">홈</span>
    <span class="m3-deco icon:home deco-pos:top icon-filled:1">홈</span>
    <span class="m3-deco icon:home deco-pos:top icon-color:accent-1 icon-size:3">홈</span>
  </div>
</div>

```html
<!-- 아이콘 옵션 사용 -->
<span class="m3-deco icon:home deco-pos:top icon-color:main-1">홈</span>
<span class="m3-deco icon:home deco-pos:top icon-size:3">홈</span>
<span class="m3-deco icon:home deco-pos:top icon-filled:1">홈</span>
<span class="m3-deco icon:home deco-pos:top icon-color:accent-1 icon-size:3">홈</span>
```

:::tip 아이콘 옵션 참고
사용 가능한 모든 아이콘 옵션은 [아이콘 문서](./icon.md)를 참고하세요.
:::

## 9. 반응형 데코

반응형 클래스를 사용하여 화면 크기에 따라 다른 데코 스타일을 적용할 수 있습니다.

```html
<!-- 반응형 위치 -->
<span class="m3-deco icon:home deco-pos:top sm:deco-pos:left md:deco-pos:right">홈</span>

<!-- 반응형 간격 -->
<span class="m3-deco icon:home deco-pos:left deco-gap:0 sm:deco-gap:1 md:deco-gap:2">홈</span>
```

### 반응형 브레이크포인트

| 클래스 접두사 | 최소 너비 | 설명 |
| :--- | :--- | :--- |
| `sm:` | 576px | 작은 화면 (태블릿) |
| `md:` | 768px | 중간 화면 (태블릿 가로) |
| `lg:` | 992px | 큰 화면 (데스크톱) |
| `xl:` | 1200px | 매우 큰 화면 (큰 데스크톱) |

## 10. CSS 변수 커스터마이징

데코의 모든 속성은 CSS 변수로 제어할 수 있습니다.

### 기본 CSS 변수

```css
.m3-deco {
  --deco-gap: var(--space-4); /* 기본 간격 */
  --deco-flex-direction: row; /* 기본 방향 */
  --deco-order: 0; /* 아이콘 순서 */
  --deco-width: auto; /* 너비 */
  --deco-color: var(--color-main-1); /* 활성화 상태 배경색 */
  --deco-font-size: var(--font-size-2); /* 텍스트 크기 (14px) */
}
```

### 커스텀 데코 스타일 예제

```css
/* 특정 데코에 커스텀 스타일 적용 */
.custom-deco {
  --deco-gap: 12px;
  --deco-color: var(--color-accent-1);
  --icon-size: 32px;
  --icon-color: var(--color-main-1);
}

/* 특정 컨텍스트에서 데코 스타일 변경 */
.nav-item .m3-deco {
  --deco-gap: var(--space-2);
  --icon-size: 20px;
}
```

```html
<span class="m3-deco icon:home deco-pos:top custom-deco">홈</span>
```

## 11. 실전 사용방법

### 1. 네비게이션 메뉴

```html
<nav class="d:flex gap:4">
  <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
  <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
  <a href="#" class="m3-deco icon:settings deco-pos:top">설정</a>
</nav>
```

### 2. 버튼 그룹

```html
<div class="d:flex gap:2">
  <button class="m3-btn m3-deco icon:edit deco-pos:left">편집</button>
  <button class="m3-btn m3-deco icon:delete deco-pos:left icon-color:danger-1">삭제</button>
  <button class="m3-btn m3-deco icon:share deco-pos:left">공유</button>
</div>
```

### 3. 리스트 아이템

```html
<ul class="d:flex fd:column gap:2">
  <li class="m3-deco icon:home deco-pos:left">홈으로 가기</li>
  <li class="m3-deco icon:settings deco-pos:left">설정</li>
  <li class="m3-deco icon:help deco-pos:left">도움말</li>
</ul>
```

---

### 추가 참고

- 스타일 커스터마이징 변수는 `css/component/m3/m3-deco.css` 파일에 정의되어 있습니다.
- 아이콘 옵션은 [아이콘 문서](./icon.md)를 참고하세요.
- Google Material Symbols의 모든 아이콘 목록은 [Material Symbols & Icons](https://fonts.google.com/icons)에서 확인할 수 있습니다.

