import type { IProduct } from '@/types/IProduct.ts'
import { ref } from 'vue'

export function useProducts(products: IProduct[]) {
  const availableProducts = ref<Set<IProduct>>(new Set(products))
  const selectedProducts = ref<Set<IProduct>>(new Set())

  const select = (item: IProduct, maxSelectedItems: number = 1) => {
    if (selectedProducts.value.size >= maxSelectedItems) {
      alert('Нельзя выбрать больше')
      return
    }
    availableProducts.value.delete(item)
    selectedProducts.value.add(item)
  }

  const remove = (item: IProduct) => {
    selectedProducts.value.delete(item)
    availableProducts.value.add(item)
  }

  return {
    availableProducts,
    selectedProducts,
    select,
    remove,
  }
}
