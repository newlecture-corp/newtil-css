<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const dropdownButton = document.getElementById("dropdown-btn");
  const dropdownList = document.getElementById("dropdown-list");

  dropdownButton.addEventListener("click", function () {
    dropdownList.classList.toggle("active");
  });
});
</script>

<template>
  <div class="m3-dropdown">
    <button id="dropdown-btn" type="button" class="m3-btn">버튼</button>
    <ul id="dropdown-list" class="z-index:1">
      <li>
        <button>item-1</button>
      </li>
      <li>
        <button>item-2</button>
      </li>
      <li>
        <button>item-3</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
