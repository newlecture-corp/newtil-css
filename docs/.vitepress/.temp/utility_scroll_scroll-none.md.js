import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"scroll-none","description":"","frontmatter":{},"headers":[],"relativePath":"utility/scroll/scroll-none.md","filePath":"utility/scroll/scroll-none.md"}');
const _sfc_main = { name: "utility/scroll/scroll-none.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scroll-none" tabindex="-1">scroll-none <a class="header-anchor" href="#scroll-none" aria-label="Permalink to &quot;scroll-none&quot;">​</a></h1><p>scroll-none 속성에 대한 유틸리티입니다.</p><p><code>scroll-bar</code>가 문서 상에 보이지 않도록 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>scroll-none</code></td><td><code>scrl-none</code></td><td><span class="code">-ms-overflow-style: none;</span> <span class="c:weak">/* IE, Edge */</span><br><span class="code">scrollbar-width: none;</span> <span class="c:weak">/* Firefox */</span><br><br><span class="c:weak">/* .scroll-none::-webkit-scrollbar */</span><br><span class="code">display: none;</span> <span class="c:weak">/* Chrome, Safari, Opera */</span><br></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/scroll/scroll-none.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scrollNone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scrollNone as default
};
