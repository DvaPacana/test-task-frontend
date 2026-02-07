import { createApp } from "vue";
import App from "./app/App.vue";
const app = createApp(App)
app.mount(document.getElementById('app') as HTMLDivElement)