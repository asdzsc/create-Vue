 import request from '@/utils/request'
 const baseUrl = 'web-api/'

 // 轮播图列表
 export function bannerList(param) {
     return request({
         url: baseUrl + "sysbanners/bannerList",
         method: "post",
         data: param
     });
 }