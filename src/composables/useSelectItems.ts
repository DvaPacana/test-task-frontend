import { ref, computed } from 'vue'
import type { Item } from '@/types'
import { USER_SELECTION_LIMIT } from '@/constants'

export function useSelectItems({
  items,
  selectionLimit = USER_SELECTION_LIMIT
}: {
  items: Item[],
  selectionLimit: number
}) {
  const selectedItems = ref<Item[]>([])

  const isSelectionFull = computed(() => {
    return selectedItems.value.length >= selectionLimit
  })

  function selectItem(item: Item) {
    if (!selectedItems.value.includes(item)) {
      selectedItems.value.push(item)
    }
  }

  function deselectItem(item: Item) {
    selectedItems.value = selectedItems.value.filter(i => i.id !== item.id)
  }

  function replaceSelection(itemArray: Item[]) {
    selectedItems.value = itemArray
  }

  function checkItemIsSelected(item: Item) {
    return selectedItems.value.some(i => i.id === item.id)
  }

  function handleClickItem(item: Item) {

    
    const isItemSelected = checkItemIsSelected(item)

    if (isItemSelected) {
      deselectItem(item)
    } else {
      if (selectionLimit === 1) {
        replaceSelection([item])
        return
      }
      
      if (!isSelectionFull.value) {
        selectItem(item)
      }
    }
  }

  return {
    selectedItems,
    isSelectionFull,
    selectItem,
    deselectItem,
    checkItemIsSelected,
    handleClickItem,
  }
}