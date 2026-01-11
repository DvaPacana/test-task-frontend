<script setup lang="ts">
import { Item } from "@/entities/item";
import ItemsSection from "./ItemsSection.vue";

defineProps<{
  leftItems: Item[];
  rightItems: Item[];
  isSelectedLeft: (itemId: number) => boolean;
  isSelectedRight: (itemId: number) => boolean;
  isLeftDisabled: (itemId: number) => boolean;
}>();

defineEmits<{
  toggleLeft: [item: Item];
  toggleRight: [item: Item];
}>();
</script>

<template>
  <div class="outfit-selector__bottom">
    <ItemsSection
      title="Shoes &amp; T-shirts"
      :items="leftItems"
      :is-selected="isSelectedLeft"
      :is-disabled="isLeftDisabled"
      @toggle="(item) => $emit('toggleLeft', item)"
    />

    <ItemsSection
      title="Jackets &amp; Hoodies"
      :items="rightItems"
      :is-selected="isSelectedRight"
      @toggle="(item) => $emit('toggleRight', item)"
    />
  </div>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.outfit-selector__bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-32);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
