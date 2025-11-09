import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext, ref, computed, mergeProps } from "vue";
const ITEM_COUNT = 4;
const _sfc_main$1 = {
  setup(__props) {
    const layoutList = [
      {
        name: "Bar List",
        class: "n-bar-list"
      },
      {
        name: "Card List",
        class: "n-card-list"
      },
      {
        name: "Tile List",
        class: "n-tile-list"
      },
      {
        name: "Tag List",
        class: "n-tag-list"
      }
    ];
    const selectedLayout = ref(layoutList[0].class);
    const itemTypeList = [
      {
        name: "Outline Box",
        class: "n-list-item-type:outline-box"
      },
      {
        name: "Outline None",
        class: "n-list-item-type:outline-none"
      },
      {
        name: "Shadow",
        class: "n-list-item-type:shadow"
      },
      {
        name: "Underline",
        class: "n-list-item-type:underline"
      }
    ];
    const selectedItemType = ref(itemTypeList[0].class);
    const itemBorderRadiusList = [
      {
        name: "0",
        class: "n-list-item-border-radius:0"
      },
      {
        name: "1",
        class: "n-list-item-border-radius:1"
      },
      {
        name: "2",
        class: "n-list-item-border-radius:2"
      },
      {
        name: "3",
        class: "n-list-item-border-radius:3"
      },
      {
        name: "4",
        class: "n-list-item-border-radius:4"
      },
      {
        name: "5",
        class: "n-list-item-border-radius:5"
      },
      {
        name: "full",
        class: "n-list-item-border-radius:full"
      }
    ];
    const selectedItemBorderRadius = ref(itemBorderRadiusList[4].class);
    const itemPaddingList = [
      {
        name: "0",
        class: "n-list-item-padding:0"
      },
      {
        name: "1",
        class: "n-list-item-padding:1"
      },
      {
        name: "2",
        class: "n-list-item-padding:2"
      },
      {
        name: "3",
        class: "n-list-item-padding:3"
      },
      {
        name: "4",
        class: "n-list-item-padding:4"
      }
    ];
    const selectedItemPadding = ref(itemPaddingList[3].class);
    const className = computed(() => {
      return `n-list ${selectedLayout.value} ${selectedItemType.value} ${selectedItemBorderRadius.value} ${selectedItemPadding.value}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "overview" }, _attrs))} data-v-eb9ddbab><div class="overview-controller" data-v-eb9ddbab><div class="select" data-v-eb9ddbab><label data-v-eb9ddbab><span class="font-weight:2" data-v-eb9ddbab>레이아웃</span><span class="pos:relative w:100p" data-v-eb9ddbab><select name="layout" data-v-eb9ddbab><!--[-->`);
      ssrRenderList(layoutList, (option) => {
        _push(`<option${ssrRenderAttr("value", option.class)} data-v-eb9ddbab${ssrIncludeBooleanAttr(Array.isArray(selectedLayout.value) ? ssrLooseContain(selectedLayout.value, option.class) : ssrLooseEqual(selectedLayout.value, option.class)) ? " selected" : ""}>${ssrInterpolate(option.name)}</option>`);
      });
      _push(`<!--]--></select><span class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute" style="${ssrRenderStyle({ "right": "12px", "top": "4px" })}" data-v-eb9ddbab></span></span></label></div><div class="select" data-v-eb9ddbab><label data-v-eb9ddbab><span class="font-weight:2" data-v-eb9ddbab>아이템 타입</span><span class="pos:relative w:100p" data-v-eb9ddbab><select name="item-type" data-v-eb9ddbab><!--[-->`);
      ssrRenderList(itemTypeList, (option) => {
        _push(`<option${ssrRenderAttr("value", option.class)} data-v-eb9ddbab${ssrIncludeBooleanAttr(Array.isArray(selectedItemType.value) ? ssrLooseContain(selectedItemType.value, option.class) : ssrLooseEqual(selectedItemType.value, option.class)) ? " selected" : ""}>${ssrInterpolate(option.name)}</option>`);
      });
      _push(`<!--]--></select><span class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute" style="${ssrRenderStyle({ "right": "12px", "top": "4px" })}" data-v-eb9ddbab></span></span></label></div><div class="select" data-v-eb9ddbab><label data-v-eb9ddbab><span class="font-weight:2" data-v-eb9ddbab>아이템 모서리 둥글기 레벨</span><span class="pos:relative w:100p" data-v-eb9ddbab><select name="item-border-radius" data-v-eb9ddbab><!--[-->`);
      ssrRenderList(itemBorderRadiusList, (option) => {
        _push(`<option${ssrRenderAttr("value", option.class)} data-v-eb9ddbab${ssrIncludeBooleanAttr(Array.isArray(selectedItemBorderRadius.value) ? ssrLooseContain(selectedItemBorderRadius.value, option.class) : ssrLooseEqual(selectedItemBorderRadius.value, option.class)) ? " selected" : ""}>${ssrInterpolate(option.name)}</option>`);
      });
      _push(`<!--]--></select><span class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute" style="${ssrRenderStyle({ "right": "12px", "top": "4px" })}" data-v-eb9ddbab></span></span></label></div><div class="select" data-v-eb9ddbab><label data-v-eb9ddbab><span class="font-weight:2" data-v-eb9ddbab>아이템 패딩 레벨</span><span class="pos:relative w:100p" data-v-eb9ddbab><select name="item-padding" data-v-eb9ddbab><!--[-->`);
      ssrRenderList(itemPaddingList, (option) => {
        _push(`<option${ssrRenderAttr("value", option.class)} data-v-eb9ddbab${ssrIncludeBooleanAttr(Array.isArray(selectedItemPadding.value) ? ssrLooseContain(selectedItemPadding.value, option.class) : ssrLooseEqual(selectedItemPadding.value, option.class)) ? " selected" : ""}>${ssrInterpolate(option.name)}</option>`);
      });
      _push(`<!--]--></select><span class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute" style="${ssrRenderStyle({ "right": "12px", "top": "4px" })}" data-v-eb9ddbab></span></span></label></div></div><div class="overview-example" data-v-eb9ddbab><ul class="${ssrRenderClass(className.value)}" data-v-eb9ddbab><!--[-->`);
      ssrRenderList(ITEM_COUNT, (_, index) => {
        _push(`<li data-v-eb9ddbab>item - ${ssrInterpolate(index + 1)}</li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo/ListOverview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"리스트 (List)","description":"","frontmatter":{},"headers":[],"relativePath":"components/list.md","filePath":"components/list.md"}');
const __default__ = { name: "components/list.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="리스트-list" tabindex="-1">리스트 (List) <a class="header-anchor" href="#리스트-list" aria-label="Permalink to &quot;리스트 (List)&quot;">​</a></h1><p>해당 컴포넌트 문서는 준비 중입니다.</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
