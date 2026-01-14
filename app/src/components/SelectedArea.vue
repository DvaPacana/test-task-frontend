<script setup lang="ts">
import Chip from './Chip.vue'
import type { Item } from '../data/items'
import { TEXTS } from '../constants/texts'

defineProps<{
  items: Item[]
  single?: boolean
  emptyText?: string
}>()
</script>

<template>
  <div :class="['selected-area', { 'selected-area--single': single }]">
    <div v-if="items.length" class="chip-row">
      <Chip
        v-for="item in items"
        :key="item.id"
        :name="item.name"
      />
    </div>
    <div v-else class="placeholder" role="status" aria-live="polite">
      {{ emptyText || TEXTS.NOTHING_SELECTED }}
    </div>
  </div>
</template>

<style scoped>
.selected-area {
  border: 3px solid #222;
  border-radius: 3px;
  padding: 12px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selected-area--single {
  min-height: 120px;
  align-items: center;
  justify-content: center;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.placeholder {
  color: #777;
  font-size: 13px;
}
</style>
