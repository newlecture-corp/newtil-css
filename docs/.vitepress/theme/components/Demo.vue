<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const props = defineProps({
  initialCode: { type: String, default: '' }
})

const slotRef = ref(null)
const editing = ref(false)
const code = ref('')
const originalCode = ref('')
const liveHtml = ref('')

onMounted(async () => {
  await nextTick()
  // slot 내용이 있으면 slot에서, 없으면 prop에서
  let raw = ''
  if (slotRef.value) {
    raw = slotRef.value.innerHTML
  }
  if (!raw.trim() && props.initialCode) {
    raw = props.initialCode
  }
  const cleaned = formatHtml(raw)
  code.value = cleaned
  originalCode.value = cleaned
  liveHtml.value = cleaned
})

watch(code, (val) => {
  liveHtml.value = val
})

function formatHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')   // Vue 주석 제거
    .replace(/^\s*\n/, '')              // 앞 빈 줄 제거
    .replace(/\n\s*$/, '')              // 뒤 빈 줄 제거
    .replace(/\n {4}/g, '\n')           // 4칸 들여쓰기 정리
    .trim()
}

function resetCode() {
  code.value = originalCode.value
  liveHtml.value = originalCode.value
}

function toggleEdit() {
  editing.value = !editing.value
}
</script>

<template>
  <!-- 숨겨진 slot 캡처용 -->
  <div ref="slotRef" style="display:none"><slot /></div>

  <div class="demo-container">
    <!-- 라이브 프리뷰 -->
    <div class="demo-preview" v-html="liveHtml"></div>

    <!-- 툴바 -->
    <div class="demo-toolbar">
      <button class="demo-toolbar-btn" @click="toggleEdit">
        {{ editing ? '편집 닫기' : '코드 편집' }}
      </button>
      <button v-if="editing" class="demo-toolbar-btn demo-reset" @click="resetCode">
        초기화
      </button>
    </div>

    <!-- 편집 모드: textarea -->
    <textarea
      v-if="editing"
      v-model="code"
      class="demo-editor"
      spellcheck="false"
    ></textarea>

    <!-- 보기 모드: 소스 코드 -->
    <details v-else class="demo-details">
      <summary class="demo-summary">소스 코드 보기</summary>
      <pre class="demo-source"><code v-text="code"></code></pre>
    </details>
  </div>
</template>

<style scoped>
.demo-container {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 1rem 0 1.5rem;
  overflow: hidden;
}

.demo-preview {
  padding: 1.5rem;
  background: var(--vp-c-bg);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.demo-toolbar {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-border);
}

.demo-toolbar-btn {
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
}

.demo-toolbar-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.demo-reset {
  color: var(--vp-c-text-3);
}

.demo-editor {
  width: 100%;
  min-height: 8rem;
  padding: 1rem;
  border: none;
  border-top: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
  font-size: 0.8125rem;
  line-height: 1.6;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
}

.demo-details {
  border-top: 1px solid var(--vp-c-border);
}

.demo-summary {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
  user-select: none;
  background: var(--vp-c-bg-soft);
}

.demo-summary:hover {
  color: var(--vp-c-brand-1);
}

.demo-source {
  margin: 0;
  padding: 1rem;
  background: var(--vp-c-bg-alt);
  overflow-x: auto;
  font-size: 0.8125rem;
  line-height: 1.6;
}

.demo-source code {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
  color: var(--vp-c-text-1);
}
</style>
