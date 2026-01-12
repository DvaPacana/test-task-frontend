<script setup lang='ts'>
import SelectItemsSection from '@/components/SelectItemsSection.vue';
import { USER_ITEMS, SHOP_ITEMS } from '@/data/items';
</script>

<template>
  <div class="main-page">
    <h1 class="title">Selections</h1>

    <div class="wrapper">
      <SelectItemsSection
        class="user-cart"
        :items="USER_ITEMS"
        section-title="User Cart"
        empty-message="Select item(s) from the list below."
      />

      <SelectItemsSection
        class="shop"
        :items="SHOP_ITEMS"
        section-title="Shop"
        :selection-limit="1"
        empty-message="Chose an Item."
      />
    </div>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: max(1rem, 3vw);
  }

  .title {
    text-align: center;
    font-size: 2rem;
  }
  
  .user-cart {
    align-items: start;
  }

  .shop {
    align-items: end;
  }
}

</style>
