<template>
  <!-- Top section -->
  <div class="section">
    <UiCard title="Выбранные вещи пользователя">
      <BlockLabelsList :items="selectedUserItems" message="Нет выбранных вещей" />
    </UiCard>

    <UiCard title="Выбранная вещь из доступных">
      <BlockLabelsList :items="availableItemsList" message="Вещь не выбрана" />
    </UiCard>
  </div>

  <!-- Bottom section -->
  <div class="section mt-8">
    <UiCard title="Вещи пользователя">
      <BlockActionLabelsList
        @item-selected="toggleUserItem"
        :items="userItems"
        :selected-item="selectedUserItems"
        :is-item-selected="isUserItemSelected"
      />
    </UiCard>
    <UiCard title="Доступные вещи">
      <BlockActionLabelsList
        @item-selected="toggleAvailableItem"
        :items="availableItems"
        :selected-item="selectedAvailableItem"
        :is-item-selected="isAvailableItemSelected"
      />
    </UiCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BlockActionLabelsList from '@/components/blocks/BlockActionLabelsList.vue'
import BlockLabelsList from '@/components/blocks/BlockLabelsList.vue'
import UiCard from '@/components/ui/UiCard.vue'
import { userItems } from '@/store/userItemsData'
import { availableItems } from '@/store/availableItemsData'

// State
const selectedUserItems = ref([])
const selectedAvailableItem = ref(null)

// Computed
const isUserItemSelected = computed(
  () => (item) => selectedUserItems.value.some((i) => i.id === item.id),
)

const isAvailableItemSelected = computed(
  () => (item) => selectedAvailableItem.value?.id === item.id,
)

const availableItemsList = computed(() => {
  return selectedAvailableItem.value ? [selectedAvailableItem.value] : []
})

// Methods
const toggleUserItem = (item) => {
  const index = selectedUserItems.value.findIndex(
    (selectedUserItem) => selectedUserItem.id === item.id,
  )

  if (index === -1) {
    if (selectedUserItems.value.length < 6) {
      selectedUserItems.value.push(item)
    }
  } else {
    selectedUserItems.value.splice(index, 1)
  }
}

const toggleAvailableItem = (item) => {
  selectedAvailableItem.value = item.id === selectedAvailableItem.value?.id ? null : item
}
</script>

<style scoped>
@reference "tailwindcss";

.section {
  @apply grid grid-cols-1 gap-6 lg:grid-cols-2;
}
</style>
