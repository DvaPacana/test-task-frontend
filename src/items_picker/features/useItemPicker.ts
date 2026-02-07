import type { Item } from "../../shared/types/item"
import type { Ref } from "vue"
import { ref } from "vue"

export type PickerRules = {
  limit: number,
  source: Ref<Item[]>
}

export const useItemPicker = (rules: PickerRules) => {
  const { source, limit } = rules
  const picked = ref<Item[]>([])
  const exists = (id: Item['id']) => source.value.some(item => item.id === id)
  const isPicked = (id: Item['id']) => picked.value.some(item => item.id === id)
  const pick = (item: Item) => {
    if (exists(item.id) && picked.value.length < limit) picked.value.push(item)
  }
  const unpickById = (id: Item['id']) => {
    if (exists(id)) picked.value = picked.value.filter(item => item.id !== id)
  }
  return { picked, source, pick, unpickById, isPicked } 
}