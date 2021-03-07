import mock from '../utils/mockServer'

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
  currentCategory: (state) => {
    return state.currentCategory;
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
    const crumbs = [{
        title: 'Каталог',
        url: '/catalog'
      }, {
        title: json.category.cTitle,
        url: `/category/${json.category.cSlug}`
      },
    ];
    await dispatch('setBreadcrumbs', crumbs)
  },

  async getCurrentSubcategory ({ commit, dispatch }, { route, category }) {
    const sc = encodeURIComponent(route.params.SubcategorySlug);
    const start = '';
    const count = '';
    const url = `http://phpnuxt.vior.link/handlers/api.php?category=${category.cSlug}&subcategory=${sc}&start=${start}&count=${count}&orderby=`;
    const result = await fetch(url, { options });
    const json = await result.json();
    await commit('SET_CURRENT_SUBCATEGORY', json);

    const crumbs = [{
        title: 'Каталог',
        url: '/catalog'
      }, {
        title: category.cTitle,
        url: `/category/${category.cSlug}`
      },
      {
        title: json.subcategory.cTitle,
        url: `/subcategory/${json.subcategory.cSlug}`
      }
    ]
    // const crumbs = mock.getBreadcrumbs('subcategory', route, subcategory)
    await dispatch('setBreadcrumbs', crumbs)
  },

  async getCurrentProduct ({ commit, dispatch }, { route }) {
    // simulate api work
    const productSlug = route.params.ProductSlug
    const [products, productsImages, alsoBuyProducts, interestingProducts] = await Promise.all(
      [
        this.$axios.$get('/mock/MOCK_DATA.json'),
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