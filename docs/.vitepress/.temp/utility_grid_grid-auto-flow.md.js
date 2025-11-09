import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"grid-auto-flow","description":"","frontmatter":{},"headers":[],"relativePath":"utility/grid/grid-auto-flow.md","filePath":"utility/grid/grid-auto-flow.md"}');
const _sfc_main = { name: "utility/grid/grid-auto-flow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="grid-auto-flow" tabindex="-1">grid-auto-flow <a class="header-anchor" href="#grid-auto-flow" aria-label="Permalink to &quot;grid-auto-flow&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow" target="_blank" rel="noreferrer">grid-auto-flow</a> 속성에 대한 유틸리티입니다.</p><p><code>grid</code>에서 자동 배치되는 아이템의 흐름을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>grid-auto-flow:row</code></td><td class="blank"></td><td><span class="code">grid-auto-flow: row !important;</span></td></tr><tr><td><code>grid-auto-flow:column</code></td><td class="blank"></td><td><span class="code">grid-auto-flow: column !important;</span></td></tr><tr><td><code>grid-auto-flow:row-dense</code></td><td class="blank"></td><td><span class="code">grid-auto-flow: row dense !important;</span></td></tr><tr><td><code>grid-auto-flow:column-dense</code></td><td class="blank"></td><td><span class="code">grid-auto-flow: column dense !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/grid/grid-auto-flow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gridAutoFlow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gridAutoFlow as default
};
