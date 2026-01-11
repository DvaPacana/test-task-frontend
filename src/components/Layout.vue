<script setup>
import { store } from '../state'
const { left, right } = store;
import Container from './Container.vue'
</script>

<template>
  <div class="layout">
    <div class="left">
      <Container :items="left.filter(item => item?.isSelected)" with-counter for-preview
        :selection-tip="`Select up to ${store.leftSelectionLimit} items`" />
      <Container :items="left" />
    </div>
    <div class="right">
      <Container :items="right.filter(item => item?.isSelected)" for-preview :selection-tip="`Select only one item`" />
      <Container :items="right" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
}

.left {
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.right {
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
</style>
