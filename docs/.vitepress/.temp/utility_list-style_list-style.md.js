import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"list-style","description":"","frontmatter":{},"headers":[],"relativePath":"utility/list-style/list-style.md","filePath":"utility/list-style/list-style.md"}');
const _sfc_main = { name: "utility/list-style/list-style.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="list-style" tabindex="-1">list-style <a class="header-anchor" href="#list-style" aria-label="Permalink to &quot;list-style&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style" target="_blank" rel="noreferrer">list-style</a> 속성에 대한 유틸리티입니다.</p><p>리스트의 마커의 스타일을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>list-style:none</code></td><td><code>ls-style:none</code></td><td><span class="code">list-style: none !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/list-style/list-style.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const listStyle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  listStyle as default
};
