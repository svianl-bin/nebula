import request from '@/utils/http'

// 示例接口
export const getHome = () => {
    return request.get({
        url: '/v1/api/admin/get_site_setting_configs',
        params: {
            site_id: 1
        }
    })
}
