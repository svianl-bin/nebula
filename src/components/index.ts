import type { App } from 'vue'
import TypedText from './TypedText'

// 注册全局组件
export const initComponent = (app: App<Element>): void => {
    app.component('TypedText', TypedText)
}
