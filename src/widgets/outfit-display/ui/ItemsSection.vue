<script setup lang="ts">
import { Item } from "@/entities/item";
import { ItemButton } from "@/shared";

defineProps<{
  title: string;
  items: Item[];
  isSelected: (itemId: number) => boolean;
  isDisabled?: (itemId: number) => boolean;
}>();

defineEmits<{
  toggle: [item: Item];
}>();
</script>

<template>
  <div class="items-section">
    <label class="items-section__title">{{ title }}</label>
    <div class="items-section__grid">
      <ItemButton
        v-for="item in items"
        :key="item.id"
        :item="item"
        :selected="isSelected(item.id)"
        :disabled="isDisabled?.(item.id) || false"
        @toggle="(selectedItem) => $emit('toggle', selectedItem)"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.items-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.items-section__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-slate-900);
}

.items-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-12);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}
</style>
