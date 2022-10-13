import { createStore } from 'vuex'

export default createStore({
    state: () => ({
        availableItems: [
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
        ],
        availableItem: [
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
        ],
        selectedItem: {},
        selectedItems: []

    }),
    mutations: {
        setSelectedItem(state, id) {
            state.selectedItem = state.availableItem.find(item => item.id === id)
        },
        setSelectedItems(state, id) {
            state.selectedItems.length < 6 && !state.selectedItems.some(n => n.id === id)
            ? state.selectedItems.push(state.availableItems.find(item => item.id === id))
            : null
        },
        removeSelectedItem(state) {
            state.selectedItem = {}
        },
        removeSelectedItems(state, id) {
            state.selectedItems = state.selectedItems.filter(item => item.id != id)
        }
    },
    getters: {
        AVAILABLE_ITEM(state) {
            return state.availableItem
        },
        AVAILABLE_ITEMS(state) {
            return state.availableItems
        },
        SELECTED_ITEM(state) {
            return state.selectedItem
        },
        SELECTED_ITEMS(state) {
            return state.selectedItems
        },
    },
    actions: {

    }
})