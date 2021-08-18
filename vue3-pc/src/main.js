import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// import './poster/index'

// 公共css样式
import './common/common.css'

// 加载进度条组件
import NProgress from "nprogress";
import "nprogress/nprogress.css";
app.use(NProgress);

//PC端组件 antd 组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.use(Antd);


app
    .use(store)
    .use(router)
    .mount('#app')