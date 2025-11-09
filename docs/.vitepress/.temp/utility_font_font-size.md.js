import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"font-size","description":"","frontmatter":{},"headers":[],"relativePath":"utility/font/font-size.md","filePath":"utility/font/font-size.md"}');
const _sfc_main = { name: "utility/font/font-size.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="font-size" tabindex="-1">font-size <a class="header-anchor" href="#font-size" aria-label="Permalink to &quot;font-size&quot;">​</a></h1><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" target="_blank" rel="noreferrer">font-size</a> 속성에 대한 유틸리티입니다.</p><p>폰트의 크기를 설정합니다.</p><table><thead><tr><th scope="col">클래스</th><th scope="col">약어 클래스</th><th scope="col">속성</th></tr></thead><tbody><tr><td><code>font-size:1</code></td><td><code>fs:1</code></td><td><span class="code">font-size: var(--font-size-1);</span> <span class="c:weak">/* 12px */</span></td></tr><tr><td><code>font-size:2</code></td><td><code>fs:2</code></td><td><span class="code">font-size: var(--font-size-2);</span> <span class="c:weak">/* 14px */</span></td></tr><tr><td><code>font-size:3</code></td><td><code>fs:3</code></td><td><span class="code">font-size: var(--font-size-3);</span> <span class="c:weak">/* 16px */</span></td></tr><tr><td><code>font-size:4</code></td><td><code>fs:4</code></td><td><span class="code">font-size: var(--font-size-4);</span> <span class="c:weak">/* 18px */</span></td></tr><tr><td><code>font-size:5</code></td><td><code>fs:5</code></td><td><span class="code">font-size: var(--font-size-5);</span> <span class="c:weak">/* 20px */</span></td></tr><tr><td><code>font-size:6</code></td><td><code>fs:6</code></td><td><span class="code">font-size: var(--font-size-6);</span> <span class="c:weak">/* 22px */</span></td></tr><tr><td><code>font-size:7</code></td><td><code>fs:7</code></td><td><span class="code">font-size: var(--font-size-7);</span> <span class="c:weak">/* 26px */</span></td></tr><tr><td><code>font-size:8</code></td><td><code>fs:8</code></td><td><span class="code">font-size: var(--font-size-8);</span> <span class="c:weak">/* 32px */</span></td></tr><tr><td><code>font-size:9</code></td><td><code>fs:9</code></td><td><span class="code">font-size: var(--font-size-9);</span> <span class="c:weak">/* 56px */</span></td></tr></tbody></table><p>기본 폰트 크기 <code>var(--font-size)</code> 설정과 관련된 내용은 <a href="/newtil-css/guide/css-variable-list.html#font-size">여기</a>를 참고해주세요.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utility/font/font-size.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fontSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fontSize as default
};
