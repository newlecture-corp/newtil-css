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
--font-size-body: var(--_font-scale-3);
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

### Status (success / warning / danger / info)

Brand와 동일한 5개 변형 패턴. `info` 는 0.2.1 에서 추가되었습니다.

### Surface / Text / Border

```css
--color-surface           /* 배경 (canvas) */
--color-surface-1 … 4     /* elevation 단계 (다크에서는 높을수록 밝음) */
--color-surface-inverse   /* 반전 배경 (거의 검정) */
--color-surface-hover / -active / -disabled   /* 표면 위 상호작용 상태 */

--color-text              /* 기본 텍스트 (진한) */
--color-text-muted        /* 보조 텍스트 */
--color-text-subtle       /* 흐릿한 텍스트 */
--color-text-disabled     /* 비활성 텍스트 */
--color-text-inverse      /* surface-inverse 위의 텍스트 */

--color-border            /* 기본 테두리 */
--color-border-strong     /* 강한 테두리 */
--color-border-subtle     /* 약한 테두리 */
```

### Link / Code / 기타

```css
--color-link / --color-link-hover           /* 본문 링크 */
--color-code-bg / -fg / -border             /* 코드 상자 */
--color-scrim                               /* 모달 뒤 가림막 */
--color-focus-ring                          /* 포커스 링 */
```

## 그 밖의 토큰

| 카테고리 | 키 | 클래스 예 |
|---|---|---|
| `--space-*` | `0` ~ `14` (4px 그리드, rem) | `padding:4`, `gap:3`, `width:11` |
| `--font-size-*` | `caption` `body-sm` `body` `body-lg` `heading-sm` `heading-md` `heading-lg` `heading-xl` `display` | `font-size:body-sm` |
| `--font-weight-*` | `regular` `medium` `semibold` `bold` | `font-weight:bold` |
| `--line-height-*` | `tight` `normal` `loose` | `line-height:tight` |
| `--letter-spacing-*` | `tight` `normal` `wide` | `letter-spacing:wide` |
| `--font-family-*` | `sans` `mono` | `font-family:mono` |
| `--radius-*` | `0` ~ `6`, `full` | `border-radius:3` |
| `--border-width-*` | `0` ~ `4` | `border-width:1` |
| `--shadow-*` | `sm` `md` `lg` `xl` `2xl` | `box-shadow:md` (`none` 은 리터럴) |
| `--z-*` | `base` `dropdown` `sticky` `fixed` `overlay` `modal` `popover` `toast` `tooltip` | `z-index:modal` |
| `--opacity-*` | `0` `10` … `100` (10 단위) | `opacity:50` |
| `--duration-*` / `--ease-*` | `fast` `normal` `slow` / `linear` `in` `out` `in-out` | `transition-duration:fast` |

### 0.2.1 에서 바뀐 이름 (마이그레이션)

옛 이름은 `deprecated.css` 별칭으로만 남아 있고 다음 minor 에서 삭제됩니다. 유틸리티 클래스도 새 이름으로만 생성됩니다.

| 옛 이름 | 새 이름 |
|---|---|
| `--size-N` | `--space-N` (같은 값) |
| `--size-1-2`, `--size-screen-h`, `--size-full` … | 토큰 없음. `w:1-2` `h:screen-h` `w:full` 클래스는 리터럴로 유지 |
| `--font-size-xs` … `--font-size-4xl` | `--font-size-caption` … `--font-size-display` (역할명) |
| `--color-on-surface(-inverse)` | `--color-text(-inverse)` |
| `--shadow-none`, `--opacity-25/75` | 토큰 없음 (`box-shadow:none` 은 리터럴, `opacity:25/75` 클래스는 삭제) |

## 커스터마이징

사용자 CSS에서 semantic 토큰을 재정의하면 전체 UI가 바뀝니다.

```css
@import "@newtil/css";

:root, [data-theme="light"] {
  --color-primary: #e91e63;           /* 내 브랜드 색 */
  --color-primary-hover: #c2185b;
  --color-on-primary: #ffffff;
}
```

다크모드 값은 셀렉터가 다르므로 [다크모드](/guide/dark-mode#커스텀-다크-색상) 를 함께 보세요.

버튼, 배경, 텍스트 등 `primary`를 참조하는 모든 유틸리티와 컴포넌트가 자동 변경됩니다.

## 단위 정책 — rem

모든 크기 토큰(spacing, font-size, shadow, radius, border-width)은 **rem 기반**입니다.

- 1rem = 16px (브라우저 기본)
- `html { font-size: 20px; }` 설정 시 모든 rem 기반 값이 비례 확대
- border-width, radius, shadow offset 등도 rem (일관 비례 스케일링)

## 파일 구조

```
@newtil/design-tokens/css/
├── index.css              (소스 전체 import — JIT 가 인라인하는 파일)
├── deprecated.css         (0.2.1 에서 제거된 이름의 별칭)
├── primitive/
│   ├── scale.css          (--_scale-0 ~ --_scale-14)
│   ├── hue.css            (gray/green/blue/sky/red/amber/emerald 팔레트)
│   ├── radius-scale.css
│   ├── font-scale.css
│   └── shadow-elev.css
└── semantic/
    ├── spacing.css        (--space-0 ~ --space-14)
    ├── color.css          (light + 시스템 dark 정의)
    ├── radius.css
    ├── border.css
    ├── typography.css     (역할명 font-size, font-family, weight, line-height, letter-spacing)
    ├── z-index.css
    ├── opacity.css
    ├── shadow.css
    └── transition.css
```

패키지 기본 export(`@newtil/design-tokens`)는 빌드된 `dist/tokens.css` 이며, 여기에만 `[data-theme="dark"]` 수동 강제 사본이 들어 있습니다.
