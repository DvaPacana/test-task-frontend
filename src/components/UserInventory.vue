<script setup lang="ts">
import type { IItem } from '@/components/types/Item.ts'

import { ref } from 'vue'
import InventoryItem from '@/components/InventoryItem.vue'
import SelectedView from '@/components/SelectedView.vue'

interface IUserInventoryProps {
  items?: IItem[]
  maxSelectedCount?: number
}

const props = withDefaults(defineProps<IUserInventoryProps>(), {
  maxSelectedCount: 1
})
const selectedItems = ref<IItem[]>([])
const emit = defineEmits<{
  'onSelect': [IItem[]]
}>()

const selectItem = (item: IItem) => {
  if (!item) {
    return
  }

  const foundIndex = selectedItems.value.findIndex((el) => el.id === item.id)

  if (foundIndex !== -1) {
    selectedItems.value.splice(foundIndex, 1)
    emit('onSelect', selectedItems.value)
    return
  }

  if (props.maxSelectedCount === 1) {
    selectedItems.value = [item]
    emit('onSelect', selectedItems.value)
    return
  }

  if (selectedItems.value.length === props.maxSelectedCount) {
    return
  }

  selectedItems.value.push(item)

  emit('onSelect', selectedItems.value)
}
</script>

<template>
  <div class="user-inventory">
    <selected-view :items="selectedItems" :max-selected-count="maxSelectedCount"></selected-view>
    <div class="user-inventory__items">
      <inventory-item
        v-for="item in items"
        :key="item.id"
        :is-selected="selectedItems.some((el) => el.id === item.id)"
        :item="item"
        @click="selectItem(item)"
      />
    </div>
  </div>

</template>

<style scoped lang="scss">
.user-inventory {
  display: flex;
  min-height: 588px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid gray;
    border-radius: 10px;
    gap: 10px;
    padding: 20px;
  }
}
</style>
