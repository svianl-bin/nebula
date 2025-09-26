import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './route/staticRoutes'
import { setupBeforeEachRouter } from './route/beforeEach'
import { setupAfterEachRouter } from './route/afterEach'
import { setupBeforeResolveRouter } from './route/beforeResolve'

const base = import.meta.env.VITE_APP_BASE_URL

// 创建 Router 实例
export const router = createRouter({
    history: createWebHistory(base),
    routes: staticRoutes
})

// 初始化 Router
export function initRouter(app: App<Element>): void {
    setupBeforeEachRouter(router)
    setupAfterEachRouter(router)
    setupBeforeResolveRouter(router)
    app.use(router)
}
