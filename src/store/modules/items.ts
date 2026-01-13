import type { Module } from 'vuex/types/index.js'
import type { Item } from '../../entities/item/types/item.types'

export interface ItemsState {
    selectedUserItems: Item[]
    selectedChoiceItem: Item | null
}

export const items: Module<ItemsState, any> = {
    namespaced: true,

    state: () => ({
        selectedUserItems: [],
        selectedChoiceItem: null,
    }),

    getters: {
        isUserItemSelected: (state) => (item: Item) =>
            state.selectedUserItems.some(i => i.id === item.id),

        selectedUserCount: (state) => state.selectedUserItems.length,
    },

    mutations: {
        toogleUserItem(state, item: Item) {
            const index = state.selectedUserItems.findIndex(i => i.id === item.id)
            if (index !== -1) {
                state.selectedUserItems.splice(index, 1)
                return
            }

            if (state.selectedUserItems.length >= 6)
                return

            state.selectedUserItems.push(item)
        },

        setChoiseItem(state, item: Item) {
            if (state.selectedChoiceItem?.id === item.id) {
                state.selectedChoiceItem = null
                return
            }
            state.selectedChoiceItem = item
        },
    },

    actions: {
        toggleUserItem({ commit }, item: Item) {
            commit('toogleUserItem', item)
        },

        selectChoiceItem({ commit }, item: Item) {
            commit('setChoiseItem', item)
        },
    },
}
