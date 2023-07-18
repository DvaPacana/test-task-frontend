<script lang="ts" setup>
import { ItemList, useItemForChooseStore } from '@/entities'

const itemForChooseStore = useItemForChooseStore()

if (!itemForChooseStore.items?.length) await itemForChooseStore.getItems()
</script>

<template>
  <ItemList
    v-if="itemForChooseStore.items?.length"
    :items="itemForChooseStore.items"
    @item-click="itemForChooseStore.chooseItem"
  />
</template>
