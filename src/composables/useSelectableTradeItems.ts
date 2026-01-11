import {useTradeItemsStore} from '@/stores/useTradeItemsStore.ts';
import type {ISelectableItem} from '@/types/selectableItem.ts';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

export function useSelectableTradeItems() {
  const tradeItemsStore = useTradeItemsStore();
  const { tradeItems, selectedTradeItem } = storeToRefs(tradeItemsStore);

  const selectableTradeItems = computed<ISelectableItem[]>(() => tradeItems.value.map(i => ({
    ...i,
    selected: i.id === selectedTradeItem.value?.id,
  })));

  return {
    selectableTradeItems,
  };
}
