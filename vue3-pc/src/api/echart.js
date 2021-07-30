import request from '@/libs/request'
const baseUrl = 'externalContact/'

// 根据筛选条件统计查找用户总数
export function reqGetAnalyseAll(data) {
    return request({
        url: baseUrl + 'analyseAll',
        method: 'POST',
        data
    })
}

// 根据筛选条件统计查找新增用户总数
export function reqGetAnalyseAdd(data) {
    return request({
        url: baseUrl + 'analyseAdd',
        method: 'POST',
        data
    })
}

// 根据筛选条件统计查找流失客户数
export function reqGetAnalyseLost(data) {
    return request({
        url: baseUrl + 'analyseLost',
        method: 'POST',
        data
    })
}

// 根据筛选条件统计查找净增客户数
export function reqGetAnalyseRealAdd(data) {
    return request({
        url: baseUrl + 'analyseRealAdd',
        method: 'POST',
        data
    })
}