export default {
    namespaced: true,
    state: () => ({
        allProduct: []
    }),
    mutations: {
        setAll(state, all) {
            // console.log(data);
            state.allProduct = all.data
        },
        setProductInventory(state, id) {
            let product = state.allProduct.find(v => v.id == id)
            if (product) {
                product.inventory--
            }
        }
    },
    actions: {
        // 异步操作
        loadData({
            commit
        }) {
            let data = {
                "ret": true,
                "data": [{
                        "id": "001",
                        "name": "iPhone12 pro",
                        "price": 8900,
                        "inventory": 12
                    },
                    {
                        "id": "002",
                        "name": "iPhone11 pro",
                        "price": 6000,
                        "inventory": 2
                    },
                    {
                        "id": "003",
                        "name": "iPhone10 pro",
                        "price": 3000,
                        "inventory": 5
                    },
                    {
                        "id": "004",
                        "name": "iPhone 8 plus ",
                        "price": 2000,
                        "inventory": 1
                    }
                ]
            }
            commit('setAll', data)
        },
        decrementInventory({
            commit
        }, id) {
            commit('setProductInventory', id)
        }
    }
}