import { ref, computed } from "vue";
import { Item } from "@/entities/item";

const MAX_LEFT_SELECTIONS = 6;

export const useOutfitSelection = () => {
  const selectedFromLeft = ref<Item[]>([]);
  const selectedFromRight = ref<Item | null>(null);

  const toggleLeft = (item: Item) => {
    const idx = selectedFromLeft.value.findIndex((i) => i.id === item.id);

    if (idx > -1) {
      selectedFromLeft.value.splice(idx, 1);
    } else if (selectedFromLeft.value.length < MAX_LEFT_SELECTIONS) {
      selectedFromLeft.value.push(item);
    }
  };

  const toggleRight = (item: Item) => {
    const isSameItem = selectedFromRight.value?.id === item.id;
    selectedFromRight.value = isSameItem ? null : item;
  };

  const removeFromLeft = (itemId: number) => {
    selectedFromLeft.value = selectedFromLeft.value.filter(
      (i) => i.id !== itemId,
    );
  };

  const isSelectedLeft = computed(() => (itemId: number) => {
    return selectedFromLeft.value.some((i) => i.id === itemId);
  });

  const isSelectedRight = computed(() => (itemId: number) => {
    return selectedFromRight.value?.id === itemId;
  });

  const isLeftDisabled = computed(() => (itemId: number) => {
    return (
      selectedFromLeft.value.length >= MAX_LEFT_SELECTIONS &&
      !isSelectedLeft.value(itemId)
    );
  });

  return {
    selectedFromLeft,
    selectedFromRight,
    toggleLeft,
    toggleRight,
    removeFromLeft,
    isSelectedLeft,
    isSelectedRight,
    isLeftDisabled,
  };
};
