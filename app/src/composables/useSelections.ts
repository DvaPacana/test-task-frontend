import { ref } from 'vue'
import type { Item } from '../data/items'

const DEFAULT_MAX = 6

const isValidItem = (item: Item | null | undefined): item is Item =>
  Boolean(item && Number.isFinite(item.id) && typeof item.name === 'string' && item.name.trim())

export function useSelections(maxUserSelections = DEFAULT_MAX) {
  const maxSelections =
    Number.isFinite(maxUserSelections) && maxUserSelections > 0
      ? maxUserSelections
      : DEFAULT_MAX

  const selectedUserItems = ref<Item[]>([])
  const selectedUserIds = ref(new Set<number>())
  const selectedPickItem = ref<Item | null>(null)

  const toggleUserItem = (item: Item) => {
    if (!isValidItem(item)) return

    if (selectedUserIds.value.has(item.id)) {
      selectedUserItems.value = selectedUserItems.value.filter(
        (entry) => entry.id !== item.id,
      )
      selectedUserIds.value = new Set(
        [...selectedUserIds.value].filter((id) => id !== item.id),
      )
      return
    }

    if (selectedUserItems.value.length >= maxSelections) return

    selectedUserItems.value = [...selectedUserItems.value, item]
    selectedUserIds.value = new Set([...selectedUserIds.value, item.id])
  }

  const selectPickItem = (item: Item) => {
    if (!isValidItem(item)) return
    if (selectedPickItem.value?.id === item.id) {
      selectedPickItem.value = null
      return
    }
    selectedPickItem.value = item
  }

  const resetUserSelection = () => {
    selectedUserItems.value = []
    selectedUserIds.value = new Set()
  }

  return {
    selectedUserItems,
    selectedPickItem,
    toggleUserItem,
    selectPickItem,
    resetUserSelection,
    maxUserSelections: maxSelections,
  }
}

export const MAX_USER_SELECTIONS = DEFAULT_MAX
