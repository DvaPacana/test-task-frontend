import naive from 'naive-ui';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import router from './app/router';
import App from './App.vue';
import { i18n } from './i18n';

import '@/app/assets/styles/main.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(naive);

app.mount('#app');
