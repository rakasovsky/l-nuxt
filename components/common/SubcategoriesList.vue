<template>
        <section class="catalog_main">
            <div class="cloud__block3 cat_block2"
                     v-for="subcategory in subcategories"
                    :key="subcategory.cSlug"
            >
                <div class="title">
                    <div class="title__front">
                        <div class="cat_card_wrapper">
                            <p class="label fs24 fc_grey">{{ subcategory.cName }}</p>
                            <img :src="subcategory.cImage"  alt="" />
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div class="catalog_card-wrapper">
                            <div class="card_description">
                                <!-- <p class="label">Тут будут название фирм производителей</p> -->
                                <!-- <p>Dahua</p>
                                <p>Hikvision</p> -->
                                <ul>
                                    <li v-for="cat in subcategory.cList">
                                       {{ cat }}
                                    </li>
                                </ul>
                            </div>
                            <nuxt-link :to="`/subcategory/${subcategory.cSlug}`" class="secondary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
export default {
    props: {
        subcategories: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
    .cloud__block3:nth-child(-3n+4), .cloud__block3:nth-child(6){
        .title__front {
            background-color: #282124;
            p{
                    color: #a8a8a8;
            }
        }
    }
    .cloud__block3:nth-child(-2n+4), .cloud__block3:nth-child(2n+5){
        .title__front {
            background-color: #ffda00;
            p {
                color: black;
            }
        }
    }
    .cloud__block3:nth-child(5n-2){
        .title__front {
            background-color: #a8a8a8;
            p {
                color: black;
            }
        }
    }
    .catalog_main .cloud__block3 .title .title__front {
        width: 100%;
    }
</style>