<template>
    <div>
    <div>
         <div class="sticky">
            <div class="sticky_container">
                <nuxt-link :to="localePath('/')">
                    <img src="../static/assets/img/lumex_logo_white.svg" alt="lumex logo">
                </nuxt-link>
                <div class="contacts">
                    <p>
                        <span><a href="tel://0661082211">+380 66 108-2211</a></span> 
                        <span ><nuxt-link :to="localePath('/contact')">{{ $t('contact_info')}}</nuxt-link></span> 
                    </p>
                    <p>
                        <span><a href="tel://+380 57 714-3074"> +380 57 714-3074</a></span> 
                        <span><a href="mailto:info@lumex.in.ua"> info@lumex.in.ua</a></span> 
                    </p>
                </div>
            </div>
                <nav class="header-desk__nav sticky-nav">
                <ul>
                    <li class="nav-item">
                        <div class="nav-trigger">
                            <nuxt-link :to="localePath('/category/telephony')"><span>{{ $t('telephony')}}</span><span>▾</span></nuxt-link>
                            <!-- DROPDOWN -->
                            <div class="sub-menu scroll-t new-menu">
                              <ol class="">
                                {{ $t('menu_t_cat1')}}
                                <nuxt-link :to="localePath('/category/telephony#t_cloud')"><li class="menu-item">{{ $t('menu_t1')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_ip')"><li class="menu-item">{{ $t('menu_t2')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_hardware')"><li class="menu-item">{{ $t('menu_t3')}}</li></nuxt-link>
                
                              </ol>
                            <ol class="">
                                {{ $t('menu_t_cat2')}}
                                <nuxt-link :to="localePath('/category/telephony#t_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/gsm_patch')"><li class="menu-item">{{ $t('menu_t_integation')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/asterisk_install')"><li class="menu-item">{{ $t('menu_t_install')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/sks')"><li class="menu-item">{{ $t('menu_t_sks')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/ivr')"><li class="menu-item">{{ $t('menu_t_ivr')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/mod_atc')"><li class="menu-item">{{ $t('menu_t_mod')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/protect_ipatc')"><li class="menu-item">{{ $t('menu_t_protect')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/queue')"><li class="menu-item">{{ $t('menu_t_transit')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/tech_support')"><li class="menu-item">{{ $t('menu_t_support')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/quality')"><li class="menu-item">{{ $t('menu_t_quality')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/ip_employess')"><li class="menu-item">{{ $t('menu_t_employees')}}</li></nuxt-link>
                            </ol>
                            <ol class="">
                               {{ $t('menu_t_cat3')}}
                                <nuxt-link :to="localePath('/category/telephony#t_cloud')"><li class="menu-item">{{ $t('menu_t1')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_ip')"><li class="menu-item">{{ $t('menu_t2')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_hardware')"><li class="menu-item">{{ $t('menu_t3')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                            </ol>
                            <ol class="">
                                {{ $t('menu_t_cat4')}}
                                <nuxt-link :to="localePath('/category/telephony_services/callback')"><li class="menu-item">{{ $t('menu_t_callback')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/webpanel')"><li class="menu-item">{{ $t('menu_t_dashboard')}}</li></nuxt-link>
                            </ol>
                            </div>  
                            <!-- DROPDOWN -->
                            <!-- JUST TEST -->
                        </div>
                    </li>
                  <li class="nav-item">
                    <div class="nav-trigger">
                        <nuxt-link :to="localePath('/category/video_surveillance')"><span>{{ $t('video_surveillance')}}</span><span>▾</span></nuxt-link>
                        <!-- DROPDOWN -->
                        <ol class="sub-menu scroll-t">
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_cloud')">{{ $t('menu_v1')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_smart')">{{ $t('menu_v2')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_ip')">{{ $t('menu_v3')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_hd')">{{ $t('menu_v4')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_service')">{{ $t('menu_t4')}}</nuxt-link></li>
                        </ol>    
                        <!-- DROPDOWN -->
                    </div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-trigger">
                        <nuxt-link :to="localePath('/category/skud')"><span>{{ $t('skud')}}</span><span>▾</span></nuxt-link>
                        <!-- DROPDOWN -->
                        <ol class="sub-menu scroll-t">
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_cov19')">{{ $t('m_s1')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_auto')">{{ $t('m_s2')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_net')">{{ $t('m_s3')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_bio')">{{ $t('m_s4')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_turnstile')">{{ $t('m_s5')}}</nuxt-link></li>
                          </ol>    
                        <!-- DROPDOWN -->
                    </div>
                  </li>
                  <li>
                    <!-- <nuxt-link to="/catalog">Каталог</nuxt-link> -->
                     <!-- <nuxt-link to="/under_construction">Каталог</nuxt-link> -->
                  </li>
                </ul>
            </nav> 
            <div class="lang_switcher fs20">
                 <nuxt-link
                    v-for="locale in $i18n.locales"
                    v-if="locale.code !== $i18n.locale"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
                </nuxt-link>
            </div>
            <CartButton />
            <nuxt-link to="/contact"><div class="button"><svg class="arrow" enable-background="new 0 0 21 14" viewBox="0 0 21 14"><path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path></svg></div></nuxt-link>
        </div> 
    <!-- HEADER -->
     <header>
            <p  class="header-logo">
                
            </p>
            <nav class="header-desk__nav">
                <ul>
                    <li class="nav-item">
                        <div class="nav-trigger">
                            <!-- <nuxt-link to="/category/telephony"><span>Телефония</span><span>▾</span></nuxt-link> -->
                            <nuxt-link :to="localePath('/category/telephony')"><span>{{ $t('telephony')}}</span><span>▾</span></nuxt-link>
                            <!-- DROPDOWN -->
                            <!-- <ol class="sub-menu">
                                <nuxt-link :to="localePath('/category/telephony#t_cloud')"><li class="menu-item">{{ $t('menu_t1')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_ip')"><li class="menu-item">{{ $t('menu_t2')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_hardware')"><li class="menu-item">{{ $t('menu_t3')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                            </ol> -->
                              <div class="sub-menu new-menu">
                              <ol class="">
                                {{ $t('menu_t_cat1')}}
                                <nuxt-link :to="localePath('/category/telephony#t_cloud')"><li class="menu-item">{{ $t('menu_t1')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_ip')"><li class="menu-item">{{ $t('menu_t2')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_hardware')"><li class="menu-item">{{ $t('menu_t3')}}</li></nuxt-link>
                
                              </ol>
                            <ol class="">
                                {{ $t('menu_t_cat2')}}
                                <nuxt-link :to="localePath('/category/telephony#t_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/gsm_patch')"><li class="menu-item">{{ $t('menu_t_integation')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/asterisk_install')"><li class="menu-item">{{ $t('menu_t_install')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/sks')"><li class="menu-item">{{ $t('menu_t_sks')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/ivr')"><li class="menu-item">{{ $t('menu_t_ivr')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/mod_atc')"><li class="menu-item">{{ $t('menu_t_mod')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/protect_ipatc')"><li class="menu-item">{{ $t('menu_t_protect')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/queue')"><li class="menu-item">{{ $t('menu_t_transit')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/tech_support')"><li class="menu-item">{{ $t('menu_t_support')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/quality')"><li class="menu-item">{{ $t('menu_t_quality')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/ip_employess')"><li class="menu-item">{{ $t('menu_t_employees')}}</li></nuxt-link>
                            </ol>
                            <ol class="">
                               {{ $t('menu_t_cat3')}}
                                <nuxt-link :to="localePath('/category/telephony#t_cloud')"><li class="menu-item">{{ $t('menu_t1')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_ip')"><li class="menu-item">{{ $t('menu_t2')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_hardware')"><li class="menu-item">{{ $t('menu_t3')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony#t_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                            </ol>
                            <ol class="">
                                {{ $t('menu_t_cat4')}}
                                <nuxt-link :to="localePath('/category/telephony_services/callback')"><li class="menu-item">{{ $t('menu_t_callback')}}</li></nuxt-link>
                                <nuxt-link :to="localePath('/category/telephony_services/webpanel')"><li class="menu-item">{{ $t('menu_t_dashboard')}}</li></nuxt-link>
                            </ol>
                            </div>
                            <!-- DROPDOWN -->
                        </div>
                    </li>
                  <li class="nav-item">
                    <div class="nav-trigger">
                        <nuxt-link :to="localePath('/category/video_surveillance')"><span>{{ $t('video_surveillance')}}</span><span>▾</span></nuxt-link>
                        <!-- DROPDOWN -->
                        <ol class="sub-menu">
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_cloud')">{{ $t('menu_v1')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_smart')">{{ $t('menu_v2')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_ip')">{{ $t('menu_v3')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_hd')">{{ $t('menu_v4')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/video_surveillance#v_service')">{{ $t('menu_t4')}}</nuxt-link></li>
                          </ol>    
                        <!-- DROPDOWN -->
                    </div>
                  </li>
                  <li class="nav-item">
                        <div class="nav-trigger">
                        <nuxt-link :to="localePath('/category/skud')"><span>{{ $t('skud')}}</span><span>▾</span></nuxt-link>
                        <!-- DROPDOWN -->
                        <ol class="sub-menu scroll-t">
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_cov19')">{{ $t('m_s1')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_auto')">{{ $t('m_s2')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_net')">{{ $t('m_s3')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_bio')">{{ $t('m_s4')}}</nuxt-link></li>
                            <li class="menu-item"><nuxt-link :to="localePath('/category/skud#s_turnstile')">{{ $t('m_s5')}}</nuxt-link></li>
                          </ol>    
                        <!-- DROPDOWN -->
                    </div>
                  </li>
                  <li>
                    <!-- <nuxt-link to="/catalog">Каталог</nuxt-link> -->
                    <!-- <nuxt-link to="/under_construction">Каталог</nuxt-link> -->
                  </li>
                </ul>
            </nav> 
           
            
            <!-- MOBILE MENU -->

            <div class="mob_menu">
                <nuxt-link to="/" class="mob_logo"><img src="~/static/assets/img/lumex_logo.svg" alt="Lumex logo"></nuxt-link >
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <nuxt-link to="/" class="mob_logo-drp"><img src="~/static/assets/img/lumex_logo_white.svg" alt="Lumex logo"></nuxt-link>
                            <li class="fs26">{{ $t('telephony')}}</li>
                            <li class="m_li">{{ $t('menu_t_cat1')}}<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                       <nuxt-link :to="localePath('/category/telephony')"><li class="menu-item">{{ $t('telephony')}}</li></nuxt-link>
                                       <nuxt-link :to="localePath('/category/telephony#t_cloud')"><li class="menu-item">{{ $t('menu_t1')}}</li></nuxt-link>
                                       <nuxt-link :to="localePath('/category/telephony#t_ip')"><li class="menu-item">{{ $t('menu_t2')}}</li></nuxt-link>
                                       <nuxt-link :to="localePath('/category/telephony#t_hardware')"><li class="menu-item">{{ $t('menu_t3')}}</li></nuxt-link>
                                </ul>
                            </li>
                             <li class="m_li">{{ $t('menu_t_cat2')}}<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                        <nuxt-link :to="localePath('/category/telephony#t_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/gsm_patch')"><li class="menu-item">{{ $t('menu_t_integation')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/asterisk_install')"><li class="menu-item">{{ $t('menu_t_install')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/sks')"><li class="menu-item">{{ $t('menu_t_sks')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/ivr')"><li class="menu-item">{{ $t('menu_t_ivr')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/mod_atc')"><li class="menu-item">{{ $t('menu_t_mod')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/protect_ipatc')"><li class="menu-item">{{ $t('menu_t_protect')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/queue')"><li class="menu-item">{{ $t('menu_t_transit')}}</li></nuxt-link>
                                        <nuxt-link :to="localePath('/category/telephony_services/tech_support')"><li class="menu-item">{{ $t('menu_t_support')}}</li></nuxt-link>
                                </ul>
                            </li>
                             <li class="m_li">{{ $t('menu_t_cat3')}}<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                   
                                </ul>
                            </li>
                             <li class="m_li">{{ $t('menu_t_cat4')}}<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                         <nuxt-link :to="localePath('/category/telephony_services/callback')"><li class="menu-item">{{ $t('menu_t_callback')}}</li></nuxt-link>
                                         <nuxt-link :to="localePath('/category/telephony_services/webpanel')"><li class="menu-item">{{ $t('menu_t_dashboard')}}</li></nuxt-link>
                                </ul>
                            </li>
                            <li class="m_li fs26">{{ $t('video_surveillance')}}<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                    <nuxt-link :to="localePath('/category/video_surveillance')"><li class="menu-item">{{ $t('video_surveillance')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/video_surveillance#v_cloud')"><li class="menu-item">{{ $t('menu_v1')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/video_surveillance#v_smart')"><li class="menu-item">{{ $t('menu_v2')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/video_surveillance#v_ip')"><li class="menu-item">{{ $t('menu_v3')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/video_surveillance#v_hd')"><li class="menu-item">{{ $t('menu_v4')}}</li></nuxt-link> 
                                    <nuxt-link :to="localePath('/category/video_surveillance#v_service')"><li class="menu-item">{{ $t('menu_t4')}}</li></nuxt-link>
                                </ul>
                            </li>
                            <li class="m_li fs26">{{ $t('skud')}}<div>▾</div>
                                  <ul class="dropdown_container_mobile">
                                    <nuxt-link :to="localePath('/category/skud')"><li class="menu-item">{{ $t('skud')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/skud#s_cov19')"><li class="menu-item">{{ $t('m_s1')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/skud#s_auto')"><li class="menu-item">{{ $t('m_s2')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/skud#s_net')"><li class="menu-item">{{ $t('m_s3')}}</li></nuxt-link>
                                    <nuxt-link :to="localePath('/category/skud#s_bio')"><li class="menu-item">{{ $t('m_s4')}}</li></nuxt-link> 
                                    <nuxt-link :to="localePath('/category/skud#s_turnstile')"><li class="menu-item">{{ $t('m_s5')}}</li></nuxt-link>
                                </ul>
                            </li>
                            <!-- <li class="m_li"><nuxt-link to="/catalog">Каталог</nuxt-link></li> -->
                            <li class="m_li fs26"><nuxt-link :to="localePath('/contact')">{{ $t('l_contacts')}}</nuxt-link></li>
                            <div class="lang_switcher_m fs26">
                                <nuxt-link
                                    v-for="locale in $i18n.locales"
                                    v-if="locale.code !== $i18n.locale"
                                    :key="locale.code"
                                    :to="switchLocalePath(locale.code)">
                                    {{ locale.name }}
                                </nuxt-link>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    <!-- HEADER -->
     <CustomerCartModal />
    </div>
</template>


<script>
import CartButton from '@/components/cart/CartButton'
import CustomerCartModal from '@/components/modal/CustomerCartModal.vue'

export default {
    
components: {
 CustomerCartModal
},

mounted () {

    // Mobile menu dropdown

    function initAccordion(accordionElem){
  
    //when panel is clicked, handlePanelClick is called.          
  
    function handlePanelClick(event){
        showPanel(event.currentTarget);
    }
  
  //Hide currentPanel and show new panel.  
    
    function showPanel(panel){
      //Hide current one. First time it will be null. 
       var expandedPanel = accordionElem.querySelector(".is-Open");
       if (expandedPanel){
           expandedPanel.classList.remove("is-Open");
       }
       //Show new one
       if (expandedPanel !== panel) {
        panel.classList.add("is-Open");
      }
  
    }
  
    var allPanelElems = accordionElem.querySelectorAll(".m_li");
    for (var i = 0, len = allPanelElems.length; i < len; i++){
         allPanelElems[i].addEventListener("click", handlePanelClick);
    }
  
    //By Default Show first panel
    // showPanel(allPanelElems[0])
  
  }
  
  initAccordion(document.getElementById("menu"));

  
    // GSAP 

    const mtl = gsap.timeline({
        //  paused: true
    })
    mtl.to(".sticky-nav",{
        duration: 2, display: "block", ease: "linear", 
        scrollTrigger: { 
            trigger:".header-desk__nav", 
            start: "100",
            markers: false,
            toggleActions: "play play reverse "
        }
    })
}
}
</script>

<style scoped>
    .lang_switcher {
        color:white;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 100px;
        height: 100%;
        width: 50px;
        background: #5a5959;  
    }
    .lang_switcher:hover {
        color:#ffda00;
     }
</style>