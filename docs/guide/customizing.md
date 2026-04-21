# 테마 커스터마이징

## 커스터마이징의 3단계 우선순위

`@newtil/*` 컴포넌트를 원하는 모양으로 만들 때는 **반드시 이 순서로 시도**하세요.

```
1. 클래스 타입 (기본 컴포넌트)
        ↓ 원하는 모양이 안 나오면
2. 옵션 클래스 (variant)
        ↓ 옵션에도 없으면
3. CSS 변수 오버라이드 (최후의 수단)
```

**왜 순서가 중요한가:**

- **타입**은 "가장 자주 쓰는 모양"이어야 합니다. 옵션 없이 그냥 썼을 때 80%의 경우에 적합하도록 설계되어 있어야 합니다.
- **옵션**은 "자주 있는 변형"을 미리 정의한 프리셋입니다. 변수를 여러 개 조합해야 하는 조합을 한 클래스로 응축한 것입니다.
- **변수**는 "한 번 쓰는 고유 조정"용입니다. 변수를 여러 곳에서 반복하고 있다면 그건 **옵션으로 만들어야 할 신호**입니다.

---

## 1단계: 클래스 타입만 사용

가장 많이 쓰는 기본 모양입니다. 대부분의 경우 이걸로 충분합니다.

<Demo>
<button class="m3-btn">저장</button>
<div class="m3-text-field" style="max-width: 16rem;">
  <input type="text" placeholder=" ">
  <label>이름</label>
</div>
</Demo>

```html
<button class="m3-btn">저장</button>
<div class="m3-text-field">
  <input type="text" placeholder=" ">
  <label>이름</label>
</div>
```

기본 타입으로 원하는 모양이 나오면 **여기서 끝**입니다. 다른 클래스나 변수를 건드릴 필요 없습니다.

---

## 2단계: 옵션 클래스 (variant)

기본 타입으로 부족하면 **이미 정의된 옵션**을 사용하세요. 각 컴포넌트는 자주 쓰는 변형을 옵션으로 제공합니다.

**버튼 옵션 예시:**

<Demo>
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
  <button class="m3-btn btn:outlined">Outlined</button>
  <button class="m3-btn btn:outlined btn-size:xs">XS Outlined</button>
  <button class="m3-btn btn:outlined btn-color:danger">Danger Outlined</button>
  <button class="m3-btn btn:text btn-icon:leading"><i class="m3-icon" data-icon="add"></i>추가</button>
</div>
</Demo>

```html
<button class="m3-btn btn:outlined btn-size:xs btn-color:danger">삭제</button>
```

**옵션은 조합 가능합니다.** type(`btn:outlined`) + size(`btn-size:xs`) + color(`btn-color:danger`) + icon(`btn-icon:leading`) 등 여러 축에서 하나씩 골라 결합하세요.

자세한 옵션 목록은 각 컴포넌트 가이드 페이지를 참고하세요.

---

## 3단계: CSS 변수 오버라이드 (최후의 수단)

**옵션으로도 표현 안 되는 "한 번 쓰는" 조정이 필요할 때만** 변수를 직접 바꿉니다.

### 인스턴스 한정 (인라인 style)

```html
<!-- 이 버튼만 radius를 작게 -->
<button
  class="m3-btn btn:outlined"
  style="--btn-border-radius: 0.25rem;"
>
  저장
</button>
```

인라인 style은 특이성이 최고라 newtil variant를 안정적으로 덮어씁니다.

### 섹션 스코프 (부모 요소에서 설정)

```html
<!-- 이 div 안의 모든 버튼이 radius 작게 -->
<div style="--btn-border-radius: 0.25rem;">
  <button class="m3-btn">A</button>
  <button class="m3-btn btn:outlined">B</button>
</div>
```

CSS 변수는 부모→자식으로 상속되므로, 컨테이너에서 설정하면 내부 모든 컴포넌트가 영향받습니다.

### 앱 전역 브랜드 색 (`:root`)

앱의 **브랜드 색 전환**은 예외적으로 권장되는 변수 사용입니다. `globals.css`에서 한 번 설정하고 끝:

```css
@import "@newtil/design-tokens";
@import "@newtil/components/index.css";

:root {
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;
  --color-primary-active: #3730a3;
  --color-primary-subtle: rgba(79, 70, 229, 0.1);
  --color-on-primary: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #818cf8;
    --color-primary-hover: #6366f1;
    --color-primary-subtle: rgba(99, 102, 241, 0.15);
  }
}
```

이건 **앱의 정체성**을 정의하는 거라 3단계지만 예외적으로 OK. "브랜드 색"처럼 앱 전역에 영향을 주는 1회 설정은 변수로 처리하는 게 맞습니다.

---

## 변수가 자주 필요하다면 → 옵션 부재의 신호

같은 변수 오버라이드를 **여러 곳에서 반복**하고 있다면 멈추고 생각하세요:

```html
<!-- ⚠️ 이런 반복 -->
<button class="m3-btn" style="--btn-border-radius: 0.25rem;">A</button>
<button class="m3-btn" style="--btn-border-radius: 0.25rem;">B</button>
<button class="m3-btn" style="--btn-border-radius: 0.25rem;">C</button>
```

이건 **"radius가 작은 버튼" 옵션이 필요하다**는 신호입니다. `btn-shape:square` 같은 variant를 써야 합니다 (이미 있음):

```html
<button class="m3-btn btn-shape:square">A</button>
<button class="m3-btn btn-shape:square">B</button>
<button class="m3-btn btn-shape:square">C</button>
```

**있어야 할 옵션이 없다**면 → 라이브러리에 요청하세요 (아래 참조).

---

## 자주 쓰는 변수 카탈로그

변수를 직접 써야 할 때 참고하세요. 전체 목록은 [Design Tokens 가이드](/guide/design-tokens)에 있습니다.

### 브랜드·상태 색상

| 토큰 | 용도 |
|---|---|
| `--color-primary` / `--color-on-primary` | 주 강조 색 |
| `--color-secondary` / `--color-on-secondary` | 보조 색 |
| `--color-success` / `--color-on-success` | 성공 |
| `--color-warning` / `--color-on-warning` | 경고 |
| `--color-danger` / `--color-on-danger` | 위험·오류 |

### 표면 (배경 레이어)

| 토큰 | 용도 |
|---|---|
| `--color-surface` | 페이지 기본 배경 |
| `--color-surface-subtle` | 살짝 들어간 카드 배경 |
| `--color-surface-muted` | 중간 톤 영역 |
| `--color-surface-inverse` | 반전 배경 (snackbar 등) |

### 테두리

| 토큰 | 용도 |
|---|---|
| `--color-border` | 기본 테두리 |
| `--color-border-subtle` | 연한 테두리 |
| `--color-border-strong` | 진한 테두리 |

---

## 부족한 옵션·타입은 요청하세요

라이브러리의 기본 타입이 실전에 맞지 않거나, 필요한 옵션이 없다면 — **변수로 우회하지 말고** 요청을 해주세요. 같은 요구가 반복된다는 신호일 가능성이 높고, 정식 옵션으로 추가되면 모든 사용자가 혜택을 봅니다.

**요청 채널:**

- **GitHub Issue** — [@newtil/components](https://github.com/newlecture-corp/newtil-components/issues) · [@newtil/css](https://github.com/newlecture-corp/newtil-css/issues) · [@newtil/design-tokens](https://github.com/newlecture-corp/newtil-design-tokens/issues)
- **뉴렉처 프로젝트 피드백** — https://www.newlecture.com/projects/feedback

**요청할 때 포함하면 좋은 내용:**

- 어떤 컴포넌트의 어떤 모양이 필요한지 (스크린샷/그림 첨부하면 좋음)
- 현재 변수 오버라이드로 어떻게 우회하고 있는지
- 비슷한 요구가 반복되는지 (본인 프로젝트에서 몇 번 썼는지)

---

## 자주 하는 실수

**1. 옵션이 있는지 확인 안 하고 바로 변수 오버라이드**

```css
/* X: 옵션이 있는데 변수를 먼저 건드림 */
.m3-btn {
  --btn-background-color: transparent;
  --btn-border-width: 1px;
  --btn-border-color: var(--color-primary);
  --btn-color: var(--color-primary);
}

/* O: btn:outlined 옵션 한 줄 */
<button class="m3-btn btn:outlined">...</button>
```

**2. `@import` 순서가 잘못됨**

오버라이드는 **import 이후**에 와야 합니다.

```css
/* X: import가 뒤에 있어서 오버라이드가 덮임 */
:root { --color-primary: #4f46e5; }
@import "@newtil/design-tokens";

/* O: 먼저 import, 그 다음 override */
@import "@newtil/design-tokens";
:root { --color-primary: #4f46e5; }
```

**3. 파생 토큰을 놓침**

`--color-primary`만 바꾸고 `--color-primary-hover`, `--color-primary-subtle`를 빠뜨리면 hover 상태가 원래 색으로 남습니다. 관련 파생 토큰은 함께 조정해야 합니다.

**4. CSS 모듈에서 `:global` 없이 특이성 싸움**

newtil variant는 2-클래스 선택자(`.m3-btn.btn\:outlined`)라 CSS 모듈의 단일 클래스로는 덮기 어렵습니다. 변수를 바꿔야 하면 **인라인 style**이나 **부모 스코프**가 우선입니다. CSS 모듈로 꼭 해야 하면 `:global(.m3-btn).myClass` 패턴을 쓰세요.
