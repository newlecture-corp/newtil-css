<script setup>
</script>

# 버튼 (Button)

`m3-btn` 컴포넌트는 프로젝트 전역에서 일관된 버튼 UI를 제공하기 위한 기본 컴포넌트입니다. 다양한 타입, 색상, 크기, 모양 옵션을 통해 유연하게 커스터마이징할 수 있습니다.

## 1. 기본 사용법

버튼을 사용하려면 `m3-btn` 클래스를 사용합니다.

```html
<button class="m3-btn btn-옵션명:값">버튼 텍스트</button>
```

**기본 버튼 사용방법**

<button class="m3-btn">버튼</button>

```html
<button class="m3-btn">버튼</button>
```

### 2. 주요 옵션:

- `btn:filled|elevated|tonal|outlined|text` - 버튼 타입 설정
- `btn-size:1|2|3|4|5` - 버튼 크기 조절
- `btn-color:*` - 버튼 색상 설정
- `btn-shape:round|square|sharp` - 버튼 모양 설정
- `btn-state:enabled|disabled|hover|focus|active` - 버튼 상태 설정

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <button class="m3-btn btn:filled">Filled</button>
    <button class="m3-btn btn:elevated">Elevated</button>
    <button class="m3-btn btn:tonal">Tonal</button>
    <button class="m3-btn btn:outlined">Outlined</button>
    <button class="m3-btn btn:text">Text</button>
    <button class="m3-btn btn-size:3">크기 3</button>
    <button class="m3-btn btn-color:accent-1">Accent</button>
  </div>
</div>

```html
<!-- 버튼의 다양한 옵션 사용 -->
<button class="m3-btn btn:filled">Filled</button>
<button class="m3-btn btn:elevated">Elevated</button>
<button class="m3-btn btn:tonal">Tonal</button>
<button class="m3-btn btn:outlined">Outlined</button>
<button class="m3-btn btn:text">Text</button>
<button class="m3-btn btn-size:3">크기 3</button>
<button class="m3-btn btn-color:accent-1">Accent</button>
```

## 2. 버튼 타입 (Type)

`btn:*` 클래스를 사용하여 버튼의 타입을 설정할 수 있습니다. 기본값은 `btn:filled`입니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn:filled">Filled</button>
      <small class="color:accent-2 fw:bold">filled (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn:elevated">Elevated</button>
      <small>elevated</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn:tonal">Tonal</button>
      <small>tonal</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn:outlined">Outlined</button>
      <small>outlined</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn:text">Text</button>
      <small>text</small>
    </div>
  </div>
</div>

```html
<!-- 버튼 타입 설정 -->
<button class="m3-btn btn:filled">Filled</button>
<button class="m3-btn btn:elevated">Elevated</button>
<button class="m3-btn btn:tonal">Tonal</button>
<button class="m3-btn btn:outlined">Outlined</button>
<button class="m3-btn btn:text">Text</button>
```

### 버튼 타입 설명

| 타입 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Filled | `btn:filled` | 배경색이 채워진 버튼 (기본값) |
| Elevated | `btn:elevated` | 그림자가 있는 버튼 |
| Tonal | `btn:tonal` | 반투명 배경의 버튼 |
| Outlined | `btn:outlined` | 테두리만 있는 버튼 |
| Text | `btn:text` | 텍스트만 있는 버튼 |

## 3. 크기 옵션 (Size)

`btn-size:*` 클래스를 사용하여 버튼의 크기를 조절할 수 있습니다. 크기 옵션은 높이, 패딩, 폰트 크기를 함께 조절합니다. <br/>
<span class="color:accent-1 fw:bold">이 색상</span>으로 표시된 크기는 기본 크기를 의미합니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-size:1">Size 1</button>
      <small>1 (32px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-size:2">Size 2</button>
      <small class="color:accent-2 fw:bold">2 (40px, 기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-size:3">Size 3</button>
      <small>3 (56px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-size:4">Size 4</button>
      <small>4 (64px)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-size:5">Size 5</button>
      <small>5 (70px)</small>
    </div>
  </div>
</div>

```html
<!-- 크기 옵션 -->
<button class="m3-btn btn-size:1">Size 1</button>
<button class="m3-btn btn-size:2">Size 2</button>
<button class="m3-btn btn-size:3">Size 3</button>
<button class="m3-btn btn-size:4">Size 4</button>
<button class="m3-btn btn-size:5">Size 5</button>
```

### 크기 옵션 값

| 값 | 높이 | 패딩 | 폰트 크기 | 설명 |
| :--- | :--- | :--- | :--- | :--- |
| `btn-size:1` | 32px | 12px | 14px | 작은 크기 (xs) |
| `btn-size:2` | 40px | 16px | 14px | 기본 크기 (sm) |
| `btn-size:3` | 56px | 24px | 16px | 중간 크기 (md) |
| `btn-size:4` | 64px | 48px | 24px | 큰 크기 (lg) |
| `btn-size:5` | 70px | 64px | 32px | 매우 큰 크기 (xl) |

## 4. 색상 옵션 (Color)

`btn-color:*` 클래스를 통해 프로젝트에서 정의한 색상 팔레트를 손쉽게 재사용할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:3 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-color:main-1">main-1</button>
      <small>main-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-color:main-2">main-2</button>
      <small>main-2</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-color:accent-1">accent-1</button>
      <small>accent-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-color:warning-1">warning-1</button>
      <small>warning-1</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-color:danger-1">danger-1</button>
      <small>danger-1</small>
    </div>
  </div>
</div>

```html
<!-- 색상 옵션 적용 -->
<button class="m3-btn btn-color:main-1">main-1</button>
<button class="m3-btn btn-color:main-2">main-2</button>
<button class="m3-btn btn-color:accent-1">accent-1</button>
<button class="m3-btn btn-color:warning-1">warning-1</button>
<button class="m3-btn btn-color:danger-1">danger-1</button>
```

### 색상 팔레트 요약

| 계열 | 옵션 값 | 설명 |
| :--- | :--- | :--- |
| **Main** | `btn-color:main-1|main-2|main-3` | 메인 색상 (밝음/중간/어두움) |
| **Sub** | `btn-color:sub-1|sub-2|sub-3` | 서브 색상 (밝음/중간/어두움) |
| **Accent** | `btn-color:accent-1|accent-2|accent-3` | 강조 색상 (밝음/중간/어두움) |
| **Base** | `btn-color:base-1` ~ `base-10` | 기본 색상 팔레트 (1=밝음, 10=어두움) |
| **Success** | `btn-color:success-1|success-2|success-3` | 성공 색상 (밝음/중간/어두움) |
| **Warning** | `btn-color:warning-1|warning-2|warning-3` | 경고 색상 (밝음/중간/어두움) |
| **Danger** | `btn-color:danger-1|danger-2|danger-3` | 위험 색상 (밝음/중간/어두움) |

### 다크 모드 지원

버튼 색상은 다크 모드를 자동으로 지원합니다. 기본적으로 라이트 모드와 다크 모드에서 적절한 색상이 자동으로 적용됩니다.

## 5. 모양 옵션 (Shape)

`btn-shape:*` 클래스를 사용하여 버튼의 모서리 모양을 설정할 수 있습니다. 기본값은 `btn-shape:round`입니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-shape:round">Round</button>
      <small class="color:accent-2 fw:bold">round (기본값)</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-shape:square">Square</button>
      <small>square</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-shape:sharp">Sharp</button>
      <small>sharp</small>
    </div>
  </div>
</div>

```html
<!-- 모양 옵션 -->
<button class="m3-btn btn-shape:round">Round</button>
<button class="m3-btn btn-shape:square">Square</button>
<button class="m3-btn btn-shape:sharp">Sharp</button>
```

### 모양 옵션 설명

| 모양 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Round | `btn-shape:round` | 둥근 모서리 (기본값) |
| Square | `btn-shape:square` | 사각형 모서리 |
| Sharp | `btn-shape:sharp` | 날카로운 모서리 |

## 6. 상태 옵션 (State)

`btn-state:*` 클래스를 사용하여 버튼의 상태를 시각적으로 표현할 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-state:enabled">Enabled</button>
      <small>enabled</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-state:disabled">Disabled</button>
      <small>disabled</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-state:hover">Hover</button>
      <small>hover</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-state:focus">Focus</button>
      <small>focus</small>
    </div>
    <div class="d:flex fd:column gap:2 ai:center">
      <button class="m3-btn btn-state:active">Active</button>
      <small>active</small>
    </div>
  </div>
</div>

```html
<!-- 상태 옵션 -->
<button class="m3-btn btn-state:enabled">Enabled</button>
<button class="m3-btn btn-state:disabled">Disabled</button>
<button class="m3-btn btn-state:hover">Hover</button>
<button class="m3-btn btn-state:focus">Focus</button>
<button class="m3-btn btn-state:active">Active</button>
```

### 상태 옵션 설명

| 상태 | 클래스 | 설명 |
| :--- | :--- | :--- |
| Enabled | `btn-state:enabled` | 활성화된 상태 (기본값) |
| Disabled | `btn-state:disabled` | 비활성화된 상태 |
| Hover | `btn-state:hover` | 호버 상태 |
| Focus | `btn-state:focus` | 포커스 상태 |
| Active | `btn-state:active` | 눌린 상태 (Pressed) |

## 7. 아이콘과 함께 사용

`m3-btn`은 `m3-icon` 및 `m3-deco`와 함께 사용하여 아이콘 버튼을 만들 수 있습니다.

<div class="vp-doc">
  <div class="d:flex gap:4 wrap ai:center">
    <button class="m3-btn m3-icon icon:home btn-size:1">홈</button>
    <button class="m3-btn m3-icon icon:star btn-size:2 btn-color:danger-1">즐겨찾기</button>
    <button class="m3-btn m3-icon icon:search btn-size:3 btn-color:sub-1">검색</button>
    <button class="m3-btn m3-deco icon:settings deco-pos:right">설정</button>
    <button class="m3-btn m3-deco icon:favorite deco-pos:left">좋아요</button>    
  </div>
</div>

```html
<!-- 아이콘과 함께 사용 -->
<button class="m3-btn m3-icon icon:home btn-size:1">홈</button>
<button class="m3-btn m3-icon icon:star btn-size:2 btn-color:danger-1">즐겨찾기</button>
<button class="m3-btn m3-icon icon:search btn-size:3 btn-color:sub-1">검색</button>
<button class="m3-btn m3-deco icon:settings deco-pos:right">설정</button>
<button class="m3-btn m3-deco icon:favorite deco-pos:left">좋아요</button>
```

:::tip 아이콘 옵션 참고
사용 가능한 모든 아이콘 옵션은 [아이콘 문서](./icon.md)를 참고하세요.
데코 옵션은 [데코 문서](./deco.md)를 참고하세요.
:::

## 8. 반응형 버튼

반응형 클래스를 사용하여 화면 크기에 따라 다른 버튼 스타일을 적용할 수 있습니다.

<!-- 반응형 크기 -->
<button class="m3-btn btn-size:1 sm:btn-size:2 md:btn-size:3">반응형 버튼</button>

<!-- 반응형 색상 -->
<button class="m3-btn btn-color:main-1 sm:btn-color:accent-1 md:btn-color:danger-1">반응형 색상</button>

```html
<!-- 반응형 크기 -->
<button class="m3-btn btn-size:1 sm:btn-size:2 md:btn-size:3">반응형 버튼</button>

<!-- 반응형 색상 -->
<button class="m3-btn btn-color:main-1 sm:btn-color:accent-1 md:btn-color:danger-1">반응형 색상</button>
```

### 반응형 브레이크포인트

| 클래스 접두사 | 최소 너비 | 설명 |
| :--- | :--- | :--- |
| `sm:` | 576px | 작은 화면 (태블릿) |
| `md:` | 768px | 중간 화면 (태블릿 가로) |
| `lg:` | 992px | 큰 화면 (데스크톱) |
| `xl:` | 1200px | 매우 큰 화면 (큰 데스크톱) |

## 9. CSS 변수 커스터마이징

버튼의 모든 속성은 CSS 변수로 제어할 수 있습니다.

### 기본 CSS 변수

```css
.m3-btn {
  --btn-font-size: var(--font-size-2); /* 기본 폰트 크기 */
  --btn-font-weight: var(--font-weight-medium); /* 기본 폰트 두께 */
  --btn-height: var(--space-22); /* 기본 높이 (40px) */
  --btn-padding: 0 var(--space-10); /* 기본 패딩 */
  --btn-background-color: var(--color-main-1); /* 기본 배경색 */
  --btn-color: var(--color-base-1); /* 기본 텍스트 색상 */
  --btn-border-radius: 999px; /* 기본 모서리 둥글기 */
}
```

### 커스텀 버튼 스타일 예제

```css
/* 특정 버튼에 커스텀 스타일 적용 */
.btn\:my {
  --btn-height: 48px;
  --btn-padding: 0 24px;
  --btn-background-color: var(--color-accent-1);
  --btn-color: var(--color-base-1);
}

/* 특정 컨텍스트에서 버튼 스타일 변경 */
.m3-btn {
  --btn-height: 32px;
  --btn-padding: 0 12px;
}
```

```html
<button class="m3-btn custom-btn">커스텀 버튼</button>
```

## 10. 실전 사용방법

### 1. 버튼 그룹

```html
<div class="d:flex gap:2">
  <button class="m3-btn btn-color:main-1">확인</button>
  <button class="m3-btn btn:outlined">취소</button>
</div>
```

### 2. 아이콘 버튼 그룹

```html
<div class="d:flex gap:2">
  <button class="m3-btn m3-deco icon:edit deco-pos:left">편집</button>
  <button class="m3-btn m3-deco icon:delete deco-pos:left btn-color:danger-1">삭제</button>
  <button class="m3-btn m3-deco icon:share deco-pos:left">공유</button>
</div>
```

### 3. 다양한 타입 조합

```html
<!-- 크기와 색상 조합 -->
<button class="m3-btn btn-size:3 btn-color:accent-1">큰 강조 버튼</button>

<!-- 타입과 모양 조합 -->
<button class="m3-btn btn:outlined btn-shape:square">사각형 테두리 버튼</button>

<!-- 아이콘과 크기 조합 -->
<button class="m3-btn m3-deco icon:home deco-pos:left btn-size:3">큰 홈 버튼</button>
```

---

### 추가 참고

- 스타일 커스터마이징 변수는 `css/component/m3/m3-btn.css` 파일에 정의되어 있습니다.
- 버튼에 적용되는 글로벌 색상 값은 `css/util/variables.css`에서 확인할 수 있습니다.
- 디자인 시스템 전반의 규칙과 함께 사용할 때 가장 큰 효과를 얻습니다.

