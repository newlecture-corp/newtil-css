import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"text-decoration-line","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/text-decoration-line.md","filePath":"utility/text/text-decoration-line.md"}');
const _sfc_main = { name: "utility/text/text-decoration-line.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="text-decoration-line" tabindex="-1">text-decoration-line <a class="header-anchor" href="#text-decoration-line" aria-label="Permalink to &quot;text-decoration-line&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line" target="_blank" rel="noreferrer">text-decoration-line</a> 속성에 대한 유틸리티입니다.</p><p>텍스트에 사용되는 장식의 종류를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">의사 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>text-decoration-line:underline</code></td><td><code>text-deco-line:underline</code><br><code>txt-deco-line:underline</code><br><code>txt-deco-ln:underline</code></td><td><code>hover:text-decoration-line:underline</code><br><code>hover:text-deco-line:underline</code><br><code>hover:txt-deco-line:underline</code><br><code>hover:txt-deco-ln:underline</code></td><td><span class="code">text-decoration-line: underline !important;</span></td></tr><tr><td><code>text-decoration-line:line-through</code></td><td><code>text-deco-line:line-through</code><br><code>txt-deco-line:line-through</code><br><code>txt-deco-ln:line-through</code></td><td></td><td><span class="code">text-decoration-line: line-through !important;</span></td></tr><tr><td><code>text-decoration-line:overline</code></td><td><code>text-deco-line:overline</code><br><code>txt-deco-line:overline</code><br><code>txt-deco-ln:overline</code></td><td></td><td><span class="code">text-decoration-line: underline !important;</span></td></tr><tr><td><code>text-decoration-line:none</code></td><td><code>text-deco-line:none</code><br><code>txt-deco-line:none</code><br><code>txt-deco-ln:none</code></td><td></td><td><span class="code">text-decoration-line: none !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/text-decoration-line.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textDecorationLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  textDecorationLine as default
};
