import { defineStore } from 'pinia'
import { ref } from 'vue'

export const sysKey = 'sysStore'

export const useSycStore = defineStore(
    sysKey,
    () => {
        const language = ref()

        const setLanguage = (value: string) => {
            language.value = value
        }

        return { language, setLanguage }
    },
    {
        persist: {
            key: sysKey,
            storage: localStorage
        }
    }
)
