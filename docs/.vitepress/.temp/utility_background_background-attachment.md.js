import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"background-attachment","description":"","frontmatter":{},"headers":[],"relativePath":"utility/background/background-attachment.md","filePath":"utility/background/background-attachment.md"}');
const _sfc_main = { name: "utility/background/background-attachment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="background-attachment" tabindex="-1">background-attachment <a class="header-anchor" href="#background-attachment" aria-label="Permalink to &quot;background-attachment&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment" target="_blank" rel="noreferrer">background-attachment</a> 속성에 대한 유틸리티입니다.</p><p>배경 이미지의 위치를 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Viewport" target="_blank" rel="noreferrer">viewport</a> 내에 고정할지, 블록과 함께 스크롤할지 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>background-attachment:fixed</code></td><td><code>bg-attachment:fixed</code><br><code>bg-attch:fixed</code></td><td><span class="code">background-attachment: fixed !important;</span></td></tr><tr><td><code>background-attachment:local</code></td><td><code>bg-attachment:local</code><br><code>bg-attch:local</code></td><td><span class="code">background-attachment: local !important;</span></td></tr><tr><td><code>background-attachment:scroll</code></td><td><code>bg-attachment:scroll</code><br><code>bg-attch:scroll</code></td><td><span class="code">background-attachment: scroll !important;</span></td></tr><tr><td><code>background-attachment:initial</code></td><td><code>bg-attachment:initial</code><br><code>bg-attch:initial</code></td><td><span class="code">background-attachment: initial !important;</span></td></tr><tr><td><code>background-attachment:inherit</code></td><td><code>bg-attachment:inherit</code><br><code>bg-attch:inherit</code></td><td><span class="code">background-attachment: inherit !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/background/background-attachment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backgroundAttachment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  backgroundAttachment as default
};
