import type { Item } from '../api/types'
import type { Ref } from 'vue'

export const useCreateSelectionHandler = <T extends Item>(
  source: Ref<T[]>,
  selected: Ref<T[]>,
  maxLength: number,
) => {
  const add = (item: T) => {
    const currentItem = source.value.find((i) => i.id === item.id)
    if (!currentItem || selected.value.length >= maxLength) return

    selected.value = [...selected.value, currentItem]
    source.value = source.value.filter((i) => i.id !== item.id)
  }

  const remove = (item: T) => {
    const currentItem = selected.value.find((i) => i.id === item.id)
    if (!currentItem) return

    source.value = [...source.value, currentItem]
    selected.value = selected.value.filter((i) => i.id !== item.id)
  }

  return { add, remove }
}
