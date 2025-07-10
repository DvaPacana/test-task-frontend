<script setup lang="ts"></script>

<template>
  <div class="column">
    <slot name="title" />
    <slot />
  </div>
</template>

<style scoped>
.column {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  gap: 20px;
  padding: 1rem;
  border: 5px solid;
}
</style>
