// 系列类型的定义后缀都为 SeriesOption
import type { BarSeriesOption } from 'echarts/charts'

// 组件类型的定义后缀都为 ComponentOption
import type {
    TitleComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    DatasetComponentOption
} from 'echarts/components'

import type { ComposeOption } from 'echarts/core'

/**
 * ECharts 组件支持的配置项类型
 * 扩展说明：
 * 1. 若添加新图表(如 折线图), 需导入对应 SeriesOption (如 LineSeriesOption)
 * 2. 若添加新组件(如 Legend), 需导入对应 ComponentOption (如 LegendComponentOption)
 * 3. 并将其添加到 ComposeOption 的联合类型中, 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
 */
export type ECOption = ComposeOption<
    | BarSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>
