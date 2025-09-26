import axios, {
    type InternalAxiosRequestConfig,
    type AxiosResponse,
    type AxiosRequestConfig,
    type AxiosError
} from 'axios'
import { ApiCode, type ApiRetryType } from './code'
import { REQUEST_TIMEOUT, MAX_RETRIES, RETRY_DELAY } from '@config/index'

const { VITE_APP_API_PREFIX, VITE_APP_API_URL, DEV } = import.meta.env

const base = DEV ? VITE_APP_API_PREFIX : VITE_APP_API_URL + VITE_APP_API_PREFIX

const axiosInstance = axios.create({
    timeout: REQUEST_TIMEOUT,
    baseURL: base, // API地址
    withCredentials: true, // 是否携带cookie，默认关闭
    transformRequest: [(data) => JSON.stringify(data)], // 请求数据转换为 JSON 字符串
    validateStatus: (status) => status >= 200 && status < 300, // 只接受 2xx 的状态码
    headers: {
        get: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        post: { 'Content-Type': 'application/json;charset=utf-8' }
    },
    transformResponse: [
        (data, headers) => {
            const contentType = headers['content-type']
            if (contentType && contentType.includes('application/json')) {
                try {
                    return JSON.parse(data)
                } catch {
                    return data
                }
            }
            return data
        }
    ]
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        // mock请求直接转发到本地
        if (DEV && (request?.params?.hasMock || request.data?.hasMock)) {
            request.baseURL = '/'
        }
        return request
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject({ msg: error.message, code: error.response?.status })
    }
)

// 请求重试函数
async function retryRequest<T>(
    config: AxiosRequestConfig,
    retries: number = MAX_RETRIES
): Promise<T> {
    try {
        return await request<T>(config)
    } catch (error) {
        const err = error as ErrorResponse
        if (retries > 0 && shouldRetry(err.code as unknown as ApiRetryType)) {
            await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
            return retryRequest<T>(config, retries - 1)
        }
        throw error
    }
}

// 判断是否需要重试
function shouldRetry(statusCode: ApiRetryType): boolean {
    return [
        ApiCode.requestTimeout,
        ApiCode.internalServerError,
        ApiCode.badGateway,
        ApiCode.serviceUnavailable,
        ApiCode.gatewayTimeout
    ].includes(statusCode)
}

// 请求函数
async function request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
        const res = await axiosInstance.request<BaseResponse<T>>(config)
        return res.data.data as T
    } catch (error) {
        return Promise.reject(error)
    }
}

const apiMethod = {
    get<T = any>(config: AxiosRequestConfig): Promise<T> {
        return retryRequest<T>({ ...config, method: 'GET' })
    },
    post<T = any>(config: AxiosRequestConfig): Promise<T> {
        return retryRequest<T>({ ...config, method: 'POST' })
    },
    put<T = any>(config: AxiosRequestConfig): Promise<T> {
        return retryRequest<T>({ ...config, method: 'PUT' })
    },
    del<T = any>(config: AxiosRequestConfig): Promise<T> {
        return retryRequest<T>({ ...config, method: 'DELETE' })
    },
    request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return retryRequest<T>({ ...config })
    }
}

export default apiMethod
