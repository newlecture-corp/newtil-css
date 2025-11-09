import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"resize","description":"","frontmatter":{},"headers":[],"relativePath":"utility/resize.md","filePath":"utility/resize.md"}');
const _sfc_main = { name: "utility/resize.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/resize" target="_blank" rel="noreferrer">resize</a> 속성에 대한 유틸리티입니다.</p><p>요소의 크기를 조정할 수 있는지 여부와 크기를 조정할 수 있는 경우 방향을 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>resize:both</code></td><td><span class="code">resize: both !important;</span></td></tr><tr><td><code>resize:horizontal</code></td><td><span class="code">resize: horizontal !important;</span></td></tr><tr><td><code>resize:vertical</code></td><td><span class="code">resize: vertical !important;</span></td></tr><tr><td><code>resize:none</code></td><td><span class="code">resize: none !important;</span></td></tr><tr><td><code>resize:block</code></td><td><span class="code">resize: block !important;</span></td></tr><tr><td><code>resize:inherit</code></td><td><span class="code">resize: inherit !important;</span></td></tr><tr><td><code>resize:inital</code></td><td><span class="code">resize: inital !important;</span></td></tr><tr><td><code>resize:unset</code></td><td><span class="code">resize: unset !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/resize.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resize = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resize as default
};
