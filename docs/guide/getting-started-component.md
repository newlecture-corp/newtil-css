# 컴포넌트 시작하기

NewTil CSS의 컴포넌트 사용법을 배워보세요.

## 컴포넌트란?

NewTil CSS의 컴포넌트는 재사용 가능한 UI 요소입니다. `m3-` 접두사를 사용하여 다른 CSS 프레임워크와의 충돌을 방지합니다.

## 기본 사용법

모든 컴포넌트는 기본 클래스를 적용하면 사용할 수 있습니다.

### 버튼 컴포넌트

```html
<button class="m3-btn">버튼</button>
```

## 컴포넌트 변형 (Variants)

대부분의 컴포넌트는 다양한 변형을 지원합니다.

### 버튼 타입

```html
<!-- Filled 버튼 (기본) -->
<button class="m3-btn">Filled</button>

<!-- Outline 버튼 -->
<button class="m3-btn btn:outlined">Outline</button>

<!-- Text 버튼 -->
<button class="m3-btn btn:text">Text</button>
```

### 버튼 사이즈

```html
<button class="m3-btn btn-size:1">Size 1</button>
<button class="m3-btn btn-size:2">Size 2</button>
<button class="m3-btn btn-size:3">Size 3</button>
<button class="m3-btn btn-size:4">Size 4</button>
<button class="m3-btn btn-size:5">Size 5</button>
```

### 버튼 색상

```html
<button class="m3-btn btn-color:main-1">Main-1</button>
<button class="m3-btn btn-color:main-2">Main-2</button>
<button class="m3-btn btn-color:sub-1">Sub-1</button>
<button class="m3-btn btn-color:accent-1">Accent-1</button>
```

## 컴포넌트 조합

여러 클래스를 조합하여 원하는 스타일을 만들 수 있습니다.

```html
<button class="m3-btn btn-size:3 btn-color:main-1 btn:outlined">
  큰 아웃라인 메인 버튼
</button>
```

## 커스터마이징

컴포넌트 스타일은 CSS 변수를 통해 커스터마이징할 수 있습니다.

```css
:root {
  /* 버튼 높이 조정 */
  --btn-height: var(--space-22); /* 40px */
  
  /* 버튼 색상 변경 */
  --btn-background-color: var(--color-main-1);
  --btn-color: var(--color-base-1);
}
```

더 자세한 커스터마이징 방법은 [테마 커스터마이징](./customizing)을 참조하세요.

## 사용 가능한 컴포넌트

- [Button](/components/button) - 버튼 컴포넌트

다른 컴포넌트 문서는 작성 중입니다. 문서가 추가되면 이 섹션에 링크를 갱신하겠습니다.

버튼 사용 예시는 [컴포넌트 문서](/components/button)에서 확인하실 수 있습니다.

