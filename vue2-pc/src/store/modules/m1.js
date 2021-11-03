export default {
    // 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。(模块内的命名空间)
    namespaced: true,
    state: () => ({
        header: 'moduleA'
    }),
    mutations: {
        join(state, str) {
            console.log('m1');
            state.header += str
        },
        join1(state, str) {
            console.log('m1');
            state.header += str
        }
    },

}