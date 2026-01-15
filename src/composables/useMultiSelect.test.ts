import { describe, it, expect } from 'vitest'
import { useMultiSelect } from './useMultiSelect'

const mockItems = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
] as const

describe('useMultiSelect', () => {
  it('starts with empty selection', () => {
    const { selected, count } = useMultiSelect()
    expect(selected.value).toEqual([])
    expect(count.value).toBe(0)
  })

  it('selects an item', () => {
    const { select, selected, isSelected } = useMultiSelect()
    select(mockItems[0])
    expect(selected.value).toEqual([mockItems[0]])
    expect(isSelected(mockItems[0])).toBe(true)
  })

  it('preserves selection order', () => {
    const { select, selected } = useMultiSelect()
    select(mockItems[2])
    select(mockItems[0])
    select(mockItems[1])
    expect(selected.value).toEqual([mockItems[2], mockItems[0], mockItems[1]])
  })

  it('deselects an item', () => {
    const { select, deselect, selected, isSelected } = useMultiSelect()
    select(mockItems[0])
    select(mockItems[1])
    deselect(mockItems[0])
    expect(selected.value).toEqual([mockItems[1]])
    expect(isSelected(mockItems[0])).toBe(false)
  })

  it('toggles selection', () => {
    const { toggle, isSelected } = useMultiSelect()
    toggle(mockItems[0])
    expect(isSelected(mockItems[0])).toBe(true)
    toggle(mockItems[0])
    expect(isSelected(mockItems[0])).toBe(false)
  })

  it('prevents selecting more than max items', () => {
    const { select, selected, canSelect } = useMultiSelect({ max: 3 })
    select(mockItems[0])
    select(mockItems[1])
    select(mockItems[2])
    expect(canSelect.value).toBe(false)
    select(mockItems[3])
    expect(selected.value).toHaveLength(3)
    expect(selected.value).not.toContainEqual(mockItems[3])
  })

  it('prevents selecting duplicate items', () => {
    const { select, selected } = useMultiSelect()
    select(mockItems[0])
    select(mockItems[0])
    expect(selected.value).toHaveLength(1)
  })

  it('clears all selections', () => {
    const { select, clear, selected } = useMultiSelect()
    select(mockItems[0])
    select(mockItems[1])
    clear()
    expect(selected.value).toEqual([])
  })
})
