<script setup lang="ts">
interface Props {
  name: string
  selected?: boolean
  disabled?: boolean
}

const { selected = true } = defineProps<Props>()
defineEmits<{ click: [] }>()
</script>

<template>
  <div
    class="item-card"
    :class="{ selected, disabled }"
    @click="!disabled && $emit('click')"
  >
    {{ name }}
  </div>
</template>

<style scoped>
.item-card {
  padding: var(--spacing-md);
  text-align: center;
  color: var(--color-text);
  background: var(--color-bg);
  border: var(--border-width) solid var(--color-border);
  cursor: pointer;
  transition: all var(--transition-fast);
  user-select: none;
}

.item-card:hover:not(.disabled) {
  background: var(--color-bg-hover);
  border-color: var(--color-border-hover);
}

.item-card.selected {
  background: var(--color-primary-light);
  border-color: var(--color-primary);
}

.item-card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
