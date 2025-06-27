export interface Item {
  id: number
  name: string
}

export interface AppItemProps {
  item: Item
  selected?: boolean
  showRemove?: boolean
}

export interface AppItemEmits {
  click: [item: Item]
  remove: [item: Item]
}
