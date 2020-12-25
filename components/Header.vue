<template>
    <div>
    <div>
         <div class="sticky">
            <div class="sticky_container">
                <nuxt-link to="/">
                    <img src="../static/assets/img/lumex_logo_white.svg" alt="lumex logo">
                </nuxt-link>
                <div class="contacts">
                    <p>
                        <span><a href="tel://0661082211">+380 66 108-2211</a></span> 
                        <span ><nuxt-link to="/contact"> г.Харьков, ул.Сумская 26</nuxt-link></span> 
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
                            <nuxt-link to="/category/telephony"><span>Телефония</span><span>▾</span></nuxt-link>
                            <!-- DROPDOWN -->
                            <ol class="sub-menu scroll-t">
                                <nuxt-link to="/category/telephony#t_cloud"><li class="menu-item">Облачная телефония</li></nuxt-link>
                                <nuxt-link to="/category/telephony#t_ip"><li class="menu-item">Виртуальная АТС</li></nuxt-link>
                                <nuxt-link to="/category/telephony#t_hardware"><li class="menu-item">Аппаратные IP-АТС</li></nuxt-link>
                                <nuxt-link to="/category/telephony#t_service"><li class="menu-item">Сервисный центр</li></nuxt-link>
                              </ol>
                            <!-- DROPDOWN -->
                        </div>
                    </li>
                  <li class="nav-item">
                    <div class="nav-trigger">
                        <span>Видеонаблюдение</span><span>▾</span>
                        <!-- DROPDOWN -->
                        <ol class="sub-menu scroll-t">
                            <li class="menu-item"><a href="telephony.html#t_cloud">IP-видеонаблюдение</a></li>
                            <li class="menu-item"><a href="telephony.html#t_ip">HD-видеонаблюдение (HD-TVI, HD-CVI, AHD)</a></li>
                            <li class="menu-item"><a href="telephony.html#t_hardware">Умное видеонаблюдение</a></li>
                            <li class="menu-item"><a href="telephony.html#t_hardware">Облачное видеонаблюдение</a></li>
                            <li class="menu-item"> <a href="telephony.html#t_service">Сервисный центр</a></li>
                          </ol>    
                        <!-- DROPDOWN -->
                    </div>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-trigger">Системы контроля доступа</a>
                  </li>
                  <li>
                    <nuxt-link to="/catalog">Каталог</nuxt-link>
                  </li>
                </ul>
            </nav> 
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
                            <nuxt-link to="/category/telephony"><span>Телефония</span><span>▾</span></nuxt-link>
                            <!-- DROPDOWN -->
                            <ol class="sub-menu">
                                <nuxt-link to="/category/telephony#t_cloud"><li class="menu-item">Облачная телефония</li></nuxt-link>
                                <nuxt-link to="/category/telephony#t_ip"><li class="menu-item">Виртуальная АТС</li></nuxt-link>
                                <nuxt-link to="/category/telephony#t_hardware"><li class="menu-item">Аппаратные IP-АТС</li></nuxt-link>
                                <nuxt-link to="/category/telephony#t_service"><li class="menu-item">Сервисный центр</li></nuxt-link>
                              </ol>
                            <!-- DROPDOWN -->
                        </div>
                    </li>
                  <li class="nav-item">
                    <div class="nav-trigger">
                        <span>Видеонаблюдение</span><span>▾</span>
                        <!-- DROPDOWN -->
                        <ol class="sub-menu">
                            <li class="menu-item"><a href="telephony.html#t_cloud">IP-видеонаблюдение</a></li>
                            <li class="menu-item"><a href="telephony.html#t_ip">HD-видеонаблюдение (HD-TVI, HD-CVI, AHD)</a></li>
                            <li class="menu-item"><a href="telephony.html#t_hardware">Умное видеонаблюдение</a></li>
                            <li class="menu-item"><a href="telephony.html#t_hardware">Облачное видеонаблюдение</a></li>
                            <li class="menu-item"> <a href="telephony.html#t_service">Сервисный центр</a></li>
                          </ol>    
                        <!-- DROPDOWN -->
                    </div>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-trigger">Системы контроля доступа</a>
                  </li>
                  <li>
                    <nuxt-link to="/catalog">Каталог</nuxt-link>
                  </li>
                </ul>
            </nav> 
           
            
            <!-- MOBILE MENU -->

            <div class="mob_menu">
                <a href="index.html" class="mob_logo"><img src="~/static/assets/img/lumex_logo.svg" alt=""></a>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <nuxt-link to="index.html" class="mob_logo-drp"><img src="~/static/assets/img/lumex_logo_white.svg" alt=""></nuxt-link>
                            <li class="m_li">Телефония<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                       <nuxt-link to="/category/telephony"><li class="menu-item">Телефония</li></nuxt-link>
                                       <nuxt-link to="/category/telephony#t_cloud"><li class="menu-item">Облачная телефония</li></nuxt-link>
                                       <nuxt-link to="/category/telephony#t_ip"><li class="menu-item">Виртуальная АТС</li></nuxt-link>
                                       <nuxt-link to="/category/telephony#t_hardware"><li class="menu-item">Аппаратные IP-АТС</li></nuxt-link>
                                       <nuxt-link to="/category/telephony#t_service"><li class="menu-item">Сервисный центр</li></nuxt-link>
                                </ul>
                            </li>
                            <li class="m_li">Видеонаблюдение<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                    <a href="#"><li class="list_trigger" data-card="video_1">IP-видеонаблюдение</li></a>
                                    <a href="#"><li class="list_trigger" data-card="video_2">HD-видеонаблюдение (HD-TVI, HD-CVI, AHD)</li></a>
                                    <a href="#"><li class="list_trigger" data-card="video_3">Умное видеонаблюдение</li></a>
                                    <a href="#"><li class="list_trigger" data-card="video_4">Облачное видеонаблюдение</li></a>
                                    <a href="#"><li class="list_trigger" data-card="video_4">Сервисный центр</li></a>
                                </ul>
                            </li>
                            <li class="m_li"><a href="#">Системы контроля доступа</a></li>
                            <li class="m_li"><nuxt-link to="catalog.html">Каталог</nuxt-link></li>
                            <li class="m_li"><nuxt-link to="contacts.html">Контакты</nuxt-link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    <!-- HEADER -->
    </div>
</template>


<script>
export default {
    


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


    // GSAP 

    const mtl = gsap.timeline({
        //  paused: true
    })
    mtl.to(".sticky-nav",{
        duration: 2, opacity: 1, ease: "linear", 
        scrollTrigger: { 
            trigger:".header-desk__nav", 
            start: "300",
            markers: true,
            toggleActions: "play play reverse "
        }
    })

  
  }
  
  initAccordion(document.getElementById("menu"));
}
}
</script>