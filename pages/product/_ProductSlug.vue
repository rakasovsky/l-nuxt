<template>
        <div>
           <Header />
           <div class="top"></div>
           <Breadcrumbs />
           <section class="product_container"> 
            <div class="product_wrapper-top">
                <div class="img_container">
                    <img src="~~/static/assets/img/product/DS-2CD2183G0-IS-28.jpg" alt="">
                    <!-- <img :src="product.image" /> -->
                </div>
                <div class="desc_container">
                    <div class="product-title p_title">
                        <h1 class=""> {{ product.pName }} </h1>
                        <h3 class="">8Мп IP видеокамера Hikvision с функциями IVS и детектором лиц</h3>
                    </div>
                    <div class="product_availability">
                        Есть в наличии
                    </div>
                    <div class="product_code">
                        <p>Код : 10000000627</p>
                    </div>
                    <div class="product_price">
                        <p class="fs24">Цена: {{ product.pPrice }}</p>
                    </div>
                    <div class="product_buy">
                      <BuyButton :product="product" />
                    </div>
                     
                    <!-- <div class="product_availability out_of_stock">
                       <p>Нет в наличии</p>
                    </div> -->
                   
                </div>
            </div>
            <div class="product_wrapper-bottom">
              
                      <tabs>
                        <tab title="Описание">
                          <div class="tab">
                            <p> {{ product.pDesc }}</p>
                           </div>
                        </tab>
                        <tab title="Характеристики">
                            <div class="tab ">
                          <table>
                              <tbody>
                              <tr>
                              <th>Матрица</th>
                              <td>1/2.5" Progressive Scan CMOS</td>
                              </tr>
                                                          <tr>
                              <th>Макс. разрешение</th>
                              <td>3840х2160</td>
                              </tr>
                                                          <tr>
                              <th>Мин. чувствительность</th>
                              <td>0.01 Люкс/F1.2 (AGC вкл), 0.028Люкс/F2.0 (AGC вкл), 0 Люкс с ИК</td>
                              </tr>
                                                          <tr>
                              <th>Скорость затвора</th>
                              <td>1/3 с – 1/100,000 с</td>
                              </tr>
                                                          <tr>
                              <th>Медленная выдержка затвора</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>Регулировка по осям</th>
                              <td>Поворот: 0° ~ 355°; Наклон: 0° ~ 75°; Вращение: 0° ~ 355°</td>
                              </tr>
                                                          <tr>
                              <th>Режим день/ночь</th>
                              <td>Авто (ИК-фильтр) / Цвет / Ч-Б / Расписание</td>
                              </tr>
                                                          <tr>
                              <th>Тип подсветки</th>
                              <td>ИК</td>
                              </tr>
                                                          <tr>
                              <th>Управление подсветкой</th>
                              <td>Авто/вручную</td>
                              </tr>
                                                          <tr>
                              <th>Дальность подсветки</th>
                              <td>До 30м</td>
                              </tr>
                                                          <tr>
                              <th>Тип объектива</th>
                              <td>Фиксированный</td>
                              </tr>
                                                          <tr>
                              <th>Фокусное расстояние</th>
                              <td>2.8 мм</td>
                              </tr>
                                                          <tr>
                              <th>Крепление объектива</th>
                              <td>M12</td>
                              </tr>
                                                          <tr>
                              <th>Апертура</th>
                              <td>F2.0</td>
                              </tr>
                                                          <tr>
                              <th>Углы обзора</th>
                              <td>Горизонтальный: 102°, Вертикальный: 53°, Диагональ: 124°</td>
                              </tr>
                                                          <tr>
                              <th>Управление фокусом</th>
                              <td>Фиксированный</td>
                              </tr>
                                                          <tr>
                              <th>Видео компрессия</th>
                              <td>H.265+ / H.265 / H.264+ / H.264 / MJPEG</td>
                              </tr>
                                                          <tr>
                              <th>Количество потоков</th>
                              <td>3 потока</td>
                              </tr>
                                                          <tr>
                              <th>Поддержка разрешений</th>
                              <td>8МП (3840x2160), 5MП (2560x1920), 4МП(2560х1440), 2МП (1920x1080), 1.3MП(1280x960), 1МП(1280x720), D1 (704x576), VGA (640x480), CIF(352x288)</td>
                              </tr>
                                                          <tr>
                              <th>Частота кадров (главный поток)</th>
                              <td>4K - 12к/с, 5Мп - 20к/с, 4Мп / 1080р - 25к/с, 720р - 25к/с</td>
                              </tr>
                                                          <tr>
                              <th>Частота кадров (доп. поток)</th>
                              <td>VGA / CIF - 25к/с</td>
                              </tr>
                                                          <tr>
                              <th>Частота кадров (доп2. поток)</th>
                              <td>720р / VGA / CIF- 25к/с</td>
                              </tr>
                                                          <tr>
                              <th>Видео битрейт</th>
                              <td>32 Кбит/с - 16 Mбит/с</td>
                              </tr>
                                                          <tr>
                              <th>Регулировка усиления (AGC)</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>Подавление шума (DNR )</th>
                              <td>3D-DNR</td>
                              </tr>
                                                          <tr>
                              <th>Баланс белого</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>BLC</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>HLC</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>WDR</th>
                              <td>120dB</td>
                              </tr>
                                                          <tr>
                              <th>ROI</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>SVC</th>
                              <td>Поддерживает кодирование H.264 и H.265</td>
                              </tr>
                                                          <tr>
                              <th>Настройки изображения</th>
                              <td>Режим поворота, насыщенность, яркость, контрастность регулируются клиентским программным обеспечением или через интернет-браузер</td>
                              </tr>
                                                          <tr>
                              <th>Аудио компрессия</th>
                              <td>G.711 / G.722.1 / G.726 / MP2L2 / PCM</td>
                              </tr>
                                                          <tr>
                              <th>Аудиобитрейт</th>
                              <td>64Kбит/с (G.711) / 16Kбит/с (G.722.1) / 16Kбит/с (G.726) / 32-192Kбит/с (MP2L2)</td>
                              </tr>
                                                          <tr>
                              <th>Ethernet</th>
                              <td>1x RJ45 10M/100M</td>
                              </tr>
                                                          <tr>
                              <th>Сетевые протоколы</th>
                              <td>TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP, SNMP, IGMP, 802.1X, QoS, IPv6, UDP, Bonjour, SSL/TLS</td>
                              </tr>
                                                          <tr>
                              <th>Совместимость</th>
                              <td>ONVIF (PROFILE S, PROFILE G, PROFILE T), ISAPI, SDK</td>
                              </tr>
                                                          <tr>
                              <th>Метод хранения</th>
                              <td>NAS (NFS,SMB/CIFS), ANR, Micro SD</td>
                              </tr>
                                                          <tr>
                              <th>Поддержка браузеров</th>
                              <td>IE8+, Chrome 31.0-44, Firefox 30.0-51, Safari 8.0+</td>
                              </tr>
                                                          <tr>
                              <th>Программное обеспечение</th>
                              <td>iVMS-4200, Hik-Connect, iVMS-5200</td>
                              </tr>
                                                          <tr>
                              <th>Мобильные платформы</th>
                              <td>IOS, Android</td>
                              </tr>
                                                          <tr>
                              <th>Пользователи/уровни</th>
                              <td>до 32 пользователей\ 3 уровня (Администратор, Оператор, Пользователь)</td>
                              </tr>
                                                          <tr>
                              <th>Количество одновременных подключений</th>
                              <td>6</td>
                              </tr>
                                                          <tr>
                              <th>Безопасность</th>
                              <td>Защита паролем, сложный пароль, шифрование HTTPS, аутентификация 802.1X (EAP-MD5), водяной знак, фильтр IP-адресов, базовая и дайджест-аутентификация для HTTP / HTTPS, WSSE и дайджест-аутентификация для ONVIF, TLS1.2</td>
                              </tr>
                                                          <tr>
                              <th>Аудио интерфейсы</th>
                              <td>1 вх  / 1 вых</td>
                              </tr>
                                                          <tr>
                              <th>Интерфейсы тревоги</th>
                              <td>1 вх / 1 вых</td>
                              </tr>
                                                          <tr>
                              <th>Сетевые интерфейсы</th>
                              <td>1 RJ45 10M/100M</td>
                              </tr>
                                                          <tr>
                              <th>Локальное хранилище</th>
                              <td>Micro SD/SDHC/SDXC карта до 128ГБ</td>
                              </tr>
                                                          <tr>
                              <th>Кнопка сброса</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>Триггеры тревоги</th>
                              <td>Обнаружение движения, IVS события, отключение сети, конфликт IP-адресов, незаконный вход в систему, SD карта заполнена, ошибка SD карты</td>
                              </tr>
                                                          <tr>
                              <th>Действие при сработке триггера</th>
                              <td>Загрузка на FTP / NAS / карту памяти, уведомление центра наблюдения, отправка электронной почты, запуск записи, захват</td>
                              </tr>
                                                          <tr>
                              <th>Пересечение линии</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>Вторжение в область</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>Обнаружение лиц</th>
                              <td>Есть</td>
                              </tr>
                                                          <tr>
                              <th>Питание</th>
                              <td>DC 12В ± 25%</td>
                              </tr>
                                                          <tr>
                              <th>PoE</th>
                              <td>PoE (802.3af)</td>
                              </tr>
                                                          <tr>
                              <th>Потребляемая мощность</th>
                              <td>&lt;9Вт</td>
                              </tr>
                                                          <tr>
                              <th>Рабочая температура</th>
                              <td>-30° C ~ +60° C</td>
                              </tr>
                                                          <tr>
                              <th>Влажность</th>
                              <td>&lt;95%</td>
                              </tr>
                                                          <tr>
                              <th>Степень защиты</th>
                              <td>IP67, IK10</td>
                              </tr>
                                                          <tr>
                              <th>Размеры</th>
                              <td>Φ111x82 мм</td>
                              </tr>
                                                          <tr>
                              <th>Вес</th>
                              <td>500г</td>
                              </tr>
                                                          <tr>
                              <th>Материал</th>
                              <td>Металл + пластик</td>
                              </tr>
                          </tbody>
                      </table>
                      </div>
                        </tab>
                      </tabs>
             
            </div>
        </section>
        <!-- ALSO BUY -->
        <div style="display: flex; flex-direction: column; margin: 0 8.5%;">
            <h2>С этим товаром так же покупают</h2>
            <ProductsList :products="product.alsoBuyProducts" />
            <h2>Интересное предложение</h2>
            <ProductsList :products="product.interestingProducts" />
        </div>
        <Footer />
    </div>
</template>


<script>

import { mapState } from 'vuex'
import Breadcrumbs from '~~/components/common/Breadcrumbs.vue'
import BuyButton from '~~/components/common/BuyButton'
import ProductsList from '~~/components/common/ProductsList'

import Tab from '~~/components/tab/Tab.vue'
import Tabs from '~~/components/tab/Tabs.vue'

export default {

    components: {
      Breadcrumbs,
      BuyButton,
      ProductsList,
      Tab,
      Tabs
  }, 
  


  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentProduct', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Товар не найдена или сервер не доступен'
      })
    }
  },
  
  computed: {
    ...mapState({
      product: 'currentProduct'
    })
  },
  mounted () {

  },
  head () {
    return {
      title: this.product.pTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.pMetaDescription
        }
      ]
    }
  }
}
</script>