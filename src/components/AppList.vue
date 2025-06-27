<script setup lang="ts">
import AppItem from '@/components/AppItem.vue'
import AppCard from '@/components/AppCard.vue'
import { useItemSelection } from '@/composables/useItemSelection'
import { MAX_USER_ITEMS } from '@/constants'

const {
  selectedUserItems,
  selectedChoiceItems,
  userItems,
  choiceItems,
  removeUserItem,
  removeChoiceItem,
  addUserItem,
  addChoiceItem,
} = useItemSelection()
</script>

<template>
  <div class="container">
    <div class="top-blocks">
      <AppCard>
        <div v-if="selectedUserItems.length === 0" class="empty">Не выбрано</div>
        <div v-else class="selected-list">
          <AppItem
            v-for="item in selectedUserItems"
            :key="item.id"
            :item="item"
            :show-remove="true"
            selected
            @remove="removeUserItem(item)"
          />
        </div>
        <div class="selected-count">
          selected: {{ selectedUserItems.length }} / {{ MAX_USER_ITEMS }}
        </div>
      </AppCard>
      <AppCard>
        <div v-if="selectedChoiceItems.length === 0" class="empty">Не выбрано</div>
        <div v-else class="selected-list">
          <AppItem
            :item="selectedChoiceItems[0]"
            :show-remove="true"
            selected
            @remove="removeChoiceItem"
          />
        </div>
      </AppCard>
    </div>
    <div class="bottom-blocks">
      <AppCard>
        <h3>your</h3>
        <div class="item-list">
          <AppItem
            v-for="item in userItems"
            :key="item.id"
            :item="item"
            @click="addUserItem(item)"
          />
        </div>
      </AppCard>
      <AppCard>
        <h3>available</h3>
        <div class="item-list">
          <AppItem
            v-for="item in choiceItems"
            :key="item.id"
            :item="item"
            @click="addChoiceItem(item)"
          />
        </div>
      </AppCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  padding: var(--spacing-2xl) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-2xl);
}

.top-blocks,
.bottom-blocks {
  display: flex;
  gap: var(--spacing-2xl);
}

.selected-list,
.item-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

h3 {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--main-text);
}

.selected-count {
  margin-top: var(--spacing-2xl);
  font-size: var(--font-size-lg);
  font-family: monospace;
  text-align: left;
}

.empty {
  color: var(--empty-text);
  font-style: italic;
  margin-top: var(--spacing-md);
}
</style>
