import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"object-fit","description":"","frontmatter":{},"headers":[],"relativePath":"utility/object-fit.md","filePath":"utility/object-fit.md"}');
const _sfc_main = { name: "utility/object-fit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="object-fit" tabindex="-1">object-fit <a class="header-anchor" href="#object-fit" aria-label="Permalink to &quot;object-fit&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank" rel="noreferrer">object-fit</a> 속성에 대한 유틸리티입니다.</p><p><code>img</code>, <code>video</code>와 같은 대체 요소(<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element" target="_blank" rel="noreferrer">replaced elements</a>)의 크기가 자신의 컨테이너에 맞게 조절되는 방식을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>object-fit:fill</code></td><td><code>obj-fit:fill</code></td><td><span class="code">object-fit: fill !important;</span></td></tr><tr><td><code>object-fit:contain</code></td><td><code>obj-fit:contain</code></td><td><span class="code">object-fit: contain !important;</span></td></tr><tr><td><code>object-fit:cover</code></td><td><code>obj-fit:cover</code></td><td><span class="code">object-fit: cover !important;</span></td></tr><tr><td><code>object-fit:none</code></td><td><code>obj-fit:none</code></td><td><span class="code">object-fit: none !important;</span></td></tr><tr><td><code>object-fit:scale-down</code></td><td><code>obj-fit:scale-down</code></td><td><span class="code">object-fit: scale-down !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/object-fit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const objectFit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  objectFit as default
};
