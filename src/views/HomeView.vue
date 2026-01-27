<template>
  <div class="home-container">
    <div class="home-container-column">
      <div class="home-container-column__header-card">
        <div class="home-container-column__header-card-inventory">

          <template v-for="item in selectedLeftItems" :key="item.id">
            <ItemView :item="item" @select="unselectLeftItem(item)" />
          </template>
        </div>
        <div class="home-container-column__header-card__info">
          selected: {{ selectedLeftItems.length }} / 6
        </div>
      </div>
      <div class="home-container-column__body-card">
        <template v-for="item in itemsLeft" :key="item.id">
          <ItemView :item="item" @select="selectLeftItem(item)" />
        </template>
      </div>
    </div>
    <div class="home-container-column">
      <div class="home-container-column__header-card">
        <template v-for="item in selectedRightItem" :key="item.id">
          <ItemView :item="item" @select="unselectRightItem(item)" />
        </template>
      </div>
      <div class="home-container-column__body-card">
        <template v-for="item in itemsRight" :key="item.id">
          <ItemView :item="item" @select="selectRightItem(item)" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLeftItems, useRightItems } from '@/logic/items';
import ItemView from '@/components/ItemView.vue';

const { selectedLeftItems, itemsLeft, selectLeftItem, unselectLeftItem } = useLeftItems();
const { selectedRightItem, itemsRight, selectRightItem, unselectRightItem } = useRightItems();
</script>

<style scoped lang="scss">
$gap: 20px;
$gap-sm: 10px;
$border-color: #ffff;
$radius: 10px;

.home-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: $gap-sm;
  gap: $gap;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &-column {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap;

    &__header-card {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: start;
      justify-content: space-between;
      gap: $gap-sm;
      border: 1px solid $border-color;
      border-radius: $radius;
      min-height: 50px;
      padding: $gap-sm;

      &-inventory {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: $gap-sm;
      }

      &__info {
        font-size: 12px;
        color: $border-color;
        user-select: none;
      }
    }

    &__body-card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: $gap-sm;
      border: 1px solid $border-color;
      border-radius: $radius;
      padding: $gap-sm;
    }
  }
}
</style>
