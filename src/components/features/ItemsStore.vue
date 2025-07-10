<template>
  <div class="ItemsStore">
    <ItemCard v-for="item in itemsList" :key="item.id" :item="item" clickable/>
  </div>
</template>

<script setup>
  import ItemCard from "@/components/entites/ItemCard.vue";
  import {defineProps} from "vue";

  defineProps({
    itemsList: {
      type: Array,
    },
  })
</script>

<style scoped>
.ItemsStore {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
