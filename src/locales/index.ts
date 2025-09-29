import { createI18n, type I18nOptions } from 'vue-i18n'
import enUS from './lang/en-US.json'
import zhCN from './lang/zh-Cn.json'
import { sysKey, useSycStore } from '@/store/modules/sys'
import { getStoreKey } from '@/utils'

const messages = {
    'en-US': enUS,
    'zh-CN': zhCN
}

export const languageOptions = [
    { value: 'zh-CN', label: '简体中文' },
    { value: 'en-US', label: 'English' }
]

const getDefaultLocale = () => {
    try {
        const key = getStoreKey(sysKey)
        const value = localStorage.getItem(key)
        if (value) {
            const lang = JSON.parse(value).language
            if (languageOptions.find((item) => item.value === lang)) {
                return lang
            }
        }
    } catch (error) {
        console.warn('i18n 从 localStorage 中获取语言设置失败:', error)
    }

    try {
        const sycStore = useSycStore()
        return sycStore.language
    } catch (error) {
        console.warn('i18n 从 pinia 中获取语言设置失败:', error)
    }
    return 'zh-CN'
}

const options: I18nOptions = {
    legacy: false,
    // 默认语言
    locale: getDefaultLocale(),
    // 回退语言
    fallbackLocale: 'zh-CN',
    messages
}

const i18n = createI18n(options)

export default i18n
