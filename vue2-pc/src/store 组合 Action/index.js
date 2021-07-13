import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 使用常量替代 Mutation 事件类型
import {
    ADD,
    MINUS
} from './mutationType'

// 使用常量替代 Action 事件类型
import {
    INCREMENT,
    DECREMENT,
} from './actionType'

export default new Vuex.Store({
    // 定义一个全局公共的状态
    state: {
        count: 0
    },
    // store中的计算属性
    // getters: {
    //     myCount(state) {
    //         // console.log(state);
    //         return state.count * 100
    //     }
    // },
    // store中的计算属性 传参数
    getters: {
        myCount(state) {
            return (num) => {
                return state.count + num
            }
        }
    },
    // step 3 Mutation 必须是同步函数
    mutations: {
        // 可以在mutations中进行异步操作 但是千万不要这样做 
        // 这里页面数据是没问题的 但是无法检测到时间旅行 无法调试
        [ADD](state, num) {
            state.count += num
        },
        [MINUS](state, num) {
            // setTimeout(() => {
            //     state.count -= num
            // }, 1000);
            state.count -= num
        },
        multi(state) {
            state.count *= state.count
        }
    },
    // step 2 Action 提交的是 mutation，而不是直接变更状态  Action 可以包含任意异步操作 
    actions: {
        [INCREMENT]({
            commit,
        }, num) {
            commit(ADD, num)
        },
        [DECREMENT]({
            commit,
        }, num) {
            // setTimeout(() => {
            commit(MINUS, num)
                // }, 1000);
        },
        async doubleCount({
            commit,
            dispatch
        }) {
            let result = new Promise((resolve) => {
                setTimeout(() => {
                    commit('multi')
                    resolve(200)
                }, 2000)
            })
            dispatch(DECREMENT, await result)
        }
    },
    modules: {}
})