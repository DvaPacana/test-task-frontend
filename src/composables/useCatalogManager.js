import { computed, ref } from 'vue';

export function useCatalogManager(maxLength) {
  const selectedItems = ref([]);

  const selectItem = (item) => {
    if (!selectedItems.value.find((i) => i.id === item.id)) {
      selectedItems.value.push(item);
    }
  };

  const removeItem = (itemId) => {
    const idx = selectedItems.value.findIndex((i) => i.id === itemId);
    if (idx > -1) {
      selectedItems.value.splice(idx, 1);
    }
  };

  const isSelected = (itemId) => {
    return selectedItems.value.some((i) => i.id === itemId);
  };

  const selectionDisabled = computed(() => {
    return selectedItems.value.length >= maxLength;
  });

  const selectedCount = computed(() => selectedItems.value.length);

  return {
    selectedItems,
    selectItem,
    removeItem,
    isSelected,
    selectionDisabled,
    selectedCount,
  };
}
