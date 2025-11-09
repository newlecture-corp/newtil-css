import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex-shrink","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex-shrink.md","filePath":"utility/flex/flex-shrink.md"}');
const _sfc_main = { name: "utility/flex/flex-shrink.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;flex-shrink&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink" target="_blank" rel="noreferrer">flex-shrink</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item" target="_blank" rel="noreferrer"><code>flex item</code></a>의 축소 계수를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex-shrink:0</code></td><td><code>fl-shrink:0</code></td><td><span class="code">flex-shrink: 0 !important;</span></td></tr><tr><td><code>flex-shrink:1</code></td><td><code>fl-shrink:1</code></td><td><span class="code">flex-shrink: 1 !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex-shrink.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexShrink = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexShrink as default
};
