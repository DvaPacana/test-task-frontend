import { defineStore } from 'pinia'
import { type Skin, type ToBeNullValue } from '@/types'

const TOTAL_SELECTED_ITEMS = 6

export default defineStore(
  'exchangeItems',
  () => {
    const rightItem = ref<ToBeNullValue<Skin.Item>>(null)
    const leftItems = reactive<Skin.Item[]>([])

    const selectedRightItem = computed<ToBeNullValue<Skin.Item>>(() => rightItem.value)
    const selectedLeftItems = computed<Skin.Item[]>(() => leftItems)
    const totalCountItems = computed<number>(() => TOTAL_SELECTED_ITEMS)

    const setRightItem = (item: Skin.Item | null): void => {
      rightItem.value = item
    }

    const addToLeft = (item: Skin.Item): void => {
      if (!leftItems.find((i) => i.id === item.id)) {
        if (leftItems.length < totalCountItems.value) {
          leftItems.push(item)
        } else {
          console.warn('Maximum 6 items can be added to the top-left section.')
        }
      }
    }

    const checkIsSelectedLeftItems = (id: number): boolean => {
      return leftItems.some((item) => item.id === id)
    }

    const checkIsSelectedRightItem = (id: number): boolean => {
      return rightItem.value?.id === id
    }

    const removeFromLeft = (id: number): void => {
      const index = leftItems.findIndex((item) => item.id === id)
      if (index !== -1) {
        leftItems.splice(index, 1)
      }
    }

    const clearLeft = (): void => {
      leftItems.splice(0)
    }

    return {
      selectedRightItem,
      selectedLeftItems,
      totalCountItems,
      setRightItem,
      addToLeft,
      removeFromLeft,
      clearLeft,
      checkIsSelectedLeftItems,
      checkIsSelectedRightItem
    }
  },
  {
    persist: true
  }
)
