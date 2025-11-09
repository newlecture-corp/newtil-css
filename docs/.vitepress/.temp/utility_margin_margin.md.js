import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"margin","description":"","frontmatter":{},"headers":[],"relativePath":"utility/margin/margin.md","filePath":"utility/margin/margin.md"}');
const _sfc_main = { name: "utility/margin/margin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="margin" tabindex="-1">margin <a class="header-anchor" href="#margin" aria-label="Permalink to &quot;margin&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin" target="_blank" rel="noreferrer">margin</a> 속성에 대한 유틸리티입니다.</p><p>요소의 네 면에 대해 여백 영역(<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area" target="_blank" rel="noreferrer">margin area</a>)의 크기를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>margin:auto</code></td><td><code>m:auto</code></td><td><span class="code">margin: auto !important;</span></td></tr><tr><td><code>margin:0</code></td><td><code>m:0</code></td><td><span class="code">margin: var(--space-0) !important;</span> <span class="c:weak">/* 0px */</span></td></tr><tr><td><code>margin:1</code></td><td><code>m:1</code></td><td><span class="code">margin: var(--space-1) !important;</span> <span class="c:weak">/* 4px */</span></td></tr><tr><td><code>margin:2</code></td><td><code>m:2</code></td><td><span class="code">margin: var(--space-2) !important;</span> <span class="c:weak">/* 8px */</span></td></tr><tr><td><code>margin:3</code></td><td><code>m:3</code></td><td><span class="code">margin: var(--space-3) !important;</span> <span class="c:weak">/* 12px */</span></td></tr><tr><td><code>margin:4</code></td><td><code>m:4</code></td><td><span class="code">margin: var(--space-4) !important;</span> <span class="c:weak">/* 16px */</span></td></tr><tr><td><code>margin:5</code></td><td><code>m:5</code></td><td><span class="code">margin: var(--space-5) !important;</span> <span class="c:weak">/* 20px */</span></td></tr><tr><td><code>margin:6</code></td><td><code>m:6</code></td><td><span class="code">margin: var(--space-6) !important;</span> <span class="c:weak">/* 24px */</span></td></tr><tr><td><code>margin:7</code></td><td><code>m:7</code></td><td><span class="code">margin: var(--space-7) !important;</span> <span class="c:weak">/* 28px */</span></td></tr><tr><td><code>margin:8</code></td><td><code>m:8</code></td><td><span class="code">margin: var(--space-8) !important;</span> <span class="c:weak">/* 32px */</span></td></tr><tr><td><code>margin:9</code></td><td><code>m:9</code></td><td><span class="code">margin: var(--space-9) !important;</span> <span class="c:weak">/* 36px */</span></td></tr><tr><td><code>margin:10</code></td><td><code>m:10</code></td><td><span class="code">margin: var(--space-10) !important;</span> <span class="c:weak">/* 40px */</span></td></tr></tbody></table><p>기본 여백 크기 <code>var(--spacing)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#gap">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/margin/margin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const margin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  margin as default
};
