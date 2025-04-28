<template>
  <div class="selected-items">
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id" class="item">{{ item.name }}</div>
    </div>
    <div v-else>
      {{ emptyText }}
    </div>
    <div v-if="maxSelected !== Infinity">Selected: {{ items.length }} / {{ maxSelected }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {type: Array, required: true},
  maxSelected: {type: Number},
  emptyText: {type: String, default: 'Nothing selected'}
});
</script>

<style scoped>
.selected-items {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 2px solid black;
}
</style>
