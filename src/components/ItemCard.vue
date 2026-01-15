<script setup lang="ts">
defineProps<{
  label: string
  selected?: boolean
  disabled?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button class="card" :class="{ selected }" :disabled @click="$emit('click')">
    {{ label }}
  </button>
</template>

<style scoped>
.card {
  height: var(--card-size, 40px);
  border: var(--border, 2px solid #000);
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  cursor: pointer;

  &.selected {
    background: #000;
    color: #fff;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
</style>
