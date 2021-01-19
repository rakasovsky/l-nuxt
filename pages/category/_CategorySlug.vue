<template>
  <div>     
            <Header />
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
                    <section class="lumex__main catalog_wrapper">
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24 fc_grey product_title">HIKVISION</p>
                                            <p class="fc_grey">DS-2CE56D0T-IRMMF (C) (3.6 мм)</p>
                                            <p class="fc_grey">5Мп AcuSense IP видеокамера Hikvision</p>
                                            <p class="fc_grey fs24">766 грн</p>
                                        </div>
                                        <div class="cat_card_img">
                                            <img src="static/assets/img/cat.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="title__back yellow">
                                    <div>
                                        <p>
                                            4 Мп IP видеокамера с ИК подсветкой; Матрица: 1/3" Progressive Scan CMOS; Сжатие: H.264 / H.265 / H.264+ / H.265+ / MJPEG; Объектив: f=4 мм (угол обзора 78°);
                                             Чувствительность: 0.01 Люкс/F1.2 (AGC вкл), 0.018 Люкс/F1.6 (AGC вкл); 0 Люкс с ИК; Запись: 4МП / 3МП / 1080р / 720р - 25 к/с; Функции: Детектор лиц, видео аналитика, WDR (120dB), 3D-DNR, ROI; Интерфейсы: аудио (2вх/1вых), тревога (1 вх/1вых), встроенный микрофон; ИК-подсветка до 10 м. Слот памяти: micro SD/SDHC/SDXC до 128Гб; DC 12В, PoE(802.3af), Ф110х56 мм, 400 г
                                        </p>
                                        <a href="product.html" class="secondary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24">ATC</p>
                                        </div> 
                                        <div class="cat_card_img">
                                            <img src="static/assets/img/cat.png" alt="">
                                        </div>
                                        <div class="availability">
                                           Нет в наличии
                                        </div>
                                    </div>
                                </div>
                                <div class="title__back dark-grey">
                                    <div>
                                        <p class="fc_grey">
                                            and 75% of stock-outs are due to systemic errors. 
                                        </p>
                                        <a href="#" class="primary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24 fc_grey">Контроль доступа</p>
                                        </div>    
                                        <div class="cat_card_img">
                                            <img src="static/assets/img/cat.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="title__back yellow">
                                    <div>
                                        <p>Сервис облачной телефонии предусматривает оплату за аренду оборудования, использование вычислительных ресурсов и обслуживание системы.</p>
                                        <a href="#" class="secondary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front yellow">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24 fc_dark">Сетевое Оборудование</p>
                                        </div>    
                                        <img src="static/assets/img/cat.png" alt="">
                                    </div>
                                </div>
                                <div class="title__back">
                                    <div>
                                        <p>
                                            and 75% of stock-outs are due to systemic errors. 
                                        </p>
                                        <a href="#" class="primary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24">Сигнализация</p>
                                        </div>
                                        <img src="static/assets/img/cat.png" alt="">
                                    </div>
                                </div>
                                <div class="title__back dark-grey">
                                    <div>
                                        <p class="fc_grey">
                                            and 75% of stock-outs are due to systemic errors. 
                                        </p>
                                        <a href="#" class="primary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front yellow">
                                    <div>
                                        <div class="cat_card_wrapper">
                                            <div class="cat_card_text">
                                                <p class="label fs24">Сигнализация</p>
                                            </div>
                                            <img src="static/assets/img/cat.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="title__back dark-grey">
                                    <div>
                                        <p class="fc_white">Сервис облачной телефонии предусматривает оплату за аренду оборудования, использование вычислительных ресурсов и обслуживание системы.</p>
                                        <a href="#" class="primary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24">Сигнализация</p>
                                        </div>
                                        <img src="static/assets/img/cat.png" alt="">
                                    </div>
                                </div>
                                <div class="title__back dark-grey">
                                    <div>
                                        <p class="fc_grey">
                                            and 75% of stock-outs are due to systemic errors. 
                                        </p>
                                        <a href="#" class="primary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24 fc_grey">Сигнализация</p>
                                        </div>
                                        <img src="static/assets/img/cat.png" alt="">
                                    </div>
                                </div>
                                <div class="title__back yellow">
                                    <div>
                                        <p>К каждому клиенту у нас индивидуальный подход и мы можем настроить облачную АТС именно под Ваши задачи</p>
                                        <a href="#" class="secondary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24 fc_grey">Сигнализация</p>
                                        </div>
                                        <img src="static/assets/img/cat.png" alt="">
                                    </div>
                                </div>
                                <div class="title__back yellow">
                                    <div>
                                        <p>Сервис облачной телефонии предусматривает оплату за аренду оборудования, использование вычислительных ресурсов и обслуживание системы.</p>
                                        <a href="#" class="secondary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                          <div class="cloud__block3 cat_block2">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div class="cat_card_wrapper">
                                        <div class="cat_card_text">
                                            <p class="label fs24 fc_grey">Сигнализация</p>
                                        </div>
                                        <img src="static/assets/img/cat.png" alt="">
                                    </div>
                                </div>
                                <div class="title__back yellow">
                                    <div>
                                        <p>Сервис облачной телефонии предусматривает оплату за аренду оборудования, использование вычислительных ресурсов и обслуживание системы.</p>
                                        <a href="#" class="secondary_button">
                                            <svg class="btn_svg">
                                                <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
        <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
          // content: this.category.cMetaDescription
        }
      ]
    }
  }
}
</script>