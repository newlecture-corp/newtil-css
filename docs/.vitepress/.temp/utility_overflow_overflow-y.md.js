import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"overflow-y","description":"","frontmatter":{},"headers":[],"relativePath":"utility/overflow/overflow-y.md","filePath":"utility/overflow/overflow-y.md"}');
const _sfc_main = { name: "utility/overflow/overflow-y.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="overflow-y" tabindex="-1">overflow-y <a class="header-anchor" href="#overflow-y" aria-label="Permalink to &quot;overflow-y&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y" target="_blank" rel="noreferrer">overflow-y</a> 속성에 대한 유틸리티입니다.</p><p>컨텐트가 블록 레벨 요소(<a href="https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content" target="_blank" rel="noreferrer">block level element</a>)의 상, 하 모서리를 넘어갈 때의 처리 방식을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>overflow-y:auto</code></td><td><code>of-y:auto</code></td><td><span class="code">overflow-y: auto !important;</span></td></tr><tr><td><code>overflow-y:hidden</code></td><td><code>of-y:hidden</code></td><td><span class="code">overflow-y: hidden !important;</span></td></tr><tr><td><code>overflow-y:scroll</code></td><td><code>of-y:scroll</code></td><td><span class="code">overflow-y: scroll !important;</span></td></tr><tr><td><code>overflow-y:visible</code></td><td><code>of-y:visible</code></td><td><span class="code">overflow-y: visible !important;</span></td></tr><tr><td><code>overflow-y:inherit</code></td><td><code>of-y:inherit</code></td><td><span class="code">overflow-y: inherit !important;</span></td></tr><tr><td><code>overflow-y:initial</code></td><td><code>of-y:initial</code></td><td><span class="code">overflow-y: initial !important;</span></td></tr><tr><td><code>overflow-y:unset</code></td><td><code>of-y:unset</code></td><td><span class="code">overflow-y: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/overflow/overflow-y.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overflowY = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overflowY as default
};
