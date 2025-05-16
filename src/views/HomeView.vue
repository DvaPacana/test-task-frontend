<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import SelectedUserItemsBlock from '@/components/SelectedUserItemsBlock.vue'
import SelectedAvailableItemBlock from '@/components/SelectedAvailableItemBlock.vue'
import UserItemsBlock from '@/components/UserItemsBlock.vue'
import AvailableItemsBlock from '@/components/AvailableItemsBlock.vue'

interface Item {
  id: number
  name: string
}

const userItems = ref<Item[]>([])
const availableItems = ref<Item[]>([])

const selectedUserItems = ref<Item[]>([])
const selectedAvailableItem = ref<Item | null>(null)

// Загружаем данные из JSON
onMounted(async () => {
  try {
    const res = await fetch('/src/data/items.json')
    if (!res.ok) throw new Error('Ошибка загрузки данных')
    const data = await res.json()
    userItems.value = data.userItems
    availableItems.value = data.availableItems
  } catch (e) {
    console.error('Ошибка загрузки items.json:', e)
    userItems.value = []
    availableItems.value = []
  }

  // Восстановление из localStorage
  const userItemsRaw = localStorage.getItem('selectedUserItems')
  const availableItemRaw = localStorage.getItem('selectedAvailableItem')
  if (userItemsRaw) {
    try {
      selectedUserItems.value = JSON.parse(userItemsRaw)
    } catch {}
  }
  if (availableItemRaw) {
    try {
      selectedAvailableItem.value = JSON.parse(availableItemRaw)
    } catch {}
  }
})

// Сохраняем при изменении
watch(
  selectedUserItems,
  (val) => {
    localStorage.setItem('selectedUserItems', JSON.stringify(val))
  },
  { deep: true },
)

watch(selectedAvailableItem, (val) => {
  localStorage.setItem('selectedAvailableItem', JSON.stringify(val))
})

function toggleUserItem(item: Item) {
  const idx = selectedUserItems.value.findIndex((i) => i.id === item.id)
  if (idx !== -1) {
    selectedUserItems.value.splice(idx, 1)
  } else if (selectedUserItems.value.length < 6) {
    selectedUserItems.value.push(item)
  }
}

function selectAvailableItem(item: Item) {
  selectedAvailableItem.value = item
}
</script>

<template>
  <div class="item-select-root">
    <div class="item-select-top-blocks">
      <SelectedUserItemsBlock :selected-items="selectedUserItems" :max="6" />
      <SelectedAvailableItemBlock :selected-item="selectedAvailableItem" />
    </div>
    <div class="item-select-bottom-blocks">
      <UserItemsBlock
        :items="userItems"
        :selected-items="selectedUserItems"
        :max="6"
        @select="toggleUserItem"
      />
      <AvailableItemsBlock
        :items="availableItems"
        :selected-item="selectedAvailableItem"
        @select="selectAvailableItem"
      />
    </div>
  </div>
</template>

<style scoped>
.item-select-root {
  padding: 16px;
  border: 2px solid black;
  margin: 8px;
}
.item-select-top-blocks {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
}
.item-select-bottom-blocks {
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
