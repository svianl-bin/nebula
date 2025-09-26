import request from '@/utils/http'

// 示例接口
export const getMock = () => {
    return request.get<number>({
        url: '/api/get',
        params: {
            hasMock: true
        }
    })
}
