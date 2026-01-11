import type {IItem} from '@/types/item.ts';
import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useTradeItemsStore = defineStore('useTradeItemsStore', () => {
  const tradeItems = ref(new Array<IItem>());
  const selectedTradeItem = ref<IItem>();

  function fetchTradeItems(items: IItem[]) {
    tradeItems.value = items;
  }

  function selectTradeItem(id: number) {
    selectedTradeItem.value = tradeItems.value.find(i => i.id == id);
  }

  return {
    tradeItems,
    selectedTradeItem,
    fetchTradeItems,
    selectTradeItem,
  };
});
