<script setup>
import ItemToken from '@/elements/ItemToken.vue'

const props = defineProps({
  itemsList: { type: Set, default: () => new Set() },
  itemsLimit: { type: Number, default: 0 },
})
const emit = defineEmits(['itemSelect'])
</script>

<template>
  <div class="panel display-panel">
    <div class="display-panel__list">
      <ItemToken
        v-for="item in itemsList"
        :key="item.id"
        :item-model="item"
        @click="emit('itemSelect', item)"
      />
    </div>
    <div>Selected: {{ itemsList.size }} / {{ itemsLimit }}</div>
  </div>
</template>

<style>
.display-panel {
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 5px;

  .display-panel__list {
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    gap: 5px;
    flex: 2;
  }
}
</style>
