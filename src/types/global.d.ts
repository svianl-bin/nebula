// 全局变量声明(版本号信息)
declare const __APP_VERSION__: string

// 全局类型声明(响应数据格式)
interface BaseResponse<T = any> {
    // 状态码
    code: number
    // 消息
    msg: string
    // 数据
    data: T
}

// 全局类型声明(错误响应数据格式)
interface ErrorResponse {
    // 状态码
    code: number
    // 消息
    msg: string
}
