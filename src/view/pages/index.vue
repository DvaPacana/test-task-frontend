<script setup lang="ts">
import './index.scss'

import ItemsBlock from '@/view/components/items-block/items-block.vue'
import Item from '@/view/components/items-block/parts/item/item.vue'
import Loader from '@/view/components/loader/loader.vue'

import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

const { itemsOne, itemsTwo, selectedItem, selectedItems, loading } = storeToRefs(productsStore)
const { selectOneItem, selectManyItems, deleteSelectedItem, reset } = productsStore
</script>

<template>
  <Loader v-if="loading" />

  <div class="main" v-if="!loading">
    <div class="main__selected">
      <div>
        <div class="main__selected-items">
          <div v-if="!selectedItems.length">Выберите товар</div>
          <Item
            v-else
            class="main__selected-item"
            v-for="item in selectedItems"
            :item="item"
            v-bind:key="item.id"
          >
            <template #default
              ><span class="main__selected-item-delete" @click="deleteSelectedItem(item.id)"
            /></template>
          </Item>
        </div>
      </div>
      <div>
        <div class="main__selected-items">
          <div v-if="!selectedItem">Выберите товар</div>
          <Item class="main__selected-item" v-if="selectedItem" :item="selectedItem"
            ><template #default
              ><span
                class="main__selected-item-delete"
                @click="deleteSelectedItem(selectedItem.id)" /></template
          ></Item>
        </div>
      </div>
    </div>
    <div class="main__catalog">
      <div class="main__catalog-block main__catalog-block_one">
        <ItemsBlock :items="itemsOne" @select="selectManyItems" />
      </div>
      <div class="main__catalog-block main__catalog-block_two">
        <ItemsBlock :items="itemsTwo" @select="selectOneItem" />
      </div>
    </div>
    <div>
      <button class="main__reset-button" @click="reset">Что там ещё есть?</button>
    </div>
  </div>
</template>
