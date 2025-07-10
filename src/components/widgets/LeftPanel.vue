<template>
  <PanelContainer class="LeftPanel">
    <template #top>
      <CarriedItems :chosen-items="chosenItems" :all-items-amount="leftItems.length" />
    </template>
    <template #bottom>
      <ItemsStore :items-list="leftItems" />
    </template>
  </PanelContainer>
</template>

<script setup>
import PanelContainer from "@/components/shared/PanelContainer.vue";
import CarriedItems from "@/components/features/CarriedItems.vue";
import ItemsStore from "@/components/features/ItemsStore.vue";
import {provide, shallowRef} from "vue";
import {leftItems} from "@/components/entites/model/leftItems";

const chosenItems = shallowRef([])

const selectItem = (addedItem) => chosenItems.value = [...chosenItems.value, addedItem]

const removeItem = (removedItem) => chosenItems.value = chosenItems.value.filter(item => item.id !== removedItem.id)

provide('itemClicked', (item) => {
  if (chosenItems.value.find(chosenItem => chosenItem.id === item.id)) {
    removeItem(item)
  } else {
    selectItem(item)
  }
})
</script>

<style scoped>

</style>
