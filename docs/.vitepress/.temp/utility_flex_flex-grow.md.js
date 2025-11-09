import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex-grow","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex-grow.md","filePath":"utility/flex/flex-grow.md"}');
const _sfc_main = { name: "utility/flex/flex-grow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex-grow" tabindex="-1">flex-grow <a class="header-anchor" href="#flex-grow" aria-label="Permalink to &quot;flex-grow&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" rel="noreferrer">flex-grow</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item" target="_blank" rel="noreferrer"><code>flex item</code></a>이 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container" target="_blank" rel="noreferrer"><code>flex container</code></a>의 남은 공간 중 어느 정도를 할당받을지를 지정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex-grow:0</code></td><td><code>fl-grow:0</code></td><td><span class="code">flex-grow: 0 !important;</span></td></tr><tr><td><code>flex-grow:1</code></td><td><code>fl-grow:1</code></td><td><span class="code">flex-grow: 1 !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex-grow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexGrow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexGrow as default
};
