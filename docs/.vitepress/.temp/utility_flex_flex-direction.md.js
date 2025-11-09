import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex-direction","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex-direction.md","filePath":"utility/flex/flex-direction.md"}');
const _sfc_main = { name: "utility/flex/flex-direction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" rel="noreferrer">flex-direction</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item" target="_blank" rel="noreferrer"><code>flex item</code></a>이 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container" target="_blank" rel="noreferrer"><code>flex container</code></a> 내에서 배치되는 방식을 설정하며, 주 축(<a href="https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis" target="_blank" rel="noreferrer">main axis</a>)과 방향(정방향 또는 역방향)을 정의합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex-direction:row</code></td><td><code>fl-direction:row</code><br><code>fl-dir:row</code></td><td><span class="code">flex-direction: row !important;</span></td></tr><tr><td><code>flex-direction:row-reverse</code></td><td><code>fl-direction:row-reverse</code><br><code>fl-dir:row-reverse</code></td><td><span class="code">flex-direction: row-reverse !important;</span></td></tr><tr><td><code>flex-direction:column</code></td><td><code>fl-direction:column</code><br><code>fl-dir:column</code></td><td><span class="code">flex-direction: column !important;</span></td></tr><tr><td><code>flex-direction:column-reverse</code></td><td><code>fl-direction:column-reverse</code><br><code>fl-dir:column-reverse</code></td><td><span class="code">flex-direction: column-reverse !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex-direction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexDirection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexDirection as default
};
