# 시작하기

## 설치

### CDN을 이용하는 방법

HTML 파일의 `<head>` 태그 안에 아래의 CDN 링크를 추가하세요.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/newtil-css@0.2.13/dist/style.min.css"
/>
```

이 방법은 별도의 설치 과정 없이 빠르게 `Newtil CSS`를 사용할 수 있게 해줍니다.

예시:

```html {7}
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/newtil-css@0.2.13/dist/style.min.css"
    />
  </head>
  <body>
    <!--  -->
  </body>
</html>
```

### NPM을 이용하는 방법

Node.js 환경에서 Newtil CSS를 사용하려면, NPM을 통해 패키지를 설치해주세요.

```bash
npm install newtil-css
```

설치가 완료되면, 프로젝트의 JavaScript 파일에서 `Newtil CSS`를 import하여 사용할 수 있습니다.

```js
import "newtil-css";
```

## 이제 됐습니다!

- [컴포넌트 시작하기](/guide/getting-started-component)부터 참고하여 `Newtil CSS`를 차근차근 익혀보세요.
- 빠른 찾기를 원할 경우, 상단 헤더의 **검색바 또는 숏컷**(Window `control` + `K`, MAC `cmommand` + `K`)으로 컨텐츠를 빠르게 탐색할 수 있습니다.
