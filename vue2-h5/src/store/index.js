import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import {
  getItem,
  setItem
} from "@/utils/storage";

const USER_KEY = 'user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 自定义的共享状态
    user: getItem(USER_KEY)
    //当前登录用户的登录状态（token等数据）
  },
  mutations: { //唯一修改状态的位置
    setUser(state, data) {
      state.user = data
      // 为了防止页面刷新数据丢失，我们还需要把数据放到本地存储中，这里仅仅是为了持久化数据
      setItem(USER_KEY, state.user)
      // window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
    //异步处理
  },
  modules: {}
  // plugins: [createPersistedState()]
})