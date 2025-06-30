<script setup lang="ts" generic="T">
import { computed, reactive } from 'vue'

interface IItemsBlockProps {
  items?: T[]
  idAttr?: keyof T
  maxSelected?: number
}
const { items = [], maxSelected = Infinity } = defineProps<IItemsBlockProps>()
const selected = defineModel<Set<T>>({ default: () => reactive(new Set()) })

const firstSelected = computed(() => selected.value.values().next().value)
const toggle = (item: T) => {
  if (selected.value.has(item)) {
    selected.value.delete(item)
  } else {
    selected.value.add(item)
  }
}

const select = (item: T) => {
  if (maxSelected <= 0) return
  if (selected.value.size >= maxSelected && firstSelected.value) {
    selected.value.delete(firstSelected.value)
  }
  toggle(item)
}
</script>

<template>
  <div class="items-block">
    <div
      class="item"
      v-for="(item, idx) in items"
      :key="idAttr ? String(item[idAttr]) : idx"
      @click.stop="select(item)"
    >
      <slot v-bind="{ item, selected: selected.has(item) }" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.items-block {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  border: 1px solid black;
}

.item {
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}
</style>
