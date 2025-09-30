// 全局组件
declare module 'vue' {
    export interface GlobalComponents {
        TypedText: (typeof import('@components/TypedText/src/index.vue'))['default']
        ECharts: (typeof import('@components/ECharts/src/index.vue'))['default']
    }
}

export {}
