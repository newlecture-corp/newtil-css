<div align="center">
  <a href="https://newlecture-corp.github.io/newtil-css/">
    <img
      src="https://github.com/newlecture-corp/newtil-css/blob/main/docs/public/logo.png"
      alt="newtil-css"
      height="120"
    />
  </a>

  <h1>Newtil CSS</h1>
  
  <p>
    <strong>유틸리티 중심의 현대적인 CSS 라이브러리</strong>
  </p>

  <p>
    <a href="https://newlecture-corp.github.io/newtil-css/">
      <img src="https://img.shields.io/badge/docs-visit-blue?style=flat-square" alt="Documentation" />
    </a>
    <a href="https://github.com/newlecture-corp/newtil-css/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
    </a>
    <a href="https://www.newlecture.com">
      <img src="https://img.shields.io/badge/by-뉴렉처-orange?style=flat-square" alt="Newlecture" />
    </a>
  </p>
</div>

---

## ✨ 주요 특징

### 🎯 순수 CSS와 100% 동일한 명명 규칙
CSS 속성을 그대로 클래스명으로 사용하여 학습 곡선을 최소화합니다.

```html
<!-- CSS: display: flex; justify-content: center; -->
<div class="d:flex jc:center">...</div>
```

### 🎨 Google Icons 완벽 지원
Google Material Icons를 간편하게 사용할 수 있습니다.

```html
<i class="n-icon">home</i>
<i class="n-icon">search</i>
```

### 🔧 CSS 변수 기반 컴포넌트
사용자 정의가 쉬운 유연한 컴포넌트 시스템을 제공합니다.

```css
.n-section {
  --padding: var(--space-4);
  --bd-radius: var(--space-3);
}
```

### 🌓 다크 모드 자동 지원
`prefers-color-scheme`을 통해 자동으로 다크 모드를 지원합니다.

### 📱 반응형 디자인
모바일부터 데스크톱까지 모든 화면 크기에 최적화되어 있습니다.

---

## 🚀 빠른 시작

### CDN으로 설치
```html
<link href="https://newlecture-corp.github.io/newtil-css/dist/style.css" rel="stylesheet" />
```

### npm으로 설치
```bash
npm install newtil-css
```

### 기본 사용법
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <link href="path/to/newtil-css/style.css" rel="stylesheet" />
</head>
<body>
  <div class="n-layout">
    <header class="n-header">
      <h1>My App</h1>
    </header>
    <main>
      <section class="n-section section-type:card">
        <h1>Welcome</h1>
        <p>Newtil CSS로 빠르게 시작하세요!</p>
      </section>
    </main>
  </div>
</body>
</html>
```

---

## 📦 주요 컴포넌트

### Layout
```html
<div class="n-layout">
  <header class="n-header">...</header>
  <aside>...</aside>
  <main>...</main>
  <footer>...</footer>
</div>
```

### Section
```html
<section class="n-section section-type:card">
  <h1>제목</h1>
  <div>내용</div>
</section>
```

**Section Types:**
- `section-type:card` - 경계선이 있는 카드 스타일
- `section-type:glass` - Glassmorphism 효과
- `section-type:elevated` - 그림자 효과

### List
```html
<ul class="n-list list-sep:solid list-dir:column">
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ul>
```

### Button
```html
<button class="n-btn btn-color:main btn-style:fill">
  클릭하세요
</button>
```

### Form
```html
<input class="n-input" type="text" placeholder="입력하세요" />
<select class="n-select">
  <option>옵션 1</option>
</select>
```

---

## 🎨 유틸리티 클래스

### 레이아웃
```html
<div class="d:flex jc:center ai:center gap:4">...</div>
<div class="d:grid gtc:3">...</div>
```

### 간격
```html
<div class="p:4 m:2">...</div>
<div class="px:4 py:2">...</div>
```

### 색상
```html
<div class="c:main bg:base-1">...</div>
```

### 크기
```html
<div class="w:100p h:50vh">...</div>
```

---

## 📚 문서

자세한 사용법과 예제는 [공식 문서](https://newlecture-corp.github.io/newtil-css/)를 참고하세요.

### 주요 문서
- [컴포넌트 가이드](https://newlecture-corp.github.io/newtil-css/components)
- [유틸리티 클래스](https://newlecture-corp.github.io/newtil-css/utilities)
- [커스터마이징](https://newlecture-corp.github.io/newtil-css/customization)
- [예제 모음](https://newlecture-corp.github.io/newtil-css/examples)

---

## 🤝 기여하기

기여는 언제나 환영합니다! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📖 참고 자료

- [MDN Web Docs](https://developer.mozilla.org/) - CSS 레퍼런스
- [Google Material Icons](https://fonts.google.com/icons) - 아이콘 라이브러리
- [CSS Tricks](https://css-tricks.com/) - CSS 팁과 트릭

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

## 👨‍💻 제작자

**뉴렉처 (Newlecture)**

- Website: [https://www.newlecture.com](https://www.newlecture.com)
- GitHub: [@newlecture-corp](https://github.com/newlecture-corp)

---

<div align="center">
  <p>
    Made with ❤️ by <a href="https://www.newlecture.com">뉴렉처</a>
  </p>
  <p>
    <a href="https://newlecture-corp.github.io/newtil-css/">Documentation</a> •
    <a href="https://github.com/newlecture-corp/newtil-css/issues">Report Bug</a> •
    <a href="https://github.com/newlecture-corp/newtil-css/issues">Request Feature</a>
  </p>
</div>
