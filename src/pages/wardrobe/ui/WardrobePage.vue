<script setup>
import { computed, ref } from 'vue'
import { availableItems, userItems } from '../../../entities/item/model/items'
import SelectedSummary from '../../../widgets/selected-summary/ui/SelectedSummary.vue'
import ItemsSelection from '../../../widgets/items-selection/ui/ItemsSelection.vue'

const maxSelected = 6

const selectedUserIds = ref([])
const selectedAvailableId = ref(null)

const userItemsById = Object.fromEntries(userItems.map((item) => [item.id, item]))
const availableItemsById = Object.fromEntries(availableItems.map((item) => [item.id, item]))

const selectedUserItems = computed(() =>
  selectedUserIds.value.map((id) => userItemsById[id]).filter(Boolean)
)

const selectedAvailableItem = computed(() => {
  if (selectedAvailableId.value == null) {
    return null
  }
  return availableItemsById[selectedAvailableId.value] || null
})

const headerSubtitle = computed(
  () =>
    `Выберите до ${maxSelected} вещей из своего списка и одну вещь из доступных.`
)

const resetDisabled = computed(
  () => selectedUserIds.value.length === 0 && selectedAvailableId.value === null
)

const toggleUserItem = (itemId) => {
  const current = selectedUserIds.value
  const index = current.indexOf(itemId)
  if (index >= 0) {
    selectedUserIds.value = [...current.slice(0, index), ...current.slice(index + 1)]
    return
  }
  if (current.length >= maxSelected) {
    return
  }
  selectedUserIds.value = [...current, itemId]
}

const selectAvailableItem = (itemId) => {
  selectedAvailableId.value = selectedAvailableId.value === itemId ? null : itemId
}

const resetSelections = () => {
  selectedUserIds.value = []
  selectedAvailableId.value = null
}
</script>

<template>
  <main class="page">
    <header class="page__header">
      <div class="page__header-row">
        <div class="page__heading">
          <h1 class="page__title">Подбор вещей</h1>
          <p class="page__subtitle">{{ headerSubtitle }}</p>
        </div>
        <button
          class="action-button"
          type="button"
          :disabled="resetDisabled"
          @click="resetSelections"
        >
          Сбросить выбор
        </button>
      </div>
    </header>

    <SelectedSummary
      :selected-user-items="selectedUserItems"
      :max-selected="maxSelected"
      :selected-available-item="selectedAvailableItem"
      @toggle-user="toggleUserItem"
      @select-available="selectAvailableItem"
    />

    <ItemsSelection
      :user-items="userItems"
      :available-items="availableItems"
      :selected-user-ids="selectedUserIds"
      :selected-available-id="selectedAvailableId"
      :max-selected="maxSelected"
      @toggle-user="toggleUserItem"
      @select-available="selectAvailableItem"
    />
  </main>
</template>
