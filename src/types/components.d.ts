declare module 'vue' {
    export interface GlobalComponents {
        TypedText: (typeof import('@components/TypedText'))['TypedText']
    }
}

export {}
