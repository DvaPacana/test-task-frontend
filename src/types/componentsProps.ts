import { Item } from "./"

export interface ItemCardProps {
  item: Item | null
  isSelected: boolean
  imgSize: number[]
}

export interface ItemListProps {
  title: string
  items: Item[]
}

export interface SelectedItemsProps {
  selectedItems: Item[]
}

export interface ErrorMessageProps {
  message: string | null
  timeShowSecond?: number
}
