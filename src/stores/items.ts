import { defineStore } from "pinia";
import { ref } from "vue";

export type Item = {
  id: number;
  name: string;
};

const leftSource: Item[] = [
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" }
];

const rightSource: Item[] = [
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" }
];

export const useItemsStore = defineStore("items", () => {
  const leftItems = ref(leftSource)
  const rightItems = ref(rightSource)
  const selectedLeft = ref<Item[]>([])
  const selectedRight = ref<Item | null>(null)

  function toggleLeftItem(item: Item) {
    const existsIndex = selectedLeft.value.findIndex((selected) => selected.id === item.id);
    if (existsIndex !== -1) {
      selectedLeft.value.splice(existsIndex, 1);
      return;
    }

    if (selectedLeft.value.length >= 6) {
      return;
    }

    selectedLeft.value.push(item);
  }

  function selectRightItem(item: Item) {
    if (selectedRight.value && selectedRight.value.id === item.id) {
      selectedRight.value = null;
      return;
    }

    selectedRight.value = item;
  }

  return { leftItems, rightItems, selectedLeft, selectedRight, toggleLeftItem, selectRightItem }
});

