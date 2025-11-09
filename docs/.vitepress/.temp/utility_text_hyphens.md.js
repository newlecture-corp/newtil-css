import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"hyphens","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/hyphens.md","filePath":"utility/text/hyphens.md"}');
const _sfc_main = { name: "utility/text/hyphens.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hyphens" tabindex="-1">hyphens <a class="header-anchor" href="#hyphens" aria-label="Permalink to &quot;hyphens&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens" target="_blank" rel="noreferrer">hyphens</a> 속성에 대한 유틸리티입니다.</p><p>텍스트가 줄 바꿈될 때 단어를 어떻게 하이픈화할지를 지정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>hyphens:manual</code></td><td><code>hyphen:manual</code><br><code>hypn:manual</code></td><td><span class="code">hyphens: manual !important;</span></td></tr><tr><td><code>hyphens:auto</code></td><td><code>hyphen:auto</code><br><code>hypn:auto</code></td><td><span class="code">hyphens: auto !important;</span></td></tr><tr><td><code>hyphens:none</code></td><td><code>hyphen:none</code><br><code>hypn:none</code></td><td><span class="code">hyphens: none !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/hyphens.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hyphens = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hyphens as default
};
