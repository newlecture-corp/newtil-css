# 시작하기

NewTil CSS를 프로젝트에 통합하는 방법을 알아보세요.

## 설치

### npm을 사용한 설치

```bash
npm install newtil-css
```

### yarn을 사용한 설치

```bash
yarn add newtil-css
```

### pnpm을 사용한 설치

```bash
pnpm add newtil-css
```

## 사용 방법

### 방법 1: CSS 파일 직접 링크

가장 간단한 방법은 컴파일된 CSS 파일을 직접 링크하는 것입니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NewTil CSS 예제</title>
  <link rel="stylesheet" href="node_modules/newtil-css/dist/style.css">
</head>
<body>
  <!-- 컨텐츠 -->
</body>
</html>
```

### 방법 2: ES Module로 import

모듈 번들러(Webpack, Vite, Rollup 등)를 사용하는 경우:

```javascript
// 전체 스타일 가져오기
import 'newtil-css/dist/style.css'

// 또는 개별로 가져오기
import 'newtil-css/dist/components.css'
import 'newtil-css/dist/utils.css'
```

#### Next.js 사용 시 주의사항

Next.js에서 아이콘이 표시되지 않는 경우, Material Symbols 폰트를 직접 로드해야 합니다:

**app/layout.jsx 또는 pages/_app.js:**
```javascript
import 'newtil-css'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      {children}
    </>
  )
}
```

또는 **app/layout.jsx (App Router):**
```javascript
import 'newtil-css'

export const metadata = {
  // ...
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 방법 3: CDN 사용

npm을 사용하지 않는 경우 CDN을 통해 사용할 수 있습니다:

```html
<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/newtil-css@latest/dist/style.css"
>
```

### 방법 4: PostCSS로 직접 빌드

소스 파일을 직접 빌드하여 사용할 수 있습니다:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
  }
}
```

```css
/* style.css */
@import 'newtil-css/css/style.css';
```

## 첫 번째 예제

간단한 버튼 컴포넌트를 만들어보세요:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NewTil CSS 첫 예제</title>
  <link rel="stylesheet" href="node_modules/newtil-css/dist/style.css">
</head>
<body>
  <div class="p:4">
    <h1>NewTil CSS 첫 예제</h1>
    <div class="d:flex gap:2 mt:4">
      <button class="m3-btn btn-size:2 btn-color:main">메인 버튼</button>
      <button class="m3-btn btn-size:2 btn-color:sub">서브 버튼</button>
      <button class="m3-btn btn-size:2 m3-btn:outline">아웃라인 버튼</button>
    </div>
  </div>
</body>
</html>
```

## 다음 단계

- [컴포넌트 시작하기](./getting-started-component) - 컴포넌트 사용법 배우기
- [유틸리티 시작하기](./getting-started-utility) - 유틸리티 클래스 사용법 배우기
- [테마 커스터마이징](./customizing) - 스타일 커스터마이징하기

