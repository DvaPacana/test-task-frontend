import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useItemsStore } from './items'

describe('useItemsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('has initial empty selection', () => {
    const store = useItemsStore()
    expect(store.selectedUserItems).toEqual([])
    expect(store.selectedAvailableItem).toBeNull()
  })

  it('toggleUserItem adds item to selection', () => {
    const store = useItemsStore()
    const item = store.userItems[0]!

    store.toggleUserItem(item)

    expect(store.selectedUserItems).toContain(item)
    expect(store.selectedUserItemsCount).toBe(1)
  })

  it('toggleUserItem removes item on second call', () => {
    const store = useItemsStore()
    const item = store.userItems[0]!

    store.toggleUserItem(item)
    store.toggleUserItem(item)

    expect(store.selectedUserItems).not.toContain(item)
    expect(store.selectedUserItemsCount).toBe(0)
  })

  it('limits selection to maxUserItems', () => {
    const store = useItemsStore()

    // Select max items
    for (let i = 0; i < store.maxUserItems; i++) {
      store.toggleUserItem(store.userItems[i]!)
    }

    expect(store.canSelectMoreUserItems).toBe(false)

    // Try to select one more
    store.toggleUserItem(store.userItems[store.maxUserItems]!)
    expect(store.selectedUserItemsCount).toBe(store.maxUserItems)
  })

  it('toggleAvailableItem selects item', () => {
    const store = useItemsStore()
    const item = store.availableItems[0]!

    store.toggleAvailableItem(item)

    expect(store.selectedAvailableItem).toEqual(item)
  })

  it('toggleAvailableItem replaces selection', () => {
    const store = useItemsStore()
    const item1 = store.availableItems[0]!
    const item2 = store.availableItems[1]!

    store.toggleAvailableItem(item1)
    store.toggleAvailableItem(item2)

    expect(store.selectedAvailableItem).toEqual(item2)
  })

  it('toggleAvailableItem deselects on second call', () => {
    const store = useItemsStore()
    const item = store.availableItems[0]!

    store.toggleAvailableItem(item)
    store.toggleAvailableItem(item)

    expect(store.selectedAvailableItem).toBeNull()
  })

  it('isUserItemSelected returns correct value', () => {
    const store = useItemsStore()
    const item = store.userItems[0]!

    expect(store.isUserItemSelected(item.id)).toBe(false)

    store.toggleUserItem(item)

    expect(store.isUserItemSelected(item.id)).toBe(true)
  })

  it('isAvailableItemSelected returns correct value', () => {
    const store = useItemsStore()
    const item = store.availableItems[0]!

    expect(store.isAvailableItemSelected(item.id)).toBe(false)

    store.toggleAvailableItem(item)

    expect(store.isAvailableItemSelected(item.id)).toBe(true)
  })

  it('clearUserSelection clears all user selections', () => {
    const store = useItemsStore()

    store.toggleUserItem(store.userItems[0]!)
    store.toggleUserItem(store.userItems[1]!)
    store.clearUserSelection()

    expect(store.selectedUserItems).toEqual([])
  })

  it('clearAvailableSelection clears available selection', () => {
    const store = useItemsStore()

    store.toggleAvailableItem(store.availableItems[0]!)
    store.clearAvailableSelection()

    expect(store.selectedAvailableItem).toBeNull()
  })
})
