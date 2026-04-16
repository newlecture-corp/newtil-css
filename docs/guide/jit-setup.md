# JIT 설정 (Production 빌드)

## 왜 JIT가 필요한가

newtil-css의 풀 번들은 모든 utility × 반응형 × 상호작용 상태 조합을 포함하여 약 11MB입니다. 개발 중에는 괜찮지만 production 배포 시에는 **실제 사용한 class만** 포함해야 합니다.

JIT(Just-In-Time) 엔진은 사용자 파일을 스캔하여 사용된 class만 추출, **수십 KB 수준**의 최적 CSS를 생성합니다.

## Vite (권장)

```js
// vite.config.js
import newtilCss from '@newtil/css/jit/vite-plugin.js';

export default defineConfig({
  plugins: [newtilCss()],
});
```

```js
// main.tsx — 변경 없음
import '@newtil/css';
```

- **자동 스캔**: `src/`, `pages/`, `app/`, `components/` 등 자동 감지
- **Watch 모드**: 파일 변경 시 자동 re-scan + hot reload
- **Zero-config**: 대부분의 프로젝트에서 설정 없이 동작

### 커스텀 스캔 경로

```js
newtilCss({
  content: ['./src/**/*.{tsx,vue}', './public/index.html'],
})
```

## PostCSS (Webpack/Rollup 등)

```js
// postcss.config.js
import newtilJit from '@newtil/css/jit/postcss-plugin.js';

export default {
  plugins: [
    newtilJit({
      content: ['./src/**/*.{html,tsx,vue}'],
    }),
  ],
};
```

## CLI (범용)

어떤 빌드 도구든 상관없이 사용 가능:

```bash
node node_modules/@newtil/css/jit/jit.js \
  --content "src,public" \
  --output dist/newtil.css
```

### 옵션

| 옵션 | 설명 |
|---|---|
| `--content <경로>` | 쉼표 구분 스캔 경로 (필수) |
| `--output <파일>` | 출력 파일 경로 (미지정 시 stdout) |
| `--no-tokens` | design-tokens 제외 (별도 로드 시) |

### package.json 통합

```json
{
  "scripts": {
    "build:css": "node node_modules/@newtil/css/jit/jit.js --content src --output dist/newtil.css",
    "build": "npm run build:css && vite build"
  }
}
```

## 결과 비교

| 모드 | 크기 |
|---|---|
| 풀 번들 (개발) | ~11 MB |
| JIT 출력 (production) | ~10-80 KB |
| gzip 후 | ~3-20 KB |

## Safelist (동적 class)

JavaScript에서 동적으로 생성되는 class명은 스캐너가 감지 못할 수 있습니다.

```js
// 이런 동적 class는 스캔 안 됨:
const color = isError ? 'danger' : 'success';
className={`background-color:${color}`}
```

해결: HTML 주석이나 별도 파일에 class를 명시적으로 나열:

```html
<!-- newtil-safelist: background-color:danger background-color:success -->
```

스캐너가 이 주석 안의 class명도 추출합니다.
