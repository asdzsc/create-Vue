export default {
    namespaced: true,
    state: () => ({
        allCart: []
    }),
    getters: {
        totalPrice(state) {
            return state.allCart.reduce((total, product) => {
                total += product.price * product.quantity;
                return total;
            }, 0);
        },
    },
    mutations: {
        setCart(state, product) {
            let result = state.allCart.find(value => value.id === product.id)
                // 此产品库存减一
            product.inventory--
                // 放入购物车
                if (result) {
                    result.quantity++
                } else {
                    let {
                        id,
                        name,
                        price
                    } = product
                    state.allCart.push({
                        id,
                        name,
                        quantity: 1,
                        price
                    })
                }
        }
    },
    actions: {
        addCart({
            commit,
            dispatch,
            state
        }, data) {
            dispatch('product/decrementInventory', state.id, {
                root: true
            })
            commit('setCart', data)
        }
    }

}