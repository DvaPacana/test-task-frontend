import { defineStore } from 'pinia'
import type { ItemType } from '..'
import { ref } from 'vue'

/**
 * * Стор для работы с вещами на выбор
 */
export const useItemForChooseStore = defineStore('item-for-choose', () => {
  /**
   * * Вещи на выбор
   */
  const items = ref<ItemType[]>()

  /**
   * * Выбранные вещь
   */
  const selectedItem = ref<ItemType>()

  /**
   * * Получить вещи на выбор
   */
  const getItems = async () => {
    try {
      items.value = (await (await fetch('/itemsForChoose.json')).json()) as ItemType[]

      console.log('items.value', items.value);
      
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * * Выбрать вещь
   * @param id - ключ вещи
   */
  const chooseItem = (id: number) => {
    try {
      if (selectedItem.value?.id == id) return
      if (!items.value)
        throw new Error('Чтобы выбрать вещь, необходимо получить все вещи для пользователя')
      const item = items.value.find((item) => item.id == id)
      if (!item) throw new Error(`Вещь с id: ${id}, не найдена`)
      selectedItem.value = item
    } catch (e) {
      console.log(e)
    }
  }

  return { items, getItems, chooseItem, selectedItem }
})
