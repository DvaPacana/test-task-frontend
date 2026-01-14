import { reactive } from 'vue'
import { type TileScheme } from '@/entities/tile'

export abstract class SelectionService {
    protected items: TileScheme[]
    protected selectedItems: TileScheme[]

    protected constructor(items: TileScheme[] = []) {
        this.items = reactive(
            items.map((item) => ({ ...item, isSelected: item.isSelected ?? false })),
        )
        this.selectedItems = reactive(this.items.filter((item) => item.isSelected))
    }

    protected findItemById(id: number): TileScheme | undefined {
        return this.items.find((item) => item.id === id)
    }

    public getSelectedItems(): TileScheme[] {
        return this.selectedItems
    }

    public getItems(): TileScheme[] {
        return this.items
    }

    abstract toggleItem(id: number): void
}
