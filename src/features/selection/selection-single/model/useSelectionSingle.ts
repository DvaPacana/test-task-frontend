import { computed } from 'vue'
import { type TileScheme } from '@/entities/tile'
import { SingleSelectionService } from './selection-single.service'
import { type SelectionState } from '@/features/selection/selection-shared'

export function useSelectionSingle(allItems: TileScheme[]): SelectionState {
    const selectionService = new SingleSelectionService(allItems)

    const items = computed(() => selectionService.getItems())
    const selectedItems = computed(() => selectionService.getSelectedItems())

    return {
        items,
        selectedItems,
        toggleItem: selectionService.toggleItem.bind(selectionService),
    }
}
