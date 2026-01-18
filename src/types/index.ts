export type ItemCategory = 'shoes' | 't-shirt' | 'jacket' | 'hoodie'

export interface Item {
  readonly id: number
  readonly name: string
  readonly category: ItemCategory
}
