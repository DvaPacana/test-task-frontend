import { SelectionService } from '@/features/selection/selection-shared'
import type { TileScheme } from '@/entities/tile'

export class SingleSelectionService extends SelectionService {
    constructor(items: TileScheme[] = []) {
        super(items)
        this.ensureSingleSelection()
    }

    private ensureSingleSelection() {
        const firstSelected = this.items.find((item) => item.isSelected)
        this.items.forEach((item) => {
            item.isSelected = item === firstSelected
        })
        this.selectedItems.splice(0, this.selectedItems.length)
        if (firstSelected) {
            this.selectedItems.push(firstSelected)
        }
    }

    public toggleItem(id: number): void {
        const foundItem = this.findItemById(id)
        if (!foundItem) return

        if (foundItem.isSelected) {
            foundItem.isSelected = false
            this.selectedItems.splice(0, this.selectedItems.length)
        } else {
            this.items.forEach((item) => {
                item.isSelected = item.id === id
            })
            this.selectedItems.splice(0, this.selectedItems.length, foundItem)
        }
    }
}
