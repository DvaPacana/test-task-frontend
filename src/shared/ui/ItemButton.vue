<script setup lang="ts">
import { Item } from "@/entities/item";

defineProps<{
  item: Item;
  selected: boolean;
  disabled: boolean;
}>();

defineEmits<{
  toggle: [item: Item];
}>();
</script>

<template>
  <button
    class="item-button"
    :class="{
      'item-button--selected': selected,
      'item-button--disabled': disabled,
    }"
    type="button"
    :disabled="disabled && !selected"
    @click="$emit('toggle', item)"
  >
    {{ item.name }}
  </button>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.item-button {
  padding: var(--space-12);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-base);
  background: var(--color-surface);
  color: var(--color-slate-900);
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all var(--transition-fast);
  text-align: center;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(.item-button--disabled) {
    border-color: var(--color-primary);
    background: rgba(75, 105, 226, 0.05);
  }

  &--selected {
    background: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);

    &:hover {
      background: var(--color-primary-hover);
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      border-color: var(--color-border);
      background: var(--color-surface);
    }
  }
}
</style>
