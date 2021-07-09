import axios from "axios";
import qs from "qs";
import {
    notification
} from "ant-design-vue";
// import {
//     getToken,
//     delToken
// } from "@/pages/pc/api/sso";

//提醒错误消息
function notifyMsg(msg) {
    if (msg) {
        notification.error({
            message: "提示",
            description: msg
        });
    }
}

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    // baseURL: "http://134.175.209.7",
    withCredentials: true,
    timeout: 60000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});
service.interceptors.request.use(
    config => {
        // 是否要更改header内容
        if (config.isFile) {
            config.headers["Content-Type"] = "multipart/form-data";
        }
        // 防止不传参数的情况下，config中没有data属性
        if (!config.data) {
            config["data"] = {};
        }
        // 合并请求参数
        if (config.params) {
            config.data = {
                ...config.data,
                ...config.params
            };
        }

        config.headers["token"] = getToken();
        if (config.method === "post") {
            // 设置参数拼接方式
            // if (
            //   config.data &&
            //   config.headers["Content-Type"] === "application/x-www-form-urlencoded"
            // ) {
            //   config.data = qs.stringify(config.data, {
            //     arrayFormat: "indices",
            //     allowDots: true
            //   });
            // }
        } else {
            if (config.data) {
                config.url = config.url + "?" + qs.stringify(config.data);
            }
        }
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
);

// respone interceptor
service.interceptors.response.use(
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
            if (res.code === 501) {
                console.log("Vue.$route", window.location.hash);
                delToken().then(() => {
                    var loginUrl = "/#/login";
                    if (window.location.hash) {
                        var toUrl = window.location.hash.replace("#", "");
                        if (toUrl.indexOf('/login?redirect') == -1) {
                            console.log('501 ' + toUrl)
                            loginUrl += "?redirect=" + encodeURIComponent(toUrl);
                            window.location = loginUrl;
                        }
                    }
                });
            }
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

export default service;