import { computed } from 'vue'
import { type TileScheme } from '@/entities/tile'
import { MultipleSelectionService } from './selection-multiple.service.ts'
import { type SelectionState } from '@/features/selection/selection-shared'

export function useSelectionMultiple(
    allItems: TileScheme[],
    maxSelectedCount: number,
): SelectionState {
    const selectionService = new MultipleSelectionService(allItems, maxSelectedCount)

    const items = computed(() => selectionService.getItems())
    const itemsCount = computed(() => items.value.length)

    const selectedItems = computed(() => selectionService.getSelectedItems())
    const selectedCount = computed(() => selectedItems.value.length)

    return {
        items,
        itemsCount,

        selectedItems,
        selectedCount,

        toggleItem: selectionService.toggleItem.bind(selectionService),
    }
}
