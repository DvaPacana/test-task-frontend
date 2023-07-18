<script lang="ts" setup>
import { ItemList, useUserItemStore } from '@/entities'

const userItemStore = useUserItemStore()
</script>

<template>
  <ItemList
    v-if="userItemStore.selectedItems?.length"
    :items="userItemStore.selectedItems"
  />
</template>
