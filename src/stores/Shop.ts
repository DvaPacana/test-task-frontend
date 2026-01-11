import type { ItemInterface } from '@/Interfaces/Item.Interface'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    MAX_SELECTED: 6,
    items: [
      {
        id: 1,
        name: 'Shoes 1',
      },
      {
        id: 2,
        name: 'Shoes 2',
      },
      {
        id: 3,
        name: 'Shoes 3',
      },
      {
        id: 4,
        name: 'Shoes 4',
      },
      {
        id: 5,
        name: 'T-shirt 1',
      },
      {
        id: 6,
        name: 'T-shirt 2',
      },
      {
        id: 7,
        name: 'T-shirt 3',
      },
      {
        id: 8,
        name: 'T-shirt 4',
      },
    ] as Array<ItemInterface>,
    cart: [] as Array<ItemInterface>,
  }),
  actions: {
    addToCart(item: ItemInterface) {
      if (this.cart.length === this.MAX_SELECTED) return false
      this.cart.push(item)
    },

    deleteItem(index: number) {
      this.cart.splice(index, 1)
    },
  },
})
