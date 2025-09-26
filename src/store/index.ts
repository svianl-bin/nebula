import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { getBrandName } from '@utils/index'

export const store = createPinia()

// 配置持久化插件
store.use(
    createPersistedState({
        key: (storeId: string) => `${getBrandName(true)}_${storeId.toUpperCase()}`,
        storage: localStorage,
        serializer: {
            serialize: JSON.stringify,
            deserialize: JSON.parse
        }
    })
)

// 初始化 Store
export function initStore(app: App<Element>): void {
    app.use(store)
}
