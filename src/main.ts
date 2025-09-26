import App from './App.vue'
import { createApp } from 'vue'
import { initStore } from '@store/index'
import { initRouter } from '@/router/index'
import '@styles/index.css'

const app = createApp(App)

initStore(app)

initRouter(app)

app.mount('#app')
