<script setup lang="ts">
import type { AppItemProps, AppItemEmits } from '@/types'

defineProps<AppItemProps>()
defineEmits<AppItemEmits>()
</script>

<template>
  <button
    type="button"
    class="app-item"
    :class="{ selected }"
    @click="showRemove ? $emit('remove', item) : $emit('click', item)"
  >
    {{ item.name }}
    <span v-if="showRemove" class="remove">×</span>
    <slot />
  </button>
</template>

<style scoped>
.app-item {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid var(--border-color);
  cursor: pointer;
  user-select: none;
  background: #fff;
  font-size: var(--font-size-base);
  font-family: inherit;
  margin-bottom: var(--spacing-xs);
  transition:
    background var(--transition-fast),
    border var(--transition-fast);
  display: inline-block;
  position: relative;
  border-radius: 0;
  outline: none;
}

.app-item:hover {
  border: 2px solid var(--primary-color);
}

.app-item:focus {
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-light);
}

.app-item.selected {
  background: var(--primary-light);
  border-color: var(--primary-color);
}

.remove {
  color: var(--primary-color);
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  pointer-events: none;
}
</style>
