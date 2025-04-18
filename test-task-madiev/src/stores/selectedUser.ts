import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Things } from '@/types';

export const useSelectedUserStore = defineStore('selectedUser', () => {
  const data = ref<Things[]>([]);
  const addItem = (item: Things) => {
    if (Array.isArray(data.value) && data.value.length < 6) {
      data.value.push(item);
    } 
  }
  const removeItem = (index: number) => {
    if (Array.isArray(data.value)) {
      data.value.splice(index, 1);
    } 
  }
  return { data, addItem, removeItem };
});
