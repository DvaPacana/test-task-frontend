<script setup lang="ts">
const {
  name,
  selected = false,
  disabled = false,
  interactive = true,
} = defineProps<{
  name: string
  selected?: boolean
  disabled?: boolean
  interactive?: boolean
}>()

const emit = defineEmits<{ click: [] }>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button
    type="button"
    class="item-card"
    :class="{ selected, 'non-interactive': !interactive }"
    :disabled="disabled || !interactive"
    :tabindex="interactive ? 0 : -1"
    :aria-pressed="interactive ? selected : undefined"
    @click="handleClick"
  >
    {{ name }}
  </button>
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
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.item-card:hover:not(:disabled) {
  background: var(--color-bg-hover);
  border-color: var(--color-border-hover);
}

.item-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.item-card.selected {
  background: var(--color-primary-light);
  border-color: var(--color-primary);
}

.item-card:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.item-card.non-interactive {
  cursor: default;
}

.item-card.non-interactive:hover {
  background: var(--color-bg);
  border-color: var(--color-border);
}
</style>
