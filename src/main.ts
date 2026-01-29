import './view/styles/variables.scss'
import './view/styles/reset.scss'
import './view/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './view/pages/index.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
