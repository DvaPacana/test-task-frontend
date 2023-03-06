<template>
  <ul class="items">
    <li
      v-for="item in items"
      :key="item.id"
      class="items__item"
      :class="item.icon"
      @click="push(item)"
    ></li>
  </ul>
</template>

<script setup>
const emit = defineEmits(["push"]);
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
const push = (item) => {
  emit("push", item);
};
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  border: 2px solid #555555;
  &__item {
    max-width: 70px;
    max-height: 70px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    background: #fff;
    box-shadow: 0 0.1rem 0.2rem 0 rgb(0 0 0 / 5%);
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0.1rem 0.2rem 0 rgb(0 0 0 / 15%);
    }
    &::before {
      font-size: 40px;
    }
  }
}
</style>
