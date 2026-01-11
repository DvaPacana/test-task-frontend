<script setup>
import ItemCard from './ItemCard.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  },
  selectedItems: {
    type: Array,
    default: () => []
  },
  emptyMessage: {
    type: String,
    default: 'Нет выбранных вещей'
  },
})

defineEmits(['item-click'])

const isItemSelected = (item) => {
  return props.selectedItems?.some((i) => i.id === item.id) || false
}
</script>

<template>
  <div class="block">
    <h2>{{ title }}</h2>
    <p v-if="hint" class="hint">{{ hint }}</p>
    <div class="items-container">
      <div v-if="items.length === 0" class="empty-message">
        {{ emptyMessage }}
      </div>
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :selected="isItemSelected(item)"
        @click="$emit('item-click', item)"
      />
    </div>
  </div>
</template>

<style scoped>
.block {
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.block h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: #2c3e50;
}

.hint {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 100px;
}

.empty-message {
  color: #999;
  font-style: italic;
  padding: 20px;
  text-align: center;
  width: 100%;
}
</style>

