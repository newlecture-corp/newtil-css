import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"list-style-position","description":"","frontmatter":{},"headers":[],"relativePath":"utility/list-style/list-style-position.md","filePath":"utility/list-style/list-style-position.md"}');
const _sfc_main = { name: "utility/list-style/list-style-position.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="list-style-position" tabindex="-1">list-style-position <a class="header-anchor" href="#list-style-position" aria-label="Permalink to &quot;list-style-position&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position" target="_blank" rel="noreferrer">list-style-position</a> 속성에 대한 유틸리티입니다.</p><p>리스트 항목에 대한 <code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::marker" target="_blank" rel="noreferrer">marker</a></code>의 상대적인 위치를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>list-style-position:inside</code></td><td><code>ls-style-position:inside</code><br><code>ls-style-pos:inside</code></td><td><span class="code">list-style-position: inside !important;</span></td></tr><tr><td><code>list-style-position:outside</code></td><td><code>ls-style-position:outside</code><br><code>ls-style-pos:outside</code><code></code></td><td><span class="code">list-style-position: outside !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/list-style/list-style-position.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const listStylePosition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  listStylePosition as default
};
