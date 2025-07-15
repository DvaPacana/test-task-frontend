<template>
  <div class="catalog">
    <catalog-item
        v-for="item in items"
        :key="item.id"
        :name="item.name"

        @click="emits('onSelectItem', item)"
    />
  </div>

</template>

<script setup lang="ts">

import type {ICatalogItem} from "../type/api.type.ts";
import CatalogItem from "./CatalogItem.vue";

defineProps<{
  items: ICatalogItem[]
}>()

const emits = defineEmits(['onSelectItem'])


</script>

<style scoped>

.catalog {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: start;
  background-color: rgba(128, 128, 128, 0.10);
  border: 1px solid rgba(128, 128, 128, 0.25);
  padding: 16px;
  border-radius: 12px;
}

</style>
