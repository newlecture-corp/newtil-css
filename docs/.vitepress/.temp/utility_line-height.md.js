import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"line-height","description":"","frontmatter":{},"headers":[],"relativePath":"utility/line-height.md","filePath":"utility/line-height.md"}');
const _sfc_main = { name: "utility/line-height.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="line-height" tabindex="-1">line-height <a class="header-anchor" href="#line-height" aria-label="Permalink to &quot;line-height&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height" target="_blank" rel="noreferrer">line-height</a> 속성에 대한 유틸리티입니다.</p><p>라인 박스의 높이를 설정합니다. 일반적으로 텍스트 라인 간의 간격을 조정하는 데 사용됩니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>line-height:1</code></td><td><code>line-h:1</code><br><code>ln-h:1</code></td><td><span class="code">line-height: 1 !important;</span></td></tr><tr><td><code>line-height:1.25</code></td><td><code>line-h:1.25</code><br><code>ln-h:1.25</code></td><td><span class="code">line-height: 1.25 !important;</span></td></tr><tr><td><code>line-height:1.5</code></td><td><code>line-h:1.5</code><br><code>ln-h:1.5</code></td><td><span class="code">line-height: 1.5 !important;</span></td></tr><tr><td><code>line-height:1.75</code></td><td><code>line-h:1.75</code><br><code>ln-h:1.75</code></td><td><span class="code">line-height: 1.75 !important;</span></td></tr><tr><td><code>line-height:2</code></td><td><code>line-h:2</code><br><code>ln-h:2</code></td><td><span class="code">line-height: 2 !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/line-height.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lineHeight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lineHeight as default
};
