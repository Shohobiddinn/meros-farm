import './assets/main.css'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'
import Paginate from "vuejs-paginate-next";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVfm());
app.use(Paginate)
app.mount('#app')
