import { type UserConfigExport, type ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath } from 'url'
import path from 'path'

export default ({ mode }: ConfigEnv): UserConfigExport => {
    const env = loadEnv(mode, process.cwd())

    const {
        VITE_VERSION,
        VITE_API_BASE_URL,
        VITE_API_PROT,
        VITE_API_API_PREFIX,
        VITE_API_API_URL
    } = env

    // 设置默认使用谷歌浏览器打开
    process.env.BROWSER = 'chrome'

    console.log('VITE_API_BASE_URL', VITE_API_BASE_URL)

    return {
        base: VITE_API_BASE_URL,
        // 环境变量
        define: {
            // 版本信息
            __APP_VERSION__: JSON.stringify(VITE_VERSION)
        },
        plugins: [vue(), vueDevTools()],
        server: {
            port: Number(VITE_API_PROT),
            proxy: {
                [VITE_API_API_PREFIX]: {
                    target: VITE_API_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(new RegExp(`^${VITE_API_API_PREFIX}`), '')
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
        }
    }
}

function resolvePath(url: string) {
    return path.resolve(__dirname, url)
}
