import '../assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(VueQueryPlugin)
app.mount('#app')
