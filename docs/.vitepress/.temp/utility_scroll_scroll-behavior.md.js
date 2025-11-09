import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"scroll-behavior","description":"","frontmatter":{},"headers":[],"relativePath":"utility/scroll/scroll-behavior.md","filePath":"utility/scroll/scroll-behavior.md"}');
const _sfc_main = { name: "utility/scroll/scroll-behavior.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scroll-behavior" tabindex="-1">scroll-behavior <a class="header-anchor" href="#scroll-behavior" aria-label="Permalink to &quot;scroll-behavior&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior" target="_blank" rel="noreferrer">scroll-behavior</a> 속성에 대한 유틸리티입니다.</p><p>페이지 내에서의 이동이나 <code>CSSOM scrolling APIs</code>에 의해 스크롤링이 발생할 때 스크롤링 박스의 동작을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>scroll-behavior:auto</code></td><td><code>scrl-behavior:auto</code><br><code>scrl-behav:auto</code></td><td><span class="code">scroll-behavior: auto !important;</span></td></tr><tr><td><code>scroll-behavior:smooth</code></td><td><code>scrl-behavior:smooth</code><br><code>scrl-behav:smooth</code></td><td><span class="code">scroll-behavior: smooth !important;</span></td></tr><tr><td><code>scroll-behavior:inherit</code></td><td><code>scrl-behavior:inherit</code><br><code>scrl-behav:inherit</code></td><td><span class="code">scroll-behavior: inherit !important;</span></td></tr><tr><td><code>scroll-behavior:initial</code></td><td><code>scrl-behavior:initial</code><br><code>scrl-behav:initial</code></td><td><span class="code">scroll-behavior: initial !important;</span></td></tr><tr><td><code>scroll-behavior:unset</code></td><td><code>scrl-behavior:unset</code><br><code>scrl-behav:unset</code></td><td><span class="code">scroll-behavior: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/scroll/scroll-behavior.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scrollBehavior = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scrollBehavior as default
};
