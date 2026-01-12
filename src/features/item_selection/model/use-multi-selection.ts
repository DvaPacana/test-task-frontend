import type { Item } from '@/entities/item';
import { ref, type Ref } from 'vue';

export function useMultiSelection(
  maxCount = 6,
  initialSelection: Item[] = []
) {
  const selectedItems = ref<Item[]>(initialSelection);

  const toggleItem = (item: Item) => {
    const index = selectedItems.value.findIndex(i => i.id === item.id);
    if (index !== -1) {
      selectedItems.value.splice(index, 1);
    } else if (selectedItems.value.length < maxCount) {
      selectedItems.value.push(item);
    }
  };

  const isSelected = (item: Item): boolean => {
    return selectedItems.value.some(i => i.id === item.id);
  };

  return {
    selectedItems: selectedItems as Readonly<Ref<Item[]>>,
    toggleItem,
    isSelected,
  };
}