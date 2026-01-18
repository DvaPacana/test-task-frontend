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
  padding: 12px 16px;
  text-align: center;
  color: #333333;
  background: #ffffff;
  border: 2px solid #333333;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.item-card:hover:not(.disabled) {
  background: #f5f5f5;
  border-color: #666666;
}

.item-card.selected {
  background: #e3f2fd;
  border-color: #4a90d9;
}

.item-card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
