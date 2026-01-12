<template>
  <div class="items">
    <template v-for="item in items" :key="item.id">
      <button class="item" @click="$emit('selectItem', item)" :disabled="disabled">
        <p>{{ item.name }}</p>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ItemsType } from '../types/users';

defineProps<{
  items: ItemsType[], disabled: boolean}>();

  const emit = defineEmits<{(event: 'selectItem', item: ItemsType): void}>();
</script>

<style scoped>
.items {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: calc(50% - 25px);
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px 16px;
  box-sizing: border-box;
}

.item {
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>