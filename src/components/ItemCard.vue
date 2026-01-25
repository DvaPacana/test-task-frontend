<template>
    <div class="item-card" @click="$emit('click')">
      {{ item.name }}
    </div>
  </template>
  
  <script lang="ts" setup>
  interface Item {
    id: number
    name: string
  }
  
  defineProps<{
    item: Item
  }>()
  </script>
  
  <style scoped>
  .item-card {
    padding: 10px;
    border: 1px solid #aaa;
    border-radius: 6px;
    cursor: pointer;
    background: #f4f4f4;
    text-align: center;
    user-select: none;
    transition: 0.2s;
  }
  
  .item-card:hover {
    background: #e0e0e0;
  }
  </style>
  