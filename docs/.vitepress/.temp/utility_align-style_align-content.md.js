import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"align-content","description":"","frontmatter":{},"headers":[],"relativePath":"utility/align-style/align-content.md","filePath":"utility/align-style/align-content.md"}');
const _sfc_main = { name: "utility/align-style/align-content.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content" target="_blank" rel="noreferrer">align-content</a> 속성에 대한 유틸리티입니다.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox" target="_blank" rel="noreferrer"><code>flexbox</code></a>의 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis" target="_blank" rel="noreferrer">cross-axis</a>나 <code>grid</code>의 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Grid_Axis" target="_blank" rel="noreferrer">column-axis</a>을 따라 컨텐트 항목들 사이 및 주변의 공간 분배 방식을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>align-content:start</code></td><td><code>al-content:start</code><br><code>ac:start</code></td><td><span class="code">align-content: start !important;</span></td></tr><tr><td><code>align-content:center</code></td><td><code>al-content:center</code><br><code>ac:center</code></td><td><span class="code">align-content: center !important;</span></td></tr><tr><td><code>align-content:end</code></td><td><code>al-content:end</code><br><code>ac:end</code></td><td><span class="code">align-content: end !important;</span></td></tr><tr><td><code>align-content:flex-start</code></td><td><code>al-content:flex-start</code><br><code>ac:flex-start</code></td><td><span class="code">align-content: flex-start !important;</span></td></tr><tr><td><code>align-content:flex-end</code></td><td><code>al-content:flex-end</code><br><code>ac:flex-end</code></td><td><span class="code">align-content: flex-end !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/align-style/align-content.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alignContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alignContent as default
};
