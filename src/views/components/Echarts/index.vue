<template>
    <div>echarts</div>
    <div @click="changeOption">changeOption</div>
    <div class="h-100 w-100">
        <ECharts :options="options" />
    </div>
</template>

<script setup lang="ts">
    import type { ECOption } from '@/types/common'

    defineOptions({
        name: 'EchartsPage'
    })

    const options = ref<ECOption>({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    })

    const changeOption = () => {
        options.value = {
            title: {
                text: 'changeOption2'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫1', '羊毛衫1', '雪纺衫1', '裤子1', '高跟鞋1', '袜子1']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [52, 202, 362, 102, 102, 20]
                }
            ]
        }
    }
</script>
