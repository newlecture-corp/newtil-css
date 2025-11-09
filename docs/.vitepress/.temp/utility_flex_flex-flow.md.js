import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"flex-flow","description":"","frontmatter":{},"headers":[],"relativePath":"utility/flex/flex-flow.md","filePath":"utility/flex/flex-flow.md"}');
const _sfc_main = { name: "utility/flex/flex-flow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;flex-flow&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow" target="_blank" rel="noreferrer">flex-flow</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container" target="_blank" rel="noreferrer"><code>flex container</code></a>의 방향과 줄 바꿈 동작을 지정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>flex-flow:row</code></td><td><code>fl-flow:row</code></td><td><span class="code">flex-flow: row !important;</span></td></tr><tr><td><code>flex-flow:row-reverse</code></td><td><code>fl-flow:row-reverse</code></td><td><span class="code">flex-flow: row-reverse !important;</span></td></tr><tr><td><code>flex-flow:column</code></td><td><code>fl-flow:column</code></td><td><span class="code">flex-flow: column !important;</span></td></tr><tr><td><code>flex-flow:column-reverse</code></td><td><code>fl-flow:column-reverse</code></td><td><span class="code">flex-flow: column-reverse !important;</span></td></tr><tr><td><code>flex-flow:nowrap</code></td><td><code>fl-flow:nowrap</code></td><td><span class="code">flex-flow: nowrap !important;</span></td></tr><tr><td><code>flex-flow:wrap</code></td><td><code>fl-flow:wrap</code></td><td><span class="code">flex-flow: wrap !important;</span></td></tr><tr><td><code>flex-flow:wrap-reverse</code></td><td><code>fl-flow:wrap-reverse</code></td><td><span class="code">flex-flow: wrap-reverse !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/flex/flex-flow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexFlow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexFlow as default
};
