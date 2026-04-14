# Migration Guide: `newtil-css` → `@newtil/css`

이 문서는 기존 `newtil-css` 패키지에서 새 스코프 패키지 `@newtil/css` 로 이전하는 방법을 설명합니다.

## 왜 이전하나요?

Newlecture는 프론트엔드 유틸리티 라이브러리를 **`@newtil/*` 네임스페이스** 아래로 통합 중입니다. 향후 `@newtil/editor`, `@newtil/viewer` 등 추가될 라이브러리와 일관된 식별자를 제공하고, 브랜드 네임스페이스를 보호하기 위함입니다.

| 항목 | 이전 | 이후 |
|---|---|---|
| npm 패키지명 | `newtil-css` | `@newtil/css` |
| 설치 명령 | `npm i newtil-css` | `npm i @newtil/css` |
| import 경로 | `import 'newtil-css'` | `import '@newtil/css'` |
| GitHub 저장소 | `newlecture-corp/newtil-css` | **동일 (유지)** |
| GitHub Pages | `newlecture-corp.github.io/newtil-css/` | **동일 (유지)** |
| 라이선스 | MIT | MIT |

내용(API, 클래스명, 컴포넌트)에는 **어떠한 변경도 없습니다**. 이름만 바뀌었습니다.

## 이전 방법

### 1. 기존 패키지 제거

```bash
npm uninstall newtil-css
# 또는
yarn remove newtil-css
pnpm remove newtil-css
```

### 2. 새 패키지 설치

```bash
npm install @newtil/css
# 또는
yarn add @newtil/css
pnpm add @newtil/css
```

### 3. 코드 내 import 문 일괄 치환

프로젝트 내 모든 `newtil-css` 참조를 `@newtil/css` 로 치환합니다.

**Before:**
```js
import 'newtil-css'
import 'newtil-css/dist/style.css'
import 'newtil-css/dist/components.css'
```

**After:**
```js
import '@newtil/css'
import '@newtil/css/dist/style.css'
import '@newtil/css/dist/components.css'
```

**CSS `@import` 사용 시:**
```css
/* Before */
@import 'newtil-css/css/style.css';

/* After */
@import '@newtil/css/css/style.css';
```

**HTML 직접 링크 사용 시:**
```html
<!-- Before -->
<link rel="stylesheet" href="node_modules/newtil-css/dist/style.css">

<!-- After -->
<link rel="stylesheet" href="node_modules/@newtil/css/dist/style.css">
```

**CDN 사용 시:**
```html
<!-- Before -->
<link href="https://unpkg.com/newtil-css@latest/dist/style.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/newtil-css@latest/dist/style.css" rel="stylesheet" />

<!-- After -->
<link href="https://unpkg.com/@newtil/css@latest/dist/style.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/@newtil/css@latest/dist/style.css" rel="stylesheet" />
```

### 4. 일괄 치환 스크립트 (선택)

프로젝트가 크다면 다음 명령으로 한 번에 치환할 수 있습니다 (macOS/Linux):

```bash
# JS/TS/Vue/Svelte 파일 내 import 치환
grep -rl "newtil-css" ./src | xargs sed -i '' "s|newtil-css|@newtil/css|g"

# HTML/Markdown 파일도 포함하려면
grep -rl "newtil-css" . --include="*.{js,jsx,ts,tsx,vue,svelte,css,scss,html,md}" \
  | xargs sed -i '' "s|newtil-css|@newtil/css|g"
```

> ⚠️ `sed -i ''` 는 macOS 기준. Linux에서는 `sed -i` 로 실행.
> 실행 전 반드시 Git으로 커밋하거나 백업하세요.

## 이 패키지는 앞으로 어떻게 되나요?

- `newtil-css@0.3.x` 는 npm에 **그대로 유지**됩니다. 갑작스러운 빌드 실패를 막기 위함입니다.
- `newtil-css` 에는 `npm deprecate` 메시지가 적용되어, 설치 시 `@newtil/css` 로 이전하라는 안내가 출력됩니다.
- **새 기능·버그 수정·보안 패치는 `@newtil/css` 에서만 제공됩니다.**
- 버전은 `@newtil/css@0.4.0` 부터 새로 시작합니다.

## 문의

이전 과정에서 문제가 있다면 [GitHub Issues](https://github.com/newlecture-corp/newtil-css/issues) 에 남겨주세요.
