import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext, onMounted } from "vue";
const __pageData = JSON.parse('{"title":"드로어 (Drawer)","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md","filePath":"components/drawer.md"}');
const __default__ = { name: "components/drawer.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      function toggleDrawerHandler(event) {
        const targetSelector = event.currentTarget.getAttribute("data-n-target");
        const targetEl = document.querySelector(targetSelector);
        if (targetEl) targetEl.classList.toggle("active");
      }
      function initDrawer() {
        const drawerTriggerElList = document.querySelectorAll(
          '[data-n-toggle="drawer"]'
        );
        drawerTriggerElList.forEach((el) => {
          el.addEventListener("click", toggleDrawerHandler);
        });
      }
      initDrawer();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="드로어-drawer" tabindex="-1">드로어 (Drawer) <a class="header-anchor" href="#드로어-drawer" aria-label="Permalink to &quot;드로어 (Drawer)&quot;">​</a></h1><p>해당 컴포넌트 문서는 준비 중입니다.</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
