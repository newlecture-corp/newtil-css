import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"font-style","description":"","frontmatter":{},"headers":[],"relativePath":"utility/font/font-style.md","filePath":"utility/font/font-style.md"}');
const _sfc_main = { name: "utility/font/font-style.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="font-style" tabindex="-1">font-style <a class="header-anchor" href="#font-style" aria-label="Permalink to &quot;font-style&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style" target="_blank" rel="noreferrer">font-style</a> 속성에 대한 유틸리티입니다.</p><p>폰트의 스타일을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>font-style:normal</code></td><td class="blank"></td><td><span class="code">font-style: normal !important;</span></td></tr><tr><td><code>font-style:italic</code></td><td class="blank"></td><td><span class="code">font-style: italic !important;</span></td></tr><tr><td><code>font-style:inherit</code></td><td class="blank"></td><td><span class="code">font-style: inherit !important;</span></td></tr><tr><td><code>font-style:initial</code></td><td class="blank"></td><td><span class="code">font-style: initial !important;</span></td></tr><tr><td><code>font-style:unset</code></td><td class="blank"></td><td><span class="code">font-style: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/font/font-style.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fontStyle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fontStyle as default
};
