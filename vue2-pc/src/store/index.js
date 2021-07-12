import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 定义一个全局公共的状态
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
        minus(state) {
            state.count--
        }
    },
    actions: {
        increment({
            commit
        }) {
            commit('add')
        },
        decrement({
            commit
        }) {
            commit("minus")
        }
    },
    modules: {}
})