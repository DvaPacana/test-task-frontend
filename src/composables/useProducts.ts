import { ref } from 'vue'
import type { IProduct } from '@/types/IProduct.ts'

export function useProducts(products: IProduct[]) {
  const availableProducts = ref<IProduct[]>([...products])
  const selectedProducts = ref<IProduct[]>([])

  const select = (item: IProduct, maxSelectedItems: number = 1) => {
    if (selectedProducts.value.length >= maxSelectedItems) {
      alert('Нельзя выбрать больше')
      return
    }
    availableProducts.value = availableProducts.value.filter((product) => product.id !== item.id)
    selectedProducts.value = [...selectedProducts.value, item]
  }

  const remove = (item: IProduct) => {
    selectedProducts.value = selectedProducts.value.filter((product) => product.id !== item.id)
    availableProducts.value = [...availableProducts.value, item]
  }

  return {
    availableProducts,
    selectedProducts,
    select,
    remove,
  }
}
