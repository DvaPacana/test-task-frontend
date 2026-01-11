import { ref } from 'vue'
import type { Item } from '../types/item'

export function useSelection(maxSelection: number = 1) {
  const selectedItems = ref<Item[]>([])

  const toggleItem = (item: Item) => {
    const index = selectedItems.value.findIndex(i => i.id === item.id)
    const isAlreadySelected = index !== -1

    if (isAlreadySelected) {
      selectedItems.value.splice(index, 1)
      return
    }

    if (maxSelection === 1) {
      selectedItems.value = [item]
      return
    }

    const canAddMore = !maxSelection || selectedItems.value.length < maxSelection
    if (!canAddMore) {
      return
    }

    selectedItems.value.push(item)
  }

  return {
    selectedItems,
    toggleItem
  }
}
