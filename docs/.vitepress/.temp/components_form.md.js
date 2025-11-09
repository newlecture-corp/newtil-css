import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
const __pageData = JSON.parse('{"title":"폼 (Form)","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md"}');
const __default__ = { name: "components/form.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="폼-form" tabindex="-1">폼 (Form) <a class="header-anchor" href="#폼-form" aria-label="Permalink to &quot;폼 (Form)&quot;">​</a></h1><p>해당 컴포넌트 문서는 준비 중입니다.</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
