<template>
  <div>     
            <Header />
            <Breadcrumbs />
            <!-- <CartButton />
            <CustomerCartModal /> -->

            <div class="catalog_page-wrapper">

            <div class="catalog_page-top">
                <span class="h_title label fs28">{{ category.cName }}</span>
                <p>{{ category.cDesc }}</p>
                <button class="secondary_button select-btn2">Z</button>
            </div>


            <div class="catalog_page-bottom">
                <aside class="catalog_select">
                    <div class="select_clear fs20">
                        <span>Выбрано</span>
                        <span>Сбросить</span>
                    </div>
                    <ul>
                        <li class="filter-wrapper">
                            <div>
                                <p class="label fs20">Категория товара</p>
                                <div class="filter-items">
                                    <div class="filter-item">
                                        <label class="checkbox-container">Камеры
                                            <input type="checkbox" checked="checked">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="checkbox-container">PTZ-камеры
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="checkbox-container">Регистраторы
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="checkbox-container">Кронштейны
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="filter-wrapper">
                            <div>
                                <p class="label fs20">Производитель</p>
                                <div class="filter-items">
                                    <div class="filter-item">
                                        <label class="checkbox-container">Hikvision
                                            <input type="checkbox" checked="checked">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="checkbox-container">Dahua
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="filter-wrapper">
                            <div>
                                <p class="label fs20">Тип Камер</p>
                                <div class="filter-items">
                                    <div class="filter-item">
                                        <label class="checkbox-container">IP
                                            <input type="checkbox" checked="checked">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="checkbox-container">CVI
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="filter-wrapper">
                            <div>
                                <p class="label fs20">Разрешение</p>
                                <div class="filter-items">
                                    <div class="filter-item">
                                        <label class="checkbox-container">1 МП
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="checkbox-container">666 МП
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>        
                </aside> 

                <div class="catalog_category">
                    <div class="sorting fs20">
                            <p class="fc_black">Сортировка:</p>
                            <p><span>Цена</span><span>▾</span></p>
                            <p><span>Модель</span><span>▾</span></p>
                            <p><span>Наличие</span><span>▾</span></p>
                    </div>
                    <!-- <section class="lumex__main catalog_wrapper"> -->
       
     
           
                        <div  class="lumex__main catalog_wrapper">
                        <div
                            v-for="product in category.products"
                            :key="product.id"
                            class="cloud__block3 cat_block2"
                        >
                            <ProductBrief :product="product" />
                        </div>
                        </div>
                   
                    
      
        

                    <!-- </section> -->
                </div>
            </div>
        </div>
        <Footer />
  </div>
</template>

<script>
import ProductBrief from '~~/components/category/ProductBrief'
import Breadcrumbs from '~~/components/common/Breadcrumbs.vue'
import CustomerCartModal from '@/components/modal/CustomerCartModal.vue'
import { mapState } from 'vuex'

export default {

  components: {
      ProductBrief,
      Breadcrumbs,
      CustomerCartModal
  },  

  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentCategory', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категория не найдена или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      category: 'currentCategory'
    })
  },
    head () {
    return {
      title: this.category.cTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.cMetaDescription
        }
      ]
    }
  },
    // GSAP
     mounted () {
        const catBlck2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".cat_block2", 
            start: "top bottom"
        }
        })

        catBlck2.from(".cat_block2",{duration:1, opacity:0, y:200, stagger:0.2});

        document.querySelectorAll(".cat_block2").forEach(function (f) {
        const qa = gsap.timeline({
        defaults: { duration: 1 },
        paused: true,
        });
        var tf = f.querySelector(".title__front");
        var tfd = f.querySelector(".title__front div");
        var tb = f.querySelector(".title__back");
        var tbd = f.querySelector(".title__back div");
        qa.to(tf, { duration: 0.5, y: 20, opacity: 1 })
        .to(tfd, { duration: 0.5, y: 20, opacity: 0 })
        .to(tf, { duration: 0.5, opacity: 0 })
        .to(tb, { duration: 0.5, opacity: 1 }, "-=1")
        .from(tbd, { duration: 0.5, y: 20, opacity: 0 }, "-=1");
        f.addEventListener("mouseover", function (e) {
        qa.play();
        });
        f.addEventListener("mouseout", function (e) {
        qa.reverse();
        });
        });
 
    },


  head () {
    return {
      title: this.category.cTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.cMetaDescription
        }
      ]
    }
  }
}
</script>