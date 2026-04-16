# Design Tokens

`@newtil/design-tokens`는 newtil 생태계의 **기반(foundation)**입니다. 색상, 간격, 타이포그래피 등 모든 디자인 결정의 단일 진실 공급원.

## 2-레이어 구조

### Primitive (내부용, `--_` prefix)

raw 값의 저장소. 사용자가 직접 쓰지 않습니다.

```css
--_scale-5: 1rem;              /* 16px */
--_hue-green-500: #8cba35;     /* 브랜드 green */
--_hue-gray-900: #171717;      /* 거의 검정 */
```

### Semantic (사용자용)

역할 기반 이름. 컴포넌트와 utility가 참조하는 토큰.

```css
--color-primary: var(--_hue-green-500);
--color-surface: #ffffff;
--color-text: var(--_hue-gray-900);
--space-5: var(--_scale-5);
--font-size-md: var(--_font-scale-3);
```

## 색상 토큰

### Brand (primary / secondary / tertiary)

각 5개 변형: base, `-hover`, `-active`, `-subtle`, `on-` (전경색)

```css
--color-primary           /* 기본 브랜드 색 */
--color-primary-hover     /* hover 상태 */
--color-primary-active    /* active/pressed */
--color-primary-subtle    /* 옅은 배경 */
--color-on-primary        /* primary 위에 올리는 텍스트 색 (Material "on-" 관례) */
```

secondary, tertiary도 동일 패턴.

### Status (success / warning / danger)

Brand와 동일한 5개 변형 패턴.

### Surface / Text / Border

```css
--color-surface           /* 배경 (흰색) */
--color-surface-subtle    /* 약간 어두운 배경 */
--color-surface-muted     /* 더 어두운 배경 */
--color-surface-inverse   /* 반전 배경 (거의 검정) */
--color-on-surface        /* surface 위 텍스트 */

--color-text              /* 기본 텍스트 (진한) */
--color-text-muted        /* 보조 텍스트 */
--color-text-subtle       /* 흐릿한 텍스트 */

--color-border            /* 기본 테두리 */
--color-border-strong     /* 강한 테두리 */
--color-border-subtle     /* 약한 테두리 */
```

## 커스터마이징

사용자 CSS에서 semantic 토큰을 재정의하면 전체 UI가 바뀝니다.

```css
@import "@newtil/css";

:root {
  --color-primary: #e91e63;           /* 내 브랜드 색 */
  --color-primary-hover: #c2185b;
  --color-on-primary: #ffffff;
}
```

버튼, 배경, 텍스트 등 `primary`를 참조하는 모든 유틸리티와 컴포넌트가 자동 변경됩니다.

## 단위 정책 — rem

모든 크기 토큰(spacing, sizing, font-size, shadow, radius)은 **rem 기반**입니다.

- 1rem = 16px (브라우저 기본)
- `html { font-size: 20px; }` 설정 시 모든 rem 기반 값이 비례 확대
- border-width, radius, shadow offset 등도 rem (일관 비례 스케일링)

## 파일 구조

```
@newtil/design-tokens/css/
├── index.css              (전체 import)
├── primitive/
│   ├── scale.css          (--_scale-0 ~ --_scale-14)
│   ├── hue.css            (gray/green/blue/red/amber/emerald 팔레트)
│   ├── radius-scale.css
│   ├── font-scale.css
│   └── shadow-elev.css
└── semantic/
    ├── spacing.css        (--space-*, --size-*, 분수/뷰포트 포함)
    ├── color.css          (light + dark mode 정의)
    ├── radius.css
    ├── border.css
    ├── typography.css     (역할 + 스케일 두 종류)
    ├── z-index.css
    ├── opacity.css
    ├── shadow.css
    └── transition.css
```
