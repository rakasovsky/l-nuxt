
const sampleSize = require('lodash.samplesize')
const categories = [
    {
        id: 'cctv-surveillance',
        cTitle: 'Видеонаблюдение',
        cName: 'Видеонаблюдение',
        cDesc: "Описание",
        cSlug: 'cctv-surveillance',
        cClass: 'dark-grey',
        cList: ['Камеры', 'PTZ','Регистраторы','Комплекты','Кронштейны', 'Объективы'],
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        products: []
    },
    {
        id: "video-intercoms",
        cTitle: 'Домофоны',
        cName: 'Домофоны',
        cSlug: 'video-intercoms',
        cMetaDescription: 'video-intercoms',
        cDesc: 'Описание',
        cList: ['Мониторы', 'Вызывные панели','Переговорные устройства','Аксесуары'],
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'yellow',
        cClass2: 'fc_black',
        products: []
    },
    {
        id: 'access-control',
        cTitle: 'Контроль доступа',
        cName: 'Контроль доступа',
        cSlug: 'access-control',
        cMetaDescription: 'access-control',
        cDesc: 'Описание',
        cList: ['Контролеры', 'Считыватели','Терминалы','Замки'],
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'grey',
        cClass2: 'fc_black',
        products: [],
    },
    {   
        id: 'network',
        cTitle: 'Сетевое оборудование',
        cName: 'Сетевое оборудование',
        cSlug: 'network',
        cMetaDescription: 'network',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'dark-grey',
        products: [],
    },
    {   
        cTitle: 'Сигналищация',
        cName: 'Сигнализация',
        cSlug: 'alarms',
        cMetaDescription: 'alarms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'grey',
        cClass2: 'fc_black',
        products: [],
    },
    {   
        cTitle: 'Дисплеи',
        cName: 'Дисплеи',
        cSlug: 'display',
        cMetaDescription: 'мониторы',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'dark-grey',
        products: [],
    },
    {
        cTitle: 'Тепловизоры',
        cName: 'Тепловизоры',
        cSlug: 'thermal',
        cMetaDescription: 'video-intercoms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'yellow',
        cClass2: 'fc_black',
        products: []
    },
    {
        cTitle: 'АТС',
        cName: 'АТС',
        cSlug: 'atc',
        cMetaDescription: 'video-intercoms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'grey',
        cClass2: 'fc_black',
        products: []
    },
]

function getProductsByIds(products, productsImages, ids) {
    const innerProduct = products.filter(p => p.id === ids.find(id => p.id === id))
    if (!innerProduct) return null
    return innerProduct.map(pr => {
        return {
            ...pr,
            // images: productsImages.find(img => img.id === pr.id).urls,
            images: `https://source.unsplash.com/300x300/`
        }
    })
}

function getProduct (products, productsImages, productSlug) {
    const innerProduct = products.find(p => p.pSlug === productSlug)
    if (!innerProduct) return null
    return {
      ...innerProduct,
    //   images: productsImages.find(img => img.id === innerProduct.id).urls,
      category: categories.find(cat => cat.id === innerProduct.category_id)
    }
  }
  function addProductsToCategory (products, productsImages, category) {
    const categoryInner = { ...category, products: [] }
    products.map(p => {
      if (p.category_id === category.id) {
        categoryInner.products.push({
          id: p.id,
          pName: p.pName,
          pSlug: p.pSlug,
          pPrice: p.pPrice,
          //image: productsImages.find(img => img.id === p.id).urls
          image: `https://source.unsplash.com/300x300/?${p.pName}`
        })
      }
    })
    return categoryInner
  }
  function getBreadcrumbs (pageType, route, data) {
    const crumbs = []
    crumbs.push({
      title: 'Каталог',
      url: '/catalog'
    })
    switch (pageType) {
      case 'category':
        crumbs.push({
          title: data.cName,
          url: `/category/${data.cSlug}`
        })
        break
      case 'product':
        crumbs.push({
          title: data.category.cName,
          url: `/category/${data.category.cSlug}`
        })
        crumbs.push({
          title: data.pName,
          url: `/product/${data.pSlug}`
        })
  
        break
  
      default:
        break
    }
    return crumbs
  }
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
    },
    GET_PRODUCTS_BY_IDS () {}
  }

  export const actions = {

    async getProductsListByIds({ commit }) {
       const [products, productsImages] = await Promise.all(
           [
                this.$axios.$get('/mock/MOCK_DATA.json'),
           ]
       )
       commit('GET_PRODUCTS_BY_IDS')
       const idsArray = (sampleSize(products, 4)).map(p => p.id)
       return getProductsByIds(products, productsImages, idsArray)
    },


    async setBreadcrumbs ({ commit }, data) {
      await commit('SET_BREADCRUMBS', data)
    },
    async getCategoriesList ({ commit }) {
      try {
        
        await commit('SET_CATEGORIES_LIST', categories)
      } catch (err) {
        console.log(err)
        throw new Error('Внутреняя ошибка сервера, сообщите администратору')
      }
    },
    async getCurrentCategory ({ commit, dispatch }, { route }) {
      
      const category = categories.find((cat) => cat.cSlug === route.params.CategorySlug)
  
      const [products, productsImages] = await Promise.all(
        [
          this.$axios.$get('/mock/MOCK_DATA.json'),
        //  this.$axios.$get('/mock/products-images.json')
        ]
      )
      const crubms = getBreadcrumbs('category', route, category)
      await dispatch('setBreadcrumbs', crubms)
  
      await commit('SET_CURRENT_CATEGORY', addProductsToCategory(products, productsImages, category))
    },
    async getCurrentProduct ({ commit, dispatch }, { route }) {
     
      const productSlug = route.params.ProductSlug
      const [products, productsImages, alsoBuyProducts, interestingProducts] = await Promise.all(
        [
          this.$axios.$get('/mock/MOCK_DATA.json'),
          // тут херня происходит, если диспатчить 2 то отрисовывает один
         dispatch('getProductsListByIds'),
         dispatch('getProductsListByIds'),
         dispatch('getProductsListByIds')
        ]
  
      )
      const product = getProduct(products, productsImages, productSlug)
      const crubms = getBreadcrumbs('product', route, product)
      await dispatch('setBreadcrumbs', crubms)
      await commit('SET_CURRENT_PRODUCT', { ...product, alsoBuyProducts, interestingProducts })
    
    }
  
  }


// function getProduct (products, productsImages, productSlug){
//     const innerProduct = products.find(p => p.Slug === productSlug)
//     if (!innerProduct) return null
//     return {
//         ...innerProduct,
//         images: productsImages.find(img => img.id === innerProduct.id).urls,
//         category: categories.find(cat => cat.id === innerProduct.category.id)
//     }
// }

// function addProductsToCategory (products, category) {
//     const categoryInner = { ...category, products: [] }
//     products.map(p => {
//         if (p.category_id === category.id) {
//             categoryInner.products.push({
//                 id: p.id,
//                 pName: p.pName,
//                 pSlug: p.pSlug,
//                 pPrice: p.pPrice,
//                 pDesc: p.pDesc,
//                 image: `https://source.unsplash.com/300x300/?${p.pName}`
//                 // image: productsImages.find(img => img.id === p.id).urls
//             })
//         }
//     })
//     return categoryInner
// }



// export const state = () => ({
//     categoriesList: [],
//     currentCategory: {},
//     currentProduct: {},
// })


// export const mutations = {
//     SET_CATEGORIES_LIST (state, categories) {
//         state.categoriesList = categories
//     },
//     SET_CURRENT_CATEGORY (state, category) {
//         state.currentCategory = category
//     },
//     SET_CURRENT_PRODUCT (state, product) {
//         state.currentProduct = product
//     }
// }

// export const actions = {
//     async getCategoriesList ({ commit }) {
//         try {
//             await commit('SET_CATEGORIES_LIST', categories)
//         } catch (err) {
//             console.log(err)
//             throw new  Error('Внутреняя ошибка сервера, сообщите администратору')
//         }
//     },
//     async getCurrentCategory ({ commit }, { route }) {
//         const category = categories.find((cat) => cat.cSlug === route.params.CategorySlug)
        
//         const products = await this.$axios.$get('/mock/MOCK_DATA.json')
       

//         await commit('SET_CURRENT_CATEGORY', addProductsToCategory(products, category))
//       }
// }





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


