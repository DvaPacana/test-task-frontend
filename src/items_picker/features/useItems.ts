import { ref } from 'vue';
import api from '../../api';
import type { Item } from '../../shared/types/item';

export const useItems = () => {
  const isLoading = ref(false)
  const userItems = ref<Item[]>([])
  const vendorItems = ref<Item[]>([])
  isLoading.value = true
  Promise.all([
      api.getVendorItems(),
      api.getUserItems()
    ])
    .then(([vendorData, userData]) => {
      vendorItems.value = vendorData
      userItems.value = userData
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      isLoading.value = false
    })
  return { userItems, vendorItems, isLoading }
}