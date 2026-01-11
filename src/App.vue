<script setup lang="ts">
import ItemsSection from './components/ItemsSection.vue'
import { userItems, availableItems } from './data'
import { useSelection } from './composables'
import { MAX_USER_ITEMS_SELECTION } from './constants'

const { selectedItems: selectedAvailableItems, toggleItem: selectAvailableItem } = useSelection()
const { selectedItems: selectedUserItems, toggleItem: toggleUserItem } = useSelection(MAX_USER_ITEMS_SELECTION)
</script>

<template>
  <section class="top-section" aria-label="Selected items">
    <ItemsSection
      title="User's selected items"
      :items="selectedUserItems"
      :selected-items="selectedUserItems"
      empty-message="No selected items"
      readonly
    >
      <template #footer>
        <p 
          class="selection-counter"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          :aria-label="`Selected ${selectedUserItems.length} out of ${MAX_USER_ITEMS_SELECTION} items`"
        >
          Selected {{ selectedUserItems.length }} / {{ MAX_USER_ITEMS_SELECTION }}
        </p>
      </template>
    </ItemsSection>
    <ItemsSection
      title="Selected available item"
      :items="selectedAvailableItems"
      :selected-items="selectedAvailableItems"
      empty-message="No selected item"
      readonly
    />
  </section>
  <section class="bottom-section" aria-label="Selection lists">
    <ItemsSection
      title="User's items"
      :items="userItems"
      :selected-items="selectedUserItems"
      :max-selection="MAX_USER_ITEMS_SELECTION"
      @item-click="toggleUserItem"
    />
    <ItemsSection
      title="Available items"
      :items="availableItems"
      :selected-items="selectedAvailableItems"
      :single-selection="true"
      @item-click="selectAvailableItem"
    />
  </section>
</template>

<style lang="scss" scoped>
@import './styles/variables';

.top-section {
  display: flex;
  gap: $gap-size;
  margin-bottom: $section-margin-bottom;

  > * {
    flex: 1 1 0;
    min-width: 0;
    max-width: 50%;
  }
}

.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $gap-size;
}

.selection-counter {
  margin-top: $counter-margin-top;
  margin-bottom: 0;
  text-align: center;
  font-size: $font-size-counter;
  color: $text-muted;
  font-weight: 500;
}
</style>
