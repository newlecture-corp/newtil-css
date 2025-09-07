<script setup>
const props = defineProps(['text', 'link', 'newtab']);
const text = props.text;
const link = props.link;
const newtab = props.newtab;
</script>
<template>
  <a
    :href="`${link}`"
    class="w:fit-content d:flex ai:center gap:1 text-decoration-line:none color:main-3 font-size:2"
    :target="newtab ? '_blank' : ''">
    {{ text }}
    <span class="icon icon:arrow_up_right icon-size:2 icon-color:main-3"></span>
  </a>
</template>
<style scoped>
span {
  transition: transform 0.2s;
}

a:hover span {
  transform: translate(2px, -2px);
}
</style>
