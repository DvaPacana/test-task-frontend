import { computed, inject, ref, Ref } from 'vue';
import {
  chooseItemsKey,
  selectedChooseItemsKey,
  selectedUsersItemsKey,
  userItemsKey,
} from '../constants/dataKeys';
import { IItem } from '../types/data';
import { maxSelectedUserItems } from '../constants/data';

export const useDataStore = <T extends 'user' | 'chosen'>(type: T) => {
  const itemsKey = type === 'user' ? userItemsKey : chooseItemsKey
  const selectedKey =
    type === 'user' ? selectedUsersItemsKey : selectedChooseItemsKey

  const items = inject<IItem[]>(itemsKey, []);
  const selectedIds = inject<Ref<number[]>>(selectedKey, ref([]))

  const selected = computed(() =>
    items.filter(({ id }) => selectedIds.value.includes(id))
  )

  const toggleItem = (id: number) => {
    const hasItem = !!items.find(item => item.id === id)
    if (type === 'chosen') {
      selectedIds.value = hasItem ? [id] : []
      return
    }
    const selectedIdx = selectedIds.value.indexOf(id);
    if (selectedIdx < 0) {
      if (selectedIds.value.length >= maxSelectedUserItems) {
        // TODO: Notification?
        return
      }
      selectedIds.value.push(id)
    } else {
      selectedIds.value.splice(selectedIdx, 1)
    }
  }

  return { items, selected, toggleItem, rawSelected: selectedIds }
};
