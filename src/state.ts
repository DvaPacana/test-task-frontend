import { reactive } from 'vue'

export type StoreItem = {
  id: number
  name: string
  isSelected: boolean
}

export type StoreState = {
  leftSelectionLimit: number
  rightSelectionLimit: number
  left: StoreItem[]
  right: StoreItem[]
}

export const store = reactive<StoreState>({
  leftSelectionLimit: 6,
  rightSelectionLimit: 1,
  left: [
    {
      id: 1,
      name: 'Shoes 1',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Shoes 2',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Shoes 3',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Shoes 4',
      isSelected: false,
    },
    {
      id: 5,
      name: 'T-shirt 1',
      isSelected: false,
    },
    {
      id: 6,
      name: 'T-shirt 2',
      isSelected: false,
    },
    {
      id: 7,
      name: 'T-shirt 3',
      isSelected: false,
    },
    {
      id: 8,
      name: 'T-shirt 4',
      isSelected: false,
    },
  ],
  right: [
    {
      id: 11,
      name: 'Jacket 1',
      isSelected: false,
    },
    {
      id: 12,
      name: 'Jacket 2',
      isSelected: false,
    },
    {
      id: 13,
      name: 'Jacket 3',
      isSelected: false,
    },
    {
      id: 14,
      name: 'Jacket 4',
      isSelected: false,
    },
    {
      id: 15,
      name: 'Hoodie 1',
      isSelected: false,
    },
    {
      id: 16,
      name: 'Hoodie 2',
      isSelected: false,
    },
    {
      id: 17,
      name: 'Hoodie 3',
      isSelected: false,
    },
    {
      id: 18,
      name: 'Hoodie 4',
      isSelected: false,
    },
  ],
})
