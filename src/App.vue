<script setup>
import SelectItems from './SelectItems.vue';
import { leftBlockItems, rightBlockItems } from './items';
</script>

<template>
  <div class="split">
    <SelectItems :items="leftBlockItems" :max-selected-items="6" />
    <SelectItems :items="rightBlockItems" :max-selected-items="1"/>
  </div>
</template>

<style>
.split {
  display: flex;
  gap: 10px;
  width: 100%;
}

.split > * {
  flex: 1;
}
</style>