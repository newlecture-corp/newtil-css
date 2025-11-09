import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"white-space","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/white-space.md","filePath":"utility/text/white-space.md"}');
const _sfc_main = { name: "utility/text/white-space.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="white-space" tabindex="-1">white-space <a class="header-anchor" href="#white-space" aria-label="Permalink to &quot;white-space&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space" target="_blank" rel="noreferrer">white-space</a> 속성에 대한 유틸리티입니다.</p><p>요소 내부의 공백(<a href="https://developer.mozilla.org/en-US/docs/Glossary/Whitespace" target="_blank" rel="noreferrer">Whitespace</a>) 처리 방식을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>white-space:normal</code></td><td class="blank"></td><td><span class="code">white-space: normal !important;</span></td></tr><tr><td><code>white-space:nowrap</code></td><td class="blank"></td><td><span class="code">white-space: nowrap !important;</span></td></tr><tr><td><code>white-space:pre</code></td><td class="blank"></td><td><span class="code">white-space: pre !important;</span></td></tr><tr><td><code>white-space:pre-line</code></td><td class="blank"></td><td><span class="code">white-space: pre-line !important;</span></td></tr><tr><td><code>white-space:pre-wrap</code></td><td class="blank"></td><td><span class="code">white-space: pre-wrap !important;</span></td></tr><tr><td><code>white-space:break-spaces</code></td><td class="blank"></td><td><span class="code">white-space: break-spaces !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/white-space.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whiteSpace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  whiteSpace as default
};
