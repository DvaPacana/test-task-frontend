import { defineStore } from 'pinia';
import type { Item } from './types';
import { ref } from 'vue';

const STORE_NAME = 'user';

const STATIC_DATA: Item[] = [
    {
        id: 1,
        name: 'Shoes 1',
    },
    {
        id: 2,
        name: 'Shoes 2',
    },
    {
        id: 3,
        name: 'Shoes 3',
    },
    {
        id: 4,
        name: 'Shoes 4',
    },
    {
        id: 5,
        name: 'T-shirt 1',
    },
    {
        id: 6,
        name: 'T-shirt 2',
    },
    {
        id: 7,
        name: 'T-shirt 3',
    },
    {
        id: 8,
        name: 'T-shirt 4',
    },
];

export const useUserItemsStore = defineStore(STORE_NAME, () => {
    const items = ref<Item[]>(STATIC_DATA);

    const selectedItems = ref<Item[]>([]);

    const addItem = (id: number) => {
        const itemToAddIndex = items.value.findIndex((item) => item.id === id);

        const item = items.value[itemToAddIndex];

        if (itemToAddIndex < 0 || !item) return;

        items.value.splice(itemToAddIndex, 1);

        selectedItems.value.push(item);
    };

    const removeItem = (id: number) => {
        const removedItemIndex = selectedItems.value.findIndex(
            (item) => item.id === id,
        );

        const item = selectedItems.value[removedItemIndex];

        if (removedItemIndex < 0 || !item) return;

        selectedItems.value.splice(removedItemIndex, 1);

        items.value.push(item);
    };

    return {
        items,
        selectedItems,
        removeItem,
        addItem,
    };
});
