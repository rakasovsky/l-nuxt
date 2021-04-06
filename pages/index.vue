<template>
<div>
  <div class="seo">
      <h1>Ip АТС</h1>
      <h2>Видеонаблюдение</h2>
      <h2>Системы контроля доступа</h2>
      <h2>Сервисный центр</h2>
  </div>
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
                                <p class="fs28">{{ $t('top_title')}}</p>
                                <p class="fs80"><span class="lumex">L</span>umex</p>
                            </div>
                            <div class="bot">
                                <p class="fs24">
                                     {{ $t('top_title2')}}
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
                <h3 class="h_title fs42">
                     {{ $t('main_top')}}<br>
                     {{ $t('main_top1_1')}}<br>
                     {{ $t('main_top1_2')}}</h3>
                <p>
                    {{ $t('main_top2')}}
                </p>
            </div>

            <div class="cloud__block2 cat_block">
                <div class="title">
                    <div class="title__front dark-grey">
                        <div>
                            <!-- <p class="label fc_grey">Cloudcalls</p> -->
                            <p class="fs24">
                                   {{ $t('main_top3')}}
                            </p>
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div>
                            <p>
                                {{ $t('main_top3_1')}}<br>
                                {{ $t('main_top3_2')}}
                            </p>
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
                             {{ $t('main_top4')}}
                        </p>
                        <p class="fs24">
                            {{ $t('main_top4_1')}}
                        </p>
                    </div>
                    <div class="title__back dark-grey">
                        <div>
                            <h3 class="label fc_grey">Covid-19</h3>
                            <p class="fc_grey">
                                 {{ $t('main_top4_2')}}
                            </p>
                            <a href="/category/scud" class="primary_button">
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
                            <p class="label fc_grey">{{ $t('main_top5')}}</p>
                            <p class="fs24">
                                 {{ $t('main_top5_1')}}
                            </p>
                        </div>
                    </div>
                    <div class="title__back yellow">
                        <div>
                            <p>
                                {{ $t('main_top5_2')}}
                            </p>
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
                            {{ $t('main_top6')}}
                        </p>
                        <p class="fs24">
                            {{ $t('main_top6_1')}}
                        </p>
                    </div>
                    <div class="title__back">
                        <div>
                            <h3 class="label">{{ $t('main_top7')}}</h3>
                            <p>
                                {{ $t('main_top7_1')}}
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
                            <p class="label fc_dark">
                                {{ $t('main_top8')}}
                            </p>
                            <p class="fs24 fc_dark">
                               {{ $t('main_top8_1')}}
                            </p>
                        </div>
                    </div>
                    <div class="title__back dark-grey">
                        <div>
                            <p class="fc_white">{{ $t('main_top8_2')}}<br>
                             {{ $t('main_top8_3')}}
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

                <h3 class="h_title fs42">{{ $t('main_top9')}}<br>
                    {{ $t('main_top9_1')}}</h3>
                <p class="fc_grey">
                   {{ $t('main_top9_2')}}
                </p>
            </div>
        </section>
        <!-- MAIN CAT -->

        <!-- MOBILE CATEGORY -->
        <section class="lumex__main_mobile">
            <div class="cloud__block1 ">
                <p class="label fs15"><span class="lumex">L</span>umex / Cloudcalls</p>
                <h3 class="h_title fs42">{{ $t('main_top')}} <br>
                    {{ $t('main_top1_1')}}<br>
                     {{ $t('main_top1_2')}}</h3>
            </div>
            <div class="blocks_horizont">
                <div class="blocks_scroll">
                    <div class="blocks_row">

                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div>
                                        <p class="label fc_white">{{ $t('main_top4')}}</p>
                                        <p class="fs24 fc_white">   
                                            {{ $t('main_top4_1')}}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front grey">
                                    <div>
                                        <p class="label fc_white">{{ $t('main_top5')}}</p>
                                        <p class="fs24 fc_white">  
                                            {{ $t('main_top5_1')}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front dark-grey">
                                    <div>
                                        <p class="label fc_white"> {{ $t('main_top6')}} </p>
                                        <p class="fs24 fc_white">   
                                            {{ $t('main_top6_1')}}
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
                                        <p class="fs24">{{ $t('main_top3')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="cloud__block ">
                            <div class="title">
                                <div class="title__front yellow">
                                    <div>
                                    <p class="label">
                                       {{ $t('main_top8')}}
                                    </p>
                                    <p class="fs24">     
                                        {{ $t('main_top8_1')}}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

            <div class="cloud__block4 ">

                <h3 class="h_title fs42">{{ $t('main_top9')}}<br>
                   {{ $t('main_top9_1')}}</h3>
                <p class="fc_white">
                   {{ $t('main_top9_2')}}
                </p>
            </div>
        </section>
         <!-- MOBILE CATEGORY -->

        <!-- CLOUDCALLS -->
        <section class="cloud__calls-main">
            <div class="our_products">
                <div class="card_wrapper mop">
                    <div class="left fl">
                        <h3 class="h_title fs42">{{ $t('main_atc1')}}</h3>
                        <p class="text fc_grey">
                            {{ $t('main_atc2')}}
                        </p>
                        <p class="text fc_grey" style="margin-top:20px">
                           {{ $t('main_atc3')}}
                        </p>
                    </div>
                    <div class="right">
                        <div class="product_card txt2">
                            <div class="card-img">
                                <div></div>
                                <img src="~/static/assets/img/cloud-7.jpg" alt="">
                            </div>
                            <div class="card-content">
                                <p class="c_title fs24">
                                    {{ $t('main_atc4')}}
                                </p>
                                <p class="fc_white">
                                    {{ $t('main_atc5')}}
                                </p>
                            </div>
                            <div class="card-button_container">
                               
                                <nuxt-link :to="localePath('/category/telephony#t_cloud')" class="primary_button">
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
                                <p class="c_title fs24">{{ $t('main_atc6')}}</p>
                                <p>
                                   {{ $t('main_atc7')}}
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link :to="localePath('/category/telephony#t_ip')" class="primary_button">
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
                                <p class="c_title fs24">{{ $t('main_atc8')}}</p>
                                <p>
                                    {{ $t('main_atc9')}}
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link nuxt-link :to="localePath('/category/telephony#t_hardware')" class="primary_button">
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
                        <h3 class="h_title fs42">
                             {{ $t('main_sur')}}
                        </h3>
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
                                <p class="c_title fs24"> {{ $t('main_sur1')}}</p>
                                <p class="fc_white">
                                     {{ $t('main_sur2')}}
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link :to="localePath('/category/video_surveillance#v_ip')" class="primary_button">
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
                                <p class="c_title fs24">{{ $t('main_sur3')}}</p>
                                <p>
                                    {{ $t('main_sur4')}}
                                </p>
                            </div>
                            <div class="card-button_container">
                                 <nuxt-link :to="localePath('/category/video_surveillance#v_smart')" class="primary_button">
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
                                <p class="c_title fs24">{{ $t('main_sur5')}}</p>
                                <p>
                                   {{ $t('main_sur6')}}
                                </p>
                            </div>
                            <div class="card-button_container">
                                <nuxt-link :to="localePath('/category/video_surveillance#v_cloud')" class="primary_button">
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
                    <h3 class="h_title fs42 txt3">{{$t('main_service')}}</h3>
                    <p class="txt3">
                        {{$t('main_service1')}}
                    </p>
                    <p class="txt3">
                        {{$t('main_service2')}}
                    </p>
                    <p class="txt3">
                        {{$t('main_service3')}}
                    </p>
                    <p class="txt3">
                       {{$t('main_service4')}}
                    </p>
                </div>
            </div>
            <div class="team_right srvc txt3">
                <div class="primary_button vertical-button">
                    <span>Service</span>
                    <svg>
                        <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor">
                        </path>
                    </svg>
                </div>
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
        },
        {
            hid: 'keywords',
            name: 'keywords',
            content: 'Видеонаблюдение, Системы контроля доступа, Телефония, Ip атс, Asterisk, GSM шлюз,виртуальная атс, ip-телефония, мини атс, колл центр, ip атс, айпи телефония'
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
