import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore(
    'testStore',
    () => {
        const testPinia = ref('hello pinia')

        const setTestPinia = (value: string) => {
            testPinia.value = value
        }

        return { testPinia, setTestPinia }
    },
    {
        persist: {
            key: 'test',
            storage: localStorage
        }
    }
)
