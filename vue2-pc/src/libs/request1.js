/**
 * 请求模块
 */
// 在非组件模块中获取 store 必须通过这种方式 这里单独加载store，和在组件中this.$store是一个东西
// import store from "@/store/";
import axios from 'axios'
import {
    notification
} from "ant-design-vue";


//提醒错误消息
function notifyMsg(msg) {
    if (msg) {
        notification.error({
            message: "提示",
            description: msg
        });
    }
}

const request = axios.create({
    // baseURL: 'https://www.027smf.com', //基础路径
baseURL: process.env.VUE_APP_BASE_URL, //基础路径
    // baseURL: "http://134.175.209.7",
    withCredentials: true,
    timeout: 60000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

//请求拦截器
// Add a request interceptor
request.interceptors.request.use(function(config) {
    // Do something before request is sent
    // console.log(config);
    // const {
    //     user
    // } = store.state
    // 如果用户已登录，统一给接口设置 token信息
    // if (user) {
    //     config.headers.Authorization = `Bearer ${user.token}`
    // }
    // 处理完token 一定要返回config ，否则就会停留在这里
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});


//响应拦截器
// respone interceptor
request.interceptors.response.use(
    // response => response,
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    response => {
        if (response.status === 200) {
            const res = response.data;
            if (res.code !== 0) {
                notifyMsg(res.msg);
            }
            // if (res.code === 501) {
            //     console.log("Vue.$route", window.location.hash);
            //     delToken().then(() => {
            //         var loginUrl = "/#/login";
            //         if (window.location.hash) {
            //             var toUrl = window.location.hash.replace("#", "");
            //             if (toUrl.indexOf('/login?redirect') == -1) {
            //                 console.log('501 ' + toUrl)
            //                 loginUrl += "?redirect=" + encodeURIComponent(toUrl);
            //                 window.location = loginUrl;
            //             }
            //         }
            //     });
            // }
            return res;
        } else {
            return Promise.reject("网络请求出错");
        }
    },
    error => {
        notifyMsg(error.message);
        return Promise.reject(error);
    }
);

//导出
export default request