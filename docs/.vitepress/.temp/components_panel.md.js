import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"패널 (Panel)","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel.md","filePath":"components/panel.md"}');
const _sfc_main = { name: "components/panel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="패널-panel" tabindex="-1">패널 (Panel) <a class="header-anchor" href="#패널-panel" aria-label="Permalink to &quot;패널 (Panel)&quot;">​</a></h1><p>해당 컴포넌트 문서는 준비 중입니다.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const panel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  panel as default
};
