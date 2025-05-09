<script setup lang="ts">
</script>

<template>
  <div class="selector-result">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.selector-result {
  min-height: 216px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    min-height: unset;
  }

  :deep(.selector-options-item) {
    &:hover:not(.selected) {
      border: 1px solid red;
    }
  }
}
</style>
