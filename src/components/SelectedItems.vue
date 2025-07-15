<template>
  <div class="items-container">
    <catalog-item
        v-for="item in items"
        :key="item.id"
        :name="item.name"
    />
  </div>
</template>

<script setup lang="ts">
import CatalogItem from "./CatalogItem.vue";
import type {ICatalogItem} from "../type/api.type.ts";

defineProps<{
  items: Set<ICatalogItem>
}>()

</script>

<style scoped>
.items-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: start;
  background-color: rgba(128, 128, 128, 0.10);
  border: 1px solid rgba(128, 128, 128, 0.25);
  padding: 16px;
  border-radius: 12px;
  min-width: 120px;
  min-height: 60px;
}
</style>
