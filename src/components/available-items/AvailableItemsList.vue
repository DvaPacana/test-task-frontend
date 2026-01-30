<script setup lang="ts">
import type { Item } from "@/types/item.type.ts";
import ItemCard from "@/components/item/ItemCard.vue";

interface IProps {
  items: Item[],
  selectedId: number | null,
}

interface IEmits {
  select: [id: number],
}

defineProps<IProps>();
const emit = defineEmits<IEmits>();
</script>

<template>
  <div class="available-items-list">
    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      :selected="item.id === selectedId"
      @click="emit('select', item.id)"
    />
  </div>
</template>

<style scoped lang="scss">
.available-items-list {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  overflow-y: auto;
  padding: 8px;
}
</style>