export interface Item {
    id: number,
    name: string
}

export interface AppState {
    leftBlock: Item[],
    rightBlock: Item[]
}