import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import { router } from './routes'
import './assets/css/style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
pinia.use(piniaPluginPersistState)
app.use(router)
app.mount('#app')
