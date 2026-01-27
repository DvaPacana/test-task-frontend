import { defineStore } from 'pinia';
import type { Item } from './types';
import { ref } from 'vue';

const STORE_NAME = 'items';

const STATIC_DATA = [
    {
        id: 11,
        name: 'Jacket 1',
    },
    {
        id: 12,
        name: 'Jacket 2',
    },
    {
        id: 13,
        name: 'Jacket 3',
    },
    {
        id: 14,
        name: 'Jacket 4',
    },
    {
        id: 15,
        name: 'Hoodie 1',
    },
    {
        id: 16,
        name: 'Hoodie 2',
    },
    {
        id: 17,
        name: 'Hoodie 3',
    },
    {
        id: 18,
        name: 'Hoodie 4',
    },
];

export const useItemsStore = defineStore(STORE_NAME, () => {
    const items = ref<Item[]>(STATIC_DATA);

    const selectedItem = ref<Item | null>();

    const addItem = (id: number) => {
        const itemToAdd = items.value.find((item) => item.id === id);

        console.log(itemToAdd);

        if (!itemToAdd) return;

        selectedItem.value = itemToAdd;
    };

    const removeItem = () => {
        selectedItem.value = null;
    };

    return {
        items,
        selectedItem,
        removeItem,
        addItem,
    };
});
