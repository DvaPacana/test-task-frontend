<template>
  <div class="products-catalog card-list">
    <el-card class="products-catalog__card box-card" body-class="products-catalog__card-body">
      <template #header>
        <p class="card-header">{{ header }}</p>
      </template>
      <el-card
        v-for="product in selectedProducts"
        :key="product.id"
        class="box-card products-catalog__item"
        @click="onClick(product)"
      >
        {{ product.name }}
      </el-card>
    </el-card>

    <el-space wrap class="products-catalog__list">
      <el-card
        v-for="product in allProducts"
        :key="product.id"
        class="box-card products-catalog__item"
        :class="{
          'products-catalog__item_active': selectedProducts.some((p) => p.id === product.id),
        }"
        @click="onClick(product)"
      >
        {{ product.name }}
      </el-card>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '@/views/ProductsList/types.ts'
import type { PropType } from 'vue'
import { ElNotification } from 'element-plus'

const props = defineProps({
  header: String,
  allProducts: { type: Array as PropType<IProduct[]>, required: true },
  maxCount: Number,
})

const selectedProducts = defineModel<IProduct[]>('selectedProducts', { required: true })

const onClick = (product: IProduct) => {
  const selectedIndex = selectedProducts.value.findIndex((p) => p.id === product.id)

  if (selectedIndex >= 0) {
    selectedProducts.value.splice(selectedIndex, 1)
  } else if (props.maxCount && selectedProducts.value.length >= props.maxCount) {
    ElNotification({
      title: 'Warning',
      message: `Превышено максимальное количество - ${props.maxCount}`,
      type: 'warning',
    })
  } else {
    selectedProducts.value.push(product)
  }
}
</script>

<style>
.products-catalog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.products-catalog__card {
  margin-bottom: 24px;
}

.products-catalog__card-body {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.products-catalog__item {
  max-width: 100px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.products-catalog__item_active {
  border-color: rgb(51, 117, 185);
}
</style>
