import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"background-clip","description":"","frontmatter":{},"headers":[],"relativePath":"utility/background/background-clip.md","filePath":"utility/background/background-clip.md"}');
const _sfc_main = { name: "utility/background/background-clip.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="background-clip" tabindex="-1">background-clip <a class="header-anchor" href="#background-clip" aria-label="Permalink to &quot;background-clip&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip" target="_blank" rel="noreferrer">background-clip</a> 속성에 대한 유틸리티입니다.</p><p>요소의 배경이 <code>border box</code>, <code>padding box</code>, <code>content box</code> 등 박스의 어느 영역까지 확장될지를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>background-clip:border-box</code></td><td><code>bg-clip:border-box</code></td><td><span class="code">background-clip: border-box !important;</span></td></tr><tr><td><code>background-clip:padding-box</code></td><td><code>bg-clip:padding-box</code></td><td><span class="code">background-clip: padding-box !important;</span></td></tr><tr><td><code>background-clip:content-box</code></td><td><code>bg-clip:content-box</code></td><td><span class="code">background-clip: content-box !important;</span></td></tr><tr><td><code>background-clip:text</code></td><td><code>bg-clip:text</code></td><td><span class="code">background-clip: text !important;</span></td></tr><tr><td><code>background-clip:initial</code></td><td><code>bg-clip:initial</code></td><td><span class="code">background-clip: initial !important;</span></td></tr><tr><td><code>background-clip:inherit</code></td><td><code>bg-clip:inherit</code></td><td><span class="code">background-clip: inherit !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/background/background-clip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backgroundClip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  backgroundClip as default
};
