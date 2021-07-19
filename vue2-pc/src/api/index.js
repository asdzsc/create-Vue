import request from '@/libs/request1'
const baseUrl = 'discount/'


// 轮播图列表
export function bannerList(param) {
    return request({
        url: baseUrl + "sysbanners/bannerList",
        method: "post",
        data: param
    });
}



// 查询阶梯红包列表（Post）	discount/list
export function getList(data) {
    return request({
        url: baseUrl + 'list',
        method: 'post',
        data
    })
}