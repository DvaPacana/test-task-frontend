<template>
  <div class="selected-items">
    <h3>{{ title }}</h3>
    <ul class="selected-items__list">
      <li v-for="item in items" :key="item.id" class="selected-items__item">
        {{ item.name }}
      </li>
    </ul>
    <span v-if="limit !== Infinity"
      >{{ this.$t('InventoryPage.SelectedText') }}{{ items.length }}/{{ limit }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: null
    },
    limit: {
      type: Number,
      default: Infinity
    }
  }
}
</script>

<style scoped>
.selected-items {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.selected-items__list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
