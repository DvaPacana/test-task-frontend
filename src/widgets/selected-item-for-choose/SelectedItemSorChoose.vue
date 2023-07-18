<script lang="ts" setup>
import { ItemLi, useItemForChooseStore } from '@/entities'

const itemForChooseStore = useItemForChooseStore()
</script>

<template>
  <ItemLi
    v-if="itemForChooseStore.selectedItem"
    :item="itemForChooseStore.selectedItem"
  />
</template>
