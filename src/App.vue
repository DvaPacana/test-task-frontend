<template>
  <div class="layout">
    <SelectedUserItems class="selected-user-block" />
    <SelectedChooseItems class="selected-chosen-block" />
    <ItemsList type="user" class="user-items-block" />
    <ItemsList type="chosen" class="chosen-items-block" />
  </div>

</template>

<script setup lang="ts">
import ItemsList from './components/ItemsList.vue';
import SelectedChooseItems from './components/SelectedChooseItems.vue';
import SelectedUserItems from './components/SelectedUserItems.vue';
import { useInitDataStore } from './composables/useInitDataStore';



useInitDataStore();

</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: min-content 1fr;
  grid-gap: 20px;
  padding: 30px 20px;
}
.selected-user-block {
 grid-column: 1 / 1;
}
.selected-chosen-block {
  grid-column: 4 / 4;
}
.user-items-block {
  grid-column: 1 / span 2;
  grid-row: 2;

}
.chosen-items-block {
  grid-column: 3 / span 2;
  grid-row: 2;
}
</style>
