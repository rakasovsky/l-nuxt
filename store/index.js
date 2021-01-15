
const categories = [
    {
        cName: "Видеонаблюдение",
        сSlug: 'cctv',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'dark-grey',
        cList: ['Dahua', 'Hikvision','Ezviz','IMOU']
    },
    { 
        cName: "АТС",
        сSlug: 'atc',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'yellow',
        cClass2: 'fc_black'
    },
    { 
        cName: "Контроль доступа",
        сSlug: 'control',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'dark-grey',
        cList: ['Dahua', 'Hikvision','U-Prox']
    },
    { 
        cName: "Сетевое Оборудование",
        сSlug: 'control',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'yellow',
        cClass2: 'fc_black'
    },
    { 
        cName: "Сигнализация",
        сSlug: 'control',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'grey',
        cClass2: 'fc_black'
    },
    { 
        cName: "Дополнительное оборудование",
        сSlug: 'control',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'dark-grey',
    },
    { 
        cName: "Домофоны",
        сSlug: 'control',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'grey',
        cClass2: 'fc_black'

    },
    { 
        cName: "Услуги",
        сSlug: 'control',
        cImage: 'https://lumex.in.ua/_nuxt/img/cat.d1df2b6.png',
        cClass: 'dark-grey'
    },

]

export const state = () => ({
    categoriesList: []
})


export const mutations = {
    SET_CATEGORIES_LIST (state, categories) {
        state.categoriesList = categories
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
    }
}


