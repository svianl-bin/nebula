import App from './App.vue'
import { createApp } from 'vue'
import { initComponent } from '@components/index'
import { initStore } from '@store/index'
import { initRouter } from '@/router/index'
import i18n from '@/locales'
import '@styles/index.css'

const app = createApp(App)

initComponent(app)

initStore(app)

initRouter(app)

app.use(i18n)

app.mount('#app')
