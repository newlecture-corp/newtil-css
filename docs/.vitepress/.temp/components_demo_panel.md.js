import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"패널 데모 (Panel Demo)","description":"","frontmatter":{},"headers":[],"relativePath":"components/demo/panel.md","filePath":"components/demo/panel.md"}');
const _sfc_main = { name: "components/demo/panel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="패널-데모-panel-demo" tabindex="-1">패널 데모 (Panel Demo) <a class="header-anchor" href="#패널-데모-panel-demo" aria-label="Permalink to &quot;패널 데모 (Panel Demo)&quot;">​</a></h1><p>해당 데모 문서는 준비 중입니다.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo/panel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const panel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  panel as default
};
