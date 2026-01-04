# NewTil CSS 프로젝트 작업 요약

## 📋 프로젝트 개요

**NewTil CSS**는 컴포넌트 우선 + 유틸리티 보조의 CSS 라이브러리입니다.

## 🎯 핵심 철학

- **Component-first + Utility-last**: 컴포넌트를 기본으로 하고, 유틸리티는 보조적으로 사용
- **m3- 접두사**: 컴포넌트 클래스 충돌 방지를 위한 `m3-` 접두사 사용
- **CSS 변수 기반**: 모든 커스터마이징 가능한 값은 CSS 변수로 관리

## ✅ 완료된 주요 작업

### 1. **Utility CSS 시스템 구축**

- **폴더 구조**: `css/util/` 하위에 카테고리별 분류

  - `core/`: spacing, sizing, borders, colors, typography
  - `layout/`: flexbox, grid
  - `interactions/`: transitions, transforms
  - `design/`: shadows, filters, gradients
  - `modern/`: container-queries, logical-properties
  - `accessibility/`: focus, screen-reader
  - `print/`: print-specific styles
  - `browser/`: vendor-prefixes, fallbacks

- **명명 규칙**: 3단계 축약 시스템

  - `.property:value` (기본)
  - `.abbr:value` (1단계 축약)
  - `.abb:value` (2단계 축약)
  - **값은 축약하지 않음** (예: `.overflow-x:hidden`, `.gap:4`)

- **CSS 변수 시스템**:
  - `--scale-*`: 기본 스케일 값 (0~41)
  - `--space-*`: 간격 변수 (`calc(var(--scale-*) * 1px)`)
  - `--size-*`: 크기 변수 (`--space-*`의 별칭)
  - `--font-size-*`: 폰트 크기 (`var(--size-*)` 기반)
  - `--color-*`: 테마 기반 색상
  - `--border-radius-*`: 테두리 반경
  - `--shadow-*`: 그림자 효과

### 2. **컴포넌트 리팩토링**

- **m3-btn.css**: CSS 변수 통합 (`--space-*`, `--font-size-*` 사용)
- **m3-icon.css**: CSS 변수 통합 (`--font-size-*` 사용)
- **반응형 미디어 쿼리 통일**: 640px, 768px, 1024px, 1280px

### 3. **레이아웃 컴포넌트 (JavaScript)**

- **기본 레이아웃**: header, main, footer, aside
- **Aside 위치 변경**: `aside:right` 클래스로 오른쪽 배치
- **Aside 토글**: `aside:slide-out` 클래스로 슬라이드 애니메이션
- **Resizable Aside**: 드래그로 크기 조절 가능
  - 그립퍼 스타일: 세련된 그라데이션
  - 터치 지원: 모바일에서도 사용 가능
  - ESC 키: 드래그 중단
  - 최소/최대 너비: 200px ~ 600px

### 4. **Google Material Icons/Symbols**

- **Material Symbols**: 4094개 아이콘 지원
- **스타일**: Outlined, Rounded, Sharp
- **변수 폰트**: opsz, wght, FILL, GRAD 축 지원

## 🔄 현재 진행 상황

### **최근 해결된 문제들**

1. **Aside 토글 후 상단에 나타나는 문제** → `position: absolute` 관련 복잡성으로 원래대로 복구
2. **가로 스크롤바 문제** → 사용자가 직접 해결 예정
3. **Aside 위치 변경 후 토글 동작 문제** → CSS로 해결 완료

### **현재 상태**

- ✅ **기본 기능**: 모두 정상 작동
- ✅ **Resizable Aside**: 완벽 작동
- ✅ **Aside 토글**: 기본 동작 정상
- ⚠️ **가로 스크롤바**: Aside 토글 시 간헐적 발생 (사용자 해결 예정)

## 📁 파일 구조

```
newtil-css/
├── css/
│   ├── style.css          # 메인 진입점
│   ├── components.css     # 컴포넌트 진입점
│   ├── component/         # 컴포넌트 스타일
│   │   └── m3/           # Material 3 컴포넌트
│   │       ├── m3-btn.css     # 버튼 컴포넌트
│   │       ├── m3-icon.css    # 아이콘 컴포넌트
│   │       ├── m3-card.css    # 카드 컴포넌트
│   │       ├── m3-checkbox.css # 체크박스 컴포넌트
│   │       └── ...            # 기타 컴포넌트
│   ├── util/             # 유틸리티 CSS
│   │   ├── index.css     # 유틸리티 진입점
│   │   ├── core/         # 핵심 유틸리티
│   │   ├── layout/       # 레이아웃 유틸리티
│   │   └── ...           # 기타 카테고리
│   └── variables.css     # CSS 변수 정의
├── js/
│   └── n-layout.js       # 레이아웃 JavaScript (별도)
├── test/
│   └── layout-resizable.html  # 레이아웃 테스트
└── docs/                 # 프로젝트 문서 (Git 제외)
    └── project-summary.md
```

## 🚀 다음 단계

### **단기 목표**

1. **가로 스크롤바 문제 해결** (사용자 담당)
2. **컴포넌트 설계 논의** (Component-first 철학)
3. **새로운 컴포넌트 개발**

### **장기 목표**

1. **데모 사이트 구축**
2. **문서화 완성**
3. **성능 최적화**

## 💡 주요 기술적 결정사항

### **CSS 접근법**

- **Grid Layout**: 메인 레이아웃 구조
- **CSS 변수**: 테마 및 커스터마이징
- **Transform**: 애니메이션 (GPU 가속)
- **:has() 선택자**: 조건부 스타일링

### **JavaScript 접근법**

- **ES6 클래스**: `NLayoutResizer`
- **이벤트 위임**: 터치/마우스 이벤트 통합
- **CSS 변수 조작**: `--aside-current-width`

### **반응형 설계**

- **Mobile-first**: 640px 기준점
- **단계별 브레이크포인트**: 640px, 768px, 1024px, 1280px

## 🔧 개발 환경

- **에디터**: Cursor AI
- **브라우저**: Chrome DevTools
- **테스트**: Live Server (127.0.0.1:5502)
- **버전 관리**: Git (docs 폴더 제외)

---

**마지막 업데이트**: 2024년 현재
**상태**: 기본 기능 완성, 세부 조정 진행 중
**다음 작업**: 가로 스크롤바 문제 해결 후 컴포넌트 설계 논의
