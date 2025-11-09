import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"overflow-x","description":"","frontmatter":{},"headers":[],"relativePath":"utility/overflow/overflow-x.md","filePath":"utility/overflow/overflow-x.md"}');
const _sfc_main = { name: "utility/overflow/overflow-x.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="overflow-x" tabindex="-1">overflow-x <a class="header-anchor" href="#overflow-x" aria-label="Permalink to &quot;overflow-x&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x" target="_blank" rel="noreferrer">overflow-x</a> 속성에 대한 유틸리티입니다.</p><p>컨텐트가 블록 레벨 요소(<a href="https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content" target="_blank" rel="noreferrer">block level element</a>)의 좌, 우 모서리를 넘어갈 때의 처리 방식을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>overflow-x:auto</code></td><td><code>of-x:auto</code></td><td><span class="code">overflow-x: auto !important;</span></td></tr><tr><td><code>overflow-x:hidden</code></td><td><code>of-x:hidden</code></td><td><span class="code">overflow-x: hidden !important;</span></td></tr><tr><td><code>overflow-x:scroll</code></td><td><code>of-x:scroll</code></td><td><span class="code">overflow-x: scroll !important;</span></td></tr><tr><td><code>overflow-x:visible</code></td><td><code>of-x:visible</code></td><td><span class="code">overflow-x: visible !important;</span></td></tr><tr><td><code>overflow-x:inherit</code></td><td><code>of-x:inherit</code></td><td><span class="code">overflow-x: inherit !important;</span></td></tr><tr><td><code>overflow-x:initial</code></td><td><code>of-x:initial</code></td><td><span class="code">overflow-x: initial !important;</span></td></tr><tr><td><code>overflow-x:unset</code></td><td><code>of-x:unset</code></td><td><span class="code">overflow-x: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/overflow/overflow-x.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overflowX = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overflowX as default
};
