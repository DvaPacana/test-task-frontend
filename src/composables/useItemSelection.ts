import { ref, computed } from 'vue';
import type { Item } from '../types/item';

const MAX_SELECTED_ITEMS = 6;

export function useItemSelection(userItems: Item[]) {
  const selectedUserItemIds = ref<number[]>([]);
  const selectedAvailableItem = ref<Item | null>(null);

  const selectedUserItems = computed(() => {
    // Сохраняем порядок выбора
    return selectedUserItemIds.value
      .map((id: number): Item | undefined => userItems.find((item: Item) => item.id === id))
      .filter((item: Item | undefined): item is Item => item !== undefined);
  });

  const toggleUserItem = (id: number): void => {
    const index = selectedUserItemIds.value.indexOf(id);

    if (index > -1) {
      // Удаляем из выбранных
      selectedUserItemIds.value.splice(index, 1);
    } else {
      // Добавляем, если не достигнут лимит в MAX_SELECTED_ITEMS вещей
      if (selectedUserItemIds.value.length < MAX_SELECTED_ITEMS) {
        selectedUserItemIds.value.push(id);
      }
    }
  };

  const deselectUserItem = (id: number): void => {
    const index = selectedUserItemIds.value.indexOf(id);
    if (index > -1) {
      selectedUserItemIds.value.splice(index, 1);
    }
  };

  const selectAvailableItem = (item: Item): void => {
    // Можно выбрать только одну вещь
    if (selectedAvailableItem.value?.id === item.id) {
      selectedAvailableItem.value = null;
    } else {
      selectedAvailableItem.value = item;
    }
  };

  return {
    selectedUserItems,
    selectedAvailableItem,
    MAX_SELECTED_ITEMS,
    toggleUserItem,
    deselectUserItem,
    selectAvailableItem,
  };
}
