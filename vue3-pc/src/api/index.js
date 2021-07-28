import request from '@/libs/request'
const baseUrl = 'customerChat/'



// 查询客户群列表
export function getList(data) {
    return request({
        url: baseUrl + 'list',
        method: 'post',
        data
    })
}