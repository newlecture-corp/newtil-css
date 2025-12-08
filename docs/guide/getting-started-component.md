# 컴포넌트 시작하기

NewTil CSS의 컴포넌트 사용법을 배워보세요.

## 컴포넌트란?

NewTil CSS의 컴포넌트는 재사용 가능한 UI 요소입니다. `n-` 접두사를 사용하여 다른 CSS 프레임워크와의 충돌을 방지합니다.

## 기본 사용법

모든 컴포넌트는 기본 클래스를 적용하면 사용할 수 있습니다.

### 버튼 컴포넌트

```html
<button class="n-btn">버튼</button>
```

### 리스트 컴포넌트

```html
<ul class="n-list">
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ul>
```

## 컴포넌트 변형 (Variants)

대부분의 컴포넌트는 다양한 변형을 지원합니다.

### 버튼 타입

```html
<!-- Filled 버튼 (기본) -->
<button class="n-btn">Filled</button>

<!-- Outline 버튼 -->
<button class="n-btn n-btn:outline">Outline</button>

<!-- Void 버튼 -->
<button class="n-btn n-btn:void">Void</button>
```

### 버튼 사이즈

```html
<button class="n-btn btn-size:1">Small</button>
<button class="n-btn btn-size:2">Medium</button>
<button class="n-btn btn-size:3">Large</button>
```

### 버튼 색상

```html
<button class="n-btn btn-color:main">Main</button>
<button class="n-btn btn-color:sub">Sub</button>
<button class="n-btn btn-color:accent">Accent</button>
<button class="n-btn btn-color:base">Base</button>
```

## 컴포넌트 조합

여러 클래스를 조합하여 원하는 스타일을 만들 수 있습니다.

```html
<button class="n-btn btn-size:3 btn-color:main n-btn:outline">
  큰 아웃라인 메인 버튼
</button>
```

## 커스터마이징

컴포넌트 스타일은 CSS 변수를 통해 커스터마이징할 수 있습니다.

```css
:root {
  /* 버튼 높이 조정 */
  --btn-height-2: 40px;
  
  /* 버튼 색상 변경 */
  --btn-filled-background-color-default: #3182ce;
  --btn-filled-color: #ffffff;
}
```

더 자세한 커스터마이징 방법은 [테마 커스터마이징](./customizing)을 참조하세요.

## 사용 가능한 컴포넌트

- [Button](/components/button) - 버튼 컴포넌트

다른 컴포넌트 문서는 작성 중입니다. 문서가 추가되면 이 섹션에 링크를 갱신하겠습니다.

버튼 사용 예시는 [컴포넌트 문서](/components/button)에서 확인하실 수 있습니다.

