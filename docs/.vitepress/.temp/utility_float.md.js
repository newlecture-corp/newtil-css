import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"float","description":"","frontmatter":{},"headers":[],"relativePath":"utility/float.md","filePath":"utility/float.md"}');
const _sfc_main = { name: "utility/float.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="float" tabindex="-1">float <a class="header-anchor" href="#float" aria-label="Permalink to &quot;float&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float" target="_blank" rel="noreferrer">float</a> 속성에 대한 유틸리티입니다.</p><p>요소를 컨테이너의 왼쪽 또는 오른쪽에 배치하여, 텍스트와 인라인 요소가 그 주위를 감쌀 수 있게 합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>float:left</code></td><td class="blank"></td><td><span class="code">float: left !important;</span></td></tr><tr><td><code>float:right</code></td><td class="blank"></td><td><span class="code">float: right !important;</span></td></tr><tr><td><code>float:inline-start</code></td><td class="blank"></td><td><span class="code">float: inline-start !important;</span></td></tr><tr><td><code>float:inline-end</code></td><td class="blank"></td><td><span class="code">float: inline-end !important;</span></td></tr><tr><td><code>float:none</code></td><td class="blank"></td><td><span class="code">float: none !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/float.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const float = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  float as default
};
