<script setup lang="ts">
import { Item } from "@/entities/item";

defineProps<{
  item: Item;
}>();

defineEmits<{
  remove: [itemId: number];
}>();
</script>

<template>
  <div class="selection-box-item">
    <span class="selection-box-item__text">{{ item.name }}</span>
    <button
      class="selection-box-item__remove"
      type="button"
      :aria-label="`Remove ${item.name}`"
      @click="$emit('remove', item.id)"
    >
      ✕
    </button>
  </div>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.selection-box-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-8) var(--space-12);
  border-radius: var(--radius-base);
  font-weight: 500;
  font-size: 13px;
  width: fit-content;
  transition: background var(--transition-fast);

  &:hover {
    background: var(--color-primary-hover);
  }
}

.selection-box-item__text {
  line-height: 1;
}

.selection-box-item__remove {
  background: none;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
