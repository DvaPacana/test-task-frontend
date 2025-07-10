<template>
  <div class="CarriedItems">
    <div class="CarriedItems__items">
      <ItemCard v-for="item in chosenItems" :key="item.id" :item="item" />
    </div>
    <div class="CarriedItems__amount">
      Selected: {{chosenItems.length}} out of {{allItemsAmount}}
    </div>
  </div>
</template>

<script setup>
  import {defineProps} from "vue";
  import ItemCard from "@/components/entites/ItemCard.vue";

  defineProps({
    chosenItems: {
      type: Array,
    },
    allItemsAmount: {
      type: Number,
    }
  })

</script>

<style scoped lang="scss">
.CarriedItems {
  min-height: 337px;
  display: flex;
  flex-direction: column;

  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  &__amount {
    margin-top: auto;
    padding-top: 10px;
  }
}
</style>
