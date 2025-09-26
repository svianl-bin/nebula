import { type UserConfigExport, type ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/vite'

export default ({ mode }: ConfigEnv): UserConfigExport => {
    const env = loadEnv(mode, process.cwd())

    const {
        VITE_APP_VERSION,
        VITE_APP_BASE_URL,
        VITE_APP_PROT,
        VITE_APP_API_PREFIX,
        VITE_APP_API_URL
    } = env

    // 设置默认使用谷歌浏览器打开
    process.env.BROWSER = 'chrome'

    return {
        base: VITE_APP_BASE_URL,
        // 环境变量
        define: {
            // 版本信息
            __APP_VERSION__: JSON.stringify(VITE_APP_VERSION)
        },
        plugins: [
            vue(),
            vueDevTools(),
            tailwindcss(),
            AutoImport({
                imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n', 'date-fns'],
                dts: 'src/types/auto-imports.d.ts',
                viteOptimizeDeps: true,
                eslintrc: {
                    enabled: true,
                    filepath: './.eslint-config-auto-import.json',
                    globalsPropValue: true
                }
            }),
            viteMockServe({ enable: mode === 'development' })
        ],
        server: {
            port: Number(VITE_APP_PROT),
            proxy: {
                [VITE_APP_API_PREFIX]: {
                    target: VITE_APP_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(new RegExp(`^${VITE_APP_API_PREFIX}`), '')
                }
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@api': resolvePath('src/api'),
                '@images': resolvePath('src/assets/images'),
                '@styles': resolvePath('src/assets/styles'),
                '@components': resolvePath('src/components'),
                '@config': resolvePath('src/config'),
                '@utils': resolvePath('src/utils'),
                '@store': resolvePath('src/store'),
                '@views': resolvePath('src/views')
            }
        },
        esbuild: {
            drop: mode === 'production' ? ['console', 'debugger'] : []
        }
    }
}

function resolvePath(url: string) {
    return path.resolve(__dirname, url)
}
