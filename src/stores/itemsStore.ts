import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { Item, ItemsData } from '../types';
import data from './data.json';

export const useItemsStore = defineStore('items', () => {
    // TODO: можно сильно упростить, но для наглядности решение такое
    const itemsData = <ItemsData>data;
    const receivedData = ref<ItemsData>()

    const selectedLeftTopBlockItems = ref<Item[]>([]);
    const selectedRightTopBlockItem = ref<Item | null>(null);

    const leftBottomBlockItems = computed<Item[]>(() => receivedData.value?.left_block || []);
    const rightBottomBlockItems = computed<Item[]>(() => receivedData.value?.right_block || []);
    
    const isMaxChanged = computed<boolean>(() => selectedLeftTopBlockItems.value.length === 6);
    const isLoading = ref<boolean>(false);
    const errorMessage = ref<string | null>(null)
    
    const fetchItems = (): Promise<ItemsData> => {
        isLoading.value = true;
        // Simulate an API call to fetch items
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(itemsData)
                }, 300);
            } catch (error) {
                console.error('Error fetching items:', error);
                reject(error);
            } finally {
                isLoading.value = false;
            }
        });
    }

    const getBlocks = async (): Promise<void> => {
        try {
            const blocks = await fetchItems();
            for (const block of Object.values(blocks)) {
                for (const item of block) item.isSelected = false;
            }
            receivedData.value = blocks;
        } catch (error) {
            errorMessage.value = 'problem loading data'
            console.error('Error fetching items:', error);
        }
    }

    const selectLeftBlockItem = (item: Item): void | string =>  {
        const haveItem = selectedLeftTopBlockItems.value.find(itm => itm.id === item.id)
        errorMessage.value = null
        switch (true) {
            case isMaxChanged.value:
                errorMessage.value = 'you have selected the maximum number of items'
                break; 
            case !!haveItem:
                errorMessage.value = 'the item has already been selected'
                break; 
            default: 
                item.isSelected = true
                selectedLeftTopBlockItems.value.push(item);
                break;
        }
    }

    const selectRightBlockItem = (item: Item): void =>  {
        const itm = receivedData.value?.right_block.find((el) => el.isSelected)
        if (itm) itm.isSelected = false
        item.isSelected = true
        selectedRightTopBlockItem.value = item;
    }

    const deselectLeftTopBlockItem = (item: Item): void => {
        item.isSelected = false
        selectedLeftTopBlockItems.value = selectedLeftTopBlockItems.value.filter((itm) => itm.id !== item.id);
    }

    const deselectRightTopBlockItem = () => {
        const itm = receivedData.value?.right_block.find((el) => el.isSelected)
        if (itm) itm.isSelected = false
        selectedRightTopBlockItem.value = null
    }

    return {
        selectedLeftTopBlockItems,
        selectedRightTopBlockItem,
        leftBottomBlockItems,
        rightBottomBlockItems,
        isMaxChanged,
        errorMessage,
        getBlocks,
        selectLeftBlockItem,
        selectRightBlockItem,
        deselectLeftTopBlockItem,
        deselectRightTopBlockItem,
    };
});