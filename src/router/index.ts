import { createRouter, createWebHistory } from 'vue-router'

import ProductsList from '@/views/ProductsList/ProductsList.vue'

const routes = [{ path: '/', component: ProductsList }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
