import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"overflow","description":"","frontmatter":{},"headers":[],"relativePath":"utility/overflow/overflow.md","filePath":"utility/overflow/overflow.md"}');
const _sfc_main = { name: "utility/overflow/overflow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="overflow" tabindex="-1">overflow <a class="header-anchor" href="#overflow" aria-label="Permalink to &quot;overflow&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" target="_blank" rel="noreferrer">overflow</a> 속성에 대한 유틸리티입니다.</p><p>컨텐트가 부모 요소 박스에 맞지 않을 때(overflows)의 처리 방식을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>overflow:auto</code></td><td><code>of:auto</code></td><td><span class="code">overflow: auto !important;</span></td></tr><tr><td><code>overflow:hidden</code></td><td><code>of:hidden</code></td><td><span class="code">overflow: hidden !important;</span></td></tr><tr><td><code>overflow:scroll</code></td><td><code>of:scroll</code></td><td><span class="code">overflow: scroll !important;</span></td></tr><tr><td><code>overflow:visible</code></td><td><code>of:visible</code></td><td><span class="code">overflow: visible !important;</span></td></tr><tr><td><code>overflow:inherit</code></td><td><code>of:inherit</code></td><td><span class="code">overflow: inherit !important;</span></td></tr><tr><td><code>overflow:initial</code></td><td><code>of:initial</code></td><td><span class="code">overflow: initial !important;</span></td></tr><tr><td><code>overflow:unset</code></td><td><code>of:unset</code></td><td><span class="code">overflow: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/overflow/overflow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overflow as default
};
