import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"list-style-image","description":"","frontmatter":{},"headers":[],"relativePath":"utility/list-style/list-style-image.md","filePath":"utility/list-style/list-style-image.md"}');
const _sfc_main = { name: "utility/list-style/list-style-image.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="list-style-image" tabindex="-1">list-style-image <a class="header-anchor" href="#list-style-image" aria-label="Permalink to &quot;list-style-image&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image" target="_blank" rel="noreferrer">list-style-image</a> 속성에 대한 유틸리티입니다.</p><p>리스트의 마커로 사용되는 이미지를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>list-style-image:none</code></td><td><code>ls-style-image:none</code><br><code>ls-style-img:none</code></td><td><span class="code">list-style-image: none !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/list-style/list-style-image.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const listStyleImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  listStyleImage as default
};
