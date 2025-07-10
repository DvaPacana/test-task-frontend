<script setup lang="ts"></script>

<template>
  <div class="selected">
    <div class="selected__list">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<style scoped>
.selected {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 5px solid;
}

.selected__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 10px;
  flex-grow: 1;
  width: 100%;
}

.selected__list:has(p:only-child) {
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
}
</style>
