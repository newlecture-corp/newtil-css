import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex-basis","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex-basis.md","filePath":"utility/flex/flex-basis.md"}');
const _sfc_main = { name: "utility/flex/flex-basis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;flex-basis&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" target="_blank" rel="noreferrer">flex-basis</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item" target="_blank" rel="noreferrer"><code>flex item</code></a>의 초기 크기를 설정합니다. <code>auto</code> 값은 항목의 크기가 그 컨텐트 크기에 따라 결정되게 합니다. 즉, <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox" target="_blank" rel="noreferrer"><code>flexbox</code></a>가 컨텐트의 실제 크기를 기반으로 <code>flex item</code>의 시작 크기를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex-basis:auto</code></td><td><code>fl-basis:auto</code></td><td><span class="code">flex-basis: auto !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex-basis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexBasis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexBasis as default
};
