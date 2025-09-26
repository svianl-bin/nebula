import type { MockMethod } from 'vite-plugin-mock'

const mockApi: MockMethod[] = [
    {
        url: '/api/list',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: {
                    list: [],
                    total: 0
                },
                msg: 'success'
            }
        }
    },
    {
        url: '/api/get',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: 1314520,
                msg: 'success'
            }
        }
    },
    {
        url: '/api/post',
        method: 'post',
        response: () => {
            return {
                code: 0,
                data: {
                    name: 'svianl',
                    age: 18,
                    sex: '男'
                },
                msg: 'success'
            }
        }
    }
]

export default mockApi
