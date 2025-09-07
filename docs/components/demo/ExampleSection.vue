<script setup lang="ts"></script>

<template>
  <section class="example">
    <h1 class="d:none"><slot name="h"></slot></h1>
    <slot></slot>
  </section>
</template>

<style scoped>
.example {
  display: flex;
  justify-content: center;
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
}
</style>
