# NewTil CSS 컴포넌트 설계 가이드라인

## 🎯 컴포넌트 설계 철학

### **Component-first + Utility-last**

- **컴포넌트 우선**: 재사용 가능한 UI 요소를 컴포넌트로 설계
- **유틸리티 보조**: 컴포넌트의 세부 조정이나 오버라이드를 위한 유틸리티 클래스
- **의미 있는 구조**: 단순한 유틸리티 조합이 아닌, 의미 있는 UI 컴포넌트

### **n- 접두사 시스템**

- **목적**: 다른 CSS 라이브러리와의 충돌 방지
- **형식**: `n-{component-name}`
- **예시**: `n-layout`, `n-btn`, `n-icon`, `n-card`

## 🏗️ 컴포넌트 구조 원칙

### **1. 단일 책임 원칙**

- 각 컴포넌트는 **하나의 명확한 목적**을 가져야 함
- **예시**: `n-layout`은 레이아웃만, `n-btn`은 버튼만

### **2. 조합 가능성**

- 컴포넌트들은 **서로 조합**되어 사용될 수 있어야 함
- **예시**: `n-btn + n-icon`으로 아이콘 버튼 생성

### **3. 확장 가능성**

- **Modifier 클래스**로 다양한 변형 지원
- **예시**: `n-btn.btn-size:2`, `n-btn.btn-color:main`

## 📋 컴포넌트 카테고리

### **Core Components (핵심 컴포넌트)**

- **n-layout**: 페이지 레이아웃 구조
- **n-btn**: 버튼 및 버튼 변형
- **n-icon**: 아이콘 시스템
- **n-text**: 텍스트 스타일링

### **Form Components (폼 컴포넌트)**

- **n-input**: 입력 필드
- **n-select**: 선택 상자
- **n-checkbox**: 체크박스
- **n-radio**: 라디오 버튼

### **Layout Components (레이아웃 컴포넌트)**

- **n-grid**: 그리드 시스템
- **n-flex**: 플렉스 컨테이너
- **n-container**: 컨테이너 래퍼

### **Navigation Components (네비게이션 컴포넌트)**

- **n-nav**: 네비게이션 메뉴
- **n-breadcrumb**: 브레드크럼
- **n-pagination**: 페이지네이션

### **Feedback Components (피드백 컴포넌트)**

- **n-alert**: 알림 메시지
- **n-modal**: 모달 다이얼로그
- **n-tooltip**: 툴팁

## 🎨 컴포넌트 스타일 가이드라인

### **CSS 변수 사용**

```css
.n-btn {
	padding: var(--space-2) var(--space-4);
	font-size: var(--font-size-base);
	color: var(--color-text-primary);
	background: var(--color-bg-primary);
}
```

### **Modifier 클래스 패턴**

```css
/* 크기 변형 */
.n-btn.btn-size\:1 {
	padding: var(--space-1) var(--space-2);
}
.n-btn.btn-size\:2 {
	padding: var(--space-2) var(--space-4);
}
.n-btn.btn-size\:3 {
	padding: var(--space-3) var(--space-6);
}

/* 색상 변형 */
.n-btn.btn-color\:main {
	background: var(--color-main);
}
.n-btn.btn-color\:sub {
	background: var(--color-sub);
}
.n-btn.btn-color\:accent {
	background: var(--color-accent);
}
```

### **상태 클래스**

```css
.n-btn:hover {
	/* 호버 상태 */
}
.n-btn:active {
	/* 활성 상태 */
}
.n-btn:disabled {
	/* 비활성 상태 */
}
.n-btn.loading {
	/* 로딩 상태 */
}
```

## 🔧 컴포넌트 개발 프로세스

### **1. 설계 단계**

- **목적 정의**: 이 컴포넌트가 무엇을 하는가?
- **사용 사례**: 어떤 상황에서 사용되는가?
- **변형 요소**: 어떤 변형이 필요한가?

### **2. 구현 단계**

- **HTML 구조**: 의미있는 마크업
- **CSS 스타일**: 기본 스타일 + 변형 스타일
- **JavaScript**: 상호작용이 필요한 경우

### **3. 테스트 단계**

- **기능 테스트**: 모든 변형과 상태 테스트
- **접근성 테스트**: 키보드, 스크린 리더 지원
- **반응형 테스트**: 다양한 화면 크기에서 테스트

## 📱 반응형 설계

### **브레이크포인트**

```css
/* Small (640px+) */
@media (min-width: 640px) {
	/* ... */
}

/* Medium (768px+) */
@media (min-width: 768px) {
	/* ... */
}

/* Large (1024px+) */
@media (min-width: 1024px) {
	/* ... */
}

/* Extra Large (1280px+) */
@media (min-width: 1280px) {
	/* ... */
}
```

### **모바일 우선 접근법**

- **기본 스타일**: 모바일용
- **미디어 쿼리**: 더 큰 화면을 위한 향상

## ♿ 접근성 고려사항

### **키보드 지원**

- 모든 상호작용 요소는 **Tab**으로 접근 가능
- **Enter/Space** 키로 활성화 가능

### **스크린 리더 지원**

- **aria-label**: 명확한 설명 제공
- **aria-expanded**: 확장/축소 상태 표시
- **aria-hidden**: 불필요한 요소 숨김

### **색상 대비**

- **WCAG AA 기준** 준수 (4.5:1)
- 색상만으로 정보 전달하지 않음

## 🚀 성능 최적화

### **CSS 최적화**

- **불필요한 중첩** 피하기
- **특이성 최소화** (`.n-btn` vs `.n-layout .n-btn`)
- **애니메이션**: `transform`, `opacity` 사용

### **JavaScript 최적화**

- **이벤트 위임** 사용
- **디바운싱/쓰로틀링** 적용
- **메모리 누수** 방지

---

**이 문서는 NewTil CSS 컴포넌트 개발의 기준이 됩니다.**
**모든 새로운 컴포넌트는 이 가이드라인을 따라야 합니다.**
