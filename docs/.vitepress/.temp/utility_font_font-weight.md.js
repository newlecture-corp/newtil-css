import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"font-weight","description":"","frontmatter":{},"headers":[],"relativePath":"utility/font/font-weight.md","filePath":"utility/font/font-weight.md"}');
const _sfc_main = { name: "utility/font/font-weight.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="font-weight" tabindex="-1">font-weight <a class="header-anchor" href="#font-weight" aria-label="Permalink to &quot;font-weight&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight" target="_blank" rel="noreferrer">font-weight</a> 속성에 대한 유틸리티입니다.</p><p>폰트의 두께를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>font-weight:1</code></td><td><code>fw:1</code></td><td><span class="code">font-weight: var(--font-weight-1) !important;</span> <span class="c:weak">/* 400 */</span></td></tr><tr><td><code>font-weight:2</code></td><td><code>fw:2</code></td><td><span class="code">font-weight: var(--font-weight-2) !important;</span> <span class="c:weak">/* 500 */</span></td></tr><tr><td><code>font-weight:3</code></td><td><code>fw:3</code></td><td><span class="code">font-weight: var(--font-weight-3) !important;</span> <span class="c:weak">/* 700 */</span></td></tr><tr><td><code>font-weight:bold</code></td><td><code>fw:bold</code></td><td><span class="code">font-weight: bold !important;</span></td></tr><tr><td><code>font-weight:normal</code></td><td><code>fw:normal</code></td><td><span class="code">font-weight: normal !important;</span></td></tr><tr><td><code>font-weight:inherit</code></td><td><code>fw:inherit</code></td><td><span class="code">font-weight: inherit !important;</span></td></tr><tr><td><code>font-weight:100</code></td><td><code>fw:100</code></td><td><span class="code">font-weight: 100 !important;</span></td></tr><tr><td><code>font-weight:200</code></td><td><code>fw:200</code></td><td><span class="code">font-weight: 200 !important;</span></td></tr><tr><td><code>font-weight:300</code></td><td><code>fw:300</code></td><td><span class="code">font-weight: 300 !important;</span></td></tr><tr><td><code>font-weight:400</code></td><td><code>fw:400</code></td><td><span class="code">font-weight: 400 !important;</span></td></tr><tr><td><code>font-weight:500</code></td><td><code>fw:500</code></td><td><span class="code">font-weight: 500 !important;</span></td></tr><tr><td><code>font-weight:600</code></td><td><code>fw:600</code></td><td><span class="code">font-weight: 600 !important;</span></td></tr><tr><td><code>font-weight:700</code></td><td><code>fw:700</code></td><td><span class="code">font-weight: 700 !important;</span></td></tr><tr><td><code>font-weight:800</code></td><td><code>fw:800</code></td><td><span class="code">font-weight: 800 !important;</span></td></tr><tr><td><code>font-weight:900</code></td><td><code>fw:900</code></td><td><span class="code">font-weight: 900 !important;</span></td></tr></tbody></table><p>기본 폰트 두께 <code>var(--font-weight)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#font-weight">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/font/font-weight.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fontWeight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fontWeight as default
};
