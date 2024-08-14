<template lang="pug">

.tile-stock
  
  .tile-stock__section

    tile-stock-selected(
      :items="userSelected" 
      :max="userMaxSelected"
    )

  //
    .tile-stock__section

      tile-stock-selected(
        :items="stockSelected" 
        :max="stockMaxSelected"
      )


  .tile-stock__section
    
    tile-stock-item(
      v-if="stockSelected && stockSelected.length"
      v-bind="stockSelected[0]" 
      :primary="true"
    )

  .tile-stock__section
    
    tile-stock-list(
      :items="userItems" 
      :max-selected="userMaxSelected"
      v-model:selected="userSelected" 
      v-model:values="userModel"
    )

  .tile-stock__section
    
    tile-stock-list(
      :items="stockItems" 
      :max-selected="stockMaxSelected"
      v-model:selected="stockSelected"
      v-model:values="stockModel"
    )

</template>

<script setup>
import TileStockList from './TileStockList.vue';
import TileStockSelected from './TileStockSelected.vue';
import TileStockItem from './TileStockItem.vue';

import { ref } from 'vue';

defineProps({
  userItems: {
    type: Array,
    default: () => ([]),
  },

  stockItems: {
    type: Array,
    default: () => ([]),
  },
});

const userModel = ref([]);
const stockModel = ref([]);

const userSelected = ref([]);
const stockSelected = ref([]);

const userMaxSelected = ref(6);
const stockMaxSelected = ref(1);

</script>

<style lang="scss">

.tile-stock {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  min-height: 100vh;
  max-width: 960px;

  box-sizing: border-box;
  margin: auto;
  padding: 48px;
}

</style>
