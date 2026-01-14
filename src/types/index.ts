export interface Identifiable {
  readonly id: number
}

export interface ClothingItem extends Identifiable {
  readonly name: string
}

export interface SelectionConstraints {
  readonly min: number
  readonly max: number
}
