import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSelectionStore } from '~/stores/selection'
import type { Item } from '~/types/item'

// Mock data
const mockUserItems: Item[] = [
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' },
]

const mockChoiceItems: Item[] = [
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
]

describe('Selection Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('User Items (Left Block)', () => {
    it('should start with empty selectedUserItems', () => {
      const store = useSelectionStore()
      expect(store.selectedUserItems).toEqual([])
      expect(store.selectedUserItemsCount).toBe(0)
    })

    it('should add item to selectedUserItems', () => {
      const store = useSelectionStore()
      store.toggleUserItem(mockUserItems[0])

      expect(store.selectedUserItems).toHaveLength(1)
      expect(store.selectedUserItems[0]).toEqual(mockUserItems[0])
    })

    it('should remove item when toggled twice', () => {
      const store = useSelectionStore()
      store.toggleUserItem(mockUserItems[0])
      store.toggleUserItem(mockUserItems[0])

      expect(store.selectedUserItems).toHaveLength(0)
    })

    it('should maintain selection order', () => {
      const store = useSelectionStore()
      store.toggleUserItem(mockUserItems[2]) // Shoes 3
      store.toggleUserItem(mockUserItems[0]) // Shoes 1
      store.toggleUserItem(mockUserItems[1]) // Shoes 2

      expect(store.selectedUserItems[0].name).toBe('Shoes 3')
      expect(store.selectedUserItems[1].name).toBe('Shoes 1')
      expect(store.selectedUserItems[2].name).toBe('Shoes 2')
    })

    it('should not exceed 6 items limit', () => {
      const store = useSelectionStore()

      // Add 6 items
      for (let i = 0; i < 6; i++) {
        store.toggleUserItem(mockUserItems[i])
      }

      expect(store.selectedUserItems).toHaveLength(6)
      expect(store.canAddMoreUserItems).toBe(false)

      // Try to add 7th item
      store.toggleUserItem(mockUserItems[6])

      expect(store.selectedUserItems).toHaveLength(6)
      expect(store.selectedUserItems.find((i) => i.id === 7)).toBeUndefined()
    })

    it('should allow adding after removing when at limit', () => {
      const store = useSelectionStore()

      // Add 6 items
      for (let i = 0; i < 6; i++) {
        store.toggleUserItem(mockUserItems[i])
      }

      // Remove one
      store.toggleUserItem(mockUserItems[0])
      expect(store.canAddMoreUserItems).toBe(true)

      // Add new one
      store.toggleUserItem(mockUserItems[6])
      expect(store.selectedUserItems).toHaveLength(6)
      expect(store.selectedUserItems.find((i) => i.id === 7)).toBeDefined()
    })

    it('should correctly check if item is selected', () => {
      const store = useSelectionStore()
      store.toggleUserItem(mockUserItems[0])

      expect(store.isUserItemSelected(1)).toBe(true)
      expect(store.isUserItemSelected(2)).toBe(false)
    })
  })

  describe('Choice Item (Right Block)', () => {
    it('should start with null selectedChoiceItem', () => {
      const store = useSelectionStore()
      expect(store.selectedChoiceItem).toBeNull()
    })

    it('should select single item', () => {
      const store = useSelectionStore()
      store.toggleChoiceItem(mockChoiceItems[0])

      expect(store.selectedChoiceItem).toEqual(mockChoiceItems[0])
    })

    it('should replace item when selecting another', () => {
      const store = useSelectionStore()
      store.toggleChoiceItem(mockChoiceItems[0])
      store.toggleChoiceItem(mockChoiceItems[1])

      expect(store.selectedChoiceItem).toEqual(mockChoiceItems[1])
      expect(store.selectedChoiceItem?.name).toBe('Jacket 2')
    })

    it('should deselect when toggled twice', () => {
      const store = useSelectionStore()
      store.toggleChoiceItem(mockChoiceItems[0])
      store.toggleChoiceItem(mockChoiceItems[0])

      expect(store.selectedChoiceItem).toBeNull()
    })

    it('should correctly check if item is selected', () => {
      const store = useSelectionStore()
      store.toggleChoiceItem(mockChoiceItems[0])

      expect(store.isChoiceItemSelected(11)).toBe(true)
      expect(store.isChoiceItemSelected(12)).toBe(false)
    })
  })
})
