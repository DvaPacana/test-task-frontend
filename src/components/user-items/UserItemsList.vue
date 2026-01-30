<script setup lang="ts">
import type { Item } from "@/types/item.type.ts";
import ItemCard from "../item/ItemCard.vue";

interface IProps {
  items: Item[],
  selectedIds: number[],
}

interface IEmits {
  select: [id: number],
}

defineProps<IProps>();
const emit = defineEmits<IEmits>();
</script>

<template>
  <div class="user-items-list">
    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      :selected="selectedIds.includes(item.id)"
      @click="emit('select', item.id)"
    />
  </div>
</template>

<style scoped lang="scss">
.user-items-list {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  overflow-y: auto;
  padding: 8px;
}
</style>