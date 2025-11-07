<script setup>
import { onMounted } from 'vue';

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
})
</script>

# 드로어 (Drawer)

해당 컴포넌트 문서는 준비 중입니다.
