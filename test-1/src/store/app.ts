// Utilities
import { LSNames } from '@/utils/enums'
import { leftBlocks, rightBlocks } from '@/utils/init'
import { AppState, Item } from '@/utils/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    leftBlock: [],
    rightBlock: [],
    selectedLeft: [], 
    selectedRight: {} as Item,
  }),
  getters: {
    getLeftBlock: (state: AppState): Item[] => state.leftBlock,
    getRightBlock: (state: AppState): Item[] => state.rightBlock,
    getSelectedLeft: (state: AppState): Item[] => state.selectedLeft,
    getSelectedRight: (state: AppState): Item => state.selectedRight,
  },
  actions: {
    addToSelectedLeft(val: Item) {
        const findItem = this.selectedLeft.find((e)=> e.id == val.id)
        if(!findItem){
            if(this.selectedLeft.length <= 5){
                this.selectedLeft.unshift(val)
            } else {
                this.selectedLeft.pop()
                this.selectedLeft.unshift(val)
            }
        }
        localStorage.setItem(LSNames.selectedLeft, JSON.stringify(this.selectedLeft))
    },
    removeFromSelectedLeft(val: Item){
        this.selectedLeft = this.selectedLeft.filter((e) => e.id != val.id)
        localStorage.setItem(LSNames.selectedLeft, JSON.stringify(this.selectedLeft))
    },
    rightClick(val: Item) {
        this.selectedRight = val
        localStorage.setItem(LSNames.selectedRight, JSON.stringify(this.selectedRight))
    },
    initBlocks(){
        this.leftBlock = leftBlocks
        this.rightBlock = rightBlocks

        const lsSelectedLeft = localStorage.getItem(LSNames.selectedLeft)
        const lsSelectedRight = localStorage.getItem(LSNames.selectedRight)

        if(lsSelectedLeft) this.selectedLeft = JSON.parse(lsSelectedLeft)
        if(lsSelectedRight) this.selectedRight = JSON.parse(lsSelectedRight)
    }
  }

})
