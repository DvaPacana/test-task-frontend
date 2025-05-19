<template>
  <div class="selector">
    <div class="selector-display">
      <template v-if="modelValue.length">
        <div v-for="item in modelValue" :key="item.id" class="selector-item">
          <span>{{ item.name }}</span>
          <button type="button" @click="removeItem(item.id)" class="selector-close">&times;</button>
        </div>
      </template>
      <div style="width: 100%">Selected: {{ modelValue.length }}/{{ max }}</div>
    </div>
    <div class="selector-content">
      <button
        v-for="item in list"
        :key="item.id"
        type="button"
        class="selector-item"
        :class="{ 'selector-item--is-active': isActive(item.id) }"
        @click="select(item)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IClothItem } from '@/types'

const modelValue = defineModel<IClothItem[]>({ default: () => [] })

const props = withDefaults(
  defineProps<{
    list: IClothItem[]
    max: number
  }>(),
  {
    list: () => [],
    max: 6,
  },
)

function select(item: IClothItem) {
  if (isActive(item.id)) {
    removeItem(item.id)
  } else if (modelValue.value.length < props.max) {
    modelValue.value.push(item)
  }
}
function removeItem(id: number) {
  modelValue.value = modelValue.value.filter((item) => item.id !== id)
}
function isActive(id: number) {
  return modelValue.value.some((item) => item.id === id)
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
  justify-content: start;
  max-width: fit-content;
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
  position: relative;
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
