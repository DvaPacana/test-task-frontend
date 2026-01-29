import type {IItem} from './types.ts';
import {reactive} from 'vue';

export function useItemsStore(maxItems: number) {
  const selectedItems = reactive(new Set<IItem>());

  function selectItem(item: IItem) {
    if (selectedItems.has(item)) {
      selectedItems.delete(item)
    } else if (selectedItems.size < maxItems) {
      selectedItems.add(item);
    }
  }

  function isSelected(item: IItem) {
    return selectedItems.has(item);
  }

  return {
    selectedItems,
    selectItem,
    isSelected
  }
}