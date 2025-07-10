<template>
  <div class="SelectedItem">
    <ItemCard :item="chosenItem" v-if="!!chosenItem" />
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import ItemCard from "@/components/entites/ItemCard.vue";

defineProps({
  chosenItem: {
    type: Object,
  }
})
</script>

<style scoped lang="scss">
.SelectedItem {
  width: 200px;
  height: 200px;
}
</style>
