import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"background-repeat","description":"","frontmatter":{},"headers":[],"relativePath":"utility/background/background-repeat.md","filePath":"utility/background/background-repeat.md"}');
const _sfc_main = { name: "utility/background/background-repeat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="background-repeat" tabindex="-1">background-repeat <a class="header-anchor" href="#background-repeat" aria-label="Permalink to &quot;background-repeat&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat" target="_blank" rel="noreferrer">background-repeat</a> 속성에 대한 유틸리티입니다.</p><p>배경 이미지가 어떻게 반복되는지를 설정합니다. 설정을 통해 배경 이미지가 수평 및 수직 축을 따라 반복되게 하거나, 반복되지 않도록 조정할 수 있습니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>background-repeat:repeat</code></td><td><code>bg-repeat:repeat</code></td><td><span class="code">background-repeat: repeat !important;</span></td></tr><tr><td><code>background-repeat:no-repeat</code></td><td><code>bg-repeat:no-repeat</code></td><td><span class="code">background-repeat: no-repeat !important;</span></td></tr><tr><td><code>background-repeat:repeat-x</code></td><td><code>bg-repeat:repeat-x</code></td><td><span class="code">background-repeat: repeat-x !important;</span></td></tr><tr><td><code>background-repeat:repeat-y</code></td><td><code>bg-repeat:repeat-y</code></td><td><span class="code">background-repeat: repeat-y !important;</span></td></tr><tr><td><code>background-repeat:space</code></td><td><code>bg-repeat:space</code></td><td><span class="code">background-repeat: space !important;</span></td></tr><tr><td><code>background-repeat:round</code></td><td><code>bg-repeat:round</code></td><td><span class="code">background-repeat: round !important;</span></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/background/background-repeat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backgroundRepeat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  backgroundRepeat as default
};
