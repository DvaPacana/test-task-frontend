<script setup lang="ts">
import type { ItemInterface } from '@/Interfaces/Item.Interface'
import Cart from '@/components/Cart.vue'
import Item from '@/components/Item.vue'
import Shop from '@/components/Shop.vue'

import { useShopStore } from '@/stores/Shop'
import { useShopSingleStore } from '@/stores/ShopSingle'

const storeShop = useShopStore()
const storeShopSingle = useShopSingleStore()

function addItem(item: ItemInterface) {
  storeShop.addToCart(item)
}
function deleteItemItem(index: number) {
  storeShop.deleteItem(index)
}

function addItemSingle(item: ItemInterface) {
  storeShopSingle.addToCart(item)
}
function deleteItemSingle() {
  storeShopSingle.deleteItem()
}
</script>
<template>
  <div>
    <div class="carts">
      <Cart :items="storeShop.cart" @deleteItem="deleteItemItem" style="max-width: 49vw" />
      <Item
        v-if="storeShopSingle.cart"
        :item="storeShopSingle.cart"
        @click-item="deleteItemSingle"
      />
    </div>

    <div class="shops">
      <Shop :items="storeShop.items" shared @addItem="addItem" />
      <Shop :items="storeShopSingle.items" single @addItem="addItemSingle" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.shops {
  display: flex;
  gap: 10px;
}
.carts {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>
