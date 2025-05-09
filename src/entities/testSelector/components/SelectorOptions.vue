<script setup lang="ts">
</script>

<template>
  <div class="selector-options">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.selector-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
}
</style>
