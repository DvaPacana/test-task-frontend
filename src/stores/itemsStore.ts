import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Item } from '../types/item';

const MAX_USER_SELECTIONS = 6;

export const useItemsStore = defineStore('items', () => {
  const selectedUserItems = ref<Item[]>([]);
  const selectedAvailableItem = ref<Item | null>(null);

  const canSelectMoreUserItems = computed(() => {
    return selectedUserItems.value.length < MAX_USER_SELECTIONS;
  });

  const toggleUserItem = (item: Item) => {
    const index = selectedUserItems.value.findIndex(i => i.id === item.id);
    
    if (index !== -1) {
      // Remove item if already selected
      selectedUserItems.value.splice(index, 1);
    } else if (canSelectMoreUserItems.value) {
      // Add item if under the limit
      selectedUserItems.value.push(item);
    }
  };

  const selectAvailableItem = (item: Item) => {
    // Toggle: if same item clicked, deselect it
    if (selectedAvailableItem.value?.id === item.id) {
      selectedAvailableItem.value = null;
    } else {
      selectedAvailableItem.value = item;
    }
  };

  const isUserItemSelected = (itemId: number): boolean => {
    return selectedUserItems.value.some(i => i.id === itemId);
  };

  const isAvailableItemSelected = (itemId: number): boolean => {
    return selectedAvailableItem.value?.id === itemId;
  };

  return {
    selectedUserItems,
    selectedAvailableItem,
    canSelectMoreUserItems,
    toggleUserItem,
    selectAvailableItem,
    isUserItemSelected,
    isAvailableItemSelected
  };
});
