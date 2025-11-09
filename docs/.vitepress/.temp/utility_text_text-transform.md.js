import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"text-transform","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/text-transform.md","filePath":"utility/text/text-transform.md"}');
const _sfc_main = { name: "utility/text/text-transform.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="text-transform" tabindex="-1">text-transform <a class="header-anchor" href="#text-transform" aria-label="Permalink to &quot;text-transform&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform" target="_blank" rel="noreferrer">text-transform</a> 속성에 대한 유틸리티입니다.</p><p>요소의 텍스트를 대문자화하는 방식을 지정합니다. 이를 사용하여 텍스트를 모두 대문자 또는 모두 소문자로 표시하거나 각 단어를 대문자로 표시할 수 있습니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>text-transform:lowercase</code></td><td><code>txt-transform:lowercase</code></td><td><span class="code">text-transform: lowercase !important;</span></td></tr><tr><td><code>text-transform:uppercase</code></td><td><code>txt-transform:uppercase</code></td><td><span class="code">text-transform: uppercase !important;</span></td></tr><tr><td><code>text-transform:capitalize</code></td><td><code>txt-transform:capitalize</code></td><td><span class="code">text-transform: capitalize !important;</span></td></tr><tr><td><code>text-transform:none</code></td><td><code>txt-transform:none</code></td><td><span class="code">text-transform: none !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/text-transform.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textTransform = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  textTransform as default
};
