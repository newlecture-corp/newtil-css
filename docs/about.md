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

## ✨ Contributors

NewTil CSS는 아래 멋진 기여자들과 함께 성장하고 있습니다. 🙌

<div class="contrib-wrap">
  <span class="contrib-badge">💎 강병수<br /><small>📧 <a href="mailto:byoungsu5@gmail.com">byoungsu5@gmail.com</a></small></span>
  <span class="contrib-badge">🌟 김용민<br /><small>📧 <a href="mailto:kym960304@naver.com">kym960304@naver.com</a></small></span>
  <span class="contrib-badge">🌈 김지윤<br /><small>📧 <a href="mailto:jiyoun1201@naver.com">jiyoun1201@naver.com</a></small></span>
  <span class="contrib-badge">🔥 박단희<br /><small>📧 <a href="mailto:danheepark3@gmail.com">danheepark3@gmail.com</a></small></span>
  <span class="contrib-badge">💡 박수경<br /><small>📧 <a href="mailto:skpark0205@gmail.com">skpark0205@gmail.com</a></small></span>
  <span class="contrib-badge">🚀 방현석<br /><small>📧 <a href="mailto:banghnsk@gmail.com">banghnsk@gmail.com</a></small></span>
  <span class="contrib-badge">🎧 이규원<br /><small>📧 <a href="mailto:kikilee.ato@gmail.com">kikilee.ato@gmail.com</a></small></span>
  <span class="contrib-badge">📚 이동구<br /><small>📧 <a href="mailto:ks02417@gmail.com">ks02417@gmail.com</a></small></span>
  <span class="contrib-badge">🎯 이세기<br /><small>📧 <a href="mailto:tr9273@naver.com">tr9273@naver.com</a></small></span>
  <span class="contrib-badge">🧩 이영준<br /><small>📧 <a href="mailto:a8853665@gmail.com">a8853665@gmail.com</a></small></span>
  <span class="contrib-badge">🎮 이우석<br /><small>📧 <a href="mailto:dldntjr0516@gmail.com">dldntjr0516@gmail.com </a></small></span>
  <span class="contrib-badge">🎨 장혜은<br /><small>📧 <a href="mailto:hyeunjjj@gmail.com">hyeunjjj@gmail.com</a></small></span>
  <span class="contrib-badge">🎵 정우혁<br /><small>📧 <a href="mailto:dngur96012@naver.com">dngur96012@naver.com</a></small></span>
  <span class="contrib-badge">🌊 정지은<br /><small>📧 <a href="mailto:jungjieun888@gmail.com">jungjieun888@gmail.com</a></small></span>
  <span class="contrib-badge">🌙 정찬우<br /><small>📧 <a href="mailto:jcwo214@naver.com">jcwo214@naver.com</a></small></span>
  <span class="contrib-badge">🌻 정혜연<br /><small>📧 <a href="mailto:hyjeong96@gmail.com">hyjeong96@gmail.com</a></small></span>
  <span class="contrib-badge">⚡ 조영일<br /><small>📧 <a href="mailto:13siban@gmail.com">13siban@gmail.com</a></small></span>
  <span class="contrib-badge">🌼 채나은<br /><small>📧 <a href="mailto:coskdms95@gmail.com">coskdms95@gmail.com</a></small></span>
  <span class="contrib-badge">🎹 황서범<br /><small>📧 <a href="mailto:wlgns1251@naver.com">wlgns1251@naver.com</a></small></span>
</div>

<style>
.contrib-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
  margin: 1rem 0 2rem;
}

.contrib-badge {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: var(--vp-c-bg-soft, #f5f5f5);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: left;
}

.contrib-badge small {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.78rem;
  opacity: 0.85;
}

.contrib-badge a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.18);
}

.contrib-badge a:hover {
  text-decoration: underline;
}
</style>

## 라이선스

MIT License - 자세한 내용은 [LICENSE](https://github.com/newlecture-corp/newtil-css/blob/main/LICENSE) 파일을 참조하세요.

