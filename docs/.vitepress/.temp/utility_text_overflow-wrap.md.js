import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"overflow-wrap","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/overflow-wrap.md","filePath":"utility/text/overflow-wrap.md"}');
const _sfc_main = { name: "utility/text/overflow-wrap.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="overflow-wrap" tabindex="-1">overflow-wrap <a class="header-anchor" href="#overflow-wrap" aria-label="Permalink to &quot;overflow-wrap&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap" target="_blank" rel="noreferrer">overflow-wrap</a> 속성에 대한 유틸리티입니다.</p><p>텍스트가 라인 박스를 넘어가지 않도록 줄 바꿈할지 여부를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>overflow-wrap:normal</code></td><td><code>of-wrap:normal</code></td><td><span class="code">overflow-wrap: normal !important;</span></td></tr><tr><td><code>overflow-wrap:break-word</code></td><td><code>of-wrap:break-word</code></td><td><span class="code">overflow-wrap: break-word !important;</span></td></tr><tr><td><code>overflow-wrap:anywhere</code></td><td><code>of-wrap:anywhere</code></td><td><span class="code">overflow-wrap: anywhere !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/overflow-wrap.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overflowWrap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overflowWrap as default
};
