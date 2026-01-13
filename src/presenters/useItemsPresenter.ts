import { computed } from 'vue'
import type { Item } from '../entities/item/types/item.types'
import { useStore } from 'vuex'

export function useItemsPresenter() {
    const store = useStore()

    const selectedUserItems = computed(() => store.state.items.selectedUserItems)
    const selectedChoiceItem = computed(() => store.state.items.selectedChoiceItem)
    const selectedCount = computed(() => store.getters['items/selectedUserCount'])

    const isUserItemSelected = (item: Item) =>
        store.getters['items/isUserItemSelected'](item)

    const toggleUserItem = (item: Item) =>
        store.dispatch('items/toggleUserItem', item)

    const selectChoiceItem = (item: Item) =>
        store.dispatch('items/selectChoiceItem', item)

    return {
        selectedUserItems,
        selectedChoiceItem,
        selectedCount,
        isUserItemSelected,
        toggleUserItem,
        selectChoiceItem,
    }
}
