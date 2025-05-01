import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', () => {
  
  const userItems = ref([
    {
        "id": 1,
        "name": "Shoes 1"
    },
    {
        "id": 2,
        "name": "Shoes 2"
    },
    {
        "id": 3,
        "name": "Shoes 3"
    },
    {
        "id": 4,
        "name": "Shoes 4"
    },
    {
        "id": 5,
        "name": "T-shirt 1"
    },
    {
        "id": 6,
        "name": "T-shirt 2"
    },
    {
        "id": 7,
        "name": "T-shirt 3"
    },
    {
        "id": 8,
        "name": "T-shirt 4"
    }
  ])

  const thingsToChooseFrom = ref([
    {
        "id": 11,
        "name": "Jacket 1"
    },
    {
        "id": 12,
        "name": "Jacket 2"
    },
    {
        "id": 13,
        "name": "Jacket 3"
    },
    {
        "id": 14,
        "name": "Jacket 4"
    },
    {
        "id": 15,
        "name": "Hoodie 1"
    },
    {
        "id": 16,
        "name": "Hoodie 2"
    },
    {
        "id": 17,
        "name": "Hoodie 3"
    },
    {
        "id": 18,
        "name": "Hoodie 4"
    }
  ])

  
  const userSelectedItems = ref([])
  const selectedItem = ref({})
  
  
  const userSelectedItemsLength = computed(() => userSelectedItems.value.length)

  function toggleUserSelectedItems(item) {
   
    const elem = userSelectedItems.value.findIndex((element)=>{
      return element.id == item.id
    })
    
    if (elem == -1) {
      if (userSelectedItems.value.length < 6){
        userSelectedItems.value.push(item)
        item.select = true
      }
      
    } else {
      item.select = false
      userSelectedItems.value = userSelectedItems.value.filter((word) => 
        word.id !== item.id)
    }
   
  }

  function toggleSelectedItem(item) {
    
    if (!(selectedItem.value == {})){
      selectedItem.value.select = false
    }
      
    selectedItem.value = item
    item.select = true
       
  }

  return { 
    userItems, 
    thingsToChooseFrom,
    selectedItem,
    userSelectedItems,
    toggleUserSelectedItems,
    userSelectedItemsLength,
    toggleSelectedItem
  }
})
