/// <reference types="vite/client" />

interface ViteTypeOptions {
    strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
    readonly VITE_VERSION: string
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_DESCRIPTION: string
    readonly VITE_API_BASE_URL: string
    readonly VITE_API_API_PREFIX: string
    readonly VITE_API_API_URL: string
    readonly VITE_API_PROT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

// 全局变量声明(版本号信息)
declare const __APP_VERSION__: string
