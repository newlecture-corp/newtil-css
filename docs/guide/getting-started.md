# 시작하기

## 설치

```bash
npm install @newtil/css
```

`@newtil/design-tokens` 는 의존성으로 함께 설치됩니다.

## 사용 방법

### 방법 1: CSS 에서 import (권장)

앱의 CSS 진입점에 한 줄을 둡니다. 개발 중에는 전개본(약 12MB)이 그대로 들어오고, 운영 빌드에서는 [JIT 플러그인](/guide/jit-setup)이 이 줄을 실제로 쓴 클래스만으로 바꿔칩니다.

```css
/* globals.css */
@import "@newtil/css";
```

JS 에서 임포트해도 같습니다.

```js
import "@newtil/css";
```

### 방법 2: 일부만 가져오기

패키지가 내보내는 경로는 다음 넷뿐입니다.

| 경로 | 내용 |
|---|---|
| `@newtil/css` (= `@newtil/css/style.css`) | 리셋 + design-tokens + 유틸리티 전체 |
| `@newtil/css/utils.css` | 유틸리티 클래스만 (토큰은 별도 로드) |
| `@newtil/css/reset.css` | 리셋만 (`m3-`/`n-` 컴포넌트 안과 `body.reset` 에만 적용) |
| `@newtil/css/jit/*` | JIT 플러그인·CLI ([JIT 설정](/guide/jit-setup)) |

```css
@import "@newtil/design-tokens";
@import "@newtil/css/utils.css";
```

### 방법 3: HTML 직접 링크 / CDN

번들러 없이 쓸 때는 전개본 파일을 직접 링크합니다. 12MB 이므로 시연·학습용에만 권합니다.

```html
<link rel="stylesheet" href="node_modules/@newtil/css/dist/style.css">
<!-- 또는 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@newtil/css@latest/dist/style.css">
```

### Next.js

`app/globals.css` 에 `@import "@newtil/css";` 를 두고, 운영 최적화는 `postcss.config.js` 에 JIT 플러그인을 등록합니다. 설정 예시는 [JIT 설정](/guide/jit-setup#postcss-next-js-webpack) 에 있습니다.

## 네이밍 규칙

클래스 이름은 `속성:값` 입니다. 속성은 실제 CSS 속성명 전체 또는 축약, 값은 토큰 키 또는 CSS 키워드입니다.

```
padding:4            → padding: var(--space-4)
p:4                  → 같은 것 (축약)
background-color:primary → background-color: var(--color-primary)
bg:primary           → 같은 것 (축약)
```

앞에 반응형(`sm: md: lg: xl:`)과 상태(`hover: focus: …`) 접두사를 붙일 수 있습니다. 순서는 `{breakpoint}:{pseudo}:{property}:{value}` 입니다.

## 첫 번째 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@newtil/css 첫 예제</title>
  <link rel="stylesheet" href="node_modules/@newtil/css/dist/style.css">
</head>
<body>
  <div class="p:4">
    <h1 class="font-size:heading-md font-weight:bold">@newtil/css 첫 예제</h1>
    <div class="d:flex gap:2 mt:4">
      <button class="p:4 bg:primary c:on-primary bdr:full border-width:0 cursor:pointer">메인 버튼</button>
      <button class="p:4 bg:secondary c:on-secondary bdr:full border-width:0 cursor:pointer">서브 버튼</button>
      <button class="p:4 bg:transparent c:primary bdr:full border-width:1 bds:solid bdc:primary cursor:pointer">아웃라인 버튼</button>
    </div>
  </div>
</body>
</html>
```

## 다음 단계

- [Utility 클래스](./utility-classes) — 전체 카테고리와 축약형
- [Design Tokens](./design-tokens) — 값 체계와 커스터마이징
- [JIT 설정](./jit-setup) — 운영 빌드 최적화
