import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"table-layout","description":"","frontmatter":{},"headers":[],"relativePath":"utility/table-layout.md","filePath":"utility/table-layout.md"}');
const _sfc_main = { name: "utility/table-layout.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="table-layout" tabindex="-1">table-layout <a class="header-anchor" href="#table-layout" aria-label="Permalink to &quot;table-layout&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout" target="_blank" rel="noreferrer">table-layout</a> 속성에 대한 유틸리티입니다.</p><p><code>table</code>의 셀(cell), 행(row) 및 열(column)을 배치하는 데 사용되는 알고리즘을 설정합니다.</p><table tabindex="0"><thead><tr><th>클래스</th><th style="${ssrRenderStyle({ "text-align": "center" })}">약어 클래스</th><th>속성</th></tr></thead><tbody><tr><td><code>table-layout:auto</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">table-layout: auto;</span></td></tr><tr><td><code>table-layout:fixed</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">table-layout: fixed;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/table-layout.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tableLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tableLayout as default
};
