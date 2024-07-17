import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistState from 'pinia-plugin-persistedstate'
import Vue3Lottie from 'vue3-lottie'
import App from './App.vue'
import { router } from './routes'
import './assets/css/style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
pinia.use(piniaPluginPersistState)
app.use(Vue3Lottie, { name: "Vue3Lottie" })
app.use(router)
app.mount('#app')
