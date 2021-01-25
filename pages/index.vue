<template>
<div>
  <section class="who-we-are">
            <div class="who-we-are__container">
                <div class="who-we-are__row">
                    <div class="lumex__video">
                        <video class="bg-container mp4 desktop" playsinline autoplay loop muted>
                            <!-- <source src="https://www.callofduty.com/cdn/mw/videos/mp/gunbench-alt-desktop-new.mp4" type="video/mp4"> -->
                             <source src="../static/assets/video/lumex_test.mov" type="video/mp4"> 
                        </video>
                    </div>
                    <div class="lumex__content">
                        <div class="content">
                            <div></div>
                            <div>
                                 <h1>{{ $t('hello') }}</h1>
                                <p class="fs28">Системы безопасности и связи</p>
                                <p class="fs80"><span class="lumex">L</span>umex</p>
                            </div>
                            <div class="bot">
                                <p class="fs24">
                                    Комплексные решения, максимально адаптированные под индивидуальные<br>
                                    потребности клиента
                                </p>
                                <div class="transform90">
                                    <span class="fs15"><span class="lumex">L</span>umex / main</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MAIN CAT -->
        <section class="lumex__main">
            <div class="cloud__block1 cat_block">
                <p class="label fs15"><span class="lumex">L</span>umex / Cloudcalls</p>
                <h3 class="h_title fs42">Облачная АТС - <br>
                    сервис телефонии<br>
                     для Вашего бизнеса</h3>
                <p>
                    Объединяем телефонные номера в одну сеть. Контроль телефонных звонков через личный кабинет. Интеграция с 1с, Битрикс24 и другими CRM системами. Звонок с сайта, SMS сообщения и другие необходимые функции для современных задач
                </p>
            </div>

            <div class="cloud__block2 cat_block">
                <div class="title">
                    <div class="title__front dark-grey">
                        <div>
                            <!-- <p class="label fc_grey">Cloudcalls</p> -->
                            <p class="fs24">Нужно ли тратить деньги на оборудование и его настройку, когда можно заказать сервис?</p>
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div>
                            <p>Сервис облачной телефонии предусматривает оплату за аренду оборудования, использование вычислительных ресурсов и обслуживание системы.<br>
                            К каждому клиенту у нас индивидуальный подход и мы можем настроить облачную АТС именно под Ваши задачи</p>
                            <nuxt-link to="/category/telephony#t_cloud" class="secondary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cloud__block3 cat_block">
                <div class="title">
                    <div class="title__front grey">
                        <p class="label">
                            Защита от Covid-19:
                        </p>
                        <p class="fs24">
                            Камеры, которые
                            измеряют температуру,
                            детектирование наличие
                            маски и соблюдение
                            социальной дистанции
                        </p>
                    </div>
                    <div class="title__back dark-grey">
                        <div>
                            <h3 class="label fc_grey">Covid-19</h3>
                            <p class="fc_grey">
                               Для противостояния эпидемии Covid-19,  мы предлагаем  для вас решения для контроля температуры тела и детекция наличия маски в автоматическом режиме 
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

            <div class="cloud__block2 cat_block">
                <div class="title">
                    <div class="title__front dark-grey">
                        <div>
                            <p class="label fc_grey">Снижение потерь</p>
                            <p class="fs24">
                                Минимизация
                                убытков от
                                мошенничества,
                                воровства и хищений,
                                а также ошибок
                                сотрудников
                            </p>
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div>
                            <p>Видеонаблюдение и охранные системы для обеспечения максимальной безопасности жизни и вашего имущества. Контролируйте вашу собственность и бизнес из любой точки мира</p>
                            <a href="#" class="secondary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cloud__block3 cat_block">
                <div class="title">
                    <div class="title__front yellow">
                        <p class="label fc_dark">
                            Видеоаналитика для бизнеса 
                        </p>
                        <p class="fs24">
                            Контроль кассовых
                            операций, счетчик
                            объектов, детектор
                            нахождения на
                            рабочем месте,
                            счетчик посетителей
                        </p>
                    </div>
                    <div class="title__back">
                        <div>
                            <h3 class="label">Контроль кассовых операций</h3>
                            <p>
                               Умное видеонаблюдение, обеспечивающий контроль кассовых операций, минимизирует убытки в розничной торговле. Содействует решениям конфликтных ситуаций с покупателями и персоналом
                            </p>
                            <nuxt-link to="/category/video_surveillance#v_smart" class="primary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cloud__block2 cat_block">
                <div class="title">
                    <div class="title__front yellow">
                        <div>
                            <p class="label fc_dark">Облачное видеонаблюдение</p>
                            <p class="fs24 fc_dark">
                                Сервис,
                                предоставляющий
                                доступ к вашим
                                камерам и архиву из
                                любой точки мира
                            </p>
                        </div>
                    </div>
                    <div class="title__back dark-grey">
                        <div>
                            <p class="fc_white">Используйте сервис облачного видеонаблюдения для удаленного доступа к камерам видеонаблюдения в реальном времени, а также доступ к архиву.<br>
                             Удаленное хранение арпхива позволит повысить уровень безопасности объекта.
                             </p>
                              <nuxt-link to="/category/video_surveillance#v_cloud" class="primary_button">
                                <svg class="btn_svg">
                                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                </svg>
                              </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cloud__block4 cat_block">

                <h3 class="h_title fs42">Корпоративная связь<br>
                    для крупных предприятий</h3>
                <p class="fc_grey">
                    Коробочная версия виртуальной АТС или
                    аппаратные IP-АТС. Полное сопровождение
                    под ключ
                </p>
            </div>
        </section>
        <!-- MAIN CAT -->

        <!-- MOBILE CATEGORY -->
        <section class="lumex__main_mobile">
            <div class="cloud__block1 ">
                <p class="label fs15"><span class="lumex">L</span>umex / Cloudcalls</p>
                <h3 class="h_title fs42">Облачная АТС - <br>
                    сервис телефонии<br>
                     для Вашего бизнеса</h3>
            </div>
            <div class="blocks_horizont">
                <div class="blocks_scroll">
                    <div class="blocks_row">

                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div>
                                        <p class="label fc_white">Защита от Covid-19:</p>
                                        <p class="fs24 fc_white">   
                                            Камеры, которые
                                            измеряют температуру,
                                            детектирование наличие
                                            маски и соблюдение
                                            социальной дистанции
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front grey">
                                    <div>
                                        <p class="label fc_white">Снижение потерь</p>
                                        <p class="fs24 fc_white">  
                                            Минимизация
                                            убытков от
                                            мошенничества,
                                            воровства и хищений,
                                            а также ошибок
                                            сотрудников
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div>
                                        <p class="label fc_white"> Видеоаналитика для бизнеса </p>
                                        <p class="fs24 fc_white">   
                                            Контроль кассовых
                                            операций, счетчик
                                            объектов, детектор
                                            нахождения на
                                            рабочем месте,
                                            счетчик посетителей
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blocks_horizont">
                <div class="blocks_scroll">
                    <div class="blocks_row short">

                        <div class="cloud__block">
                            <div class="title">
                                <div class="title__front yellow">
                                    <div>
                                        <p class="label">Cloudcalls</p>
                                        <p class="fs24">Нужно ли тратить деньги на оборудование и его настройку, когда можно использовать сервис?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front yellow">
                                    <div>
                                    <p class="label">
                                       Облачное видеонаблюдение
                                    </p>
                                    <p class="fs24">     
                                        Сервис,
                                        предоставляющий
                                        доступ к вашим
                                        камерам и архиву из
                                        любой точки мира
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

            <div class="cloud__block4 ">

                <h3 class="h_title fs42">Корпоративная связь <br>
                   для крупных предприятий</h3>
                <p class="fc_grey">
                    Коробочная версия виртуальной АТС или аппаратные IP-АТС. Полное сопровождение под ключ
                </p>
            </div>
        </section>
         <!-- MOBILE CATEGORY -->

        <!-- CLOUDCALLS -->
        <section class="cloud__calls-main">
            <div class="our_products">
                <div class="card_wrapper mop">
                    <div class="left fl">
                        <h3 class="h_title fs42">Решения по телефонии для Вашего бизнеса	</h3>
                        <p class="text fc_grey">
                            Современные решения на базе аппаратных и программных IP-АТС. Построение контакт-центров,
                            запись телефонных разговоров. Объединение филиалов компании в одну систему. Реализация IPАТС для интернет-магазинов и диспетчерских служб такси.
                        </p>
                        <p class="text fc_grey" style="margin-top:20px">
                            Интеграция телефонии с 1C, CRM-системами, базами данных.
                        </p>
                    </div>
                    <div class="right">
                        <div class="product_card txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/cloud-7.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">Облачная АТС</p>
                                <p class="fc_grey">
                                    Сервис, объединяющий телефонные номера компании в одну сеть,
                                    получайте весь функционал IP-АТС, не покупая дорогостоящее оборудование
                                </p>
                            </div>
                            <div class="card-button_container">
                               
                                <nuxt-link to="/category/telephony#t_cloud" class="primary_button">
                                    <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="product_card three prod_grey txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/cloud-7.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">Виртуальная IP-АТС</p>
                                <p>
                                    Коробочная версия программной IP-АТС. Масштабируемое,
                                    гибкое, настраиваемое решение на базе серверного оборудования, и операционной
                                    системы Linux
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link to="/category/telephony#t_ip" class="primary_button">
                                    <svg class="btn_svg">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="product_card  prod_grey txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/ukraine.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">Аппаратная IP-АТС</p>
                                <p>
                                    Специализированное оборудование, с предустановленным ПО от
                                    мировых производителей - Panasonic, Cisco, Avaya и т.д
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link to="/category/telephony#t_hardware" class="primary_button">
                                    <svg class="btn_svg">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- OUR PRODUCTS COLUMNS -->
            <div class="our_products col">
                <div class="card_wrapper mop">
                    <div class="left fl">
                        <h3 class="h_title fs42">Видеонаблюдение</h3>
                        <div class="text">
                            <!-- <p class="fc_grey">
                                Решения по безопасности, видеоаналитики. Контроль персонала, кассовых операций и другая автоматизация с помощью камер видеонаблюдения.
                            </p> -->
                        </div>
                    </div>
                    <div class="right">
                        <div class="product_card  txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/ukraine.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">Аппаратное видеонаблюдение</p>
                                <p class="fc_grey">
                                    Классическая система, включающая в себя камеры,
                                    видеорегистратор, накопитель. Предлагаем решения IP, HD-TVI, HD-CVI от известных
                                    брендов, таких как Hikvision, Dahua, Trassir
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link to="/category/video_surveillance#v_ip" class="primary_button">
                                    <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="product_card three prod_grey txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/ukraine.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">Умное видеонаблюдение</p>
                                <p>
                                    Профессиональные решения для производства, бизнеса и
                                    других структур - включает нейро-аналитику, детекцию лиц, контроль кассовых
                                    операций, определение автомобильных номеров и т.д
                                </p>
                            </div>
                            <div class="card-button_container">
                                 <nuxt-link to="/category/video_surveillance#v_smart" class="primary_button">
                                    <svg class="btn_svg">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                 </nuxt-link>
                            </div>
                        </div>
                        <div class="product_card  prod_grey txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/cloud-7.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">Облачное видеонаблюдение</p>
                                <p>
                                    Сервис позволяющий архивировать данные с ваших
                                    камер наблюдения и предоставлять доступ к архиву и камерам в реальном времени из
                                    любой точки мира
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link to="/category/video_surveillance#v_cloud" class="primary_button">
                                    <svg class="btn_svg">
                                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                    </svg>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SLIDER -->
        <section class="lumex_partners-wrapper"> 
            <div class="slider-wrapper">
                <p class="partners_text label"><span class="lumex">L</span>umex/ Partners</p>
                <div class="carousel-wrapper">
                       <Slider />
                </div>
            </div>   
        </section>
        <!-- SLIDER -->

        <!-- ABOUT US -->
        <section class="lumex_team lumex_team2 joc">
            <div class="team_left main">
                <div>
                    <p class="label txt3"><span class="lumex">L</span>umex / Service</p>
                    <h3 class="h_title fs42 txt3">Сервисный центр</h3>
                    <p class="txt3">
                        Мы имеем свой сервис, что позволяет оперативно проводить ремонт базовых блоков АТС, плат расширения, блоков питания, системных телефонов, IP-телефонов и другого сетевого оборудования.   
                    </p>
                    <p class="txt3">
                        Возможность предоставления оборудования на подмену, на время ремонта - позволяет Вам не нести финансовые потери, в случае простаивания бизнеса без связи, на время ремонта АТС 
                    </p>
                    <p class="txt3">
                        Если у вас нет возможности снять и привезти АТС к нам в сервис, то наши специалисты смогут выехать и провести диагностику на объекте.
                    </p>
                    <p class="txt3">
                        Гарантия на ремонт - 6 месяцев
                    </p>
                </div>
            </div>
            <div class="team_right srvc txt3">
                <a href="" class="primary_button vertical-button">
                    <span>Service</span>
                    <svg>
                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor">
                        </path>
                    </svg>
                </a>
            </div>
        </section>
        <!-- ABOUT US -->
</div>
</template>

<style scoped>
    
</style>

<script>
    
  export default {
    layout: 'lumex',

    head: {
        title: 'Lumex - системы безопасности и связи',
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Интеграция сиcтем безопасности и связи. Аппаратные и облачные решения для бизнеса. Сервисное обслуживание систем и проектов.'
        }
        ],
    },
    

    mounted () {
        

        // GSAP
        const tl = gsap.timeline();

        tl.from(".lumex__content", {duration: 2,   x: 1500});
        tl.from(".content",{duration:2, opacity:0, y:200, stagger: 0.25});
        gsap.from(".lumex__video", {duration: 2, scale: 0.3,  x: -1500});


    

        const MoP = gsap.timeline({
        scrollTrigger: {
            trigger: ".mop",
            start: "top bottom"
        }
        })
        MoP.from(".fl", {duration:.5, opacity:0, x: -400})
        MoP.from(".txt2", {duration:1, opacity:0, y: 100,stagger: 0.25})


        const JoC = gsap.timeline({
        scrollTrigger: {
            trigger: ".joc",
            start: "top bottom"
        }
        })
        JoC.from(".txt3", {duration:1, opacity:0, y: 100,stagger: 0.25})

        // const mmTl = gsap.timeline({
        //     paused: true
        // });

        // mmTl.from(".nav_dropdown",{duration:.5, opacity:0, y: gsap.utils.random(-100, 100, true), ease: Power3.easeOut});
        // mmTl.to(".nav_dropdown",{duration:.5, opacity:0, y: 0, ease: Power3.easeOut});

       
        // Q/A CARDS 
        const catBlck = gsap.timeline({
        scrollTrigger: {
            trigger: ".cat_block", 
            start: "top bottom"
        }
        })

        catBlck.from(".cat_block",{duration:1, opacity:0, y:200, stagger:0.5});


        document.querySelectorAll(".cat_block").forEach(function (f) {
        const qa = gsap.timeline({
            defaults: { duration: 1 },
            paused: true,
        });
        var tf = f.querySelector(".title__front");
        var tfd = f.querySelector(".title__front div");
        var tb = f.querySelector(".title__back");
        var tbd = f.querySelector(".title__back div");
        qa.to(tf, { duration: 0.5, width: "100%" })
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

    }
    
  }


</script>
