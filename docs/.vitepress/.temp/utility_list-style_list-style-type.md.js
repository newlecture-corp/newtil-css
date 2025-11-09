import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"list-style-type","description":"","frontmatter":{},"headers":[],"relativePath":"utility/list-style/list-style-type.md","filePath":"utility/list-style/list-style-type.md"}');
const _sfc_main = { name: "utility/list-style/list-style-type.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="list-style-type" tabindex="-1">list-style-type <a class="header-anchor" href="#list-style-type" aria-label="Permalink to &quot;list-style-type&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type" target="_blank" rel="noreferrer">list-style-type</a> 속성에 대한 유틸리티입니다.</p><p>리스트의 마커의 모양을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>list-style-type:circle</code></td><td><code>ls-style-type:circle</code></td><td><span class="code">list-style-type: circle !important;</span></td></tr><tr><td><code>list-style-type:decimal</code></td><td><code>ls-style-type:decimal</code></td><td><span class="code">list-style-type: decimal !important;</span></td></tr><tr><td><code>list-style-type:disc</code></td><td><code>ls-style-type:disc</code></td><td><span class="code">list-style-type: disc !important;</span></td></tr><tr><td><code>list-style-type:square</code></td><td><code>ls-style-type:square</code></td><td><span class="code">list-style-type: square !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/list-style/list-style-type.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const listStyleType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  listStyleType as default
};
