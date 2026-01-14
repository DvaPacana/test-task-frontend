import { SelectionService } from '@/features/selection/selection-shared'
import type { TileScheme } from '@/entities/tile'

export class MultipleSelectionService extends SelectionService {
    private readonly maxSelected: number

    constructor(items: TileScheme[] = [], maxSelected: number = Infinity) {
        super(items)
        this.maxSelected = maxSelected
    }

    private isPossibleSelect() {
        return this.getSelectedItems().length < this.maxSelected
    }

    public toggleItem(id: number) {
        const foundItem = this.findItemById(id)
        if (!foundItem) return

        if (foundItem.isSelected) {
            foundItem.isSelected = false
            const index = this.selectedItems.findIndex((item) => item.id === id)
            if (index !== -1) {
                this.selectedItems.splice(index, 1)
            }
        } else {
            if (!this.isPossibleSelect()) return

            foundItem.isSelected = true
            this.selectedItems.push(foundItem)
        }
    }
}
