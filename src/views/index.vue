<template>
  <main class="main">
    <div class="main__inner">
      <div class="main__header header">
        <ItemsSelected />
        <OneItem :item="getItem" />
      </div>
      <div class="main__stock stock">
        <ItemsList :items="leftItems" @push="pushCart" />
        <ItemsList :items="rightItems" @push="pushItem" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ItemsSelected from "../components/itemsSelected/index.vue";
import ItemsList from "../components/itemsList/index.vue";
import OneItem from "../components/oneItem/index.vue";
const store = useStore();

//getters
const leftItems = computed(() => store.getters.getLeftItems);
const rightItems = computed(() => store.getters.getRightItems);
const userCart = computed(() => store.getters.getUserCart);
const getItem = computed(() => store.getters.getItem);
const getSelectedItem = computed(() => store.getters.getSelectedItem);

//actions
const pushItemToCart = (payload) => store.dispatch("pushUserCart", payload);
const pushOneItem = (payload) => store.dispatch("pushItem", payload);
const returnItem = (payload) => store.dispatch("returnItem", payload);

const pushCart = (item) => {
  const payload = {
    id: item.id,
    name: item.name,
    icon: item.icon,
  };
  if (userCart.value.length <= 5) {
    pushItemToCart(payload);
  }
};
const pushItem = async (payload) => {
  if (getSelectedItem.value.id) {
    await returnItem(getSelectedItem.value);
    pushOneItem(payload);
  } else {
    pushOneItem(payload);
  }
};
</script>

<style lang="scss" scoped>
.main {
  &__inner {
    @include container;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin-bottom: 50px;
  }
  .stock {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
}
</style>
