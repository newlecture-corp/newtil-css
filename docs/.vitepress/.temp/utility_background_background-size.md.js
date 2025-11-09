import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"background-size","description":"","frontmatter":{},"headers":[],"relativePath":"utility/background/background-size.md","filePath":"utility/background/background-size.md"}');
const _sfc_main = { name: "utility/background/background-size.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="background-size" tabindex="-1">background-size <a class="header-anchor" href="#background-size" aria-label="Permalink to &quot;background-size&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank" rel="noreferrer">background-size</a> 속성에 대한 유틸리티입니다.</p><p>요소의 배경 이미지의 크기를 설정합니다. 이미지는 원본의 크기를 유지하거나, 늘리거나, 사용 가능한 공간에 맞게 제한될 수 있습니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>background-size:auto</code></td><td><code>bg-size:auto</code></td><td><span class="code">background-size: auto !important;</span></td></tr><tr><td><code>background-size:cover</code></td><td><code>bg-size:cover</code></td><td><span class="code">background-size: cover !important;</span></td></tr><tr><td><code>background-size:contain</code></td><td><code>bg-size:contain</code></td><td><span class="code">background-size: contain !important;</span></td></tr><tr><td><code>background-size:initial</code></td><td><code>bg-size:initial</code></td><td><span class="code">background-size: initial !important;</span></td></tr><tr><td><code>background-size:inherit</code></td><td><code>bg-size:inherit</code></td><td><span class="code">background-size: inherit !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/background/background-size.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backgroundSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  backgroundSize as default
};
