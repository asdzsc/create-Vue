import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载vant组件库
import Vant from 'vant'
//加载vant css
import 'vant/lib/index.css'
//引入全局样式（放到最后方便覆盖第三方样式）
import './styles/index.css'


import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(NProgress);
import './utils/dayjs'
// 设置 rem 基准值
import 'amfe-flexible'
Vue.use(Vant)
    // import LuckDraw from 'vue-luck-draw'
    // Vue.use(LuckDraw)

import VueLuckyCanvas from '@lucky-canvas/vue'
Vue.use(VueLuckyCanvas)
Vue.config.productionTip = false

//系统错误捕获
const errorHandler = (error, vm) => {
    console.error("抛出全局异常");
    console.error(vm);
    console.error(error);
};
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error) => errorHandler(error, this);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')