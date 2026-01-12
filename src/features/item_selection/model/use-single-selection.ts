import type { Item } from '@/entities/item';
import { ref, type Ref } from 'vue';

export function useSingleSelection(initialSelection: Item | null = null) {
  const selectedItem = ref<Item | null>(initialSelection);

  const selectItem = (item: Item) => {
    if (selectedItem.value?.id === item.id) {
      selectedItem.value = null;
    } else {
      selectedItem.value = item;
    }
  };

  const isSelected = (item: Item): boolean => {
    return selectedItem.value?.id === item.id;
  };

  return {
    selectedItem: selectedItem as Readonly<Ref<Item | null>>,
    selectItem,
    isSelected,
  };
}