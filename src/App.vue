<script setup lang="ts">
import ProductColumn from '@/components/ProductColumn.vue'
import SelectedProducts from '@/components/SelectedProducts.vue'
import { useProductsStore } from '@/stores/products.store.ts'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.store.ts'
import ProductItem from '@/components/ProductItem.vue'

const productsStore = useProductsStore()
const userStore = useUserStore()

onMounted(() => {
  productsStore.fetchProducts()
  userStore.fetchProducts()
})
</script>

<template>
  <div class="app">
    <header class="app__header">
      <SelectedProducts>
        <ProductItem
          v-for="{ id, name } in userStore.selectedProducts"
          :name
          :key="id"
          @click="() => userStore.removeProduct(id)"
        />

        <template #footer>
          <p>
            selected:
            {{ userStore.selectedProducts.length }}
            / 6
          </p>
        </template>
      </SelectedProducts>
      <SelectedProducts>
        <ProductItem v-if="productsStore.activeProduct" :name="productsStore.activeProduct.name" />
        <p v-else>SELECT ITEM</p>
      </SelectedProducts>
    </header>

    <main class="app__main">
      <ProductColumn>
        <ProductItem
          v-for="{ id, name } in userStore.leftProducts"
          :name
          :key="id"
          @click="() => userStore.selectProduct(id)"
        />
      </ProductColumn>
      <ProductColumn>
        <ProductItem
          v-for="{ id, name } in productsStore.products"
          :name
          :key="id"
          :style="{ borderColor: productsStore.activeProduct?.id === id ? 'red' : '' }"
          @click="() => productsStore.setActiveProduct(id)"
        />
      </ProductColumn>
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
}

.app__header,
.app__main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.app__header {
  min-height: 252px;
}

.app__main {
  flex-grow: 1;
}
</style>
