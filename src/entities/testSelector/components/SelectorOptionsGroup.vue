<script setup lang="ts">
</script>

<template>
  <div class="selector-options-group">
    <slot name="header" />
    <ul class="selector-options-group__list">
      <slot />
    </ul>
    <div class="selector-options-group__footer">
      <slot name="footer"/>
    </div >
  </div>
</template>
<style scoped lang="scss">

.selector-options-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid lightgray;
  padding: 16px;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__footer {
    margin-top: auto;
    margin-bottom: 0;
  }
}
</style>
