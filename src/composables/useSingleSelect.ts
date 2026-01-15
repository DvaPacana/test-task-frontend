import { ref, computed, readonly, type DeepReadonly, type Ref } from 'vue'
import type { Identifiable } from '@/types'

export interface UseSingleSelectReturn<T extends Identifiable> {
  selected: DeepReadonly<Ref<T | null>>
  hasSelection: Readonly<Ref<boolean>>
  isSelected: (item: T) => boolean
  select: (item: T) => void
  deselect: () => void
  toggle: (item: T) => void
}

export const useSingleSelect = <T extends Identifiable>(): UseSingleSelectReturn<T> => {
  const selected = ref<T | null>(null) as Ref<T | null>

  const hasSelection = computed(() => selected.value !== null)

  const isSelected = (item: T): boolean => selected.value?.id === item.id

  const select = (item: T): void => {
    selected.value = item
  }

  const deselect = (): void => {
    selected.value = null
  }

  const toggle = (item: T): void => {
    if (isSelected(item)) {
      deselect()
    } else {
      select(item)
    }
  }

  return {
    selected: readonly(selected),
    hasSelection,
    isSelected,
    select,
    deselect,
    toggle,
  }
}
