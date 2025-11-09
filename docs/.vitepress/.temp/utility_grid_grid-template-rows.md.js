import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"grid-template-rows","description":"","frontmatter":{},"headers":[],"relativePath":"utility/grid/grid-template-rows.md","filePath":"utility/grid/grid-template-rows.md"}');
const _sfc_main = { name: "utility/grid/grid-template-rows.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="grid-template-rows" tabindex="-1">grid-template-rows <a class="header-anchor" href="#grid-template-rows" aria-label="Permalink to &quot;grid-template-rows&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows" target="_blank" rel="noreferrer">grid-template-rows</a> 속성에 대한 유틸리티입니다.</p><p><code>grid rows</code>의 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks" target="_blank" rel="noreferrer"><code>track</code></a>의 개수를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>grid-template-rows:0</code></td><td><code>grid-template-row:0</code><br><code>grid-templ-row:0</code></td><td><span class="code">grid-template-rows: none !important;</span></td></tr><tr><td><code>grid-template-rows:1</code></td><td><code>grid-template-row:1</code><br><code>grid-templ-row:1</code></td><td><span class="code">grid-template-rows: repeat(1, minmax(0, 1fr)) !important;</span></td></tr><tr><td><code>grid-template-rows:2</code></td><td><code>grid-template-row:2</code><br><code>grid-templ-row:2</code></td><td><span class="code">grid-template-rows: repeat(2, minmax(0, 1fr)) !important;</span></td></tr><tr><td><code>grid-template-rows:3</code></td><td><code>grid-template-row:3</code><br><code>grid-templ-row:3</code></td><td><span class="code">grid-template-rows: repeat(3, minmax(0, 1fr)) !important;</span></td></tr><tr><td><code>grid-template-rows:4</code></td><td><code>grid-template-row:4</code><br><code>grid-templ-row:4</code></td><td><span class="code">grid-template-rows: repeat(4, minmax(0, 1fr)) !important;</span></td></tr><tr><td><code>grid-template-rows:5</code></td><td><code>grid-template-row:5</code><br><code>grid-templ-row:5</code></td><td><span class="code">grid-template-rows: repeat(5, minmax(0, 1fr)) !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/grid/grid-template-rows.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gridTemplateRows = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gridTemplateRows as default
};
