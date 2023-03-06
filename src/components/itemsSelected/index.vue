<template>
  <ul class="user-items">
    <span v-if="!userCart[0]" class="user-items__title">Ничего не выбрано</span>
    <li
      v-else
      v-for="item in userCart"
      :key="item.id"
      class="user-items__item"
      :class="item.icon"
      @click="removeItem(item)"
    ></li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

//getters
const userCart = computed(() => store.getters.getUserCart);

//actions
const removeItemInCart = (payload) => store.dispatch("removeItem", payload);

const removeItem = (item) => {
  const payload = {
    id: item.id,
    name: item.name,
    icon: item.icon,
  };
  removeItemInCart(payload);
};
</script>

<style lang="scss" scoped>
.user-items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 2px solid #555555;
  &__title {
    display: inline-block;
    padding: 20px;
  }
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
