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
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: "首页",
        },
        component: () =>
            import ('@/views/Home.vue'),
        children: [{
            path: 'home1',
            component: () =>
                import ('@/views/Home/Home1.vue'),
        }, {
            path: 'home2',
            component: () =>
                import ('@/views/Home/Home2.vue'),
        }]
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: "关于集团",
        },
        component: () =>
            import ('@/views/About.vue')
    },
    {
        path: '/news',
        name: 'New',
        meta: {
            title: "新闻动态",
        },
        component: () =>
            import ('@/views/News.vue')
    },
    {
        path: '/form',
        name: 'Form',
        meta: {
            title: "表单",
            isAuth: true,
        },
        component: () =>
            import ('@/views/Form.vue')
    },
    {
        path: '/element',
        name: 'Element',
        meta: {
            title: "表单"
        },
        component: () =>
            import ('@/views/FormElement.vue')
    },
    {
        path: '/vuex',
        name: 'Vuex',
        meta: {
            title: "Vuex"
        },
        component: () =>
            import ( /* webpackChunkName: "vuex" */ '@/views/Vuex/Vuex.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        meta: {
            title: "Cart"
        },
        // 路由独享的守卫
        beforeEnter: (to, from, next) => {
            next()
        },
        component: () =>
            import ('@/views/Cart/Index.vue')
    },

    {
        path: '/others',
        name: 'Others',
        meta: {
            title: "其他"
        },
        components: {
            default: () =>
                import ('@/views/Others/other1.vue'),
            other2: () =>
                import ('@/views/Others/other2.vue'),
        }
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
    //connect-history-api-fallback 插件使用nodejs解决history路由刷新丢失页面
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach(function(to, from, next) {
    NProgress.start()
        //做一些鉴权
    if (to.meta.isAuth) { //判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名不对，无权限查看！')
        }
    } else {
        next()
    }
    if (to.meta.title) {
        // 路由切换回到顶部
        // chrome
        // document.body.scrollTop = 0
        // firefox
        // document.documentElement.scrollTop = 0
        // safari
        // window.pageYOffset = 0

    }

    //next();
});

router.beforeResolve((to, from, next) => {
    // console.log('beforeResolve');

    next()
})


//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = '自定义title-' + to.meta.title;
    NProgress.done();
});

export default router