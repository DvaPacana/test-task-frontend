<template>
    <div
      :class="['section__item', { 'section__item--selected': isSelected }]"
      @click="onClick"
    >
      {{ name }}
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    isSelected: Boolean,
  })
  
  const emit = defineEmits(['click'])
  
  const onClick = () => {
    emit('click')
  }
  </script>
  
  <style scoped>
  .section__item {
    background: #f8f8f8;
    border: 2px solid #ddd;
    border-radius: 6px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
    color: #333;
  }
  
  .section__item:hover {
    background: #e8e8e8;
    border-color: #999;
  }
  
  .section__item--selected {
    background: #4CAF50;
    color: white;
    border-color: #45a049;
  }
  
  .section__item--selected:hover {
    background: #45a049;
  }
  </style>
  