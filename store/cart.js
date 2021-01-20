export const state = () => ({
    products: [],
    version: '0.0.1'
})

export const mutations = {
    ADD_PRODUCT (state, product) {
        if (!state.products.find(p => product.id === p.id)) {
            state.products = [...state.products, product]
          }
    },
    SET_PRODUCT (state, { productId, data }) {
        state.products = [...state.products.filter(prod => prod.id !== productId ), data]
    },
    REMOVE_PRODUCT (state, productId) {
        state.products = Array.from(state.products.filter(prod => prod.id !== productId))
    }
}

export const actions = {
    async addProduct ({ commit}, data) {
        await commit('ADD_PRODUCT', data)
    },
    async removeProduct ({ commit}, productId){
        await commit('REMOVE_PRODUCT', productId)
    }
}