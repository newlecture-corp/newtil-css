import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"text-decoration-style","description":"","frontmatter":{},"headers":[],"relativePath":"utility/text/text-decoration-style.md","filePath":"utility/text/text-decoration-style.md"}');
const _sfc_main = { name: "utility/text/text-decoration-style.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="text-decoration-style" tabindex="-1">text-decoration-style <a class="header-anchor" href="#text-decoration-style" aria-label="Permalink to &quot;text-decoration-style&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity" target="_blank" rel="noreferrer">text-decoration-style</a> 속성에 대한 유틸리티입니다.</p><p><code>text-decoration-line</code>에 의해 지정된 선의 스타일을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>text-decoration-style:solid</code></td><td><code>text-deco-style:solid</code><br><code>txt-deco-style:solid</code></td><td><span class="code">text-decoration-style: solid !important;</span></td></tr><tr><td><code>text-decoration-style:double</code></td><td><code>text-deco-style:double</code><br><code>txt-deco-style:double</code></td><td><span class="code">text-decoration-style: double !important;</span></td></tr><tr><td><code>text-decoration-style:dotted</code></td><td><code>text-deco-style:dotted</code><br><code>txt-deco-style:dotted</code></td><td><span class="code">text-decoration-style: dotted !important;</span></td></tr><tr><td><code>text-decoration-style:wavy</code></td><td><code>text-deco-style:wavy</code><br><code>txt-deco-style:wavy</code></td><td><span class="code">text-decoration-style: wavy !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/text/text-decoration-style.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textDecorationStyle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  textDecorationStyle as default
};
