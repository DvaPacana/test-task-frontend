import { createRouter, createWebHistory } from 'vue-router'
import { PanelsLayout } from '@/shared'
import * as pages from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: PanelsLayout,
      children: [
        {
          path: '',
          name: 'items',
          components: {
            left: pages.UserItemsPage,
            right: pages.ItemsForChoosePage
          }
        }
      ]
    }
  ]
})

export default router
