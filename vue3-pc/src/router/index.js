import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import NProgress from "nprogress";

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
            title: "表单"
        },
        component: () =>
            import ('@/views/Form.vue')
    },
    {
        path: '/echart',
        name: 'Echart',
        meta: {
            title: "图表"
        },
        component: () =>
            import ('@/views/Echart.vue')
    },
    {
        path: '/luck-draw',
        name: 'Luck-Draw',
        meta: {
            title: "转盘抽奖"
        },
        component: () =>
            import ('@/views/luck-draw.vue')
    },
    // 捕获所有未匹配路由
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
            title: "404"
        },
        component: () =>
            import ("@/views/exception/404.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 全局前置路由守卫
router.beforeEach(function(to, from, next) {
    if (to.meta.title) {
        document.title = '自定义title-' + to.meta.title;
    }
    NProgress.start()
    next();
});

router.beforeResolve((to, from, next) => {
    next()
})

// 全局后置路由守卫
router.afterEach((to, from) => {
    NProgress.done();
});

export default router