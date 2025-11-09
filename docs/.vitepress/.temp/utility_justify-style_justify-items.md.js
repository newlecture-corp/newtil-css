import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"justify-items","description":"","frontmatter":{},"headers":[],"relativePath":"utility/justify-style/justify-items.md","filePath":"utility/justify-style/justify-items.md"}');
const _sfc_main = { name: "utility/justify-style/justify-items.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="justify-items" tabindex="-1">justify-items <a class="header-anchor" href="#justify-items" aria-label="Permalink to &quot;justify-items&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items" target="_blank" rel="noreferrer">justify-items</a> 속성에 대한 유틸리티입니다.</p><p>박스의 항목들이 축을 따라 어떻게 정렬되는지를 설정합니다. 각 항목들에 대해 <a href="./justify-self.html"><code>justify-self</code></a> 속성을 적용하는 것과 동일한 효과를 가집니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>justify-items:stretch</code></td><td><code>js-items:stretch</code><br><code>ji:stretch</code></td><td><span class="code">justify-items: stretch !important;</span></td></tr><tr><td><code>justify-items:center</code></td><td><code>js-items:center</code><br><code>ji:center</code></td><td><span class="code">justify-items: center !important;</span></td></tr><tr><td><code>justify-items:start</code></td><td><code>js-items:start</code><br><code>ji:start</code></td><td><span class="code">justify-items: start !important;</span></td></tr><tr><td><code>justify-items:end</code></td><td><code>js-items:end</code><br><code>ji:end</code></td><td><span class="code">justify-items: end !important;</span></td></tr><tr><td><code>justify-items:flex-start</code></td><td><code>js-items:flex-start</code><br><code>ji:flex-start</code></td><td><span class="code">justify-items: flex-start !important;</span></td></tr><tr><td><code>justify-items:flex-end</code></td><td><code>js-items:flex-end</code><br><code>ji:flex-end</code></td><td><span class="code">justify-items: flex-end !important;</span></td></tr><tr><td><code>justify-items:self-start</code></td><td><code>js-items:self-start</code><br><code>ji:self-start</code></td><td><span class="code">justify-items: self-start !important;</span></td></tr><tr><td><code>justify-items:self-end</code></td><td><code>js-items:self-end</code><br><code>ji:self-end</code></td><td><span class="code">justify-items: self-end !important;</span></td></tr><tr><td><code>justify-items:left</code></td><td><code>js-items:left</code><br><code>ji:left</code></td><td><span class="code">justify-items: left !important;</span></td></tr><tr><td><code>justify-items:right</code></td><td><code>js-items:right</code><br><code>ji:right</code></td><td><span class="code">justify-items: right !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/justify-style/justify-items.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justifyItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justifyItems as default
};
