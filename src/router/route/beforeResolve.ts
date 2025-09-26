import type { Router } from 'vue-router'

// 全局解析守卫
export function setupBeforeResolveRouter(router: Router) {
    router.beforeResolve((to, from, next) => {
        console.log('beforeResolve-to', to)
        console.log('beforeResolve-from', from)
        next()
    })
}
