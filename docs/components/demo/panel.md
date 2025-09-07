---
layout: false
---

<script setup lang="ts">
import { ref } from "vue";

const isNavVisible = ref(true);
</script>

<header class="n-panel n-top-panel">
  <div class="n-container px:4 lg:px:10 mx:auto"><h1>Header</h1></div>
</header>

<aside v-if="isNavVisible" class="n-panel n-side-panel">
  <nav class="n-panel n-menu-panel">
    <h1 class="text-align:center mb:4">Nav</h1>
    <ul class="of:hidden">
      <li class="bg-color:base-2 bd-radius:1">
        <button
          class="deco deco-mr:3 deco-color:base-7 icon:squares_four_fill d:flex ai:center p:2 pl:3 font-size:2 font-weight:2 cursor:pointer white-space:nowrap"
        >
          <span class="d:none lg:d:inline">Dashboard</span>
        </button>
      </li>
      <li>
        <button
          class="deco deco-mr:3 deco-color:base-7 icon:house_fill d:flex ai:center p:2 pl:3 font-size:2 font-weight:2 cursor:pointer white-space:nowrap"
        >
          <span class="d:none lg:d:inline">Home</span>
        </button>
      </li>
    </ul>
  </nav>
</aside>

<main class="n-panel n-main-panel">
  <div class="n-container px:4 lg:px:10" :class="{'mx:auto': !isNavVisible}">
    <h1>Main</h1>
  </div>
</main>

<div class="floating">
  <div class="d:flex ai:center px:3">
    <label>
      <span class="n-font:h3">side panel</span>
      <input v-model="isNavVisible" type="checkbox" class="n-toggle" />
    </label>
  </div>

  <div>
    <a href="/newtil-css/components/panel" class="n-btn n-btn-size:3">
      <span class="deco deco-color:base-1 icon:arrow_left">
        문서로 돌아가기
      </span>
    </a>
  </div>
</div>

<style scoped>
.floating {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.floating a {
  box-shadow: rgba(var(--rgb-base-10), 0.13) 0px 3px 20px,
    rgba(var(--rgb-base-10), 0.03) 0px 1px 1px 1px;
}
</style>
