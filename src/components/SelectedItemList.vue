<template>
  <div class="selected-item-list">
    <div
        v-for="item in selectedItems"
        :key="item.id"
        class="selected-item-list__item"
    >
      {{ item.name }}
      <i class="mdi mdi-delete-outline" @click="removeItem(item)"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeItem(item) {
      this.$emit("remove", item);
    },
  },
};
</script>

<style lang="scss" scoped>

.selected-item-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
    &__item{
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
}

</style>
