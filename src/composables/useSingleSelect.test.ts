import { describe, it, expect } from 'vitest'
import { useSingleSelect } from './useSingleSelect'

const mockItems = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
] as const

describe('useSingleSelect', () => {
  it('starts with no selection', () => {
    const { selected, hasSelection } = useSingleSelect()
    expect(selected.value).toBeNull()
    expect(hasSelection.value).toBe(false)
  })

  it('selects an item', () => {
    const { select, selected, hasSelection, isSelected } = useSingleSelect()
    select(mockItems[0])
    expect(selected.value).toEqual(mockItems[0])
    expect(hasSelection.value).toBe(true)
    expect(isSelected(mockItems[0])).toBe(true)
  })

  it('replaces selection when selecting another item', () => {
    const { select, selected, isSelected } = useSingleSelect()
    select(mockItems[0])
    select(mockItems[1])
    expect(selected.value).toEqual(mockItems[1])
    expect(isSelected(mockItems[0])).toBe(false)
    expect(isSelected(mockItems[1])).toBe(true)
  })

  it('deselects the current item', () => {
    const { select, deselect, selected, hasSelection } = useSingleSelect()
    select(mockItems[0])
    deselect()
    expect(selected.value).toBeNull()
    expect(hasSelection.value).toBe(false)
  })

  it('toggles selection on', () => {
    const { toggle, isSelected } = useSingleSelect()
    toggle(mockItems[0])
    expect(isSelected(mockItems[0])).toBe(true)
  })

  it('toggles selection off', () => {
    const { toggle, selected, isSelected } = useSingleSelect()
    toggle(mockItems[0])
    toggle(mockItems[0])
    expect(selected.value).toBeNull()
    expect(isSelected(mockItems[0])).toBe(false)
  })

  it('toggles to different item', () => {
    const { toggle, isSelected } = useSingleSelect()
    toggle(mockItems[0])
    toggle(mockItems[1])
    expect(isSelected(mockItems[0])).toBe(false)
    expect(isSelected(mockItems[1])).toBe(true)
  })
})
