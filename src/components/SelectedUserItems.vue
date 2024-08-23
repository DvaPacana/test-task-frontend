<template>
  <div class="selected">
    <div class="items">
      <div v-for="item in selected" :key="`selected-id-${item.id}`" :title="item.name">
        {{ item.name }}
      </div>
    </div>
    <div class="selected-counter"> Selected: {{ selected.length }} / {{ maxSelectedUserItems }} </div>
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from '../composables/useDataStore';
import { maxSelectedUserItems } from '../constants/data';

const { selected } = useDataStore('user')
</script>

<style scoped>
.selected {
  border: 3px solid black;
  padding: 10px;
  display: flex;
  flex-flow: column;
}
.items {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.items > div {
  border: 2px solid black;
  flex: 60px 0 0;
  text-overflow: ellipsis;
  margin: 5px;
}
.selected-counter {
  margin-top: auto;
}
</style>