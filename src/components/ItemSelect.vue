<script lang="ts" setup>
import type { Item } from '@/types'
import BaseItem from '@/components/BaseItem.vue'

const props = withDefaults(
  defineProps<{
    items: Item[]
    modelValue: Item[]
    multiple?: boolean
    limit?: number
  }>(),
  {
    items: () => [],
    modelValue: () => [],
    multiple: false,
  },
)

const emit = defineEmits(['update:modelValue'])

const isItemSelected = (id: number) => {
  return !!props.modelValue.find((i) => i.id === id)
}
const isItemDisabled = (id: number) => {
  return !!props.limit && props.modelValue.length >= props.limit && !isItemSelected(id)
}

const selectItem = (item: Item) => {
  if (!props.multiple) {
    if (isItemSelected(item.id)) {
      emit('update:modelValue', [])
      return
    }
    emit('update:modelValue', [item])
    return
  }

  if (isItemSelected(item.id)) {
    emit(
      'update:modelValue',
      props.modelValue.filter((i) => i.id !== item.id),
    )
    return
  }

  emit('update:modelValue', [...props.modelValue, item])
}
</script>
<template>
  <div class="item-select">
    <BaseItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @click="selectItem(item)"
      :selected="isItemSelected(item.id)"
      :disabled="isItemDisabled(item.id)"
    />
  </div>
</template>
<style scoped>
.item-select {
  border: 1px solid black;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
