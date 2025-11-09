import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"word-break","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/word-break.md","filePath":"utility/text/word-break.md"}');
const _sfc_main = { name: "utility/text/word-break.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="word-break" tabindex="-1">word-break <a class="header-anchor" href="#word-break" aria-label="Permalink to &quot;word-break&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break" target="_blank" rel="noreferrer">word-break</a> 속성에 대한 유틸리티입니다.</p><p>텍스트가 해당 요소의 컨텐트 박스를 벗어날 때 줄 바꿈이 어떻게 처리될지를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>word-break:normal</code></td><td class="blank"></td><td><span class="code">word-break: normal !important;</span></td></tr><tr><td><code>word-break:break-all</code></td><td class="blank"></td><td><span class="code">word-break: break-all !important;</span></td></tr><tr><td><code>word-break:keep-all</code></td><td class="blank"></td><td><span class="code">word-break: keep-all !important;</span></td></tr><tr><td><code>word-break:break-word</code></td><td class="blank"></td><td><span class="code">word-break: break-word !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/word-break.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wordBreak = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wordBreak as default
};
