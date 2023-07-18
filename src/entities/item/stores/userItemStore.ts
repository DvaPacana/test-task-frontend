import { defineStore } from 'pinia'
import type { ItemType } from '..'
import { ref } from 'vue'

/**
 * * Стор для работы с вещами пользователя
 */
export const useUserItemStore = defineStore('user-item', () => {
  /**
   * * Вещи пользователя
   */
  const items = ref<ItemType[]>()

  /**
   * * Выбранные вещи пользователя
   */
  const selectedItems = ref<ItemType[]>()

  /**
   * * Получить вещи пользователя
   */
  const getItems = async () => {
    try {
      items.value = (await (await fetch('/userItems.json')).json()) as ItemType[]
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * * Выбрать вещь пользователя
   * @param id - ключ вещи
   */
  const chooseItem = (id: number) => {
    try {
      const condidateItem = selectedItems.value?.find((item) => item.id == id)
      if (condidateItem) return
      if (!items.value)
        throw new Error('Чтобы выбрать вещь, необходимо получить все вещи для пользователя')
      const item = items.value.find((item) => item.id == id)
      if (!item) throw new Error(`Вещь с id: ${id}, не найдена`)
      if (!selectedItems.value) selectedItems.value = []
      if (selectedItems.value && selectedItems.value.length >= 6) selectedItems.value.splice(0, 1)
      selectedItems.value.push(item)
    } catch (e) {
      console.log(e)
    }
  }

  return { items, getItems, chooseItem, selectedItems }
})
