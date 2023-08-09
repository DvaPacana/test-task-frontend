// Utilities
import { leftBlocks, rightBlocks } from '@/utils/init'
import { AppState, Item } from '@/utils/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    leftBlock: [],
    rightBlock: []
  }),
  getters: {
    getLeftBlock: (state: AppState): Item[] => state.leftBlock,
    getRightBlock: (state: AppState): Item[] => state.rightBlock
  },
  actions: {
    setBlocks(){
        this.leftBlock = leftBlocks
        this.rightBlock = rightBlocks
    }
  }

})
