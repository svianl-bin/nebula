<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 text-white"
    >
        <div
            class="mb-10 flex flex-wrap justify-center gap-3 rounded-xl bg-gray-800/50 p-4 shadow-lg backdrop-blur-sm"
        >
            <button
                class="transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                @click="
                    content = [
                        '我的 Nebula App',
                        '一个使用TypeScript的Vue 3项目模板，持续更新中。',
                        '我是SviAnL Nebula，欢迎来到我的网站!'
                    ]
                "
            >
                改变文本
            </button>
            <button
                class="transform rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-rose-600 hover:to-pink-600 focus:ring-2 focus:ring-rose-400 focus:outline-none"
                @click="typedTextRef?.destroy()"
            >
                销毁
            </button>
            <button
                class="transform rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-orange-600 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                @click="typedTextRef?.stop()"
            >
                暂停
            </button>
            <button
                class="transform rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-600 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                @click="typedTextRef?.start()"
            >
                开始
            </button>
            <button
                class="transform rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-violet-600 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                @click="typedTextRef?.reset()"
            >
                重置
            </button>
            <button
                class="transform rounded-lg bg-gradient-to-r from-indigo-500 to-slate-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-slate-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                @click="typedTextRef?.toggle()"
            >
                切换
            </button>
            <button
                class="transform rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-fuchsia-600 hover:to-pink-600 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
                @click="typedTextRef?.rebuild()"
            >
                重构
            </button>
        </div>

        <div
            class="mx-auto w-full max-w-5xl rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 text-center shadow-xl backdrop-blur-sm"
        >
            <TypedText
                ref="typedTextRef"
                className="text-3xl md:text-4xl leading-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold min-h-[120px]"
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

        <div class="mt-8 w-full max-w-md rounded-lg bg-gray-800/50 p-4 text-sm text-gray-300">
            <p class="mb-2 font-medium text-cyan-400">当前状态:</p>
            <p v-if="status" class="text-green-400">{{ status }}</p>
            <p v-else class="text-gray-500">等待操作...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { TypedInstanceRef } from '@/types/common'

    defineOptions({
        name: 'TypedPage'
    })

    const typedTextRef = useTemplateRef<TypedInstanceRef>('typedTextRef')

    const content = ref([
        'My Nebula App',
        'A Vue 3 Project Template, Uses TypeScript, Continuously Update !',
        'I am SviAnL Nebula, Welcome to My Website !'
    ])

    const typeSpeed = ref(50)

    const backSpeed = ref(50)

    const loop = ref(true)

    const showCursor = ref(true)

    const cursorChar = ref('|')

    const status = ref('')

    const updateStatus = (msg: string) => {
        status.value = msg
    }

    const onBegin = () => updateStatus('开始打字动画')

    const onComplete = () => updateStatus('打字动画完成')

    const onStringTyped = (k: number) => updateStatus(`完成第${k + 1}个字符串的输出`)

    const onPaused = () => updateStatus('已暂停')

    const onResumed = () => updateStatus('运行中2')

    const onReset = () => updateStatus('已重置')

    const onStop = () => updateStatus('已停止')

    const onStart = () => updateStatus('运行中')

    const onDestroy = () => updateStatus('已销毁')
</script>
