// import mock from '../utils/mockServer'
// const options = {
//     method: 'GET',
//     headers: { "Content-Type": "application/json" }
// };

// export const state = () => ({
//   categoriesList: [],
//   subcategoriesList: [],
//   currentCategory: {},
//   currentProduct: {
//     alsoBuyProducts: [],
//     interestingProducts: []
//   },
//   breadcrumbs: []
// })

// export const mutations = {
//     SET_SUBCATEGORIES_LIST (state, sub) {
//         state.subcategoriesList = sub
//     },
//   SET_CATEGORIES_LIST (state, categories) {
//     state.categoriesList = categories
//   },
//   SET_CURRENT_CATEGORY (state, category) {
//     state.currentCategory = category
//   },
//   SET_CURRENT_PRODUCT (state, product) {
//     state.currentProduct = product
//   },
//   SET_BREADCRUMBS (state, crumbs) {
//     state.breadcrumbs = crumbs
//   },
//   RESET_BREADCRUMBS (state) {
//     state.breadcrumbs = []
//   }

// }
// export const actions = {
//   async getProductsListRandom ({ commit }) {
//     // simulate api work
    
//     const [products, productsImages] = await Promise.all(
//       [
//         this.$axios.$get('/mock/MOCK_DATA.json'),
//         // this.$axios.$get('/mock/products-images.json')
//       ]

//     )
//     commit('GET_PRODUCTS_BY_IDS')
//     const idsArray = (mock.sampleSize(products, 4)).map(p => p.id)
//     return mock.getProductsByIds(products, productsImages, idsArray)
//   },

//   async setBreadcrumbs ({ commit }, data) {
//     await commit('SET_BREADCRUMBS', data)
//   },

//   async getCategoriesList ({ commit }) {
//     try {
//     //   await commit('SET_CATEGORIES_LIST', mock.categories)
//       const result = await fetch("http://phpnuxt.vior.link/handlers/api.php?root_categories", { options });
//       const json = await result.json();
//       await commit('SET_CATEGORIES_LIST', json);
//     } catch (err) {
//       console.log(err)
//       throw new Error('Внутреняя ошибка сервера, сообщите администратору')
//     }
//   },

//   async getSubcategoriesList ({ commit, dispatch }, { route }) {
//     const result = await fetch("http://phpnuxt.vior.link/handlers/api.php?category="+route.params.CategorySlug, { options });
//     const json = await result.json();
//     await commit('SET_SUBCATEGORIES_LIST', json)
//   },
//   async getCurrentCategory ({ commit, dispatch }, { route }) {
//     // simulate api work
    
//     const category = mock.categories.find((cat) => cat.cSlug === route.params.CategorySlug)
//     const [products, productsImages] = await Promise.all(
//       [
//         this.$axios.$get('/mock/MOCK_DATA.json'),
//         // this.$axios.$get('/mock/products-images.json')
//       ]
//     )
//     const crumbs = mock.getBreadcrumbs('category', route, category)
//     await dispatch('setBreadcrumbs', crumbs)

//     await commit('SET_CURRENT_CATEGORY', mock.addProductsToCategory(products, productsImages, category))
//   },
//   async getCurrentProduct ({ commit, dispatch }, { route }) {
//     // simulate api work
   
//     const productSlug = route.params.ProductSlug
//     const [products, productsImages, alsoBuyProducts, interestingProducts] = await Promise.all(
//       [
//         this.$axios.$get('/mock/MOCK_DATA.json'),
//         // this.$axios.$get('/mock/products-images.json'),
//         dispatch('getProductsListRandom'),
//         dispatch('getProductsListRandom'),
//         dispatch('getProductsListRandom'),
//       ]

//     )
//     const product = mock.getProduct(products, productsImages, productSlug)
//     const crubms = mock.getBreadcrumbs('product', route, product)
//     await dispatch('setBreadcrumbs', crubms)
//     await commit('SET_CURRENT_PRODUCT', { ...product, alsoBuyProducts, interestingProducts })
//   }

// }



  
import mock from '../utils/mockServer'
// const sampleSize = require('lodash.samplesize')

const options = {
  method: 'GET',
  headers: { "Content-Type": "application/json" }
};

export const state = () => ({
  subcategoriesList: [],
  categoriesList: [],
  currentSubcategory: {},
  currentCategory: {},
  currentProduct: {
    alsoBuyProducts: [],
    interestingProducts: []
  },
  breadcrumbs: []
})

export const mutations = {
  SET_SUBCATEGORIES_LIST (state, xxx) {
    state.subcategoriesList = xxx
  },
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  },
  SET_CURRENT_SUBCATEGORY (state, subcategory) {
    state.currentSubcategory = subcategory
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  },
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  },
  RESET_BREADCRUMBS (state) {
    state.breadcrumbs = []
  },
  GET_CURRENT_CATEGORY (state) {
    return state.currentCategory
  },

}

export const getters = {
  currentCategory: (state) => state.currentCategory,
}

export const actions = {
  async getProductsListRandom ({ commit }) {
    // simulate api work

    const [products, productsImages] = await Promise.all(
      [
        this.$axios.$get('/mock/MOCK_DATA.json'),
        // this.$axios.$get('/mock/products-images.json')
      ]

    )
    commit('GET_PRODUCTS_BY_IDS')
    const idsArray = (mock.sampleSize(products, 4)).map(p => p.id)
    return mock.getProductsByIds(products, productsImages, idsArray)
  },

  async setBreadcrumbs ({ commit }, data) {
    await commit('SET_BREADCRUMBS', data)
  },
  async getCategoriesList ({ commit }) {
    try {
      const result = await fetch("http://phpnuxt.vior.link/handlers/api.php?root_categories", { options });
      const json = await result.json();
      await commit('SET_CATEGORIES_LIST', json);
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },

  async getSubcategoriesList ({ commit, dispatch }, { route }) {
    const result = await fetch("http://phpnuxt.vior.link/handlers/api.php?category="+encodeURIComponent(route.params.CategorySlug), { options });
    const json = await result.json();
    await commit('SET_CURRENT_CATEGORY', json.category);
    await commit('SET_SUBCATEGORIES_LIST', json.subcategories);
    const category = json.category;
    console.error('>>>category', category)
    const crumbs = mock.getBreadcrumbs('category', route, category)
    await dispatch('setBreadcrumbs', crumbs)
  },

  async getCurrentSubcategory ({ commit, dispatch }, { route }) {
    const c = getters.currentCategory();
    const sc = encodeURIComponent(route.params.SubcategorySlug);
    const result = await fetch("http://phpnuxt.vior.link/handlers/api.php?category="+c+"&subcategory="+sc, { options });
    const json = await result.json();
    await commit('SET_CURRENT_CATEGORY', mock.addProductsToCategory(products, productsImages, category))
    console.error('>>>getCurrentCategory', json);
    const crumbs = mock.getBreadcrumbs('category', route, category)
    await dispatch('setBreadcrumbs', crumbs)
  },

  async getCurrentProduct ({ commit, dispatch }, { route }) {
    // simulate api work
    const productSlug = route.params.ProductSlug
    const [products, productsImages, alsoBuyProducts, interestingProducts] = await Promise.all(
      [
        this.$axios.$get('/mock/MOCK_DATA.json'),
        // this.$axios.$get('/mock/products-images.json'),
        dispatch('getProductsListRandom'),
        dispatch('getProductsListRandom'),
        dispatch('getProductsListRandom'),
      ]

    )
    const product = mock.getProduct(products, productsImages, productSlug)
    const crubms = mock.getBreadcrumbs('product', route, product)
    await dispatch('setBreadcrumbs', crubms)
    await commit('SET_CURRENT_PRODUCT', { ...product, alsoBuyProducts, interestingProducts })
  }

}
