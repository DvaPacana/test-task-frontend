import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import './style.pcss'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app')
