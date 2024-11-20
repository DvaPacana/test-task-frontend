<template>
  <div class="item" :class="{ 'item_select': select }">
    {{ name }}
  </div>
</template>
  
<script setup>
  defineProps({
    name: String,
    select: Boolean
  })
</script>

<style>
.item {
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: inline-flex;

    padding: 10px;
    border: 1px solid black;
  }

  .item_select {
    background: rosybrown;
  }
</style>
