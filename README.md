<div align="center">
  <a href="https://newlecture-corp.github.io/newtil-css/">
    <img
      src="docs/public/logo.png"
      alt="Newtil CSS"
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

> ### 📢 패키지 이전 안내 (Package Moved)
>
> 이 패키지는 **`newtil-css`** 에서 **`@newtil/css`** 로 이전되었습니다.
> `@newtil/*` 네임스페이스 하에 제품군(예: `@newtil/editor`)을 통합하기 위함입니다.
>
> **새 설치 명령:**
> ```bash
> npm install @newtil/css
> ```
>
> 기존 `newtil-css` 패키지는 더 이상 업데이트되지 않으며 [deprecated 처리](https://docs.npmjs.com/cli/v10/commands/npm-deprecate)되었습니다. 자세한 이전 방법은 [MIGRATION.md](./MIGRATION.md) 를 참고하세요.

---

## ✨ 주요 특징

### 🎨 Material 3 Design 100% 지원하는 컴포넌트
Google의 Material Design 3 가이드라인을 완벽하게 반영한 컴포넌트를 제공합니다. 모든 디자인 원칙, 상호작용 패턴, 접근성 가이드라인을 정확히 구현합니다.



### 🎯 순수 CSS와 100% 동일한 명명 규칙
CSS 속성을 그대로 클래스명으로 사용하여 학습 곡선을 최소화합니다.

```html
<div style="display: flex; justify-content: center;">...</div>
<div class="d:flex jc:center">...</div>
```

위 예제에서 아래 클래스 표현(`d:flex jc:center`)은 위의 인라인 스타일(`display: flex; justify-content: center;`)의 축약 표현입니다.

### 🎨 Google Icons 완벽 지원
Google Material Icons를 간편하게 사용할 수 있습니다.

```html
<span class="m3-icon icon:home">home</span>
<span class="m3-icon icon:menu">menu</span>
```

### 🚨 버튼 컴포넌트 예제

아래는 Newtil CSS 버튼 컴포넌트를 사용하는 간단한 예제입니다.

```html
<!-- Filled 타입 기본 버튼 -->
<button class="m3-btn">Filled 버튼</button>

<!-- Tonal 타입, 라운드, 아이콘 포함 버튼 -->
<button class="m3-btn btn:tonal btn-shape:round">
  <span class="m3-icon icon:add" aria-hidden="true">add</span>
  추가하기
</button>

<!-- Outlined 타입, 아이콘 전용(사각형, 사이즈 2) 버튼 -->
<button class="m3-btn btn:outlined btn-size:2 btn-shape:square m3-icon icon:edit" aria-label="수정">
  edit
</button>

<!-- Disabled(비활성) 상태 버튼 -->
<button class="m3-btn" disabled>비활성 버튼</button>
```

> 다양한 버튼 스타일과 상태를 `m3-btn`, `btn:tonal`, `btn:outlined`, `btn-shape:round`, `btn-size:2` 등 클래스 조합으로 쉽게 구현할 수 있습니다.


### 🔧 CSS 변수 기반 컴포넌트
사용자 정의가 쉬운 유연한 컴포넌트 시스템을 제공합니다.

```css
.m3-section {
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
<link href="https://unpkg.com/@newtil/css@latest/dist/style.css" rel="stylesheet" />
<script src="https://unpkg.com/@newtil/css@latest/dist/script.js"></script>
```

### npm으로 설치
```bash
npm install @newtil/css
```

### 기본 사용법
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <link href="path/to/@newtil/css/style.css" rel="stylesheet" />
</head>
<body>
  <div class="m3-layout">
    <header class="m3-header">
      <h1>My App</h1>
    </header>
    <main>
      <section class="m3-section section:card">
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
<div class="m3-layout">
  <header class="m3-header">...</header>
  <aside>...</aside>
  <main>...</main>
  <footer>...</footer>
</div>
```

### Section
```html
<section class="m3-section section:card">
  <h1>제목</h1>
  <div>내용</div>
</section>
```

**Section Types:**
- `section:card` - 경계선이 있는 카드 스타일
- `section:glass` - Glassmorphism 효과
- `section:elevated` - 그림자 효과

### List
```html
<ul class="m3-list list-sep:solid list-dir:column">
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ul>
```

### Button
```html
<button class="m3-btn btn-color:main btn-style:fill">
  클릭하세요
</button>
```

### Form
```html
<input class="m3-input" type="text" placeholder="입력하세요" />
<select class="m3-select">
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
