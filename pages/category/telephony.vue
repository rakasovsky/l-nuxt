<template>
    <div class="antiowerflow_container">     
    <Header />  
    <section class="category">
        <div class="seo">
            <h1>Облачная атс, виртуальная атс,  ip атс, ip-телефония,айпи телефония, мини атс</h1>
            <h2>Индивидуальная настройка Asterisk</h2>
            <h2>АТС Panasonic</h2>
        </div>
        <div class="category_container">
            <div class="category_cover lumex__content">

            </div>
            <div class="category_text lumex__video">
                <div class="cloud__block4">
                    <h3 class="h_title fs42">{{ $t('tel_h')}}</h3>
                    <p class="fs24">
                        {{ $t('tel_top')}}                   
                    </p>
                    <ul style="margin-top: 20px;" class="category-list">
                        <li><span class="checkmark"></span> {{ $t('tel_top_li1')}} </li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li2')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li3')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li4')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li5')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li6')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li7')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li8')}}</li>
                        <li><span class="checkmark"></span> {{ $t('tel_top_li9')}}</li>
                    </ul>
                </div>
                <a href="" class="primary_button vertical-button">
                    <span>{{ $t('l_res')}}</span>
                </a>
                <div class="transform90">
                    <span class="fs15">{{ $t('l_res2')}}</span>
                </div>
            </div>
        </div>
    </section>


    <section class="lumex_team joc" id="t_cloud">
        <div class="team_left">
            <div>
                <p class="label txt3"><span class="lumex">L</span>umex / Cloudcalls</p>
                <h3 class="h_title fs42 txt3">{{ $t('tel_h2')}}</h3>
                <p class="txt3 mb10">
                  {{ $t('tel_top_p1')}}
                </p>
                <p  class="txt3 mb10">
                     {{ $t('tel_top_p2')}}
                </p>
                <p  class="txt3">
                   {{ $t('tel_top_p3')}}
                </p>
            </div>
        </div>
        <div class="team_right cloud_img txt3">
            <a href="" class="primary_button vertical-button">
                <span>{{ $t('tel_h2')}}</span>
                <svg>
                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor">
                    </path>
                </svg>
            </a>
        </div>
    </section> 

    <section class="category_diogram category_diogram2 joc2" id="t_ip">
        <div class="diogram_left">
            <div class="cloud__block4 jt">
                <p class="label txt3"><span class="lumex">L</span>umex / Asterisk <span class="lumex">*</span></p>
                <h3 class="h_title fs42 txt3">{{ $t('tel_h3')}}<br>
                    {{ $t('tel_h3_1')}}</h3>
                <p class="txt3 mb10">
                     {{ $t('tel_top_p4')}}   
                </p>
                <p class="txt3" style="margin-bottom: 20px;">
                   {{ $t('tel_top_p5')}}
                </p>
                <h3 class="fs20 txt3" style="margin-bottom: 20px;"> {{ $t('tel_top_p6')}}</h3>

                <p class="txt3 mb10"><b> {{ $t('tel_top_p7')}}</b> -  {{ $t('tel_top_p7_2')}}</p>
                <p class="txt3 mb10"><b> {{ $t('tel_top_p8')}}</b> {{ $t('tel_top_p8_2')}}</p> 
                <p class="txt3 mb10"><b> {{ $t('tel_top_p9')}}</b> -  {{ $t('tel_top_p9_2')}}</p>   
                <p class="txt3" style="margin-bottom: 20px;"><b> {{ $t('tel_top_p10')}}</b> -  {{ $t('tel_top_p10_2')}}</p>
                <ul class="category-list jt">
                    <li class="txt3"><span class="checkmark"></span>{{ $t('tel_ip_li1')}}</li>
                    <li class="txt3"><span class="checkmark"></span>{{ $t('tel_ip_li2')}}</li>
                    <li class="txt3"><span class="checkmark"></span>{{ $t('tel_ip_li3')}}</li>
                    <li class="txt3"><span class="checkmark"></span>{{ $t('tel_ip_li4')}}</li>
                    <li class="txt3"><span class="checkmark"></span>{{ $t('tel_ip_li5')}}</li>
                    <li class="txt3"><span class="checkmark"></span>{{ $t('tel_ip_li6')}}</li>
                </ul>
            </div>
        </div>
        <div class="diogram_right jt">
            <section class="atc_img-wrapper">
                <div class="atc_img-container">
                    <p class="label fs24 fc_grey">{{ $t('tel_var_1')}}</p>
                    <img src="~/static/assets/img/category/tel/gxp1610-min.png" alt="">
                </div>
                <div class="atc_img-container">
                    <p class="label fs24 fc_grey">{{ $t('tel_var_2')}}</p>
                    <img src="~/static/assets/img/category/tel/gxp2160-min.png" alt="">
                </div>
                <div class="atc_img-container">
                    <p class="label fs24 fc_grey">{{ $t('tel_var_3')}}</p>
                    <img src="~/static/assets/img/category/tel/gxv3380-min.png" alt="">
                </div>
                <div class="atc_img-container">
                    <p class="label fs24 fc_grey">{{ $t('tel_var_4')}}</p>
                    <img src="~/static/assets/img/category/tel/dp722-min.png" alt="">
                </div>
                <div class="atc_img-container">
                    <p class="label fs24 fc_grey">{{ $t('tel_var_5')}}</p>
                    <img src="~/static/assets/img/category/tel/softphone-min.png" alt="">
                </div>
                <div class="atc_img-container">
                    <p class="label fs24 fc_grey">{{ $t('tel_var_6')}}</p>
                    <img src="~/static/assets/img/category/tel/voip-fxs-min.png" alt="">
                </div>
            </section>
        </div>
    </section>


    <section class="lumex_team joc" id="t_hardware">
        <div class="team_left">
            <div>
                <p class="label "><span class="lumex">L</span>umex / IP-АТС</p>
                <h3 class="h_title fs42 ">{{ $t('tel_ip_atc1')}}</h3>
                <p class="mb10">
                    {{ $t('tel_ip_atc2')}}
                </p>
                <p class="">
                  {{ $t('tel_ip_atc3')}}
                </p>
            </div>
        </div>
        <div class="team_right">
            <a href="" class="primary_button vertical-button">
                <span>{{ $t('tel_ip_atc1')}}</span>
                <svg>
                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor">
                    </path>
                </svg>
            </a>
        </div>
    </section> 

    <!-- TABLE -->
    <section class="tel_table-wrapper">
        <div class="text">
            <h3 class="h_title fs42 ">{{ $t('tel_table_h')}}<br>{{ $t('tel_table_h1')}}</h3>
        </div>
        <div class="atс_container">
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th class="col">{{ $t('tel_table_col1')}}</th>
                    <th class="col">{{ $t('tel_table_col2')}}</th>
                    <th class="col">{{ $t('tel_table_col3')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th class="row">{{ $t('tel_table_row1')}}</th>
                    <td>-</td>
                    <td>{{ $t('l_from')}} 300 $</td>
                    <td>{{ $t('l_from')}} 500 $</td>
                </tr>
            
                <tr>
                    <th class="row">{{ $t('tel_table_row2')}}</th>
                    <td>-</td>
                    <td>{{ $t('l_from')}} 600 $</td>
                    <td>{{ $t('l_from')}} 300 $</td>
                </tr>
            
                <tr>
                    <th class="row">{{ $t('tel_table_row3')}}</th>
                    <td>+</td>
                    <td>+ <br>
                        ({{ $t('l_c1')}})</td>
                    <td>+ <br>
                      {{ $t('l_c2')}}
                        </td>
                </tr>
            
                <tr>
                    <th class="row">{{ $t('tel_table_row4')}}</th>
                    <td>+</td>
                    <td>+</td>
                    <td>
                        {{ $t('l_c5')}}
                    </td>
                </tr>
                <tr>
                    <th class="row">{{ $t('tel_table_row5')}}</th>
                    <td>+ <br> ({{ $t('l_c5')}})</td>
                    <td>+ <br> ({{ $t('l_c4')}})</td>
                    <td>+ <br> ({{ $t('l_c4')}})</td>
                </tr>
                <tr>
                    <th class="row">{{ $t('tel_table_row6')}}</th>
                    <td>+</td>
                    <td>+ (20 {{ $t('l_usd')}})</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th class="row">{{ $t('tel_table_row7')}}</th>
                    <td>+</td>
                    <td>+</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th class="row">{{ $t('tel_table_row8')}}</th>
                    <td>{{ $t('l_from')}} 600 {{ $t('l_uah')}}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
        </div> 
    </section>

    <section class="lumex_team lumex_team2" id="t_service">
        <div class="team_left">
            <div>
                <p class="label"><span class="lumex">L</span>umex / Service</p>
                <h3 class="h_title fs42 ">{{ $t('tel_service_h')}}</h3>
                <p class="mb10">
                    {{ $t('tel_service_p1')}}
                </p>
                <p class="mb10">
                    {{ $t('tel_service_p2')}}
                </p>
                <p class="mb10">
                    {{ $t('tel_service_p3')}}
                </p>
                <p class="">
                    {{ $t('tel_service_p4')}}
                </p>
            </div>
        </div>
        <div class="team_right service_img">
            <a href="" class="primary_button vertical-button">
                <span>{{ $t('l_service')}}</span>
                <svg>
                    <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor">
                    </path>
                </svg>
            </a>
        </div>
    </section>
    <Footer />
    </div>
</template>

<script>
export default {
    head: {
        title: 'Lumex.in.ua | Харьков | Купить IP АТС  Виртуальная АТС GSM-шлюз',
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Современные коммуникационные технологии | продажа и обслуживание оборудование для цифровых и аналоговых атс | GSM-шлюзы | АТС Panasonic'
        },
        {
            hid: 'keywords',
            name: 'keywords',
            content: 'Облачная телефония, Виртуальная АТС, GSM-шлюз, IP-АТС, продажа, установка, сервис'
          }
        ],
    },
    mounted () {

        const tl = gsap.timeline();

        tl.from(".lumex__content", {duration: 2,   x: 1500});
        
        gsap.from(".lumex__video", {duration: 2, scale: 0.3,  x: -1500});


            const JoC = gsap.timeline({
            scrollTrigger: {
                trigger: ".joc",
                start: "top bottom"
            }
            })
            JoC.from(".txt3", {duration:1, opacity:0, y: 100,stagger: 0.25})

            const JoC2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".joc2",
                start: "top bottom"
            }
            })
            JoC2.from(".jt", {duration:1, opacity:0, y: 100,stagger: 0.25})
    }
}
</script>

<style scoped>

.lumex_team .team_left div {
    max-width: 100%;
}
</style>