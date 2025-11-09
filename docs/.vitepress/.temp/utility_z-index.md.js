import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"z-index","description":"","frontmatter":{},"headers":[],"relativePath":"utility/z-index.md","filePath":"utility/z-index.md"}');
const _sfc_main = { name: "utility/z-index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="z-index" tabindex="-1">z-index <a class="header-anchor" href="#z-index" aria-label="Permalink to &quot;z-index&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index" target="_blank" rel="noreferrer">z-index</a> 속성에 대한 유틸리티입니다.</p><p>위치가 지정된(<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noreferrer">positioned</a>) 요소와 그 자손, 혹은 <code>flex</code> 및 <code>grid</code> 아이템의 z축에서의 순서를 지정합니다. 겹치는 요소가 있다면 <code>z-index</code> 값이 큰 요소가 <code>z-index</code> 값이 작은 요소를 덮습니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>z-index:1</code></td><td><code>zi:1</code></td><td><span class="code">z-index: var(--z-index-1) !important;</span> <span class="c:weak">/* 1 */</span></td></tr><tr><td><code>z-index:2</code></td><td><code>zi:2</code></td><td><span class="code">z-index: var(--z-index-2) !important;</span> <span class="c:weak">/* 200 */</span></td></tr><tr><td><code>z-index:3</code></td><td><code>zi:3</code></td><td><span class="code">z-index: var(--z-index-3) !important;</span> <span class="c:weak">/* 500 */</span></td></tr><tr><td><code>z-index:4</code></td><td><code>zi:4</code></td><td><span class="code">z-index: var(--z-index-4) !important;</span> <span class="c:weak">/* 1000 */</span></td></tr><tr><td><code>z-index:5</code></td><td><code>zi:5</code></td><td><span class="code">z-index: var(--z-index-5) !important;</span> <span class="c:weak">/* 2000 */</span></td></tr></tbody></table><p>기본 순서값 <code>var(--z-index)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#z-index">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/z-index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zIndex as default
};
