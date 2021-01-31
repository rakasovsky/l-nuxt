import mock from '../utils/mockServer'
// const sampleSize = require('lodash.samplesize')
// const categories = [
//     {
//         id: 'cctv-surveillance',
//         cTitle: 'Видеонаблюдение',
//         cName: 'Видеонаблюдение',
//         cDesc: "Описание",
//         cSlug: 'cctv-surveillance',
//         cClass: 'dark-grey',
//         cList: ['Камеры', 'PTZ','Регистраторы','Комплекты','Кронштейны', 'Объективы'],
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         products: []
//     },
//     {
//         id: "video-intercoms",
//         cTitle: 'Домофоны',
//         cName: 'Домофоны',
//         cSlug: 'video-intercoms',
//         cMetaDescription: 'video-intercoms',
//         cDesc: 'Описание',
//         cList: ['Мониторы', 'Вызывные панели','Переговорные устройства','Аксесуары'],
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'yellow',
//         cClass2: 'fc_black',
//         products: []
//     },
//     {
//         id: 'access-control',
//         cTitle: 'Контроль доступа',
//         cName: 'Контроль доступа',
//         cSlug: 'access-control',
//         cMetaDescription: 'access-control',
//         cDesc: 'Описание',
//         cList: ['Контролеры', 'Считыватели','Терминалы','Замки'],
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'grey',
//         cClass2: 'fc_black',
//         products: [],
//     },
//     {   
//         id: 'network',
//         cTitle: 'Сетевое оборудование',
//         cName: 'Сетевое оборудование',
//         cSlug: 'network',
//         cMetaDescription: 'network',
//         cDesc: 'Описание',
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'dark-grey',
//         products: [],
//     },
//     {   
//         cTitle: 'Сигналищация',
//         cName: 'Сигнализация',
//         cSlug: 'alarms',
//         cMetaDescription: 'alarms',
//         cDesc: 'Описание',
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'grey',
//         cClass2: 'fc_black',
//         products: [],
//     },
//     {   
//         cTitle: 'Дисплеи',
//         cName: 'Дисплеи',
//         cSlug: 'display',
//         cMetaDescription: 'мониторы',
//         cDesc: 'Описание',
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'dark-grey',
//         products: [],
//     },
//     {
//         cTitle: 'Тепловизоры',
//         cName: 'Тепловизоры',
//         cSlug: 'thermal',
//         cMetaDescription: 'video-intercoms',
//         cDesc: 'Описание',
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'yellow',
//         cClass2: 'fc_black',
//         products: []
//     },
//     {
//         cTitle: 'АТС',
//         cName: 'АТС',
//         cSlug: 'atc',
//         cMetaDescription: 'video-intercoms',
//         cDesc: 'Описание',
//         cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
//         cClass: 'grey',
//         cClass2: 'fc_black',
//         products: []
//     },
// ]


export const state = () => ({
  categoriesList: [],
  currentCategory: {},
  currentProduct: {
    alsoBuyProducts: [],
    interestingProducts: []
  },
  breadcrumbs: []
})

export const mutations = {
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  },
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  },
  RESET_BREADCRUMBS (state) {
    state.breadcrumbs = []
  }

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
      
      await commit('SET_CATEGORIES_LIST', mock.categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async getCurrentCategory ({ commit, dispatch }, { route }) {
    // simulate api work
    
    const category = mock.categories.find((cat) => cat.cSlug === route.params.CategorySlug)
    const [products, productsImages] = await Promise.all(
      [
        this.$axios.$get('/mock/MOCK_DATA.json'),
        // this.$axios.$get('/mock/products-images.json')
      ]
    )
    const crumbs = mock.getBreadcrumbs('category', route, category)
    await dispatch('setBreadcrumbs', crumbs)

    await commit('SET_CURRENT_CATEGORY', mock.addProductsToCategory(products, productsImages, category))
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


// Для работы с полноценным API
// export const actions = {
//     async getCategoriesList ({ commit }) {
//         try {
//             await commit('SET_CATEGORIES_LIST', categories)
//             // const options = {
//             //   method: 'GET',
//             //   headers: { "Content-Type": "application/json" }
//             // };
//             // const result = await fetch("http://1896990.lumex.web.hosting-test.net/api.php?root_categories", { options });
//             // const json = await result.json();
//             // await commit('SET_CATEGORIES_LIST', json);
//         } catch (err) {
//             console.log(err)
//             throw new  Error('Внутреняя ошибка сервера, сообщите администратору')
//         }
//     }
// }


