/// <reference types="vite/client" />

interface ViteTypeOptions {
    strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string
    readonly VITE_APP_PROT: string
    readonly VITE_APP_BRAND: string
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_DESCRIPTION: string
    readonly VITE_APP_BASE_URL: string
    readonly VITE_APP_API_PREFIX: string
    readonly VITE_APP_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
