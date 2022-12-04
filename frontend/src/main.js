import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// scss
import '@/style/globalStyle.scss'

// router
import router from '@/router/index.js'
app.use(router)

// pinia
import { createPinia } from 'pinia'
app.use(createPinia())

app.mount('#app')
