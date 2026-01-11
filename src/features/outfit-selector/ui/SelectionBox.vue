<script setup lang="ts">
import { Item } from "@/entities/item";
import SelectionBoxItem from "@/widgets/outfit-display/ui/SelectionBoxItem.vue";

defineProps<{
  items: Item[];
}>();

defineEmits<{
  remove: [itemId: number];
}>();
</script>

<template>
  <div class="selection-box">
    <div v-if="items.length === 0" class="selection-box__empty">
      Select items from below
    </div>

    <SelectionBoxItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @remove="(itemId) => $emit('remove', itemId)"
    />
  </div>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.selection-box {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-16);
  display: flex;
  gap: var(--space-12);
  flex-wrap: wrap;
}

.selection-box__empty {
  color: var(--color-gray-400);
  font-style: italic;
  padding: var(--space-16);
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
