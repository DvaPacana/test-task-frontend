<script setup lang="ts">
import type { Item } from '../data/items'

defineProps<{
  item: Item
  isActive: boolean
  isDisabled?: boolean
}>()

defineEmits<{
  click: [item: Item]
}>()
</script>

<template>
  <button
    type="button"
    :class="[
      'item-card',
      {
        'item-card--active': isActive,
        'item-card--disabled': isDisabled,
      },
    ]"
    :aria-pressed="isActive"
    :aria-disabled="isDisabled"
    @click="$emit('click', item)"
  >
    {{ item.name }}
  </button>
</template>

<style scoped>
.item-card {
  border: 3px solid #222;
  border-radius: 6px;
  padding: 12px 10px;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease,
    box-shadow 0.15s ease;
}

.item-card:focus-visible {
  outline: 3px solid #5b8def;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(91, 141, 239, 0.2);
}

.item-card:hover:not(.item-card--disabled) {
  transform: translateY(-2px);
}

.item-card:active:not(.item-card--disabled) {
  transform: translateY(0);
}

.item-card--active {
  background: #111;
  color: #fff;
}

.item-card--disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
