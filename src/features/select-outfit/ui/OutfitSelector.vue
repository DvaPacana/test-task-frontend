<script setup lang="ts">
import { LEFT_ITEMS, RIGHT_ITEMS } from "@/shared";
import { useOutfitSelection } from "../model/useOutfitSelection";
import {
  OutfitSelectorBottom,
  OutfitSelectorTitle,
  OutfitSelectorTop,
} from "@/widgets/outfit-display";

const {
  selectedFromLeft,
  selectedFromRight,
  toggleLeft,
  toggleRight,
  removeFromLeft,
} = useOutfitSelection();

const removeFromRight = () => {
  selectedFromRight.value = null;
};
</script>

<template>
  <div class="outfit-selector">
    <OutfitSelectorTitle />
    <OutfitSelectorTop
      :selected-from-left="selectedFromLeft"
      :selected-from-right="selectedFromRight"
      @remove-left="removeFromLeft"
      @remove-right="removeFromRight"
    />
    <OutfitSelectorBottom
      :left-items="LEFT_ITEMS"
      :right-items="RIGHT_ITEMS"
      :is-selected-left="
        (itemId) => selectedFromLeft.some((i) => i.id === itemId)
      "
      :is-selected-right="(itemId) => selectedFromRight?.id === itemId"
      :is-left-disabled="
        (itemId) =>
          selectedFromLeft.length >= 6 &&
          !selectedFromLeft.some((i) => i.id === itemId)
      "
      @toggle-left="toggleLeft"
      @toggle-right="toggleRight"
    />
  </div>
</template>

<style lang="scss">
@use "@/app/styles/variables";

.outfit-selector {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-20);
}
</style>
