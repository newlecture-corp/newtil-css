import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"justify-self","description":"","frontmatter":{},"headers":[],"relativePath":"utility/justify-style/justify-self.md","filePath":"utility/justify-style/justify-self.md"}');
const _sfc_main = { name: "utility/justify-style/justify-self.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="justify-self" tabindex="-1">justify-self <a class="header-anchor" href="#justify-self" aria-label="Permalink to &quot;justify-self&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self" target="_blank" rel="noreferrer">justify-self</a> 속성에 대한 유틸리티입니다.</p><p>항목이 컨테이너의 축을 따라 어떻게 정렬되는지를 설정합니다. <span class="c:weak">(참고: <a href="./justify-items.html"><code style="${ssrRenderStyle({ "color": "#bbb", "text-decoration": "underline", "text-decoration-color": "#bbb" })}">justify-items</code></a>)</span></p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>justify-self:stretch</code></td><td><code>js-self:stretch</code><br><code>js:stretch</code></td><td><span class="code">justify-self: stretch !important;</span></td></tr><tr><td><code>justify-self:center</code></td><td><code>js-self:center</code><br><code>js:center</code></td><td><span class="code">justify-self: center !important;</span></td></tr><tr><td><code>justify-self:start</code></td><td><code>js-self:start</code><br><code>js:start</code></td><td><span class="code">justify-self: start !important;</span></td></tr><tr><td><code>justify-self:end</code></td><td><code>js-self:end</code><br><code>js:end</code></td><td><span class="code">justify-self: end !important;</span></td></tr><tr><td><code>justify-self:flex-start</code></td><td><code>js-self:flex-start</code><br><code>js:flex-start</code></td><td><span class="code">justify-self: flex-start !important;</span></td></tr><tr><td><code>justify-self:flex-end</code></td><td><code>js-self:flex-end</code><br><code>js:flex-end</code></td><td><span class="code">justify-self: flex-end !important;</span></td></tr><tr><td><code>justify-self:self-start</code></td><td><code>js-self:self-start</code><br><code>js:self-start</code></td><td><span class="code">justify-self: self-start !important;</span></td></tr><tr><td><code>justify-self:self-end</code></td><td><code>js-self:self-end</code><br><code>js:self-end</code></td><td><span class="code">justify-self: self-end !important;</span></td></tr><tr><td><code>justify-self:left</code></td><td><code>js-self:left</code><br><code>js:left</code></td><td><span class="code">justify-self: left !important;</span></td></tr><tr><td><code>justify-self:right</code></td><td><code>js-self:right</code><br><code>js:right</code></td><td><span class="code">justify-self: right !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/justify-style/justify-self.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justifySelf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justifySelf as default
};
