<template>
    <div>
        <!-- <section class="catalog_main">
            <div class="cloud__block3 cat_block2"
                v-for="category in categories"
                :key="category.cSlug"
            >
                <div class="title">
                    <div class="title__front" v-bind:class="category.cClass">
                        <div class="cat_card_wrapper">
                            <p class="label fs24 fc_grey"  v-bind:class="category.cClass2">{{ category.cName }}</p>
                            <img :src="category.cImage"  alt="" />
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div class="catalog_card-wrapper">
                            <div class="card_description">   
                                <ul>
                                    <li v-for="firm in category.cList">
                                       {{ firm }}
                                    </li>
                                </ul>
                            </div>
                            <nuxt-link :to="`/test/${category.сSlug}`" class="secondary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <div>
        <section class="catalog_main">
            <div class="cloud__block3 cat_block2"
                     v-for="category in categories"
                    :key="category.cSlug"
            >
                <div class="title">
                    <div class="title__front" v-bind:class="category.cClass">
                        <div class="cat_card_wrapper">
                            <p class="label fs24 fc_grey"  v-bind:class="category.cClass2">{{ category.cName }}</p>
                            <img :src="category.cImage"  alt="" />
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div class="catalog_card-wrapper">
                            <div class="card_description">   
                                <!-- <p class="label">Тут будут название фирм производителей</p> -->
                                <!-- <p>Dahua</p>
                                <p>Hikvision</p> -->
                                <ul>
                                    <li v-for="firm in category.cList">
                                       {{ firm }}
                                    </li>
                                </ul>
                            </div>
                            <nuxt-link :to="`/category/${category.cSlug}`" class="secondary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    }
}
</script>