<template>
  <div
    v-if="item.id"
    class="selected-item"
    :class="item.icon"
    @click="push(item)"
  ></div>
  <div v-else class="selected-item">пусто</div>
</template>

<script setup>
const emit = defineEmits(["push"]);
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

const push = (item) => {
  emit("push", item);
};
</script>

<style lang="scss" scoped>
.selected-item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  margin-left: auto;
  background: #fff;
  border: 2px solid #555555;
  box-shadow: 0 0.1rem 0.2rem 0 rgb(0 0 0 / 5%);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.1rem 0.2rem 0 rgb(0 0 0 / 15%);
  }
  &::before {
    display: inline-block;
    font-size: 40px;
  }
}
</style>
