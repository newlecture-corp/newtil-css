import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"background-origin","description":"","frontmatter":{},"headers":[],"relativePath":"utility/background/background-origin.md","filePath":"utility/background/background-origin.md"}');
const _sfc_main = { name: "utility/background/background-origin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="background-origin" tabindex="-1">background-origin <a class="header-anchor" href="#background-origin" aria-label="Permalink to &quot;background-origin&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin" target="_blank" rel="noreferrer">background-origin</a> 속성에 대한 유틸리티입니다.</p><p>배경이 <code>border box</code>, <code>padding box</code>, <code>content box</code> 중 어느 영역을 기준으로 배치될지를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>background-origin:border-box</code></td><td><code>bg-origin:border-box</code></td><td><span class="code">background-origin: border-box !important;</span></td></tr><tr><td><code>background-origin:padding-box</code></td><td><code>bg-origin:padding-box</code></td><td><span class="code">background-origin: padding-box !important;</span></td></tr><tr><td><code>background-origin:content-box</code></td><td><code>bg-origin:content-box</code></td><td><span class="code">background-origin: content-box !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/background/background-origin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backgroundOrigin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  backgroundOrigin as default
};
