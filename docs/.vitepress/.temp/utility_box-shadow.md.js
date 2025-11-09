import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"box-shadow","description":"","frontmatter":{},"headers":[],"relativePath":"utility/box-shadow.md","filePath":"utility/box-shadow.md"}');
const _sfc_main = { name: "utility/box-shadow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="box-shadow" tabindex="-1">box-shadow <a class="header-anchor" href="#box-shadow" aria-label="Permalink to &quot;box-shadow&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="_blank" rel="noreferrer">box-shadow</a> 속성에 대한 유틸리티입니다.</p><p>요소의 주변에 그림자 효과를 추가합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>box-shadow:0</code></td><td class="blank"></td><td><span class="code">box-shadow: none;</span></td></tr><tr><td><code>box-shadow:1</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-1);</span></td></tr><tr><td><code>box-shadow:2</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-2);</span></td></tr><tr><td><code>box-shadow:3</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-3);</span></td></tr><tr><td><code>box-shadow:4</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-4);</span></td></tr><tr><td><code>box-shadow:5</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-5);</span></td></tr><tr><td><code>box-shadow:6</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-6);</span></td></tr><tr><td><code>box-shadow:7</code></td><td class="blank"></td><td><span class="code">box-shadow: var(--box-shadow-7);</span></td></tr></tbody></table><p>기본 박스 그림자 스타일 <code>var(--box-shadow)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#box-shadow">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/box-shadow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boxShadow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  boxShadow as default
};
