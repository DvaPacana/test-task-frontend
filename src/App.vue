<template>
  <div class="app">
    <div class="left-top-block top-block">
      <products-user-chose
        v-for="items in onClickProductArr"
        :key="items.id"
        :items="items"
      />
    </div>
    <div class="right-top-block top-block">{{ onClickProduct }}</div>
    <div class="left-bottom-block bottom-block">
      <products
        v-for="product in products"
        :key="product.id"
        @click="pushProductToArr"
        :product="product"
      />
    </div>
    <div class="right-bottom-block bottom-block">
      <products
        v-for="product2 in products2"
        :key="product2.id"
        @click="pushProduct"
        :product="product2"
      />
    </div>
  </div>
</template>

<script>
import products from "@/components/products.vue";
import productsUserChose from "@/components/productsUserChose.vue";
import { mapState } from "vuex";
import { ref } from '@vue/reactivity';
import pushProductArr from '@/hooks/pushProductArr'

export default {
  components: {
    products,
    productsUserChose,
  },
  setup(props) {
    const {onClickProductArr, pushProductToArr} = pushProductArr(6)
    const onClickProduct = ref("")

    return {
      onClickProductArr,
      pushProductToArr,
      onClickProduct
    }
  },
  methods: {
    pushProduct(e) {
      this.onClickProduct = e.target.textContent;
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.product.products,
      products2: (state) => state.product.products2,
    }),
  },
};
</script>

<style scoped>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.app {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.right-top-block {
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.top-block,
.bottom-block {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  min-width: 45vw;
  min-height: 45vh;
  border: 2px solid black;
}
</style>
