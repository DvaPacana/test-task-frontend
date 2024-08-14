import {
  LeftColData,
  RightColData,
} from '@/components/ttf-board/ttf-board.data.ts'
import type { TCartItem } from '@/components/ttf-cart/ttf-cart.types.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBoardStore = defineStore('board', () => {
  const selectedCount = ref(0)
  const selectedRightIndex = ref()

  const leftCart = ref<TCartItem[]>([])

  const cols = <Record<'left' | 'right', TCartItem[]>>{
    left: LeftColData,
    right: RightColData,
  }

  function selectLeftCartItem(colId: number) {
    const colItem = cols.left.find((i) => i.id === colId)
    if (colItem === undefined)
      throw new Error(`Item with id ${colId} is missing`)

    const hasInCart = leftCart.value.includes(colItem)

    if (hasInCart) {
      const colIndex = leftCart.value.findIndex((i) => i.id === colId)
      leftCart.value.splice(colIndex, 1)
      selectedCount.value -= 1

      return true
    }

    if (selectedCount.value > 5) {
      return null
    }

    leftCart.value.push(colItem)
    selectedCount.value += 1

    return false
  }

  function selectRightCartItem(colIndex: number) {
    selectedRightIndex.value = colIndex
  }

  return {
    leftCart,
    cols,
    selectedCount,
    selectedRightIndex,
    selectLeftCartItem,
    selectRightCartItem,
  }
})
