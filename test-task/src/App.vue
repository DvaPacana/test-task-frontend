<script setup>
  import SelectBlock from './components/select-block.vue';
  import { items as rightItems } from './models/right-items';
  import { items as leftItems } from './models/left-items';
</script>

<template>
  <div class="container">
    <SelectBlock :limit="6" :items="leftItems" />
    <SelectBlock :limit="1" :items="rightItems" />
  </div>
</template>

<style>
  .container {
    display: flex;
    gap: 50px;
  }
</style>
