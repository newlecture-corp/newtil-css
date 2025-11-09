import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"align-items","description":"","frontmatter":{},"headers":[],"relativePath":"utility/align-style/align-items.md","filePath":"utility/align-style/align-items.md"}');
const _sfc_main = { name: "utility/align-style/align-items.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank" rel="noreferrer">align-items</a> 속성에 대한 유틸리티입니다.</p><p>직계 자식 요소들에 일괄적으로 <code>align-self</code> 값을 설정합니다. <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox" target="_blank" rel="noreferrer"><code>flexbox</code></a>에서는 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis" target="_blank" rel="noreferrer">cross-axis</a>에 따라, <code>grid</code> 레이아웃에서는 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Grid_Axis" target="_blank" rel="noreferrer">column-axis</a>에 따라 요소들의 정렬을 제어합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>align-items:stretch</code></td><td><code>al-items:stretch</code><br><code>ai:stretch</code></td><td><span class="code">align-items: stretch !important;</span></td></tr><tr><td><code>align-items:center</code></td><td><code>al-items:center</code><br><code>ai:center</code></td><td><span class="code">align-items: center !important;</span></td></tr><tr><td><code>align-items:start</code></td><td><code>al-items:start</code><br><code>ai:start</code></td><td><span class="code">align-items: start !important;</span></td></tr><tr><td><code>align-items:end</code></td><td><code>al-items:end</code><br><code>ai:end</code></td><td><span class="code">align-items: end !important;</span></td></tr><tr><td><code>align-items:self-start</code></td><td><code>al-items:self-start</code><br><code>ai:self-start</code></td><td><span class="code">-ms-flex-align: start !important;</span><br><span class="code">align-items: self-start !important;</span></td></tr><tr><td><code>align-items:self-end</code></td><td><code>al-items:self-end</code><br><code>ai:self-end</code></td><td><span class="code">-ms-flex-align: end !important;</span><br><span class="code">align-items: self-end !important;</span></td></tr><tr><td><code>align-items:flex-start</code></td><td><code>al-items:flex-start</code><br><code>ai:flex-start</code></td><td><span class="code">-ms-flex-align: start !important;</span><br><span class="code">align-items: flex-start !important;</span></td></tr><tr><td><code>align-items:flex-end</code></td><td><code>al-items:flex-end</code><br><code>ai:flex-end</code></td><td><span class="code">-ms-flex-align: end !important;</span><br><span class="code">align-items: flex-end !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/align-style/align-items.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alignItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alignItems as default
};
