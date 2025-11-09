import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"컨테이너 (Container)","description":"","frontmatter":{},"headers":[],"relativePath":"components/container.md","filePath":"components/container.md"}');
const _sfc_main = { name: "components/container.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="컨테이너-container" tabindex="-1">컨테이너 (Container) <a class="header-anchor" href="#컨테이너-container" aria-label="Permalink to &quot;컨테이너 (Container)&quot;">​</a></h1><p>해당 컴포넌트 문서는 준비 중입니다.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/container.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const container = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  container as default
};
