import { getLefts } from '@/services/lefts/tasks.service.js'

export default {
	namespaced: true,

	state: {
		items: [],
		maxselectedItems: 6,
		selectedIDs: new Set(),
	},

	getters: {
		disabled(state) {
			return () => state.selectedIDs.size >= state.maxselectedItems
		},
		active(state) {
			return (itemID) => state.selectedIDs.has(itemID)
		},
		selected(state) {
			return () => [...state.selectedIDs].map((id) => state.items.find((item) => item.id === id))
		},
	},

	actions: {
		async load({ state }) {
			const items = await getLefts()
			if (!items) return
			state.items = items
		},

		onItem({ state, getters }, itemID: number) {
			if (getters.disabled()) return
			state.selectedIDs.add(itemID)
		},
		offItem({ state }, itemID: number) {
			state.selectedIDs.delete(itemID)
		},
		chose({ state, dispatch }, itemID: number) {
			if (state.selectedIDs.has(itemID)) {
				return dispatch('offItem', itemID)
			}
			return dispatch('onItem', itemID)
		},
	},
}
