# 테마 커스터마이징

NewTil CSS는 CSS 변수를 통해 완전한 커스터마이징을 지원합니다.

## CSS 변수 시스템

모든 스타일 값은 CSS 변수로 정의되어 있어 쉽게 변경할 수 있습니다.

## 기본 설정

CSS 변수는 `:root`에서 정의합니다:

```css
:root {
  /* 간격 시스템 */
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  /* 색상 시스템 */
  --color-main-1: #4a5568;
  --color-main-2: #3182ce;
  --color-main-3: #2c5282;
  /* ... */

  /* 폰트 크기 */
  --font-size-base: 16px;
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 24px;
}
```

## 컴포넌트 커스터마이징

### 버튼 커스터마이징

```css
:root {
  /* 버튼 사이즈 */
  --btn-height-2: 36px;
  --btn-padding-2: 4px 16px;
  --btn-font-size-2: 14px;
  --btn-border-radius-2: 8px;

  /* 버튼 색상 */
  --btn-filled-background-color-default: var(--color-main-2);
  --btn-filled-background-color-hover: var(--color-main-1);
  --btn-filled-color: var(--color-base-1);
}
```

### 리스트 커스터마이징

```css
:root {
  /* 리스트 간격 */
  --list-gap: 16px;
  --list-item-padding: 24px;
  --list-item-border-radius: 16px;
}
```

## 색상 테마 변경

프로젝트의 브랜드 색상에 맞게 변경할 수 있습니다:

```css
:root {
  /* 메인 색상 변경 */
  --color-main-1: #your-color-1;
  --color-main-2: #your-color-2;
  --color-main-3: #your-color-3;

  /* 서브 색상 변경 */
  --color-sub-1: #your-sub-color-1;
  --color-sub-2: #your-sub-color-2;
  --color-sub-3: #your-sub-color-3;
}
```

## 간격 시스템 커스터마이징

간격 시스템을 프로젝트에 맞게 조정할 수 있습니다:

```css
:root {
  /* 기본 간격 크기 조정 */
  --space-1: 4px;   /* 작은 간격 */
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;  /* 기본 간격 */
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;  /* 큰 간격 */
}
```

## 폰트 시스템 커스터마이징

```css
:root {
  /* 기본 폰트 크기 */
  --font-size-base: 16px;

  /* 폰트 크기 스케일 */
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 24px;
  --font-size-7: 28px;
  --font-size-8: 32px;

  /* 폰트 패밀리 */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'Fira Code', 'Consolas', monospace;
}
```

## 전체 테마 예제

완전한 커스터마이징 예제:

```css
:root {
  /* 색상 테마 */
  --color-main-1: #4a5568;
  --color-main-2: #3182ce;
  --color-main-3: #2c5282;

  /* 간격 */
  --space-4: 20px; /* 기본 16px에서 20px로 변경 */

  /* 폰트 */
  --font-size-base: 18px;

  /* 버튼 */
  --btn-border-radius-2: 12px; /* 더 둥글게 */
  --btn-height-2: 40px; /* 더 높게 */
}
```

## 특정 컴포넌트만 커스터마이징

특정 컴포넌트에만 스타일을 적용할 수도 있습니다:

```css
/* 특정 버튼에만 스타일 적용 */
.my-custom-button {
  --btn-height-2: 48px;
  --btn-filled-background-color-default: #ff6b6b;
}

/* 사용 */
<button class="n-btn btn-size:2 my-custom-button">
  커스텀 버튼
</button>
```

## CSS 변수 목록

전체 CSS 변수 목록은 [CSS 변수 목록](./css-variable-list) 페이지에서 확인하실 수 있습니다.

