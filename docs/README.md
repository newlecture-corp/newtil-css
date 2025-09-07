# NewTil CSS

**NewTil CSS**는 컴포넌트 우선 + 유틸리티 보조의 현대적인 CSS 라이브러리입니다.

## 🚀 시작하기

### **설치**

```bash
npm install newtil-css
```

### **기본 사용법**

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>NewTil CSS 예제</title>
		<link href="node_modules/newtil-css/css/style.css" rel="stylesheet" />
	</head>
	<body>
		<div class="n-layout">
			<header class="n-header">
				<h1>제목</h1>
			</header>

			<main>
				<button class="n-btn btn-size:2 btn-color:main">버튼</button>
			</main>
		</div>
	</body>
</html>
```

## 📚 문서

- **[컴포넌트 가이드](./components.md)** - 사용 가능한 컴포넌트들
- **[유틸리티 가이드](./utilities.md)** - 유틸리티 클래스 사용법
- **[예제 모음](./examples.md)** - 다양한 사용 예시
- **[API 레퍼런스](./api.md)** - 상세한 API 문서

## 🎯 핵심 특징

- **Component-first**: 의미 있는 UI 컴포넌트 우선 설계
- **Utility-last**: 세부 조정을 위한 유틸리티 클래스 제공
- **CSS 변수**: 완전한 커스터마이징 지원
- **반응형**: 모바일 우선 반응형 디자인
- **접근성**: WCAG 가이드라인 준수

## 🔧 커스터마이징

```css
:root {
	/* 간격 조정 */
	--spacing-4: 20px; /* 기본 16px에서 20px로 */

	/* 색상 테마 */
	--color-main-6: #007bff; /* 메인 색상 변경 */

	/* 폰트 크기 */
	--font-size-base: 18px; /* 기본 폰트 크기 */
}
```

## 📱 브라우저 지원

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 기여하기

버그 리포트나 기능 제안은 [GitHub Issues](https://github.com/your-username/newtil-css/issues)에 등록해 주세요.

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](../LICENSE) 파일을 참조하세요.

---

**NewTil CSS**로 더 나은 웹 경험을 만들어보세요! 🎨
