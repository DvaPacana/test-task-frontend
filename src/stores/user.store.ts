import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ProductInterface } from '@/interfaces/product.interface.ts'

export const useUserStore = defineStore('user', () => {
  const products = ref<ProductInterface[]>([])
  const selectedIds = ref<Set>(new Set([]))

  const selectedProducts = computed(() =>
    products.value.filter(({ id }) => selectedIds.value.has(id)),
  )

  const leftProducts = computed(() => products.value.filter(({ id }) => !selectedIds.value.has(id)))

  function fetchProducts(): ProductInterface[] {
    products.value = [
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
    ]
  }

  function selectProduct(id: number): void {
    if (selectedIds.value.size === 6) return

    selectedIds.value.add(id)
  }

  function removeProduct(id: number) {
    selectedIds.value.delete(id)
  }

  return { fetchProducts, selectedProducts, selectProduct, leftProducts, removeProduct, products }
})
