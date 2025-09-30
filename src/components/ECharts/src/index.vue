<template>
    <div ref="chartRef" class="h-full w-full"></div>
</template>

<script setup lang="ts">
    import { useDebounceFn } from '@vueuse/core'
    import echarts from './useECharts'
    import type { EChartsType } from 'echarts/core'
    import type { ECOption } from '../echarts'

    defineOptions({
        name: 'ECharts'
    })

    interface Props {
        options: ECOption
    }

    const { options = {} } = defineProps<Props>()

    const chartRef = useTemplateRef('chartRef')

    let myChart: EChartsType | null

    const initChart = () => {
        if (!chartRef.value || myChart) return

        try {
            myChart = echarts.init(chartRef.value)
            myChart.setOption(options)
        } catch (error) {
            console.error('ECharts 初始化失败：', error)
            myChart = null
        }
    }

    watch(
        () => options,
        (newOptions) => {
            if (myChart && newOptions) {
                myChart.setOption(newOptions)
            }
        },
        { deep: true }
    )

    const handleResize = useDebounceFn(() => {
        myChart?.resize()
    }, 100)

    onMounted(() => {
        initChart()
        window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
        if (myChart) {
            myChart.dispose()
            myChart = null
        }
        window.removeEventListener('resize', handleResize)
    })
</script>
