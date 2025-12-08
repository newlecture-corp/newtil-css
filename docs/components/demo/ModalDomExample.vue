<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const openButton = document.getElementById("modal-btn");
  const closeButton = document.getElementById("close-btn");
  const modal = document.getElementById("modal");
  const modalBackdrop = document.getElementById("modal-backdrop");

  openButton.addEventListener("click", function () {
    modal.classList.remove("d:none");
    modalBackdrop.classList.remove("d:none");
    modal.classList.add("modal-fade-in");
  });

  closeButton.addEventListener("click", function () {
    modal.classList.replace("modal-fade-in", "modal-fade-out");

    setTimeout(() => {
      modal.classList.add("d:none");
      modalBackdrop.classList.add("d:none");
      modal.classList.remove("modal-fade-out");
    }, 130);
  });
});
</script>

<template>
  <button id="modal-btn" type="button" class="n-btn">모달 열기</button>

  <section id="modal" class="n-modal d:none" tabindex="-1">
    <h1 class="n-font:subtitle text-align:center">반가워요! 👋</h1>
    <div class="mt:4">
      <button id="close-btn" type="button" class="n-btn w:5">닫기</button>
    </div>
  </section>
  <div id="modal-backdrop" class="backdrop d:none"></div>
</template>

<style>
.n-modal {
  transition: transform 0.13s, opacity 0.13s;
}

.modal-fade-in {
  animation: modal-fade-in 0.13s forwards;
}

.modal-fade-out {
  animation: modal-fade-out 0.13s forwards;
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: translate(50%, -48%) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
  }
}

@keyframes modal-fade-out {
  from {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(50%, -48%) scale(0.97);
  }
}

.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
