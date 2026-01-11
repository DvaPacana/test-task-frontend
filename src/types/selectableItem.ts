import type {IItem} from '@/types/item.ts';

export interface ISelectableItem extends IItem {
  selected: boolean,
}
