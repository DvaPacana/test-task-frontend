import { ref, computed } from 'vue'
import type { Item } from '@/types'
import { MAX_USER_ITEMS, ALL_USER_ITEMS, ALL_CHOICE_ITEMS } from '@/constants'

export function useItemSelection() {
  const selectedUserItems = ref<Item[]>([])
  const selectedChoiceItems = ref<Item[]>([])

  const userItems = computed(() =>
    ALL_USER_ITEMS.filter((item) => !selectedUserItems.value.some((sel) => sel.id === item.id)),
  )

  const choiceItems = computed(() =>
    ALL_CHOICE_ITEMS.filter((item) => !selectedChoiceItems.value.some((sel) => sel.id === item.id)),
  )

  const canAddUserItem = computed(() => selectedUserItems.value.length < MAX_USER_ITEMS)

  function removeUserItem(itemToRemove: Item) {
    selectedUserItems.value = selectedUserItems.value.filter((item) => item.id !== itemToRemove.id)
  }

  function removeChoiceItem() {
    selectedChoiceItems.value = []
  }

  function addUserItem(item: Item) {
    if (canAddUserItem.value && !selectedUserItems.value.some((i) => i.id === item.id)) {
      selectedUserItems.value = [...selectedUserItems.value, item]
    }
  }

  function addChoiceItem(item: Item) {
    selectedChoiceItems.value = [item]
  }

  return {
    selectedUserItems,
    selectedChoiceItems,
    userItems,
    choiceItems,
    canAddUserItem,
    removeUserItem,
    removeChoiceItem,
    addUserItem,
    addChoiceItem,
  }
}
