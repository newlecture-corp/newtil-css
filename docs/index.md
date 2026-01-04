# NewTil CSS

**NewTil CSS**는 컴포넌트 우선 + 유틸리티 보조의 현대적인 CSS 라이브러리입니다.

## 시작하기

### 설치

```bash
npm install newtil-css
```

### 기본 사용법

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
  <div>
    <header>
      <h1>제목</h1>
    </header>
    <main>
      <button class="m3-btn btn-size:2 btn-color:main">버튼</button>
    </main>
  </div>
</body>
</html>
```

## 핵심 특징

- **Component-first**: 의미 있는 UI 컴포넌트 우선 설계
- **Utility-last**: 세부 조정을 위한 유틸리티 클래스 제공
- **CSS 변수**: 완전한 커스터마이징 지원
- **반응형**: 모바일 우선 반응형 디자인
- **접근성**: WCAG 가이드라인 준수

## 관련 링크

- [시작하기 가이드](/guide/getting-started)
- [컴포넌트 문서](/components/button)
- [유틸리티 클래스](/utility/display)
