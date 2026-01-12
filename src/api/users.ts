import usersItems from '../data/user-item.json';
import itemToChoose from '../data/item-to-choose.json';
import type { ItemsType } from '../types/users';

export const getUserItems = async (): Promise<ItemsType[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersItems);
    }, 500);
  });
};

export const getItemsToChoose = async (): Promise<ItemsType[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemToChoose);
    }, 500);
  });
};