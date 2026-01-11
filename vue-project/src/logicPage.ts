import {reactive, ref} from "vue";

interface Item {
    id: number
    name: string
}

const arrItems = reactive<Item[]>([
    {"id": 1, "name": "Shoes 1"},
    {"id": 2, "name": "Shoes 2"},
    {"id": 3, "name": "Shoes 3"},
    {"id": 4, "name": "Shoes 4"},
    {"id": 5, "name": "T-shirt 1"},
    {"id": 6, "name": "T-shirt 2"},
    {"id": 7, "name": "T-shirt 3"},
    {"id": 8, "name": "T-shirt 4"}
])

const arr2Items = reactive<Item[]>([
    {"id": 11, "name": "Jacket 1"},
    {"id": 12, "name": "Jacket 2"},
    {"id": 13, "name": "Jacket 3"},
    {"id": 14, "name": "Jacket 4"},
    {"id": 15, "name": "Hoodie 1"},
    {"id": 16, "name": "Hoodie 2"},
    {"id": 17, "name": "Hoodie 3"},
    {"id": 18, "name": "Hoodie 4"}
])

const selectedItems = reactive<Item[]>([])
const selectedItem = ref<Item[]>([])

export const logicPage = () => {
    const addItems = (item: Item) => {
        if (selectedItems.length < 6) {
            let index = arrItems.findIndex(el => el.id === item.id)
            if (index !== -1) {
                arrItems.splice(index, 1)
                selectedItems.push(item)
            }
        }
    }
    const deleteItems = (item: Item) => {
        let index = selectedItems.findIndex(el => el.id === item.id)
        if (index !== -1) {
            selectedItems.splice(index, 1)
            arrItems.push(item)
        }
    }
    const reassignItem = (item: Item) => {
        if (selectedItem.value.length) {
            arr2Items.push(...selectedItem.value)
        }
        let index = arr2Items.findIndex(el => el.id === item.id)
        arr2Items.splice(index, 1)
        selectedItem.value = []
        selectedItem.value.push(item)

    }

    return {
        arrItems, arr2Items, selectedItems, selectedItem, reassignItem, addItems, deleteItems
    }
}


