import { createApp, h } from 'vue'
import router from './router';
import App from './App.vue'

const app = createApp({
  render: () => h(App),
});

app.component('AppContent', App);

app.use(router);
app.mount('#app');