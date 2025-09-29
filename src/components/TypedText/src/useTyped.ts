import Typed from 'typed.js'
import type { TypedOptions, TypedInstance } from '../typed'
import type { TemplateRef } from 'vue'

export default function useTyped(el: TemplateRef, options: Readonly<TypedOptions>) {
    const typedInstance = ref<TypedInstance | null>(null)

    const init = () => {
        if (el.value && !typedInstance.value) typedInstance.value = new Typed(el.value, options)
    }

    const destroy = () => {
        typedInstance.value?.destroy()
        typedInstance.value = null
    }

    const reset = () => {
        typedInstance.value?.reset()
    }

    const start = () => {
        typedInstance.value?.start()
    }

    const stop = () => {
        typedInstance.value?.stop()
    }

    const toggle = () => {
        typedInstance.value?.toggle()
    }

    const rebuild = async () => {
        destroy()
        await nextTick()
        init()
    }

    onMounted(() => {
        init()
    })

    onUnmounted(() => {
        destroy()
    })

    return {
        typedInstance,
        init,
        destroy,
        reset,
        start,
        stop,
        toggle,
        rebuild
    }
}
