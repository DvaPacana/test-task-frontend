import {useUserItemsStore} from '@/stores/useUserItemsStore.ts';
import type {ISelectableItem} from '@/types/selectableItem.ts';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

export function useSelectableUserItems() {
  const userItemsStore = useUserItemsStore();
  const { userItems } = storeToRefs(userItemsStore);
  const { checkUserItemSelected } = userItemsStore;

  const selectableUserItems = computed<ISelectableItem[]>(() => userItems.value.map(i => ({
    ...i,
    selected: checkUserItemSelected(i.id),
  })));

  return {
    selectableUserItems,
  };
}
