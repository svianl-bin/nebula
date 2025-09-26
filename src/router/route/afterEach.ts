import type { Router } from 'vue-router'

// 全局后置钩子
export function setupAfterEachRouter(router: Router) {
    router.afterEach((to, from, failure) => {
        console.log('afterEach-to', to)
        console.log('afterEach-from', from)
        console.log('afterEach-failure', failure)
    })
}
