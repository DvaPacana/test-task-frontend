export interface Item {
  id: number
  name: string
}

export interface State {
  userItems: Item[]
  availableItems: Item[]
  selectedUserItems: Item[]
  selectedAvailableItem: Item | null
}
