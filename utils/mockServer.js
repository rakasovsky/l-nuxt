const sampleSize = require('lodash.samplesize')
const categories = [
    {
        id: 'cctv-surveillance',
        cTitle: 'Видеонаблюдение',
        cName: 'Видеонаблюдение',
        cDesc: "Описание",
        cSlug: 'cctv-surveillance',
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
        products: [],
    },
    {   
        cTitle: 'Сигналищация',
        cName: 'Сигнализация',
        cSlug: 'alarms',
        cMetaDescription: 'alarms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        products: [],
    },
    {   
        cTitle: 'Дисплеи',
        cName: 'Дисплеи',
        cSlug: 'display',
        cMetaDescription: 'мониторы',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        products: [],
    },
    {
        cTitle: 'Тепловизоры',
        cName: 'Тепловизоры',
        cSlug: 'thermal',
        cMetaDescription: 'video-intercoms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        products: []
    },
    {
        cTitle: 'АТС',
        cName: 'АТС',
        cSlug: 'atc',
        cMetaDescription: 'video-intercoms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        products: []
    },
]

const subcategories = [
  {
      id: 'Камеры',
      cTitle: 'Камеры',
      cName: 'Камеры',
      cDesc: "Описание",
      subSlug: 'Камеры',
      cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
  },
  {
    id: 'PTZ-Камеры',
    cTitle: 'PTZ-Камеры',
    cName: 'PTZ-Камеры',
    cDesc: "Описание",
    subSlug: 'PTZ-Камеры',
    cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
  },
]


function getProductsByIds(products, productsImages, ids) {
  const innerProduct = products.filter(p => p.id === ids.find(id => p.id === id))
  if (!innerProduct) return null
  return innerProduct.map(pr => {
      return {
          ...pr,
          // images: productsImages.find(img => img.id === pr.id).urls,
          images: `https://source.unsplash.com/300x300/`,
          category: categories.find(cat => cat.id === pr.category_id)
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
        pDesc: p.pDesc,
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
    
    // case 'subcategory':
    //   crumbs.push({
    //     title: data.category.cName.subcategory.cName,
    //     url: `category/${data.category.cSlug}`
    //   })  
      // crumbs.push({
      //   title: data.cName,
      //   url: `/subcategory/${data.cSlug}`
      // })
      // break
      
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
export default { categories, subcategories, sampleSize, getProductsByIds, getProduct, addProductsToCategory, getBreadcrumbs }
