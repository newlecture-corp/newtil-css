import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"align-self","description":"","frontmatter":{},"headers":[],"relativePath":"utility/align-style/align-self.md","filePath":"utility/align-style/align-self.md"}');
const _sfc_main = { name: "utility/align-style/align-self.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;align-self&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self" target="_blank" rel="noreferrer">align-self</a> 속성에 대한 유틸리티입니다.</p><p><code>flex</code>나 <code>grid</code> 항목의 <code>align-items</code> 값을 덮어씁니다. <code>grid</code>에서는 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas" target="_blank" rel="noreferrer">grid area</a> 내의 항목을 정렬하며, <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox" target="_blank" rel="noreferrer"><code>flexbox</code></a>에서는 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis" target="_blank" rel="noreferrer">cross-axis</a>를 기준으로 항목을 정렬합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>align-self:stretch</code></td><td><code>al-self:stretch</code><br><code>as:stretch</code></td><td><span class="code">align-self: stretch !important;</span></td></tr><tr><td><code>align-self:center</code></td><td><code>al-self:center</code><br><code>as:center</code></td><td><span class="code">align-self: center !important;</span></td></tr><tr><td><code>align-self:start</code></td><td><code>al-self:start</code><br><code>as:start</code></td><td><span class="code">align-self: start !important;</span></td></tr><tr><td><code>align-self:end</code></td><td><code>al-self:end</code><br><code>as:end</code></td><td><span class="code">align-self: end !important;</span></td></tr><tr><td><code>align-self:self-start</code></td><td><code>al-self:self-start</code><br><code>as:self-start</code></td><td><span class="code">align-self: self-start !important;</span></td></tr><tr><td><code>align-self:self-end</code></td><td><code>al-self:self-end</code><br><code>as:self-end</code></td><td><span class="code">align-self: self-end !important;</span></td></tr><tr><td><code>align-self:flex-start</code></td><td><code>al-self:flex-start</code><br><code>as:flex-start</code></td><td><span class="code">align-self: flex-start !important;</span></td></tr><tr><td><code>align-self:flex-end</code></td><td><code>al-self:flex-end</code><br><code>as:flex-end</code></td><td><span class="code">align-self: flex-end !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/align-style/align-self.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alignSelf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alignSelf as default
};
