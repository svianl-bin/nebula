import type { App } from 'vue'
import ECharts from './ECharts'
import TypedText from './TypedText'

export const globalComponents = {
    ECharts,
    TypedText
}

// 注册全局组件
export const initComponent = (app: App<Element>): void => {
    Object.entries(globalComponents).forEach(([name, component]) => {
        app.component(name, component)
    })
}
