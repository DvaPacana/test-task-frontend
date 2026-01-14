<script setup lang="ts">
import { useMultiSelect, useSingleSelect } from '@/composables'
import { userItems, choiceItems } from '@/data/items'
import type { ClothingItem } from '@/types'
import ItemCard from '@/components/ItemCard.vue'

const userSelection = useMultiSelect<ClothingItem>({ min: 1, max: 6 })
const choiceSelection = useSingleSelect<ClothingItem>()
</script>

<template>
  <main class="app">
    <section class="row">
      <div class="panel">
        <div class="display-area">
          <ItemCard
            v-for="item in userSelection.selected.value"
            :key="item.id"
            :label="item.name"
            selected
          />
        </div>
        <span class="counter">выбрано: {{ userSelection.count.value }} / 6</span>
      </div>

      <div class="panel display-area single">
        <ItemCard
          v-if="choiceSelection.selected.value"
          :label="choiceSelection.selected.value.name"
          selected
        />
        <span v-else class="placeholder">Выбранная вещь</span>
      </div>
    </section>

    <section class="row">
      <div class="panel">
        <div class="grid">
          <ItemCard
            v-for="item in userItems"
            :key="item.id"
            :label="item.name"
            :selected="userSelection.isSelected(item)"
            :disabled="!userSelection.canSelect.value && !userSelection.isSelected(item)"
            @click="userSelection.toggle(item)"
          />
        </div>
      </div>

      <div class="panel">
        <div class="grid">
          <ItemCard
            v-for="item in choiceItems"
            :key="item.id"
            :label="item.name"
            :selected="choiceSelection.isSelected(item)"
            @click="choiceSelection.toggle(item)"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.app {
  --card-size: 40px;
  --gap: 8px;
  --border: 2px solid #000;

  max-width: 700px;
  margin: 20px auto;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  border: var(--border);
  padding: 15px;
}

.display-area {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  min-height: calc(var(--card-size) * 2 + var(--gap));
}

.display-area.single {
  align-items: center;
  justify-content: center;
}

.display-area :deep(.card) {
  width: 70px;
}

.counter {
  display: block;
  margin-top: 10px;
  color: #666;
}

.placeholder {
  color: #999;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
}
</style>
