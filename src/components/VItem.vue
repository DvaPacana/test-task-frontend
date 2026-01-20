<script lang="ts" setup>
import { store, type StoreItem } from '@/state'
import { computed } from 'vue'

const props = defineProps<{
  data?: StoreItem
  isPreview?: boolean
  isRemovable?: boolean
}>()

const leftSelectedCount = computed(() => store.left.filter((item) => item.isSelected).length)
const rightSelectedCount = computed(() => store.right.filter((item) => item.isSelected).length)

const handleClick = (id?: number) => {
  if (!id) return

  const leftItem = store.left.find((item) => item.id === id)
  if (leftItem) {
    if (!leftItem.isSelected && leftSelectedCount.value >= store.leftSelectionLimit) return
    leftItem.isSelected = !leftItem.isSelected
    return
  }

  const rightItem = store.right.find((item) => item.id === id)
  if (!rightItem) return

  if (rightItem.isSelected) {
    rightItem.isSelected = false
    return
  }

  if (rightSelectedCount.value >= store.rightSelectionLimit) {
    store.right.filter((item) => item.isSelected).forEach((item) => (item.isSelected = false))
  }
  rightItem.isSelected = true
}
</script>
<template>
  <div
    :title="props.data?.isSelected ? 'Remove selection' : ''"
    :class="['item', { selected: props.data?.isSelected && !props.isPreview }]"
    @click="handleClick(props.data?.id)"
  >
    <h5>{{ props.data?.name || 'Select one Item' }}</h5>
  </div>
</template>
<style scoped>
.item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  max-width: fit-content;
  cursor: pointer;
  user-select: none;
}
.item:hover {
  border: 1px solid rgb(107, 107, 107);
}
</style>
