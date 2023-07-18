<script lang="ts" setup>
import { ItemList, useUserItemStore } from '@/entities'

const userItemStore = useUserItemStore()

if (!userItemStore.items?.length) {
  await userItemStore.getItems()
}
</script>

<template>
  <ItemList
    v-if="userItemStore.items?.length"
    :items="userItemStore.items"
    @item-click="userItemStore.chooseItem"
  />
</template>
