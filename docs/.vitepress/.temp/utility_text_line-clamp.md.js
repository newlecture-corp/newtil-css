import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"line-clamp","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/line-clamp.md","filePath":"utility/text/line-clamp.md"}');
const _sfc_main = { name: "utility/text/line-clamp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="line-clamp" tabindex="-1">line-clamp <a class="header-anchor" href="#line-clamp" aria-label="Permalink to &quot;line-clamp&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp" target="_blank" rel="noreferrer">line-clamp</a> 속성에 대한 유틸리티입니다.</p><p>블록의 내용을 지정된 줄 수로 제한합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>line-clamp:1</code></td><td><code>ln-clamp:1</code></td><td><span class="code"> display: -webkit-box; <br> overflow: hidden; <br> text-overflow: ellipsis; <br> -webkit-line-clamp: 1; <br> -webkit-box-orient: vertical; </span></td></tr><tr><td><code>line-clamp:2</code></td><td><code>ln-clamp:2</code></td><td><span class="code"> display: -webkit-box;<br> overflow: hidden;<br> text-overflow: ellipsis;<br> -webkit-line-clamp: 2;<br> -webkit-box-orient: vertical;<br></span></td></tr><tr><td><code>line-clamp:3</code></td><td><code>ln-clamp:3</code></td><td><span class="code"> display: -webkit-box;<br> overflow: hidden;<br> text-overflow: ellipsis;<br> -webkit-line-clamp: 3;<br> -webkit-box-orient: vertical;<br></span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/line-clamp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lineClamp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lineClamp as default
};
