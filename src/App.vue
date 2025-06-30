<script setup lang="ts">
import ItemsBlock from './components/ItemsBlock.vue'
import { firstBlockItems, secondBlockItems } from './assets/items'
import ProductItem from './components/ProductItem.vue'
import { computed, reactive, ref } from 'vue'
import FirstCounter from './components/FirstCounter.vue'

type Product = {
  id: number
  name: string
}

const firstSelected = ref(reactive(new Set<Product>()))
const secondSelected = ref(reactive(new Set<Product>()))

const secondSelectedFirstItem = computed(() => secondSelected.value.values().next().value)
</script>

<template>
  <main class="container">
    <div class="header">
      <FirstCounter :max="6" :selected="firstSelected">
        <template #default="{ item }">
          <ProductItem v-bind="item" :selected="false" />
        </template>
      </FirstCounter>
      <div class="second-counter">
        {{ secondSelectedFirstItem?.name || '' }}
      </div>
    </div>
    <div class="blocks">
      <ItemsBlock
        id-attr="id"
        class="block"
        :items="firstBlockItems"
        :max-selected="6"
        v-model="firstSelected"
      >
        <template #default="{ item, selected }">
          <ProductItem v-bind="item" :selected />
        </template>
      </ItemsBlock>
      <ItemsBlock
        id-attr="id"
        class="block"
        :items="secondBlockItems"
        :max-selected="1"
        v-model="secondSelected"
      >
        <template #default="{ item, selected }">
          <ProductItem v-bind="item" :selected />
        </template>
      </ItemsBlock>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  margin: 0 auto;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;
}

.blocks {
  display: flex;
  gap: 20px;
}

.block {
  width: 100%;
  min-height: 600px;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.second-counter {
  width: 600px;
  height: 400px;
  border: 1px solid black;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: x-large;
  text-align: center;
  vertical-align: middle;
}
</style>
