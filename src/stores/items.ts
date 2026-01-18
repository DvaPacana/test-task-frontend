import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Item } from '@/types'
import { USER_ITEMS, AVAILABLE_ITEMS, MAX_USER_ITEMS } from '@/data/items'

export const useItemsStore = defineStore('items', () => {
  const selectedUserItems = ref<Item[]>([])
  const selectedAvailableItem = ref<Item | null>(null)

  const canSelectMoreUserItems = computed(
    () => selectedUserItems.value.length < MAX_USER_ITEMS
  )

  const selectedUserItemsCount = computed(() => selectedUserItems.value.length)

  const isUserItemSelected = (id: number): boolean =>
    selectedUserItems.value.some((item) => item.id === id)

  const isAvailableItemSelected = (id: number): boolean =>
    selectedAvailableItem.value?.id === id

  const toggleUserItem = (item: Item): void => {
    const index = selectedUserItems.value.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      selectedUserItems.value.splice(index, 1)
    } else if (canSelectMoreUserItems.value) {
      selectedUserItems.value.push(item)
    }
  }

  const toggleAvailableItem = (item: Item): void => {
    if (selectedAvailableItem.value?.id === item.id) {
      selectedAvailableItem.value = null
    } else {
      selectedAvailableItem.value = item
    }
  }

  const clearUserSelection = (): void => {
    selectedUserItems.value = []
  }

  const clearAvailableSelection = (): void => {
    selectedAvailableItem.value = null
  }

  return {
    // State
    selectedUserItems,
    selectedAvailableItem,
    // Getters
    canSelectMoreUserItems,
    selectedUserItemsCount,
    // Data
    userItems: USER_ITEMS,
    availableItems: AVAILABLE_ITEMS,
    maxUserItems: MAX_USER_ITEMS,
    // Actions
    isUserItemSelected,
    isAvailableItemSelected,
    toggleUserItem,
    toggleAvailableItem,
    clearUserSelection,
    clearAvailableSelection,
  }
})