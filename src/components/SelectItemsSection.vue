<script setup lang='ts'>
import type { Item } from '@/types';
import TheItem from './TheItem.vue';
import { USER_SELECTION_LIMIT } from '@/constants'
import { useSelectItems } from '@/composables/useSelectItems';
import { watchEffect } from 'vue';

const {
  items,
  selectionLimit = USER_SELECTION_LIMIT,
  sectionTitle = 'Items Selection',
  emptyMessage = 'No items selected.',
} = defineProps<{
  items: Item[],
  selectionLimit?: number,
  sectionTitle?: string,
  emptyMessage?: string,
}>()

watchEffect(() => {
  if (selectionLimit <= 0 || !Number.isInteger(selectionLimit)) {
    console.error('selectionLimit must be a positive integer')
    // We could throw an error in prod
  }
})

const {
    selectedItems,
    checkItemIsSelected,
    handleClickItem,
  } = useSelectItems({ items, selectionLimit })
</script>

<template>
  <section class="selection">
    <h2>{{ sectionTitle }}</h2>
    
    <div class="selection__selected selection__wrapper">
      <p
        v-if="selectionLimit === 1"
        class="selection__selected--single"
      >
        {{ selectedItems[0] ? selectedItems[0].name : emptyMessage }}
      </p>
  
      <div
        v-else
        class="selection__selected--multi"
      >
        <p v-if="selectedItems.length === 0">
          {{ emptyMessage }}
        </p>
        
        <ul v-else class="selection__list">
          <li v-for="item in selectedItems">
            <TheItem
              :item
              @item-clicked="handleClickItem"
            />
          </li>
        </ul>

        <p>Selected: {{ selectedItems.length }} / {{ selectionLimit }}</p>
      </div>
    </div>

    <div class="selection__wrapper">
      <ul class="selection__list">
        <li v-for="item in items">
          <TheItem
            :item
            :is-selected="checkItemIsSelected(item)"
            @item-clicked="handleClickItem"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.selection {
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.selection__wrapper {
  width: 100%;
  border: 2px solid var(--color-main);
  padding: var(--spacing);
}

.selection__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 90px), 1fr));
  gap: var(--spacing);
}

.selected__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 100%));
  gap: var(--spacing);
}

.selection__selected {
  width: 60%;
  height: 100%;

  .selection__selected--single {
    text-align: center;
  }

  .selection__selected--multi {
    display: grid;
    gap: var(--spacing);
  }
}
</style>
