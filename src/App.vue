<template>
  <div class="app">
    <div class="container">
      <div class="app__sections">
        <ProductSelector
          v-model:selected="selectedUserItems"
          :items="products.user"
          :max="6"
          :title-selected="dictionary.select.user.selected"
          :title-select="dictionary.select.user.toSelect"
        />

        <ProductSelector
          v-model:selected="selectedChoiceItems"
          :items="products.choice"
          :max="1"
          :title-selected="dictionary.select.choice.selected"
          :title-select="dictionary.select.choice.toSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Node Deps
import { ref, reactive, onMounted } from 'vue'
// Api
import { getProducts } from '@api/products'
// Components
import ProductSelector from '@components/entity/product/selector.vue'
// Types
import type { Product, IGetProducts } from '@api/products'

const dictionary = {
  select: {
    user: { selected: 'Выбранные вещи пользователя', toSelect: 'Вещи пользователя' },
    choice: { selected: 'Выбранная вещь на выбор', toSelect: 'Вещи на выбор' }
  }
}

const selectedUserItems = ref<Product[]>([])
const selectedChoiceItems = ref<Product[]>([])

const products = reactive<IGetProducts>({ user: [], choice: [] })

onMounted(async () => {
  const productsResponse = await getProducts()

  products.user = productsResponse.user
  products.choice = productsResponse.choice
})
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  padding: $spacing;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.app__sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing;
}
</style>
