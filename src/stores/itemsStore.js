import { defineStore } from 'pinia'
import { ref } from 'vue'

export function createItemStore(id,items,maxToSelect) {
    return defineStore(id, () => {
        const itemsList = [...items];
        const selectedItems = ref([]);


        function toggleItem(item) {
            if (selectedItems.value.includes(item)) {
                selectedItems.value = selectedItems.value.filter(
                    selectedItem => selectedItem !== item
                );
            } else {
                if (maxToSelect === 1) {
                    selectedItems.value = [item];
                } else if (selectedItems.value.length < maxToSelect) {
                    selectedItems.value.push(item)
                }
            }
        }
        function clearItems(){
            selectedItems.value = []
        }

        return {
            itemsList,
            selectedItems,
            toggleItem,
            clearItems
        };
    })();
}

