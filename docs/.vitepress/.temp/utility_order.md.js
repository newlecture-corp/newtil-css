import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"order","description":"","frontmatter":{},"headers":[],"relativePath":"utility/order.md","filePath":"utility/order.md"}');
const _sfc_main = { name: "utility/order.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" target="_blank" rel="noreferrer">order</a> 속성에 대한 유틸리티입니다.</p><p><code>flex</code> 또는 <code>grid</code> 컨테이너에서 항목을 배치하는 순서를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>order:1</code></td><td class="blank"></td><td><span class="code">order: var(--order-1) !important;</span> <span class="c:weak">/* -1 */</span></td></tr><tr><td><code>order:2</code></td><td class="blank"></td><td><span class="code">order: var(--order-2) !important;</span> <span class="c:weak">/* 2 */</span></td></tr><tr><td><code>order:3</code></td><td class="blank"></td><td><span class="code">order: var(--order-3) !important;</span> <span class="c:weak">/* 3 */</span></td></tr><tr><td><code>order:4</code></td><td class="blank"></td><td><span class="code">order: var(--order-4) !important;</span> <span class="c:weak">/* 4 */</span></td></tr><tr><td><code>order:5</code></td><td class="blank"></td><td><span class="code">order: var(--order-5) !important;</span> <span class="c:weak">/* 5 */</span></td></tr><tr><td><code>order:none</code></td><td class="blank"></td><td><span class="code">order: none !important;</span></td></tr></tbody></table><p>기본 순서값 <code>var(--order)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#order">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/order.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  order as default
};
