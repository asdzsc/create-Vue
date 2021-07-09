import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共css样式
import './common/common.css'

//PC端组件 antd 组件库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// element 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 加载进度条组件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(NProgress);

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
//系统错误捕获
const errorHandler = (error, vm) => {
    console.error("抛出全局异常");
    console.error(vm);
    console.error(error);
};
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = error => errorHandler(error, this);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");