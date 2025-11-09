import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex-wrap","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex-wrap.md","filePath":"utility/flex/flex-wrap.md"}');
const _sfc_main = { name: "utility/flex/flex-wrap.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" target="_blank" rel="noreferrer">flex-wrap</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item" target="_blank" rel="noreferrer"><code>flex item</code></a>이 한 줄에 배치될지, 줄바꿈할지를 결정합니다. 줄바꿈하는 경우 줄이 쌓이는 방향을 설정합니다</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex-wrap:nowrap</code></td><td><code>fl-wrap:nowrap</code></td><td><span class="code">flex-wrap: nowrap !important;</span></td></tr><tr><td><code>flex-wrap:wrap</code></td><td><code>fl-wrap:wrap</code></td><td><span class="code">flex-wrap: wrap !important;</span></td></tr><tr><td><code>flex-wrap:wrap-reverse</code></td><td><code>fl-wrap:wrap-reverse</code></td><td><span class="code">flex-wrap: wrap-reverse !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex-wrap.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexWrap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexWrap as default
};
