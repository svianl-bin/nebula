import type { RouteRecordRaw } from 'vue-router'

// 静态路由
export const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'home' }
    },
    {
        path: '/500',
        name: '500',
        component: () => import('@/views/exception/500/index.vue'),
        meta: { title: '500' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/exception/404/index.vue'),
        meta: { title: '404' }
    }
]
