import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"opacity","description":"","frontmatter":{},"headers":[],"relativePath":"utility/opacity.md","filePath":"utility/opacity.md"}');
const _sfc_main = { name: "utility/opacity.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="opacity" tabindex="-1">opacity <a class="header-anchor" href="#opacity" aria-label="Permalink to &quot;opacity&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity" target="_blank" rel="noreferrer">opacity</a> 속성에 대한 유틸리티입니다.</p><p>요소의 불투명도를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>opacity:0</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-0) !important;</span> <span class="c:weak">/* 0 */</span></td></tr><tr><td><code>opacity:1</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-1) !important;</span> <span class="c:weak">/* 0.10 */</span></td></tr><tr><td><code>opacity:2</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-2) !important;</span> <span class="c:weak">/* 0.18 */</span></td></tr><tr><td><code>opacity:3</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-3) !important;</span> <span class="c:weak">/* 0.30 */</span></td></tr><tr><td><code>opacity:4</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-4) !important;</span> <span class="c:weak">/* 0.45 */</span></td></tr><tr><td><code>opacity:5</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-5) !important;</span> <span class="c:weak">/* 0.50 */</span></td></tr><tr><td><code>opacity:6</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-6) !important;</span> <span class="c:weak">/* 0.57 */</span></td></tr><tr><td><code>opacity:7</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-7) !important;</span> <span class="c:weak">/* 0.70 */</span></td></tr><tr><td><code>opacity:8</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-8) !important;</span> <span class="c:weak">/* 0.80 */</span></td></tr><tr><td><code>opacity:9</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-9) !important;</span> <span class="c:weak">/* 0.90 */</span></td></tr><tr><td><code>opacity:10</code></td><td class="blank"></td><td><span class="code">opacity: var(--opacity-10) !important;</span> <span class="c:weak">/* 1 */</span></td></tr></tbody></table><p>기본 불투명도 <code>var(--opacity)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#opacity">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/opacity.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const opacity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  opacity as default
};
