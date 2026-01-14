import { describe, it, expect } from 'vitest'
import { useSelections } from './useSelections'
import type { Item } from '../data/items'

const createItem = (id: number, name = `Item ${id}`): Item => ({ id, name })

describe('useSelections', () => {
  it('добавляет и убирает пользовательские элементы с учётом лимита', () => {
    const { selectedUserItems, toggleUserItem } = useSelections(2)
    const first = createItem(1)
    const second = createItem(2)
    const third = createItem(3)

    toggleUserItem(first)
    toggleUserItem(second)
    toggleUserItem(third)

    expect(selectedUserItems.value).toHaveLength(2)
    expect(selectedUserItems.value.map((item) => item.id)).toEqual([1, 2])

    toggleUserItem(first)
    expect(selectedUserItems.value.map((item) => item.id)).toEqual([2])
  })

  it('переключает выбранный pick-элемент', () => {
    const { selectedPickItem, selectPickItem } = useSelections()
    const jacket = createItem(11, 'Jacket')

    selectPickItem(jacket)
    expect(selectedPickItem.value?.id).toBe(11)

    selectPickItem(jacket)
    expect(selectedPickItem.value).toBeNull()
  })

  it('сбрасывает выбор', () => {
    const { selectedUserItems, toggleUserItem, resetUserSelection } = useSelections()
    toggleUserItem(createItem(1))
    toggleUserItem(createItem(2))

    expect(selectedUserItems.value).toHaveLength(2)
    resetUserSelection()
    expect(selectedUserItems.value).toHaveLength(0)
  })

  it('игнорирует невалидные элементы', () => {
    const { selectedUserItems, toggleUserItem, selectPickItem, selectedPickItem } =
      useSelections()

    toggleUserItem({ id: Number.NaN, name: '' } as Item)
    selectPickItem({ id: Number.NaN, name: '' } as Item)

    expect(selectedUserItems.value).toHaveLength(0)
    expect(selectedPickItem.value).toBeNull()
  })
})
