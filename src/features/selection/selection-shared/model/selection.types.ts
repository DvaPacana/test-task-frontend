import type { TileScheme } from '@/entities/tile'
import type { ComputedRef } from 'vue'

export interface SelectionState {
    items: ComputedRef<TileScheme[]>
    itemsCount?: ComputedRef<number>
    selectedItems: ComputedRef<TileScheme[]>
    selectedCount?: ComputedRef<number>
    toggleItem: (id: number) => void
}

export type MultipleSelectedModel = string[]
export type SingleSelectedModel = string | null
