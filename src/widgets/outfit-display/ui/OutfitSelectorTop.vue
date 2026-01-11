<script setup lang="ts">
import { Item } from "@/entities/item";
import SelectionBox from "@/features/outfit-selector/ui/SelectionBox.vue";

defineProps<{
  selectedFromLeft: Item[];
  selectedFromRight: Item | null;
}>();

defineEmits<{
  removeLeft: [itemId: number];
  removeRight: [itemId: number];
}>();
</script>

<template>
  <div class="outfit-selector__top">
    <div class="outfit-selector__section">
      <label class="outfit-selector__label"
        >Selected Shoes &amp; T-shirts</label
      >
      <SelectionBox
        :items="selectedFromLeft"
        @remove="(itemId) => $emit('removeLeft', itemId)"
      />
    </div>

    <div class="outfit-selector__section">
      <label class="outfit-selector__label">Selected Jacket or Hoodie</label>
      <SelectionBox
        :items="selectedFromRight ? [selectedFromRight] : []"
        @remove="(itemId) => $emit('removeRight', itemId)"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.outfit-selector__top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-32);
  margin-bottom: var(--space-32);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.outfit-selector__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.outfit-selector__label {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-slate-900);
}
</style>
