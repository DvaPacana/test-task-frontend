import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Item {
  id: number
  name: string
}

export const useItemsStore = defineStore('items', () => {
  // исходные коллекции
  const availableLeftItems = ref<Item[]>([
    { id: 1, name: 'Shoes 1' },
    { id: 2, name: 'Shoes 2' },
    { id: 3, name: 'Shoes 3' },
    { id: 4, name: 'Shoes 4' },
    { id: 5, name: 'T-shirt 1' },
    { id: 6, name: 'T-shirt 2' },
    { id: 7, name: 'T-shirt 3' },
    { id: 8, name: 'T-shirt 4' },
  ])
  const availableRightItems = ref<Item[]>([
    { id: 11, name: 'Jacket 1' },
    { id: 12, name: 'Jacket 2' },
    { id: 13, name: 'Jacket 3' },
    { id: 14, name: 'Jacket 4' },
    { id: 15, name: 'Hoodie 1' },
    { id: 16, name: 'Hoodie 2' },
    { id: 17, name: 'Hoodie 3' },
    { id: 18, name: 'Hoodie 4' },
  ])

  // текущее состояние выбора
  const selectedLeftItems = ref<Item[]>([])
  const selectedRightItem = ref<Item | null>(null)

  // вычисляемые свойства (аналог getters)
  const isLeftSelected = (item: Item) =>
    selectedLeftItems.value.some(it => it.id === item.id)

  const isRightSelected = (item: Item) =>
    selectedRightItem.value?.id === item.id

  const leftCount = computed(() => selectedLeftItems.value.length)

  // методы (реализуют логику выбора)
  const toggleLeftItem = (item: Item) => {
    try {
      const idx = selectedLeftItems.value.findIndex(it => it.id === item.id)
      if (idx >= 0) {
        // если уже выбран – снимаем
        selectedLeftItems.value.splice(idx, 1)
      } else {
        // если не выбран и ещё не достигли 6 – добавляем
        if (selectedLeftItems.value.length < 6) {
          selectedLeftItems.value.push(item)
        }
      }
    } catch (e) {
      console.error('Ошибка toggleLeftItem', e)
    }
  }

  const selectRightItem = (item: Item) => {
    try {
      if (selectedRightItem.value?.id === item.id) {
        // если клик по уже выбранному – сбрасываем
        selectedRightItem.value = null
      } else {
        // иначе ставим новый
        selectedRightItem.value = item
      }
    } catch (e) {
      console.error('Ошибка selectRightItem', e)
    }
  }

  return {
    availableLeftItems,
    availableRightItems,
    selectedLeftItems,
    selectedRightItem,
    isLeftSelected,
    isRightSelected,
    leftCount,
    toggleLeftItem,
    selectRightItem,
  }
})
