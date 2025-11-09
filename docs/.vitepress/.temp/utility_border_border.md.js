import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"border","description":"","frontmatter":{},"headers":[],"relativePath":"utility/border/border.md","filePath":"utility/border/border.md"}');
const _sfc_main = { name: "utility/border/border.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="border" tabindex="-1">border <a class="header-anchor" href="#border" aria-label="Permalink to &quot;border&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank" rel="noreferrer">border</a> 속성에 대한 유틸리티입니다.</p><p>요소의 테두리를 설정합니다. <code>border-width</code>, <code>border-style</code>, <code>border-color</code>의 값을 설정할 수 있습니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>border</code></td><td><code>bd</code></td><td><span class="code">border: 1px solid var(--border-color) !important; </span> <span class="c:weak">/* #dee2e6 */</span></td></tr><tr><td><code>border-top</code></td><td><code>bd-top</code></td><td><span class="code">border-top: 1px solid var(--border-color) !important;</span></td></tr><tr><td><code>border-right</code></td><td><code>bd-right</code></td><td><span class="code">border-right: 1px solid var(--border-color) !important;</span></td></tr><tr><td><code>border-bottom</code></td><td><code>bd-bottom</code></td><td><span class="code">border-bottom: 1px solid var(--border-color) !important;</span></td></tr><tr><td><code>border-left</code></td><td><code>bd-left</code></td><td><span class="code">border-left: 1px solid var(--border-color) !important;</span></td></tr><tr><td><code>border:none</code></td><td><code>bd:none</code></td><td><span class="code">border-style: none !important;</span></td></tr><tr><td><code>border:0</code></td><td><code>bd:0</code></td><td><span class="code">border-style: none !important;</span></td></tr></tbody></table><p>기본 테두리 색상 <code>var(--border-color)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#border-color">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/border/border.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const border = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  border as default
};
