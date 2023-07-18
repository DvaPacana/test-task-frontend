import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.css'
import 'primeflex/primeflex.css'
import Card from "primevue/card";
import Listbox from "primevue/listbox";
import MultiSelect from "primevue/multiselect";

const  app = createApp(App)
app.use(PrimeVue)
app.component('Card',Card)
app.component('Listbox',Listbox)
app.component('MultiSelect',MultiSelect)
app.mount('#app')
