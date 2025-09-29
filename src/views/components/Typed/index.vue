<template>
    <div class="text-center">
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="
                content = [
                    '我的 Nebula App',
                    '一个使用TypeScript的Vue 3项目模板，持续更新中。',
                    '我是SviAnL Nebula，欢迎来到我的网站'
                ]
            "
        >
            改变文本
        </button>
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="typedTextRef?.destroy()"
        >
            销毁
        </button>
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="typedTextRef?.stop()"
        >
            暂停
        </button>
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="typedTextRef?.start()"
        >
            开始
        </button>
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="typedTextRef?.reset()"
        >
            重置
        </button>
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="typedTextRef?.toggle()"
        >
            切换
        </button>
        <button
            class="mr-5 mb-5 cursor-pointer rounded-lg bg-[#12cee7] px-3 py-2 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12cee7]/75 hover:shadow active:translate-y-0"
            @click="typedTextRef?.rebuild()"
        >
            重构
        </button>
        <TypedText
            ref="typedTextRef"
            className="block text-4xl text-[#12cee7] font-bold"
            :strings="content"
            :type-speed="typeSpeed"
            :back-speed="backSpeed"
            :loop="loop"
            :show-cursor="showCursor"
            :cursor-char="cursorChar"
            @begin="onBegin"
            @complete="onComplete"
            @stringTyped="onStringTyped"
            @pause="onPaused"
            @resume="onResumed"
            @reset="onReset"
            @stop="onStop"
            @start="onStart"
            @destroy="onDestroy"
        />
    </div>
</template>

<script setup lang="ts">
    import type { TypedInstanceRef } from '@/components/TypedText/typed'

    defineOptions({
        name: 'TypedPage'
    })

    const typedTextRef = useTemplateRef<TypedInstanceRef>('typedTextRef')

    const content = ref([
        'My Nebula App',
        'A Vue 3 Project Template, Uses TypeScript, Continuously Update',
        'I am SviAnL Nebula, Welcome to My Website'
    ])

    const typeSpeed = ref(50)

    const backSpeed = ref(50)

    const loop = ref(true)

    const showCursor = ref(true)

    const cursorChar = ref('|')

    const onBegin = () => {
        console.log('begin')
    }

    const onComplete = () => {
        console.log('complete')
    }

    const onStringTyped = () => {
        console.log('stringTyped')
    }

    const onPaused = () => {
        console.log('paused')
    }

    const onResumed = () => {
        console.log('resumed')
    }

    const onReset = () => {
        console.log('reset')
    }

    const onStop = () => {
        console.log('stop')
    }

    const onStart = () => {
        console.log('start')
    }

    const onDestroy = () => {
        console.log('destroy')
    }
</script>
