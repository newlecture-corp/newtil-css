# NewTil CSS 소개

NewTil CSS는 **컴포넌트 우선(Component-First) + 유틸리티 보조(Utility-Last)** 철학을 따르는 현대적인 CSS 라이브러리입니다.

## 핵심 철학

### Component-First

의미 있는 UI 컴포넌트를 먼저 설계합니다. 이는 빠르고 일관된 UI 구축을 가능하게 합니다.

```html
<!-- 컴포넌트 우선 사용 -->
<button class="n-btn btn-size:2 btn-color:main">버튼</button>
```

### Utility-Last

컴포넌트로 해결되지 않는 세부 조정은 유틸리티 클래스로 처리합니다.

```html
<!-- 필요시에만 유틸리티 추가 -->
<button class="n-btn btn-size:2 btn-color:main m:4 p:6">
  버튼
</button>
```

## 주요 특징

### 🎨 CSS 변수 기반

모든 스타일은 CSS 변수로 관리되어 완전한 커스터마이징이 가능합니다.

```css
:root {
  --color-main-2: #3182ce;
  --space-4: 16px;
}
```

### 📱 반응형 우선

모바일 우선 접근 방식으로 모든 디바이스에서 완벽하게 작동합니다.

```html
<div class="d:none sm:d:block">
  모바일에서는 숨김, 데스크탑에서 표시
</div>
```

### ♿ 접근성

WCAG 가이드라인을 준수하여 모든 사용자가 접근할 수 있습니다.

### ⚡ 성능

필요한 것만 포함하여 빠른 로딩과 최적의 성능을 제공합니다.

### 🛠️ 유연성

컴포넌트와 유틸리티의 조합으로 다양한 디자인 요구사항을 만족시킵니다.

## 왜 NewTil CSS인가?

### 기존 프레임워크의 한계

많은 CSS 프레임워크는 다음과 같은 문제를 가지고 있습니다:

- **유틸리티 우선**: 클래스 이름이 길고 복잡함
- **컴포넌트 부족**: 반복적인 HTML 구조 작성 필요
- **커스터마이징 어려움**: 복잡한 빌드 과정 또는 제한된 옵션

### NewTil CSS의 해결책

1. **의미 있는 컴포넌트**: `n-btn`, `n-list`, `n-modal` 등 직관적인 컴포넌트
2. **간결한 유틸리티**: `d:flex`, `p:4`, `gap:2` 등 짧고 명확한 클래스명
3. **쉬운 커스터마이징**: CSS 변수만으로 모든 스타일 제어 가능
4. **빠른 개발**: 컴포넌트 사용으로 빠른 프로토타이핑

## 사용 사례

- 빠른 프로토타이핑
- 일관된 디자인 시스템 구축
- 기존 프로젝트에 점진적 통합
- 커스터마이징이 많이 필요한 프로젝트

## 시작하기

NewTil CSS를 시작하려면 [시작하기 가이드](/guide/getting-started)를 확인하세요.

- [설치 방법](/guide/getting-started#설치)
- [첫 번째 예제](/guide/getting-started#첫-번째-예제)
- [컴포넌트 사용법](/guide/getting-started-component)
- [유틸리티 사용법](/guide/getting-started-utility)

## 기여하기

버그 리포트, 기능 제안, 또는 코드 기여를 환영합니다!

- [GitHub Issues](https://github.com/newlecture-corp/newtil-css/issues)
- [GitHub 저장소](https://github.com/newlecture-corp/newtil-css)

## 라이선스

MIT License - 자세한 내용은 [LICENSE](https://github.com/newlecture-corp/newtil-css/blob/main/LICENSE) 파일을 참조하세요.

