<template>
  <div class="items">
    <template v-for="(item, index) in items" :key="item.id">
      <button class="item" @click="$emit('removeItem', index)">
        <p>{{ item.name }}</p>
      </button>
    </template>
    <slot name="count" class="count" />
  </div>
</template>

<script setup lang="ts">
import type { ItemsType } from '../types/users';

defineProps<{items: ItemsType[]}>();
defineEmits<{(event: 'removeItem', index: number): void}>();
</script>

<style scoped>
.items {
  min-height: 100px;
  min-width: 300px;
  max-width: calc(50% - 25px);
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}

.item {
  background: none;
  border: 1px solid #ccc;
  cursor: default;
}

:deep(.count) {
  position: absolute;
  bottom: -10px;
  text-align: center;
  width: 100%;
}
</style>