import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"border-style","description":"","frontmatter":{},"headers":[],"relativePath":"utility/border/border-style.md","filePath":"utility/border/border-style.md"}');
const _sfc_main = { name: "utility/border/border-style.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="border-style" tabindex="-1">border-style <a class="header-anchor" href="#border-style" aria-label="Permalink to &quot;border-style&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style" target="_blank" rel="noreferrer">border-style</a> 속성에 대한 유틸리티입니다.</p><p>요소의 테두리 선 스타일을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>border-style:none</code></td><td><code>bd-style:none</code></td><td><span class="code">border-style: none !important;</span></td></tr><tr><td><code>border-style:hidden</code></td><td><code>bd-style:hidden</code></td><td><span class="code">border-style: hidden !important;</span></td></tr><tr><td><code>border-style:dotted</code></td><td><code>bd-style:dotted</code></td><td><span class="code">border-style: dotted !important;</span></td></tr><tr><td><code>border-style:dashed</code></td><td><code>bd-style:dashed</code></td><td><span class="code">border-style: dashed !important;</span></td></tr><tr><td><code>border-style:double</code></td><td><code>bd-style:double</code></td><td><span class="code">border-style: double !important;</span></td></tr><tr><td><code>border-style:groove</code></td><td><code>bd-style:groove</code></td><td><span class="code">border-style: groove !important;</span></td></tr><tr><td><code>border-style:ridge</code></td><td><code>bd-style:ridge</code></td><td><span class="code">border-style: ridge !important;</span></td></tr><tr><td><code>border-style:solid</code></td><td><code>bd-style:solid</code></td><td><span class="code">border-style: solid !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/border/border-style.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const borderStyle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  borderStyle as default
};
