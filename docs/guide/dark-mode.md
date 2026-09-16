# 다크모드

다크모드는 `@newtil/design-tokens` 가 제공하고, 유틸리티 클래스는 토큰만 참조하므로 클래스 쪽에 다크 대응이 따로 없습니다.

## 작동 방식

1. **시스템 자동** — `@media (prefers-color-scheme: dark)` 가 토큰에 내장되어 있어 OS/브라우저가 다크면 자동 적용됩니다.
2. **수동 강제** — `<html>` 에 `data-theme` 을 붙이면 시스템 설정을 무시합니다.

```html
<html data-theme="dark">   <!-- 다크 강제 -->
<html data-theme="light">  <!-- 라이트 강제 -->
<html>                      <!-- 시스템 따름 (기본) -->
```

토큰의 셀렉터는 다음과 같습니다.

```css
/* 라이트 */
:root, [data-theme="light"] { --color-surface: …; }

/* 다크 — 시스템 */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { --color-surface: …; }
}

/* 다크 — 수동 강제. 토큰 배포본(dist/tokens.css)에만 있다 */
[data-theme="dark"] { --color-surface: …; }
```

`@newtil/css` 전개본과 JIT 출력 모두 토큰 배포본(`dist/tokens.css`)을 포함하므로 세 가지가 모두 동작합니다(JIT 는 0.6.2 부터).

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

다크모드에서 바뀌는 것은 **semantic 색상의 팔레트 매핑**뿐입니다.

```css
/* Light */
:root, [data-theme="light"] {
  --color-surface: var(--_hue-white);
  --color-text: var(--_hue-gray-900);
}

/* Dark */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-surface: var(--_hue-gray-950);
    --color-text: var(--_hue-gray-100);
  }
}
```

- Primitive `--_hue-*` 는 다크에서도 불변 (팔레트 자체는 안 바뀜)
- Semantic `--color-*` 만 재정의 (역할 ↔ 팔레트 매핑만 바뀜)
- 유틸리티는 semantic 만 참조 → 다크모드를 인지할 필요가 없음

## 커스텀 다크 색상

라이트와 다크를 각각 덮어씁니다. 다크 블록은 특이성이 `:root:not(…)` 이므로 `:root { }` 한 줄로는 지지 않습니다.

```css
:root, [data-theme="light"] {
  --color-primary: #ff9800;
  --color-primary-hover: #ffa726;
  --color-on-primary: #000000;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-primary: #ffb74d;
    --color-primary-hover: #ffcc80;
  }
}
[data-theme="dark"] {
  --color-primary: #ffb74d;
  --color-primary-hover: #ffcc80;
}
```
