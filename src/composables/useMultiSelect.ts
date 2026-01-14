import { ref, computed, readonly, type DeepReadonly, type Ref } from 'vue'
import type { Identifiable, SelectionConstraints } from '@/types'

export interface UseMultiSelectReturn<T extends Identifiable> {
  selected: DeepReadonly<Ref<T[]>>
  count: Readonly<Ref<number>>
  canSelect: Readonly<Ref<boolean>>
  isSelected: (item: T) => boolean
  select: (item: T) => void
  deselect: (item: T) => void
  toggle: (item: T) => void
  clear: () => void
}

export const useMultiSelect = <T extends Identifiable>(
  constraints: SelectionConstraints = { min: 1, max: 6 }
): UseMultiSelectReturn<T> => {
  const selected = ref<T[]>([]) as Ref<T[]>

  const count = computed(() => selected.value.length)
  const canSelect = computed(() => count.value < constraints.max)

  const isSelected = (item: T): boolean => selected.value.some((s) => s.id === item.id)

  // Добавляем элемент только если он ещё не выбран и лимит не достигнут
  const select = (item: T): void => {
    if (!isSelected(item) && canSelect.value) {
      selected.value = [...selected.value, item]
    }
  }

  const deselect = (item: T): void => {
    selected.value = selected.value.filter((s) => s.id !== item.id)
  }

  const toggle = (item: T): void => {
    if (isSelected(item)) {
      deselect(item)
    } else {
      select(item)
    }
  }

  const clear = (): void => {
    selected.value = []
  }

  return {
    selected: readonly(selected),
    count,
    canSelect,
    isSelected,
    select,
    deselect,
    toggle,
    clear,
  }
}
