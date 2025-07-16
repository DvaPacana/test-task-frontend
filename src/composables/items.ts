import { ref, computed } from 'vue';
import type { TItem } from '@/types';

import userItemsData from '@/data/userItems.json';
import storeItemsData from '@/data/storeItems.json';

export function useItems(selectedUsersItemsLimit = 6) {
  const userItems = ref<TItem[]>(userItemsData);
  const storeItems = ref<TItem[]>(storeItemsData);

  const selectedUserItems = ref<TItem[]>([]);
  const selectedStoreItem = ref<TItem | null>(null);

  const toggleUserItem = (item: TItem) => {
    const index = selectedUserItems.value.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      selectedUserItems.value.splice(index, 1);
    } else {
      if (selectedUserItems.value.length < selectedUsersItemsLimit) {
        selectedUserItems.value.push(item);
      }
    }
  };

  const selectStoreItem = (item: TItem) => {
    selectedStoreItem.value = item;
  };

  const resetState = () => {
    selectedUserItems.value = [];
    selectedStoreItem.value = null;
  };

  const isUserItemSelected = (item: TItem) => {
    return selectedUserItems.value.some((i) => i.id === item.id);
  };

  const isStoreItemSelected = (item: TItem) => {
    return selectedStoreItem.value?.id === item.id;
  };

  const selectionInfo = computed(() => {
    return `Выбрано: ${selectedUserItems.value.length} / ${selectedUsersItemsLimit}`;
  });

  return {
    userItems,
    storeItems,
    selectedUserItems,
    selectedStoreItem,
    toggleUserItem,
    selectStoreItem,
    isUserItemSelected,
    isStoreItemSelected,
    selectionInfo,
    resetState,
  };
}
