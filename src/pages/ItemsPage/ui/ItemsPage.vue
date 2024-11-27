<script setup lang="ts">
import { ItemsList } from '@/widgets'

import { leftItems, rightItems } from '../const/mockData'
import { useSingleSelectedItemModel, useMultiSelectedItemModel } from '@/entities/Item'

const singleSelectedItemModel = useSingleSelectedItemModel()
const multiSelectedItemModel = useMultiSelectedItemModel()

const handleClickLeftItems = (id: string) => {
  multiSelectedItemModel.add(id)
}
const handleClickRightItems = (id: string) => {
  singleSelectedItemModel.update(id)
}
</script>

<template>
  <div class="wrapper">
    <div class="multiSelected">
      <h4>Multi selected</h4>
      <p v-if="multiSelectedItemModel.isEmpty">n/a</p>
      <ItemsList
        v-else
        :items="leftItems.filter((item) => multiSelectedItemModel.ids.includes(item.id))"
        @click="handleClickRightItems"
      />
    </div>

    <div class="singleSelected">
      <h4>Single selected</h4>
      <p v-if="singleSelectedItemModel.isEmpty">n/a</p>

      <ItemsList
        v-else
        :items="[rightItems.find((item) => item.id === singleSelectedItemModel.id)!]"
        @click="handleClickRightItems"
      />
    </div>

    <div class="leftItems">
      <ItemsList :items="leftItems" @click="handleClickLeftItems" />
    </div>

    <div class="rightItems">
      <ItemsList :items="rightItems" @click="handleClickRightItems" />
    </div>
  </div>
</template>

<style scoped>
.multiSelected {
  grid-area: multiSelected;
}
.singleSelected {
  grid-area: singleSelected;
}
.leftItems {
  grid-area: leftItems;
}
.rightItems {
  grid-area: rightItems;
}

.wrapper {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    'multiSelected singleSelected'
    'leftItems rightItems';
}
</style>
