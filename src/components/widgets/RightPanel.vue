<template>
  <PanelContainer class="RightPanel">
    <template #top>
      <SelectedItem :chosen-item="chosenItem" />
    </template>

    <template #bottom>
      <ItemsStore :items-list="rightItems" />
    </template>
  </PanelContainer>
</template>

<script setup>

import PanelContainer from "@/components/shared/PanelContainer.vue";
import ItemsStore from "@/components/features/ItemsStore.vue";
import {rightItems} from "@/components/entites/model/rightItems";
import SelectedItem from "@/components/features/SelectedItem.vue";
import {provide, ref} from "vue";

const chosenItem = ref()

provide('itemClicked', (item) => {
  chosenItem.value = item
})
</script>

<style lang="scss">
.RightPanel {


  .PanelContainer__top {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
