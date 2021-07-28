import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共css样式
import './common/common.css'

//PC端组件 antd 组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false;

app.use(Antd);
// 加载进度条组件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
app.use(NProgress);

app
    .use(store)
    .use(router)
    .mount('#app')