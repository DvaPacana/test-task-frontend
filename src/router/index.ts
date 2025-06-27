import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
	history: createWebHistory(),
	routes: setupLayouts(routes),
})
export default router
