export interface Item {
    id: number;
    name: string;
    isSelected?: boolean;
}

export interface ItemsData {
    left_block: Item[]
    right_block: Item[]
}