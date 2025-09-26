import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

// 全局前置守卫
export function setupBeforeEachRouter(router: Router): void {
    router.beforeEach(
        async (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => {
            try {
                await handleRouteGuard(to, from, next, router)
            } catch (error) {
                console.error('路由守卫处理失败:', error)
                next('/500')
            }
        }
    )
}

async function handleRouteGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
    router: Router
): Promise<void> {
    console.log('beforeEach-to', to)
    console.log('beforeEach-from', from)
    console.log('beforeEach-router', router)
    next()
}
