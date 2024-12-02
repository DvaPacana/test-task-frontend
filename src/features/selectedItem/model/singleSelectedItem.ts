import { defineStore } from 'pinia'

export const useSingleSelectedItemModel = defineStore({
  id: 'singleSelected',
  state: (): { id: string | null } => ({ id: null }),
  getters: {
    isEmpty: (state) => state.id === null,
  },
  actions: {
    update(payload: string): void {
      if (this.id === payload) {
        this.id = null
        return
      }

      this.id = payload
    },
  },
})
