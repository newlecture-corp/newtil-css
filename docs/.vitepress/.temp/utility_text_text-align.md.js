import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"text-align","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/text-align.md","filePath":"utility/text/text-align.md"}');
const _sfc_main = { name: "utility/text/text-align.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="text-align" tabindex="-1">text-align <a class="header-anchor" href="#text-align" aria-label="Permalink to &quot;text-align&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" target="_blank" rel="noreferrer">text-align</a> 속성에 대한 유틸리티입니다.</p><p>블록 요소 또는 테이블 셀 박스 내부의 인라인 컨텐트(<a href="https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content" target="_blank" rel="noreferrer">Inline-level content</a>)의 수평 정렬을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>text-align:left</code></td><td><code>txt-align:left</code><br><code>txt-al:left</code></td><td><span class="code">text-align: left !important;</span></td></tr><tr><td><code>text-align:center</code></td><td><code>txt-align:center</code><br><code>txt-al:center</code></td><td><span class="code">text-align: center !important;</span></td></tr><tr><td><code>text-align:right</code></td><td><code>txt-align:right</code><br><code>txt-al:right</code></td><td><span class="code">text-align: right !important;</span></td></tr><tr><td><code>text-align:justify</code></td><td><code>txt-align:justify</code><br><code>txt-al:justify</code></td><td><span class="code">text-align: justify !important;</span></td></tr><tr><td><code>text-align:start</code></td><td><code>txt-align:start</code><br><code>txt-al:start</code></td><td><span class="code">text-align: start !important;</span></td></tr><tr><td><code>text-align:end</code></td><td><code>txt-align:end</code><br><code>txt-al:end</code></td><td><span class="code">text-align: end !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/text-align.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textAlign = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  textAlign as default
};
