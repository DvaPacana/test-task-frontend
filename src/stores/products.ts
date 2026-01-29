import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Products } from '@/types/products.type'
import { ProductsModel } from '@/models/products.model'
import type ProductModel from '@/models/product.model'

import { createRestClient } from 'rest-pipeline-js'
import { SelectionTarget } from '@/enums/selection-target'

export const useProductsStore = defineStore('products', () => {
  const LIST_SIZE = 10

  const model = ref(new ProductsModel())

  const client = createRestClient({ baseURL: 'https://api.macrulez.ru/v1', timeout: 7000 })

  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadProducts = async () => {
    loading.value = true
    error.value = null
    try {
      type ProductsResponse = { products?: Products }

      const res = (await client.request('/products')) as {
        error?: unknown
        data?: ProductsResponse | Products
      }

      if (res?.error) {
        console.error('Ошибка API продуктов', res.error)
        return
      }

      const isProductsPayload = (v: unknown): v is ProductsResponse => {
        return typeof v === 'object' && v !== null && 'products' in v
      }

      const data = isProductsPayload(res.data)
        ? res.data.products
        : (res.data as Products | undefined)
      if (data) {
        model.value = new ProductsModel(data as Products)
        fillInitialLists()
      }
    } catch (err) {
      console.error('Не удалось загрузить продукты', err)
      error.value = String(err ?? 'unknown')
    } finally {
      loading.value = false
    }
  }

  void loadProducts()

  const selectedItems = ref<ProductModel[]>([])
  const selectedItem = ref<ProductModel | null>(null)

  const itemsOne = ref<ProductModel[]>([])
  const itemsTwo = ref<ProductModel[]>([])

  const getRandomUnique = <T extends { id: number }>(
    arr: T[],
    exclude: Set<number>,
    count: number,
  ) => {
    const pool = arr.filter((it) => !exclude.has(it.id))
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = pool[i]!
      pool[i] = pool[j]!
      pool[j] = tmp
    }
    return pool.slice(0, count)
  }

  const fillInitialLists = () => {
    const excluded = new Set<number>(selectedItems.value.map((s) => s.id))
    if (selectedItem.value) excluded.add(selectedItem.value.id)

    itemsOne.value = getRandomUnique<ProductModel>([...model.value.items], excluded, LIST_SIZE)

    const excludeIds = new Set<number>(excluded)
    itemsOne.value.forEach((i) => excludeIds.add(i.id))
    itemsTwo.value = getRandomUnique<ProductModel>([...model.value.items], excludeIds, LIST_SIZE)
  }

  const removeFromLists = (id: number) => {
    itemsOne.value = itemsOne.value.filter((p) => p.id !== id)
    itemsTwo.value = itemsTwo.value.filter((p) => p.id !== id)
  }

  const restoreProduct = (product: ProductModel, target: SelectionTarget | 'auto' = 'auto') => {
    if (!product) return
    if (
      itemsOne.value.find((p) => p.id === product.id) ||
      itemsTwo.value.find((p) => p.id === product.id)
    )
      return

    if (target === SelectionTarget.SINGLE) {
      if (itemsTwo.value.length < LIST_SIZE) {
        itemsTwo.value.push(product)
        return
      }
      itemsTwo.value.unshift(product)
      if (itemsTwo.value.length > LIST_SIZE) itemsTwo.value.pop()
      return
    }

    if (itemsOne.value.length < LIST_SIZE) {
      itemsOne.value.push(product)
      return
    }

    if (itemsTwo.value.length < LIST_SIZE) {
      itemsTwo.value.push(product)
      return
    }

    itemsTwo.value.unshift(product)
    if (itemsTwo.value.length > LIST_SIZE) itemsTwo.value.pop()
  }

  const selectOneItem = (id: number) => {
    const found = model.value.findById(id)
    if (!found) return null
    if (itemsOne.value.find((p) => p.id === found.id)) {
      itemsOne.value = itemsOne.value.filter((p) => p.id !== found.id)
    } else if (itemsTwo.value.find((p) => p.id === found.id)) {
      if (selectedItem.value && selectedItem.value.id !== found.id) {
        restoreProduct(selectedItem.value, SelectionTarget.SINGLE)
      }
      itemsTwo.value = itemsTwo.value.filter((p) => p.id !== found.id)
    }

    return (selectedItem.value = found)
  }

  const selectManyItems = (id: number) => {
    const found = model.value.findById(id)
    if (!found) return null

    const exists = selectedItems.value.find((p) => p.id === found.id)
    if (!exists) {
      selectedItems.value.push(found)
      removeFromLists(found.id)
    }

    return selectedItems.value
  }

  const deleteSelectedItem = (id: number) => {
    const was = selectedItems.value.find((p) => p.id === id) ?? null
    if (was) {
      selectedItems.value = selectedItems.value.filter((p) => p.id !== id)
      restoreProduct(was, 'auto')
    }

    if (selectedItem.value?.id === id) {
      const wasSingle = selectedItem.value
      selectedItem.value = null
      if (wasSingle) restoreProduct(wasSingle, SelectionTarget.SINGLE)
    }
  }

  const reshuffle = () => {
    fillInitialLists()
  }

  const reset = async () => {
    selectedItems.value = []
    selectedItem.value = null
    itemsOne.value = []
    itemsTwo.value = []
    model.value = new ProductsModel()
    await loadProducts()
  }

  return {
    model,
    selectedItems,
    selectedItem,
    itemsOne,
    itemsTwo,
    selectOneItem,
    selectManyItems,
    deleteSelectedItem,
    loadProducts,
    loading,
    error,
    reshuffle,
    reset,
  }
})
