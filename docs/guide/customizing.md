# 테마 커스터마이징

`@newtil/*` 패키지는 **CSS 변수 기반 라이브러리**입니다. 라이브러리가 제공하는 기본 토큰 위에 프로젝트 브랜드를 덧씌우는 구조로 설계되었습니다.

## 핵심 원칙

라이브러리의 토큰은 모두 **일반 CSS 변수**이므로, `:root`에서 재정의하면 cascade에 의해 자동으로 오버라이드됩니다. 별도의 설정 파일이나 빌드 단계가 필요 없습니다.

```css
@import "@newtil/design-tokens";

:root {
  --color-primary: #4f46e5;       /* 앱 브랜드 색 */
  --color-on-primary: #ffffff;
}
```

이게 전부입니다. 이렇게 쓴 순간부터 `@newtil/components`의 모든 버튼·링크·탭이 새 색상을 사용합니다.

## 앱 브랜드로 덧씌우기

`@newtil/design-tokens`는 emerald(초록) 계열을 기본으로 제공합니다. 앱마다 브랜드가 다르므로 보통 `globals.css` 최상단에서 덧씌웁니다.

```css
/* app/globals.css */
@import "@newtil/design-tokens";
@import "@newtil/components/index.css";

/* 브랜드 색상 오버라이드 */
:root {
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;
  --color-primary-active: #3730a3;
  --color-primary-subtle: rgba(79, 70, 229, 0.1);
  --color-on-primary: #ffffff;
}

/* 다크모드에서 다른 값을 쓰고 싶다면 */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #818cf8;
    --color-primary-hover: #6366f1;
    --color-primary-subtle: rgba(99, 102, 241, 0.15);
  }
}
```

컴포넌트나 유틸리티 쪽 코드는 **한 줄도 바꾸지 않습니다**. 기존 `<button class="m3-btn">` 이 그대로 새 색상으로 렌더됩니다.

## 의미론 토큰 목록

자주 덮어쓰는 시맨틱 토큰들입니다.

### 브랜드

| 토큰 | 용도 |
|---|---|
| `--color-primary` | 주 강조 색 |
| `--color-primary-hover` | 호버 상태 |
| `--color-primary-active` | 눌림 상태 |
| `--color-primary-subtle` | 연한 배경용 |
| `--color-on-primary` | primary 위 텍스트/아이콘 |
| `--color-secondary` | 보조 색 |
| `--color-secondary-hover` | |
| `--color-secondary-subtle` | |
| `--color-on-secondary` | |

### 상태

| 토큰 | 용도 |
|---|---|
| `--color-success` / `--color-on-success` | 성공 |
| `--color-warning` / `--color-on-warning` | 경고 |
| `--color-danger` / `--color-on-danger` | 위험/오류 |

### 표면 (Surface)

| 토큰 | 용도 |
|---|---|
| `--color-surface` | 페이지 기본 배경 |
| `--color-surface-subtle` | 살짝 들어간 영역 (카드 등) |
| `--color-surface-muted` | 중간 톤 영역 |
| `--color-surface-inverse` | 반전 배경 (snackbar 등) |
| `--color-on-surface` | 기본 텍스트 |
| `--color-on-surface-inverse` | 반전 배경 위 텍스트 |

### 테두리

| 토큰 | 용도 |
|---|---|
| `--color-border` | 기본 테두리 |
| `--color-border-subtle` | 연한 테두리 |
| `--color-border-strong` | 진한 테두리 |

전체 목록은 [Design Tokens 가이드](/guide/design-tokens)를 참고하세요.

## 컴포넌트 변수 오버라이드

`@newtil/components`의 모든 컴포넌트는 `--컴포넌트-속성` 형태의 변수를 노출합니다. 토큰 레벨이 아닌 **특정 컴포넌트만** 조정하고 싶을 때 사용합니다.

```css
/* 버튼만 더 둥글게 */
.m3-btn {
  --btn-border-radius: 0.25rem;
}

/* 카드 특정 인스턴스만 더 큰 그림자 */
.featured-card.m3-card {
  --card-box-shadow: var(--shadow-xl);
}
```

## 부분 커스터마이징 (scope)

특정 영역에서만 토큰을 재정의할 수 있습니다. CSS 변수는 상속되므로 부모 요소에서 설정하면 자식에 전파됩니다.

<Demo>
<div style="--color-primary: #ff6b00; --color-on-primary: #fff; padding: 1rem; display: flex; gap: 0.5rem;">
  <button class="p:4 bg:primary c:on-primary bdr:3 border-width:0 cursor:pointer">Orange Button</button>
  <button class="p:4 bg:primary c:on-primary bdr:3 border-width:0 cursor:pointer">같은 색</button>
</div>
</Demo>

이 패턴은 "랜딩 페이지만 브랜드 색을 다르게", "특정 섹션만 다크 테마" 같은 부분적 변경에 유용합니다.

## 여러 테마 전환

다크모드처럼 명시적 테마 전환이 필요하면 `data-theme` 속성을 사용합니다.

```css
[data-theme="ocean"] {
  --color-primary: #0ea5e9;
  --color-primary-hover: #0284c7;
  --color-primary-subtle: #e0f2fe;
}

[data-theme="forest"] {
  --color-primary: #22c55e;
  --color-primary-hover: #16a34a;
  --color-primary-subtle: #dcfce7;
}
```

```html
<html data-theme="ocean">
  <!-- 전체가 ocean 테마 -->
</html>

<section data-theme="forest">
  <!-- 이 섹션만 forest 테마 -->
</section>
```

## 자주 하는 실수

**1. `@import` 순서가 잘못됨**

오버라이드는 **import 이후**에 와야 합니다.

```css
/* 안 됨: import가 뒤에 있어서 오버라이드가 덮임 */
:root { --color-primary: #4f46e5; }
@import "@newtil/design-tokens";

/* 맞음 */
@import "@newtil/design-tokens";
:root { --color-primary: #4f46e5; }
```

**2. 오버라이드 범위가 너무 좁음**

`:root` 대신 특정 선택자에서 바꾸면 자식만 영향을 받습니다. 앱 전체에 적용하려면 `:root`.

**3. 일부 파생 토큰을 놓침**

`--color-primary`만 바꾸고 `--color-primary-hover`, `--color-primary-subtle`를 빠뜨리면 hover 상태가 원래 녹색으로 남습니다. 관련 파생 토큰은 함께 조정해야 합니다.
