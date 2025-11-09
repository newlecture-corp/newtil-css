import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"gap","description":"","frontmatter":{},"headers":[],"relativePath":"utility/gap/gap.md","filePath":"utility/gap/gap.md"}');
const _sfc_main = { name: "utility/gap/gap.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gap" tabindex="-1">gap <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;gap&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap" target="_blank" rel="noreferrer">gap</a> 속성에 대한 유틸리티입니다.</p><p>행(rows)과 열(columns) 사이의 간격의 크기를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>gap:0</code></td><td class="blank"></td><td><span class="code">gap: var(--space-0) !important;</span> <span class="c:weak">/* 0rem (0px) */</span></td></tr><tr><td><code>gap:1</code></td><td class="blank"></td><td><span class="code">gap: var(--space-1) !important;</span> <span class="c:weak">/* 0.25rem (4px) */</span></td></tr><tr><td><code>gap:2</code></td><td class="blank"></td><td><span class="code">gap: var(--space-2) !important;</span> <span class="c:weak">/* 0.5rem (8px) */</span></td></tr><tr><td><code>gap:3</code></td><td class="blank"></td><td><span class="code">gap: var(--space-3) !important;</span> <span class="c:weak">/* 0.75rem (12px) */</span></td></tr><tr><td><code>gap:4</code></td><td class="blank"></td><td><span class="code">gap: var(--space-4) !important;</span> <span class="c:weak">/* 1rem (16px) */</span></td></tr><tr><td><code>gap:5</code></td><td class="blank"></td><td><span class="code">gap: var(--space-5) !important;</span> <span class="c:weak">/* 1.25rem (20px) */</span></td></tr><tr><td><code>gap:6</code></td><td class="blank"></td><td><span class="code">gap: var(--space-6) !important;</span> <span class="c:weak">/* 1.5rem (24px) */</span></td></tr><tr><td><code>gap:7</code></td><td class="blank"></td><td><span class="code">gap: var(--space-7) !important;</span> <span class="c:weak">/* 1.75rem (28px) */</span></td></tr><tr><td><code>gap:8</code></td><td class="blank"></td><td><span class="code">gap: var(--space-8) !important;</span> <span class="c:weak">/* 2rem (32px) */</span></td></tr><tr><td><code>gap:9</code></td><td class="blank"></td><td><span class="code">gap: var(--space-9) !important;</span> <span class="c:weak">/* 2.25rem (36px) */</span></td></tr><tr><td><code>gap:10</code></td><td class="blank"></td><td><span class="code">gap: var(--space-10) !important;</span> <span class="c:weak">/* 2.5rem (40px) */</span></td></tr></tbody></table><p>기본 간격 <code>var(--spacing)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#gap">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/gap/gap.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gap as default
};
