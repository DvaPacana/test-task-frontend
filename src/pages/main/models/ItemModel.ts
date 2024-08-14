/**
 * * Модль описывающая item
 */

export class ItemModel {
    id: number
    name: string

    constructor(obj: Partial<ItemModel>) {
        Object.assign(this, obj)
    }
}
