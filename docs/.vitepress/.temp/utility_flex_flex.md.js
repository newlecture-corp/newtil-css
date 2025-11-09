import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex.md","filePath":"utility/flex/flex.md"}');
const _sfc_main = { name: "utility/flex/flex.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank" rel="noreferrer">flex</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item" target="_blank" rel="noreferrer"><code>flex item</code></a>이 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container" target="_blank" rel="noreferrer"><code>flex container</code></a>의 공간을 얼마나 할당받을지 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex:fill</code></td><td><code>fl:fill</code></td><td><span class="code">flex: 1 1 auto !important;</span></td></tr><tr><td><code>flex:none</code></td><td><code>fl:none</code></td><td><span class="code">flex: none !important;</span></td></tr><tr><td><code>flex:auto</code></td><td><code>fl:auto</code></td><td><span class="code">flex: auto !important;</span></td></tr><tr><td><code>flex:initial</code></td><td><code>fl:initial</code></td><td><span class="code">flex: initial !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flex = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flex as default
};
