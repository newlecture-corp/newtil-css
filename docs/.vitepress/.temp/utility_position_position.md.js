import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"position","description":"","frontmatter":{},"headers":[],"relativePath":"utility/position/position.md","filePath":"utility/position/position.md"}');
const _sfc_main = { name: "utility/position/position.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noreferrer">position</a> 속성에 대한 유틸리티입니다.</p><p>문서에서 요소가 어떻게 배치되는지를 설정합니다. <a href="./top.html"><code>top</code></a>, <a href="./right.html"><code>right</code></a>, <a href="./bottom.html"><code>bottom</code></a>, <a href="./left.html"><code>left</code></a> 속성은 요소의 최종 위치를 결정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>position:static</code></td><td><code>pos:static</code></td><td><span class="code">position: static !important;</span></td></tr><tr><td><code>position:relative</code></td><td><code>pos:relative</code></td><td><span class="code">position: relative !important;</span></td></tr><tr><td><code>position:absolute</code></td><td><code>pos:absolute</code></td><td><span class="code">position: absolute !important;</span></td></tr><tr><td><code>position:fixed</code></td><td><code>pos:fixed</code></td><td><span class="code">position: fixed !important;</span></td></tr><tr><td><code>position:sticky</code></td><td><code>pos:sticky</code></td><td><span class="code">position: sticky !important;</span></td></tr><tr><td><code>position:inherit</code></td><td><code>pos:inherit</code></td><td><span class="code">position: inherit !important;</span></td></tr><tr><td><code>position:initial</code></td><td><code>pos:initial</code></td><td><span class="code">position: initial !important;</span></td></tr><tr><td><code>position:unset</code></td><td><code>pos:unset</code></td><td><span class="code">position: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/position/position.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const position = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  position as default
};
