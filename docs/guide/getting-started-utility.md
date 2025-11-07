# 유틸리티 시작하기

NewTil CSS의 유틸리티 클래스 사용법을 배워보세요.

## 유틸리티 클래스란?

유틸리티 클래스는 단일 CSS 속성을 제어하는 클래스입니다. 컴포넌트의 세부 조정이나 레이아웃 구성을 위해 사용합니다.

## 명명 규칙

NewTil CSS의 유틸리티 클래스는 다음 패턴을 따릅니다:

```
.{property}:{value}
```

예시:
- `d:flex` - `display: flex`
- `p:4` - `padding: 16px` (간격 4)
- `m:2` - `margin: 8px` (간격 2)
- `gap:3` - `gap: 12px` (간격 3)

## 기본 사용법

### Display

```html
<div class="d:flex">Flex 컨테이너</div>
<div class="d:grid">Grid 컨테이너</div>
<div class="d:block">Block 요소</div>
<div class="d:inline">Inline 요소</div>
<div class="d:none">숨김</div>
```

### 간격 (Spacing)

#### Padding

```html
<div class="p:4">모든 방향 패딩</div>
<div class="px:4">좌우 패딩</div>
<div class="py:4">상하 패딩</div>
<div class="pt:4">위쪽 패딩</div>
<div class="pr:4">오른쪽 패딩</div>
<div class="pb:4">아래쪽 패딩</div>
<div class="pl:4">왼쪽 패딩</div>
```

#### Margin

```html
<div class="m:4">모든 방향 마진</div>
<div class="mx:4">좌우 마진</div>
<div class="my:4">상하 마진</div>
<div class="mt:4">위쪽 마진</div>
<div class="mr:4">오른쪽 마진</div>
<div class="mb:4">아래쪽 마진</div>
<div class="ml:4">왼쪽 마진</div>
```

### Flexbox

```html
<div class="d:flex flex-direction:column gap:2">
  <div>항목 1</div>
  <div>항목 2</div>
</div>

<div class="d:flex justify-content:center align-items:center">
  <div>중앙 정렬</div>
</div>
```

### Grid

```html
<div class="d:grid grid-template-columns:3 gap:4">
  <div>컬럼 1</div>
  <div>컬럼 2</div>
  <div>컬럼 3</div>
</div>
```

### 색상

```html
<div class="color:main-6">메인 색상 텍스트</div>
<div class="bg-color:base-9">배경 색상</div>
```

### 크기

```html
<div class="w:100p">100% 너비</div>
<div class="h:50vh">50vh 높이</div>
<div class="w:4 h:4">간격 4 크기 (16px x 16px)</div>
```

## 반응형 유틸리티

모바일 우선 접근 방식을 사용합니다. 접두사를 추가하여 특정 브레이크포인트에서만 적용됩니다.

```html
<!-- 기본: 숨김, 640px 이상: 표시 -->
<div class="d:none sm:d:block">작은 화면에서 숨김</div>

<!-- 기본: 세로, 태블릿 이상: 가로 -->
<div class="flex-direction:column md:flex-direction:row">
  레이아웃
</div>
```

### 브레이크포인트

- `sm:` - 640px 이상
- `md:` - 768px 이상
- `lg:` - 1024px 이상
- `xl:` - 1280px 이상

## 유틸리티 조합

여러 유틸리티 클래스를 조합하여 사용할 수 있습니다.

```html
<div class="d:flex justify-content:space-between align-items:center p:4 m:2 bg-color:base-9 bd-radius:2">
  조합 예제
</div>
```

## 컴포넌트와 함께 사용

컴포넌트에 유틸리티 클래스를 추가하여 세부 조정을 할 수 있습니다.

```html
<button class="n-btn btn-size:2 btn-color:main m:4 p:6">
  버튼
</button>

<ul class="n-list gap:2 p:4">
  <li>항목 1</li>
  <li>항목 2</li>
</ul>
```

## 사용 가능한 유틸리티

### 레이아웃
- [Display](/utility/display)
- [Position](/utility/position/position)
- [Float](/utility/float)
- [Flexbox](/utility/flex/flex)
- [Grid](/utility/grid/grid-template-columns)

### 간격
- [Padding](/utility/padding/padding)
- [Margin](/utility/margin/margin)
- [Gap](/utility/gap/gap)

### 크기
- [Width](/utility/width/width)
- [Height](/utility/height/height)

### 시각적 스타일
- [Color](/utility/color)
- [Background](/utility/background/background-color)
- [Border](/utility/border/border)
- [Box Shadow](/utility/box-shadow)
- [Opacity](/utility/opacity)

### 텍스트
- [Font](/utility/font/font-size)
- [Text](/utility/text/text-align)
- [Line Height](/utility/line-height)

전체 유틸리티 목록은 [유틸리티 문서](/utility/display)에서 확인하실 수 있습니다.

