# CSS 변수 목록

NewTil CSS에서 사용되는 모든 CSS 변수 목록과 커스터마이징 방법을 안내합니다.

## 개요

NewTil CSS는 모든 스타일 값을 CSS 변수로 관리합니다. 이 변수들을 재정의하여 프로젝트에 맞게 커스터마이징할 수 있습니다.

## 주요 변수 카테고리

### 색상 변수

#### 메인 색상 (Main Colors)

```css
:root {
  --color-main-1: #99c842;
  --color-main-2: #85b132;
  --color-main-3: #759d2a;
  
  --rgb-main-1: 153, 200, 66;
  --rgb-main-2: 133, 177, 50;
  --rgb-main-3: 117, 157, 42;
}
```

#### 서브 색상 (Sub Colors)

```css
:root {
  --color-sub-1: #339af0;
  --color-sub-2: #228be6;
  --color-sub-3: #1c7ed6;
  
  --rgb-sub-1: 51, 154, 240;
  --rgb-sub-2: 34, 139, 230;
  --rgb-sub-3: 28, 126, 214;
}
```

#### 강조 색상 (Accent Colors)

```css
:root {
  --color-accent-1: #ff6b6b;
  --color-accent-2: #fa5252;
  --color-accent-3: #f03e3e;
  
  --rgb-accent-1: 255, 107, 107;
  --rgb-accent-2: 250, 82, 82;
  --rgb-accent-3: 240, 62, 62;
}
```

#### 기본 색상 (Base Colors)

```css
:root {
  --color-base-1: #ffffff;
  --color-base-2: #e4e7ea;
  --color-base-3: #dee2e6;
  --color-base-4: #ced4da;
  --color-base-5: #adb5bd;
  --color-base-6: #868e96;
  --color-base-7: #495057;
  --color-base-8: #343a40;
  --color-base-9: #1a1c20;
  --color-base-10: #000000;
}
```

### 간격 변수 (Spacing)

```css
:root {
  --gap-0: 0px;
  --gap-1: 4px;
  --gap-2: 8px;
  --gap-3: 12px;
  --gap-4: 16px;
  --gap-5: 20px;
  --gap-6: 24px;
  --gap-7: 28px;
  --gap-8: 32px;
  --gap-9: 36px;
  --gap-10: 40px;
}
```

### 크기 변수 (Sizing)

#### 너비 (Width)

```css
:root {
  --width-0: 0px;
  --width-1: 50px;
  --width-2: 100px;
  --width-3: 150px;
  --width-4: 200px;
  --width-5: 250px;
  /* ... */
}
```

#### 높이 (Height)

```css
:root {
  --height-0: 0px;
  --height-1: 50px;
  --height-2: 100px;
  --height-3: 150px;
  /* ... */
}
```

### 폰트 변수

#### 폰트 크기 (Font Size)

```css
:root {
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 22px;
  --font-size-7: 24px;
  --font-size-8: 26px;
  --font-size-9: 32px;
  --font-size-10: 40px;
  --font-size-11: 48px;
  --font-size-12: 52px;
}
```

#### 폰트 두께 (Font Weight)

```css
:root {
  --font-weight-1: 400;
  --font-weight-2: 500;
  --font-weight-3: 700;
}
```

### 테두리 변수

#### 테두리 반경 (Border Radius)

```css
:root {
  --border-radius-0: 0;
  --border-radius-1: 4px;
  --border-radius-2: 8px;
  --border-radius-3: 12px;
  --border-radius-4: 16px;
  --border-radius-full: 9999px;
}
```

#### 테두리 너비 (Border Width)

```css
:root {
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-3: 3px;
}
```

### 그림자 변수 (Box Shadow)

```css
:root {
  --box-shadow-1: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05);
  --box-shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
  --box-shadow-3: 0px 3px 4px 0px rgba(0, 0, 0, 0.08);
  /* ... */
  --box-shadow-7: 0px 20px 40px -9px rgba(0, 0, 0, 0.17);
}
```

### Z-Index 변수

```css
:root {
  --z-index-1: 1;
  --z-index-2: 200;
  --z-index-3: 500;
  --z-index-4: 1000;
  --z-index-5: 2000;
}
```

### 불투명도 변수 (Opacity)

```css
:root {
  --opacity-0: 0;
  --opacity-1: 0.1;
  --opacity-2: 0.18;
  --opacity-3: 0.3;
  --opacity-4: 0.45;
  --opacity-5: 0.5;
  --opacity-6: 0.57;
  --opacity-7: 0.7;
  --opacity-8: 0.8;
  --opacity-9: 0.9;
  --opacity-10: 1;
}
```

## 컴포넌트별 변수

각 컴포넌트는 자신만의 CSS 변수를 가지고 있습니다. 자세한 내용은 각 컴포넌트 문서를 참조하세요.

### 버튼 변수 예시

```css
.m3-btn {
  /* 사이즈 */
  --btn-height: var(--space-22); /* 40px */
  --btn-padding: 0 var(--space-10); /* 0 16px */
  --btn-font-size: var(--font-size-2); /* 14px */
  
  /* 색상 */
  --btn-background-color: var(--color-main-1);
  --btn-color: var(--color-base-1);
}
```

## 커스터마이징 방법

모든 변수는 `:root`에서 재정의할 수 있습니다:

```css
:root {
  /* 메인 색상 변경 */
  --color-main-1: #3182ce;
  
  /* 간격 조정 */
  --scale-13: 20px; /* --space-13을 20px로 */
  
  /* 폰트 크기 변경 */
  --font-size-4: var(--size-13); /* 20px */
}
```
```

더 자세한 내용은 [테마 커스터마이징 가이드](./customizing)를 참조하세요.

