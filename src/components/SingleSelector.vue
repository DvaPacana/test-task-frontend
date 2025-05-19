<template>
  <div class="selector">
    <div class="selector-display">
      <div v-if="modelValue">
        <span>{{ modelValue?.name }}</span>
        <button type="button" @click="modelValue = null" class="selector-close">&times;</button>
      </div>
      <span v-else style="text-transform: uppercase">Selected Item</span>
    </div>
    <div class="selector-content">
      <button
        v-for="item in list"
        :key="item.id"
        type="button"
        class="selector-item"
        :class="{ 'selector-item--is-active': isActive(item.id) }"
        @click="modelValue = item"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IClothItem } from '@/types'

const modelValue = defineModel<IClothItem | null>({ default: null })

defineProps<{
  list: IClothItem[]
}>()

function isActive(id: number) {
  return modelValue.value?.id === id
}
</script>

<style scoped>
.selector {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.selector-display {
  position: relative;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-self: end;
  width: max-content;
}
.selector-display,
.selector-content {
  border: 2px solid;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.selector-content {
  place-content: baseline;
  flex-grow: 1;
}
.selector-item {
  border: 2px solid;
  padding: 0.7rem;
  text-align: center;
  flex: 1 1 max-content;
  max-width: 200px;
}
.selector-item--is-active {
  background-color: var(--color-background-mute);
}
.selector-close {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1rem;
}
</style>
