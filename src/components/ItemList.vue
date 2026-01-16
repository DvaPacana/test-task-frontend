<template>
    <div class="section__list">
      <Item
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :isSelected="true"
      />
      <div v-if="items.length === 0" class="section__empty">
        {{ emptyText }}
      </div>
    </div>
  </template>
  
  <script setup>
  import Item from './Item.vue'
  
  defineProps({
    items: Array,
    emptyText: String,
  })
  </script>
  
  <style scoped>
  .section__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .section__empty {
    color: #999;
    font-style: italic;
    padding: 20px;
    text-align: center;
  }
  </style>
  