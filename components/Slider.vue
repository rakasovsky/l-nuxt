<template>
  <client-only>
    <swiper class="mySwiper" :options="swiperOption">
         <!-- <swiper-slide class="glide__slide"><img src="~/assets/img/clients/966-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/comefor-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/denika-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/liqi_cleaning-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/elmag-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/zt-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/suzirja-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/liqidator-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/gualos-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/frc-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/htz-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/metalist-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/plarium-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/tehnoezh-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/uipa-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/vg-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/oblenergo-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/shahtar-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/stroicity-min.png" alt=""></swiper-slide> -->
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/966-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/comefor-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/denika-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/liqi_cleaning-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/elmag-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/zt-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/suzirja-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/liqidator-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/gualos-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/frc-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/htz-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/metalist-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/plarium-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/tehnoezh-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/uipa-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/vg-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/oblenergo-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/shahtar-min.webp" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/webp/stroicity-min.webp" alt=""></swiper-slide>
    </swiper>
  </client-only>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'

  export default {
    name: 'swipe',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          autoplay: true,
          breakpoints: {
           2560: {
              slidesPerView: 5,
              spaceBetween: 40
           },
            1920: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
              
            }
          }
      }
        }
    
    }
  }
  
</script>


<style  scoped>
  .swiper-wrapper {
    align-items: center;
  }
</style>






