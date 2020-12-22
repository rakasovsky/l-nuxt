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
                        <span ><nuxt-link to="contact"> г.Харьков, ул.Сумская 26</nuxt-link></span> 
                    </p>
                    <p>
                        <span><a href="tel://+380 57 714-3074"> +380 57 714-3074</a></span> 
                        <span><a href="mailto:info@lumex.in.ua"> info@lumex.in.ua</a></span> 
                    </p>
                </div>
            </div>
            <nuxt-link to="contact"><div class="button"><svg class="arrow" enable-background="new 0 0 21 14" viewBox="0 0 21 14"><path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path></svg></div></nuxt-link>
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
                <a href="index.html" class="mob_logo"><img src="static/assets/img/lumex_logo.svg" alt=""></a>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a href="index.html" class="mob_logo-drp"><img src="static/assets/img/lumex_logo_white.svg" alt=""></a>
                            <li class="m_li">Телефония<div>▾</div>
                                <ul class="dropdown_container_mobile">
                                    <li><a href="telephony.html">Телефония</a></li>
                                    <a href="telephony.html#t_cloud"><li class="list_trigger" data-card="cloud_tel">Облачная телефония</li></a>
                                    <a href="telephony.html#t_ip"><li class="list_trigger" data-card="ip_tel">Виртуальная АТС</li></a>
                                    <a href="telephony.html#t_hardware"><li class="list_trigger" data-card="analog_tel">Аппаратные IP-АТС</li></a>
                                    <a href="telephony.html#t_service"><li class="list_trigger" data-card="analog_tel">Сервисный центр</li></a>
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
                            <li class="m_li"><a href="catalog.html">Каталог</a></li>
                            <li class="m_li"><a href="contacts.html">Контакты</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    <!-- HEADER -->
    </div>
</template>