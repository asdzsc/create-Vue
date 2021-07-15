import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from "nprogress";
Vue.use(VueRouter)
    // 避免重复点击路由跳转
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    // 访问根路径的时候重定向到首页
    {
        path: '/',
        redirect: '/home'
    }, {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/views/Login/")
    }, {
        //一级路由渲染到根组件中的router-view
        path: '/',
        component: () =>
            import ("@/views/Layout/"),
        children: [{
            //二级路由渲染到父级路由组件中的router-view中
            path: '/home', //默认子路由
            name: "home",
            meta: {
                title: "首页",
            },
            component: () =>
                import ("@/views/Home/"),
        }, {
            path: '/ask',
            name: "ask",
            meta: {
                title: "问答",
            },
            component: () =>
                import ("@/views/Ask/"),
        }, {
            path: '/video',
            name: "video",
            meta: {
                title: "视频",
            },
            component: () =>
                import ("@/views/Video/"),
        }, {
            path: '/mine',
            name: "mine",
            meta: {
                title: "我的",
            },
            component: () =>
                import ("@/views/Mine/"),
        }]
    },
    // 捕获所有未匹配路由
    {
        path: "*",
        name: "404",
        component: () =>
            import ("@/views/exception/404.vue")
    }

]

const router = new VueRouter({
    mode: 'hash',
    routes
})

router.beforeEach(function(to, from, next) {
    if (to.meta.title) {
        document.title = 'vant-' + to.meta.title;
    }
    NProgress.start()
    next();
});
router.afterEach(() => {
    NProgress.done();
});

export default router