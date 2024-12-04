<template>
  <div class="item-list">
    <div
        v-for="item in items"
        :key="item.id"
        :class="{ 'item-list__item--inactive': isInactive(item) }"
        class="item-list__item"
        @click="selectItem(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    selectedItems: {
      type: Array,
      required: true,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectItem(item) {
      this.$emit("select", item);
    },
    isInactive(item) {
      return this.singleSelect
          ? this.selectedItems === item
          : this.selectedItems.includes(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.item{
  &-list {
    border: 1px solid;
    padding: 16px;
    width: 45%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, 75px);
    @media (max-width: 1050px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
      &__item {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
          &--inactive {
              background-color: #ccc;
              pointer-events: none;
              opacity: 0.6;
          }
      }
  }
}
</style>
