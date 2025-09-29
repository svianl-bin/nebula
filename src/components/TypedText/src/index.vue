<template>
    <span :class="className">
        <span ref="typedElement"></span>
    </span>
</template>

<script setup lang="ts">
    import Typed from 'typed.js'
    import type { TypedOptions } from '../typed'
    import useTyped from './useTyped'

    defineOptions({
        name: 'TypedText'
    })

    interface Props {
        strings: string[]
        typeSpeed?: number
        backSpeed?: number
        loop?: boolean
        showCursor?: boolean
        cursorChar?: string
        className?: string
        options?: Partial<TypedOptions>
    }

    const {
        strings,
        typeSpeed = 40,
        backSpeed = 40,
        loop = true,
        showCursor = true,
        cursorChar = '|',
        className = '',
        options = {}
    } = defineProps<Props>()

    const emit = defineEmits<{
        begin: []
        complete: []
        stringTyped: [index: number]
        pause: [index: number]
        resume: [index: number]
        reset: [Typed: Typed]
        stop: [index: number]
        start: [index: number]
        destroy: [Typed: Typed]
    }>()

    const typedRef = useTemplateRef('typedElement')

    const mergedOptions = ref<TypedOptions>({
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        loop: loop,
        showCursor: showCursor,
        cursorChar: cursorChar,
        smartBackspace: true,
        fadeOut: true,
        autoInsertCss: true,
        bindInputFocusEvents: true,
        onBegin: () => emit('begin'),
        onComplete: () => emit('complete'),
        onStringTyped: (arrayPos) => emit('stringTyped', arrayPos),
        onTypingPaused: (arrayPos) => emit('pause', arrayPos),
        onTypingResumed: (arrayPos) => emit('resume', arrayPos),
        onReset: (Typed) => emit('reset', Typed),
        onStop: (arrayPos) => emit('stop', arrayPos),
        onStart: (arrayPos) => emit('start', arrayPos),
        onDestroy: (Typed) => emit('destroy', Typed),
        ...options
    })

    const { typedInstance, toggle, start, stop, destroy, reset, rebuild } = useTyped(
        typedRef,
        mergedOptions.value
    )

    watch(
        () => strings,
        (newStrings) => {
            if (typedInstance.value) {
                mergedOptions.value.strings = newStrings
                rebuild()
            }
        },
        { deep: true }
    )

    defineExpose({
        toggle,
        start,
        stop,
        destroy,
        reset,
        rebuild
    })
</script>
