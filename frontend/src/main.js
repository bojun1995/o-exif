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

// naive-ui
import naive from 'naive-ui'
app.use(naive)

// remixicon
import 'remixicon/fonts/remixicon.css'

app.mount('#app')
