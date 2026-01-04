# 테마 커스터마이징

NewTil CSS는 CSS 변수를 통해 완전한 커스터마이징을 지원합니다.

## CSS 변수 시스템

모든 스타일 값은 CSS 변수로 정의되어 있어 쉽게 변경할 수 있습니다.

## 기본 설정

CSS 변수는 `:root`에서 정의합니다:

```css
:root {
  /* 간격 시스템 (--scale-* 기반) */
  --space-0: 0px;
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 8px;
  --space-5: 10px;
  --space-6: 12px;
  --space-7: 13px;
  --space-8: 14px;
  --space-10: 16px;
  --space-13: 20px;
  --space-15: 24px;
  --space-19: 32px;
  --space-24: 48px;
  --space-29: 64px;

  /* 색상 시스템 */
  --color-main-1: #8cba35;
  --color-main-2: #6a8e29;
  --color-main-3: #3d5218;
  /* ... */

  /* 폰트 크기 (--size-* 기반) */
  --font-size-1: var(--size-6);  /* 12px */
  --font-size-2: var(--size-8);  /* 14px */
  --font-size-3: var(--size-10); /* 16px */
  --font-size-4: var(--size-12); /* 18px */
  --font-size-5: var(--size-13); /* 20px */
  --font-size-6: var(--size-14); /* 22px */
  --font-size-7: var(--size-15); /* 24px */
}
```

## 컴포넌트 커스터마이징

### 버튼 커스터마이징

```css
:root {
  /* 버튼 사이즈 */
  --btn-height: var(--space-22); /* 40px */
  --btn-padding: 0 var(--space-10); /* 0 16px */
  --btn-font-size: var(--font-size-2); /* 14px */
  --btn-border-radius: 999px;

  /* 버튼 색상 */
  --btn-background-color: var(--color-main-1);
  --btn-background-color-hover: color-mix(in srgb, var(--btn-background-color) 80%, transparent);
  --btn-color: var(--color-base-1);
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
  /* 기본 간격 크기 조정 (--scale-* 값 변경) */
  --scale-3: 4px;   /* --space-3 */
  --scale-4: 8px;  /* --space-4 */
  --scale-6: 12px; /* --space-6 */
  --scale-10: 16px; /* --space-10 (기본 간격) */
  --scale-13: 20px; /* --space-13 */
  --scale-15: 24px; /* --space-15 */
  --scale-19: 32px; /* --space-19 */
  --scale-24: 48px; /* --space-24 */
  --scale-29: 64px; /* --space-29 */
}
```

## 폰트 시스템 커스터마이징

```css
:root {
  /* 폰트 크기 스케일 (--size-* 기반) */
  --font-size-1: var(--size-6);  /* 12px */
  --font-size-2: var(--size-8);  /* 14px */
  --font-size-3: var(--size-10); /* 16px */
  --font-size-4: var(--size-12); /* 18px */
  --font-size-5: var(--size-13); /* 20px */
  --font-size-6: var(--size-14); /* 22px */
  --font-size-7: var(--size-15); /* 24px */
  --font-size-9: var(--size-19); /* 32px */

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
  --color-main-1: #8cba35;
  --color-main-2: #6a8e29;
  --color-main-3: #3d5218;

  /* 간격 */
  --scale-13: 20px; /* --space-13을 20px로 변경 */

  /* 폰트 */
  --font-size-4: var(--size-13); /* 20px로 변경 */

  /* 버튼 */
  --btn-border-radius: 12px; /* 더 둥글게 */
  --btn-height: var(--space-22); /* 40px */
}
```

## 특정 컴포넌트만 커스터마이징

특정 컴포넌트에만 스타일을 적용할 수도 있습니다:

```css
/* 특정 버튼에만 스타일 적용 */
.my-custom-button {
  --btn-height: var(--space-27); /* 52px */
  --btn-background-color: #ff6b6b;
}

/* 사용 */
<button class="m3-btn btn-size:2 my-custom-button">
  커스텀 버튼
</button>
```

## CSS 변수 목록

전체 CSS 변수 목록은 [CSS 변수 목록](./css-variable-list) 페이지에서 확인하실 수 있습니다.

