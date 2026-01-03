# NewTil CSS 컴포넌트 설계 가이드라인

## 🎯 컴포넌트 설계 철학

### **Component-first + Utility-last**

- **컴포넌트 우선**: 재사용 가능한 UI 요소를 컴포넌트로 설계
- **유틸리티 보조**: 컴포넌트의 세부 조정이나 오버라이드를 위한 유틸리티 클래스
- **의미 있는 구조**: 단순한 유틸리티 조합이 아닌, 의미 있는 UI 컴포넌트

### **m3- 접두사 시스템**

- **목적**: 다른 CSS 라이브러리와의 충돌 방지
- **형식**: `m3-{component-name}`
- **예시**: `m3-btn`, `m3-icon`, `m3-card`, `m3-checkbox`

## 🏗️ 컴포넌트 구조 원칙

### **1. 단일 책임 원칙**

- 각 컴포넌트는 **하나의 명확한 목적**을 가져야 함
- **예시**: `m3-btn`은 버튼만, `m3-icon`은 아이콘만

### **2. 조합 가능성**

- 컴포넌트들은 **서로 조합**되어 사용될 수 있어야 함
- **예시**: `m3-btn + m3-icon`으로 아이콘 버튼 생성

### **3. 확장 가능성**

- **Modifier 클래스**로 다양한 변형 지원
- **예시**: `m3-btn.btn-size:2`, `m3-btn.btn-color:main-1`

## 📋 컴포넌트 카테고리

### **Core Components (핵심 컴포넌트)**

- **m3-btn**: 버튼 및 버튼 변형
- **m3-icon**: 아이콘 시스템
- **m3-card**: 카드 컴포넌트
- **m3-deco**: 장식 컴포넌트

### **Form Components (폼 컴포넌트)**

- **m3-checkbox**: 체크박스
- **m3-radio-btn**: 라디오 버튼

### **Feedback Components (피드백 컴포넌트)**

- **m3-dialog**: 다이얼로그/모달

## 🎨 컴포넌트 스타일 가이드라인

### **CSS 변수 사용**

```css
.m3-btn {
	padding: var(--btn-padding);
	font-size: var(--btn-font-size);
	color: var(--btn-color);
	background-color: var(--btn-background-color);
}
```

### **Modifier 클래스 패턴**

```css
/* 크기 변형 */
.m3-btn.btn-size\:1 {
	--btn-height: var(--space-17); /* 28px */
}
.m3-btn.btn-size\:2 {
	--btn-height: var(--space-22); /* 40px */
}
.m3-btn.btn-size\:3 {
	--btn-height: var(--space-27); /* 52px */
}

/* 색상 변형 */
.m3-btn.btn-color\:main-1 {
	--btn-background-color: var(--color-main-1);
}
.m3-btn.btn-color\:sub-1 {
	--btn-background-color: var(--color-sub-1);
}
.m3-btn.btn-color\:accent-1 {
	--btn-background-color: var(--color-accent-1);
}
```

### **상태 클래스**

```css
.m3-btn:hover {
	/* 호버 상태 */
}
.m3-btn:active {
	/* 활성 상태 */
}
.m3-btn:disabled {
	/* 비활성 상태 */
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
- **특이성 최소화** (`.m3-btn` vs `.m3-card .m3-btn`)
- **애니메이션**: `transform`, `opacity` 사용

### **JavaScript 최적화**

- **이벤트 위임** 사용
- **디바운싱/쓰로틀링** 적용
- **메모리 누수** 방지

---

**이 문서는 NewTil CSS 컴포넌트 개발의 기준이 됩니다.**
**모든 새로운 컴포넌트는 이 가이드라인을 따라야 합니다.**
