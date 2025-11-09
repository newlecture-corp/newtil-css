import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"box-sizing","description":"","frontmatter":{},"headers":[],"relativePath":"utility/box-sizing.md","filePath":"utility/box-sizing.md"}');
const _sfc_main = { name: "utility/box-sizing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="box-sizing" tabindex="-1">box-sizing <a class="header-anchor" href="#box-sizing" aria-label="Permalink to &quot;box-sizing&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing" target="_blank" rel="noreferrer">box-sizing</a> 속성에 대한 유틸리티입니다.</p><p>요소의 전체 너비와 높이가 어떻게 계산되는지를 설정합니다. <code>padding</code>과 <code>border</code>의 포함 여부를 지정할 수 있습니다.</p><table tabindex="0"><thead><tr><th>클래스</th><th style="${ssrRenderStyle({ "text-align": "center" })}">약어 클래스</th><th>속성</th></tr></thead><tbody><tr><td><code>box-sizing:border-box</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">box-sizing: border-box !important;</span></td></tr><tr><td><code>box-sizing:content-box</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">box-sizing: content-box !important;</span></td></tr><tr><td><code>box-sizing:initial</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">box-sizing: initial !important;</span></td></tr><tr><td><code>box-sizing:inherit</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">box-sizing: inherit !important;</span></td></tr><tr><td><code>box-sizing:unset</code></td><td style="${ssrRenderStyle({ "text-align": "center" })}">-</td><td><span class="code">box-sizing: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/box-sizing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boxSizing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  boxSizing as default
};
