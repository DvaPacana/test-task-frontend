import type { Item } from '@/types'

export const USER_ITEMS: readonly Item[] = [
  { id: 1, name: 'Shoes 1', category: 'shoes' },
  { id: 2, name: 'Shoes 2', category: 'shoes' },
  { id: 3, name: 'Shoes 3', category: 'shoes' },
  { id: 4, name: 'Shoes 4', category: 'shoes' },
  { id: 5, name: 'T-shirt 1', category: 't-shirt' },
  { id: 6, name: 'T-shirt 2', category: 't-shirt' },
  { id: 7, name: 'T-shirt 3', category: 't-shirt' },
  { id: 8, name: 'T-shirt 4', category: 't-shirt' },
] as const

export const AVAILABLE_ITEMS: readonly Item[] = [
  { id: 11, name: 'Jacket 1', category: 'jacket' },
  { id: 12, name: 'Jacket 2', category: 'jacket' },
  { id: 13, name: 'Jacket 3', category: 'jacket' },
  { id: 14, name: 'Jacket 4', category: 'jacket' },
  { id: 15, name: 'Hoodie 1', category: 'hoodie' },
  { id: 16, name: 'Hoodie 2', category: 'hoodie' },
  { id: 17, name: 'Hoodie 3', category: 'hoodie' },
  { id: 18, name: 'Hoodie 4', category: 'hoodie' },
] as const

export const MAX_USER_ITEMS = 6 as const
