
const categories = [
    {
      
        cTitle: 'Видеонаблюдение',
        cName: 'Видеонаблюдение',
        cDesc: "Ололо",
        cSlug: 'cctv-surveillance',
        cClass: 'dark-grey',
        cList: ['Dahua', 'Hikvision','Ezviz','IMOU'],
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        products: []
    },
    {
        cTitle: 'Домофоны',
        cName: 'Домофоны',
        cSlug: 'intercoms',
        cMetaDescription: 'video-intercoms',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'yellow',
        cClass2: 'fc_black',
        products: []
    },
    {
        cTitle: 'Контроль доступа',
        cName: 'Контроль доступа',
        cSlug: 'access-control',
        cMetaDescription: 'access-control',
        cDesc: 'Описание',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'grey',
        cClass2: 'fc_black',
        products: [],
    },
    {   
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
    // { 
    //     cName: "Сетевое Оборудование",
    //     сSlug: 'control',
    //     cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
    //     cClass: 'yellow',
    //     cClass2: 'fc_black'
    // },
    // { 
    //     cName: "Сигнализация",
    //     сSlug: 'control',
    //     cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
    //     cClass: 'grey',
    //     cClass2: 'fc_black'
    // },
    // { 
    //     cName: "Дополнительное оборудование",
    //     сSlug: 'control',
    //     cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
    //     cClass: 'dark-grey',
    // },
    // { 
    //     cName: "Домофоны",
    //     сSlug: 'control',
    //     cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
    //     cClass: 'grey',
    //     cClass2: 'fc_black'

    // },
    // { 
    //     cName: "Услуги",
    //     сSlug: 'control',
    //     cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
    //     cClass: 'dark-grey'
    // },

]

export const state = () => ({
    categoriesList: [],
    currentCategory: {}
})


export const mutations = {
    SET_CATEGORIES_LIST (state, categories) {
        state.categoriesList = categories
    },
    SET_CURRENT_CATEGORY (state, category) {
        state.currentCategory = category
    }
}

export const actions = {
    async getCategoriesList ({ commit }) {
        try {
            await commit('SET_CATEGORIES_LIST', categories)
        } catch (err) {
            console.log(err)
            throw new  Error('Внутреняя ошибка сервера, сообщите администратору')
        }
    },
    async getCurrentCategory ({ commit }, { route }) {
        const category = categories.find((cat) => cat.cSlug === route.params.CategorySlug)
        await commit('SET_CURRENT_CATEGORY', category)
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


