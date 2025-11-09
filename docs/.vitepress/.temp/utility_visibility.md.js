import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"visibility","description":"","frontmatter":{},"headers":[],"relativePath":"utility/visibility.md","filePath":"utility/visibility.md"}');
const _sfc_main = { name: "utility/visibility.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="visibility" tabindex="-1">visibility <a class="header-anchor" href="#visibility" aria-label="Permalink to &quot;visibility&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/visibility" target="_blank" rel="noreferrer">visibility</a> 속성에 대한 유틸리티입니다.</p><p>문서의 레이아웃을 변경하지 않고 요소를 표시하거나 숨깁니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>visibility:visible</code></td><td><code>vis:visible</code></td><td><span class="code">visibility: visible !important;</span></td></tr><tr><td><code>visibility:hidden</code></td><td><code>vis:hidden</code></td><td><span class="code">visibility: hidden !important;</span></td></tr><tr><td><code>visibility:collapse</code></td><td><code>vis:collapse</code></td><td><span class="code">visibility: collapse !important;</span></td></tr><tr><td><code>visibility:inherit</code></td><td><code>vis:inherit</code></td><td><span class="code">visibility: inherit !important;</span></td></tr><tr><td><code>visibility:initial</code></td><td><code>vis:initial</code></td><td><span class="code">visibility: initial !important;</span></td></tr><tr><td><code>visibility:unset</code></td><td><code>vis:unset</code></td><td><span class="code">visibility: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/visibility.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visibility = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visibility as default
};
