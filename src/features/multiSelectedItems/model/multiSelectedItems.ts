import { defineStore } from 'pinia'

const MAX_ITEMS = 6

export const useMultiSelectedItemsModel = defineStore({
  id: 'multiSelected',
  state: (): { ids: string[] } => ({
    ids: [],
  }),
  getters: {
    isEmpty: (state) => state.ids.length === 0,
  },
  actions: {
    add(payload: string): void {
      if (this.ids.includes(payload)) {
        this.ids = this.ids.filter((id) => id !== payload)
        return
      }

      if (this.ids.length >= MAX_ITEMS) {
        return
      }

      this.ids.push(payload)
    },
  },
})
