import type { List, ListItem } from "@shared/types/listItem";
import { computed, ref } from "vue";

export function useSelectableList(sourceList: List, maxLength = 6) {
  const selected = ref<List>([]);

  const filtered = computed(() => {
    return sourceList.filter((item) => !selected.value.includes(item));
  });

  const unSelect = (item: ListItem) => {
    selected.value = selected.value.filter((i) => i !== item);
  };

  const select = (item: ListItem) => {
    if (selected.value.length >= maxLength) {
      selected.value.shift();
    }
    selected.value.push(item);
  };

  return {
    selected,
    filtered,
    unSelect,
    select,
  };
}
