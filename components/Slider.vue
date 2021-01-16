<template>
  <client-only>
    <swiper class="mySwiper" :options="swiperOption">
      <!-- <swiper-slide><img src="~/assets/img/clients/2.png" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/img/clients/denika-min.png" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/img/clients/elmag-min.png" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/img/clients/liqi_cleaning-min.png" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/img/clients/zt-min.png" alt=""></swiper-slide> -->
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/1.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/denika-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/liqi_cleaning-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/elmag-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/zt-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/suzirja-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/liqidator-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/2.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/frc-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/htz-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/metalist-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/plarium-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/tehnoezh-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/uipa-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/vg-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/oblenergo-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/shahtar-min.png" alt=""></swiper-slide>
         <swiper-slide class="glide__slide"><img src="~/assets/img/clients/stroicity-min.png" alt=""></swiper-slide>
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






