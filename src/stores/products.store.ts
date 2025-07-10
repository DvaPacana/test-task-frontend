import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProductInterface } from '@/interfaces/product.interface.ts'

export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductInterface[]>([])
  const activeProduct = ref<ProductInterface>(null)

  function fetchProducts(): ProductInterface[] {
    products.value = [
      {
        id: 11,
        name: 'Jacket 1',
      },
      {
        id: 12,
        name: 'Jacket 2',
      },
      {
        id: 13,
        name: 'Jacket 3',
      },
      {
        id: 14,
        name: 'Jacket 4',
      },
      {
        id: 15,
        name: 'Hoodie 1',
      },
      {
        id: 16,
        name: 'Hoodie 2',
      },
      {
        id: 17,
        name: 'Hoodie 3',
      },
      {
        id: 18,
        name: 'Hoodie 4',
      },
    ]
  }

  function setActiveProduct(targetId: number): void {
    const target = products.value.find(({ id }) => id === targetId)

    if (target?.id === activeProduct.value?.id) {
      activeProduct.value = null

      return
    }

    activeProduct.value = target
  }

  return { products, fetchProducts, activeProduct, setActiveProduct }
})
