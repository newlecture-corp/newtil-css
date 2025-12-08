<script setup>
import Link from './Link.vue';

const props = defineProps({
  componentName: {
    type: String,
    default: 'Component',
    required: true
  }
});
const issueLink = `https://github.com/newlecture-corp/newtil-css/issues/new?title=[${props.componentName}]%20`;
</script>

<template>
  <div class="vp-raw">
    <ul class="d:flex ai:center gap:6 mt:6">
      <li>
        <Link
          :text="'전체 컴포넌트'"
          :link="'../guide/getting-started-component'" />
      </li>
      <li><Link :text="'이슈 제출하기'" :link="issueLink" :newtab="true" /></li>
    </ul>
  </div>
</template>
