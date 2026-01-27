import { reactive } from "vue";

export interface IItem {
  id: number;
  name: string;
}

export const itemsLeft: IItem[] = [
  {
      "id": 1,
      "name": "Shoes 1"
  },
  {
      "id": 2,
      "name": "Shoes 2"
  },
  {
      "id": 3,
      "name": "Shoes 3"
  },
  {
      "id": 4,
      "name": "Shoes 4"
  },
  {
      "id": 5,
      "name": "T-shirt 1"
  },
  {
      "id": 6,
      "name": "T-shirt 2"
  },
  {
      "id": 7,
      "name": "T-shirt 3"
  },
  {
      "id": 8,
      "name": "T-shirt 4"
  }
]

export const itemsRight: IItem[] = [
  {
      "id": 11,
      "name": "Jacket 1"
  },
  {
      "id": 12,
      "name": "Jacket 2"
  },
  {
      "id": 13,
      "name": "Jacket 3"
  },
  {
      "id": 14,
      "name": "Jacket 4"
  },
  {
      "id": 15,
      "name": "Hoodie 1"
  },
  {
      "id": 16,
      "name": "Hoodie 2"
  },
  {
      "id": 17,
      "name": "Hoodie 3"
  },
  {
      "id": 18,
      "name": "Hoodie 4"
  }
]

export function useLeftItems() {
  const selectedLeftItems = reactive<IItem[]>([]);

  const selectLeftItem = (item: IItem) => {
    if (selectedLeftItems.length < 6 && !selectedLeftItems.includes(item)) {
      selectedLeftItems.push(item);
    }
  };

  const unselectLeftItem = (item: IItem) => {
    selectedLeftItems.splice(selectedLeftItems.indexOf(item), 1);
  };

  return {
    selectedLeftItems,
    itemsLeft,
    selectLeftItem,
    unselectLeftItem,
  };
}

export function useRightItems() {
  const selectedRightItem = reactive<IItem[]>([]);

  const selectRightItem = (item: IItem) => {
    if (selectedRightItem.length < 1) {
      selectedRightItem.push(item);
    } else {
      selectedRightItem[0] = item;
    }
  };

  const unselectRightItem = (item: IItem) => {
    selectedRightItem.splice(selectedRightItem.indexOf(item), 1);
  };

  return {
    selectedRightItem,
    itemsRight,
    selectRightItem,
    unselectRightItem,
  };
}
