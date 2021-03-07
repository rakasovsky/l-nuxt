<template>
            <div class="title">

                    <div class="title__front dark-grey">
                        <div class="cat_card_wrapper">
                            <div class="cat_card_text">
                                <p class="label fs24 fc_grey product_title">{{ product.model }}</p>
                                <p>{{product.title}}</p>
                                <p class="fc_grey fs24">{{ product.price_uah }} грн</p>
                            </div>
                            <div class="cat_card_img">
                                <div class="product_availability out_of_stock">
                                    <p style="color:red;">{{ product.stock }}</p>
                                 </div> 
                               <img :src="product.image" />
                            </div>
                        </div>
                    </div>

                    <div class="title__back cat_desc yellow">
                        <div>
                            <p>
                                {{ product.descr }}
                            </p>
                            <div class="cart_wrapper">
                                 <BuyButton :product="product" />
                                <nuxt-link :to="`/product/${product.pSlug}`" class="secondary_button">
                                    <svg class="btn_svg">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                   
            </div>       
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'

export default {
    components: {
        BuyButton
    },
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    
}
</script>

<style scoped>
.cat_card_img {
    width: 100%;
}


</style>