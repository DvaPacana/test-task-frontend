// styles
import '@styles/default.scss'
import '@styles/fonts.scss'
import '@styles/reset.scss'

// vue app
import router from '@/router'
import store from '@/store'
import { createApp } from 'vue'
import App from './App.vue'

// mount
createApp(App).use(router).use(store).mount('#app')
