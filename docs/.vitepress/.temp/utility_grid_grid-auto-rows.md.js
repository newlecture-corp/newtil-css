import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"grid-auto-rows","description":"","frontmatter":{},"headers":[],"relativePath":"utility/grid/grid-auto-rows.md","filePath":"utility/grid/grid-auto-rows.md"}');
const _sfc_main = { name: "utility/grid/grid-auto-rows.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="grid-auto-rows" tabindex="-1">grid-auto-rows <a class="header-anchor" href="#grid-auto-rows" aria-label="Permalink to &quot;grid-auto-rows&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows" target="_blank" rel="noreferrer">grid-auto-rows</a> 속성에 대한 유틸리티입니다.</p><p>암시적으로 생성된 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks" target="_blank" rel="noreferrer"><code>grid row track</code></a>의 크기를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>grid-auto-rows:auto</code></td><td><code>grid-auto-row:auto</code></td><td><span class="code">grid-auto-rows: auto !important;</span></td></tr><tr><td><code>grid-auto-rows:min-content</code></td><td><code>grid-auto-row:min-content</code></td><td><span class="code">grid-auto-rows: min-content !important;</span></td></tr><tr><td><code>grid-auto-rows:max-content</code></td><td><code>grid-auto-row:max-content</code></td><td><span class="code">grid-auto-rows: max-content !important;</span></td></tr><tr><td><code>grid-auto-rows:minmax</code></td><td><code>grid-auto-row:minmax</code></td><td><span class="code">grid-auto-rows: minmax(0, 1fr) !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/grid/grid-auto-rows.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gridAutoRows = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gridAutoRows as default
};
