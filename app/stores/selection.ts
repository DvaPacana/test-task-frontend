import { defineStore } from 'pinia'
import type { Item } from '~/types/item'

const MAX_USER_ITEMS = 6

export const useSelectionStore = defineStore('selection', {
  state: () => ({
    // Выбранные вещи пользователя (макс 6)
    selectedUserItems: [] as Item[],
    // Выбранная вещь из выбора (только 1)
    selectedChoiceItem: null as Item | null,
  }),

  getters: {
    // Проверка выбрана ли вещь пользователя
    isUserItemSelected: (state) => {
      return (id: number) => state.selectedUserItems.some((item) => item.id === id)
    },

    // Проверка выбрана ли вещь из выбора
    isChoiceItemSelected: (state) => {
      return (id: number) => state.selectedChoiceItem?.id === id
    },

    // Можно ли добавить ещё вещей пользователя
    canAddMoreUserItems: (state) => {
      return state.selectedUserItems.length < MAX_USER_ITEMS
    },

    // Количество выбранных вещей пользователя
    selectedUserItemsCount: (state) => {
      return state.selectedUserItems.length
    },
  },

  actions: {
    // Добавить/удалить вещь пользователя
    toggleUserItem(item: Item) {
      const index = this.selectedUserItems.findIndex((i) => i.id === item.id)

      if (index !== -1) {
        // Удаляем если уже выбрана
        this.selectedUserItems.splice(index, 1)
      } else if (this.canAddMoreUserItems) {
        // Добавляем если лимит не достигнут
        this.selectedUserItems.push(item)
      }
    },

    // Установить/снять вещь из выбора
    toggleChoiceItem(item: Item) {
      if (this.selectedChoiceItem?.id === item.id) {
        // Снимаем выбор если та же вещь
        this.selectedChoiceItem = null
      } else {
        // Устанавливаем новую вещь
        this.selectedChoiceItem = item
      }
    },
  },
})
