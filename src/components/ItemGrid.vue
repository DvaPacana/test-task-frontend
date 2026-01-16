<template>
    <div class="section__grid">
      <Item
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :isSelected="isSelected(item.id)"
        @click="() => onItemClick(item)"
      />
    </div>
  </template>

  <script setup>
  import Item from './Item.vue'
  
  defineProps({
    items: Array,
    isSelected: Function,
  })
  
  const emit = defineEmits(['itemClick'])
  
  const onItemClick = (item) => {
    emit('itemClick', item)
  }
  </script>
  
  <style scoped>
  .section__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
  </style>
  