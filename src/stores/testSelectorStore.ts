import { defineStore } from 'pinia'
import type { IOptionsItem } from '@/entities/testSelector/types/types'

interface IStore {
  userListMax: number,
  globalListMax: number,
  userSelectedList: IOptionsItem[],
  globalSelectedList: IOptionsItem[]
}

export const useTestSelectorStore = defineStore('testSelector', {
  state: (): IStore => ({
    userListMax: 6,
    globalListMax: 1,
    userSelectedList: [],
    globalSelectedList: [],
  }),
  getters: {},
  actions: {
    addToUserList(item: IOptionsItem) {
      if (this.userSelectedList.length === this.userListMax || this.userSelectedList.indexOf(item) >= 0) {
        return
      }

      this.userSelectedList.push(item)
    },
    addToGlobalList(item: IOptionsItem) {
      if (this.globalSelectedList.length === this.globalListMax || this.globalSelectedList.indexOf(item) >= 0) {
        return
      }

      this.globalSelectedList.push(item)
    },
    deleteItem(item: IOptionsItem, list: IOptionsItem[]) {
      if (list.indexOf(item) >= 0) {
        list.splice(list.indexOf(item), 1)
      }
    }
  }
});
