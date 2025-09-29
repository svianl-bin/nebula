<template>
    <div class="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-300">
            <div
                class="mb-8 transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
                <h2 class="mb-4 flex items-center text-xl font-semibold text-gray-700">基本信息</h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="rounded-lg border border-gray-100 bg-gray-50 p-4">
                        <p class="mb-1 text-sm text-gray-500">项目名称</p>
                        <p class="font-medium text-gray-800">{{ packageJson.name }}</p>
                    </div>
                    <div class="rounded-lg border border-gray-100 bg-gray-50 p-4">
                        <p class="mb-1 text-sm text-gray-500">项目版本</p>
                        <p class="font-medium text-gray-800">{{ version }}</p>
                    </div>
                    <div class="rounded-lg border border-gray-100 bg-gray-50 p-4">
                        <p class="mb-1 text-sm text-gray-500">当前环境</p>
                        <p class="font-medium text-gray-800">
                            <span
                                class="rounded-full px-2 py-1 text-xs"
                                :class="MODE === 'production' ? 'text-red-800' : 'text-green-800'"
                            >
                                {{ MODE }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="mb-8 transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
                <h2 class="mb-4 flex items-center text-xl font-semibold text-gray-700">环境变量</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    class="rounded-tl-lg bg-gray-50 px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                >
                                    变量名
                                </th>
                                <th
                                    class="rounded-tr-lg bg-gray-50 px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                >
                                    值
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <template v-for="(item, key) in env" :key="key">
                                <tr class="transition-colors hover:bg-gray-50">
                                    <td
                                        class="px-4 py-3 text-sm font-medium whitespace-nowrap text-gray-900"
                                    >
                                        {{ key }}
                                    </td>
                                    <td
                                        class="px-4 py-3 font-mono text-sm whitespace-nowrap text-gray-500"
                                    >
                                        {{ item }}
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div
                    class="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                    <h2 class="mb-4 flex items-center text-xl font-semibold text-gray-700">
                        开发依赖
                    </h2>
                    <div class="max-h-160 overflow-y-auto pr-2">
                        <div class="space-y-2">
                            <template v-for="(item, key) in packageJson.devDependencies" :key="key">
                                <div
                                    class="rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100"
                                >
                                    <div class="flex items-center justify-between">
                                        <span class="font-medium text-gray-800">{{ key }}</span>
                                        <span class="font-mono text-sm text-gray-500">
                                            {{ item }}
                                        </span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>

                <div
                    class="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                    <h2 class="mb-4 flex items-center text-xl font-semibold text-gray-700">
                        <i class="fa fa-cubes mr-2 text-green-500"></i>生产依赖
                    </h2>
                    <div class="max-h-160 overflow-y-auto pr-2">
                        <div class="space-y-2">
                            <template v-for="(item, key) in packageJson.dependencies" :key="key">
                                <div
                                    class="rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100"
                                >
                                    <div class="flex items-center justify-between">
                                        <span class="font-medium text-gray-800">{{ key }}</span>
                                        <span class="font-mono text-sm text-gray-500">
                                            {{ item }}
                                        </span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import packageJson from '../../../package.json'

    defineOptions({
        name: 'DependPage'
    })

    const version = __APP_VERSION__

    const MODE = import.meta.env.MODE

    const env = import.meta.env
</script>
