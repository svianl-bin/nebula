import App from './App.vue'
import { createApp } from 'vue'
import { initComponent } from '@components/index'
import { initStore } from '@store/index'
import { initRouter } from '@/router/index'
import '@styles/index.css'

const app = createApp(App)

initComponent(app)

initStore(app)

initRouter(app)

app.mount('#app')
