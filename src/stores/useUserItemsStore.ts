import {SELECTED_USER_ITEMS_LIMIT} from '@/configs/config.ts';
import type {IItem} from '@/types/item.ts';
import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useUserItemsStore = defineStore('useUserItemsStore', () => {
  const userItems = ref(new Array<IItem>());
  const selectedUserItems = ref(new Array<IItem>());

  function fetchUserItems(items: IItem[]) {
    userItems.value = items;
  }

  function checkUserItemSelected(id: number) {
    return selectedUserItems.value.some(i => i.id === id);
  }

  function selectUserItem(id: number) {
    const isSelected = checkUserItemSelected(id);

    if (isSelected && selectedUserItems.value.length > 1) {
      selectedUserItems.value = selectedUserItems.value.filter(i => i.id != id);
      return;
    }

    if (!isSelected && selectedUserItems.value.length < SELECTED_USER_ITEMS_LIMIT) {
      const item = userItems.value.find(i => i.id === id);
      if (!item) throw new Error(`User item with id${id} not found`);

      selectedUserItems.value.push(item);
    }
  }

  return {
    userItems,
    selectedUserItems,
    fetchUserItems,
    checkUserItemSelected,
    selectUserItem,
  };
});
