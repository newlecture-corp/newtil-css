# 다크모드

newtil-css는 다크모드를 **기본 지원**합니다. 별도 CSS 파일 로드나 설정 불필요.

## 작동 방식

1. **시스템 자동** — `@media (prefers-color-scheme: dark)` 가 CSS에 내장되어 있어, 사용자 OS/브라우저가 다크모드이면 자동 적용됩니다.

2. **수동 토글** — `<html>` 태그에 `data-theme` 속성을 추가하면 시스템 설정을 무시하고 강제 적용합니다.

```html
<html data-theme="dark">   <!-- 다크 강제 -->
<html data-theme="light">  <!-- 라이트 강제 -->
<html>                      <!-- 시스템 따름 (기본) -->
```

## JavaScript 토글 예시

```js
function setTheme(mode) {
  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', mode);
  }
}
```

## 원리

다크모드에서 바뀌는 것은 **semantic 색상의 hue 매핑**뿐입니다.

```css
/* Light */
:root {
  --color-surface: #ffffff;
  --color-text: var(--_hue-gray-900);
}

/* Dark */
[data-theme="dark"] {
  --color-surface: var(--_hue-gray-950);
  --color-text: var(--_hue-gray-100);
}
```

- **Primitive `--_hue-*` 는 다크모드에서도 불변** (팔레트 자체는 안 바뀜)
- **Semantic `--color-*` 만 재정의** (역할 ↔ 팔레트 매핑만 바뀜)
- 컴포넌트와 utility는 semantic만 참조 → **다크모드 인지 불필요**. 자동 적용.

## 커스텀 다크 색상

```css
/* 내 브랜드의 다크모드 색상 재정의 */
[data-theme="dark"] {
  --color-primary: #ff9800;
  --color-primary-hover: #ffa726;
  --color-on-primary: #000000;
}
```
