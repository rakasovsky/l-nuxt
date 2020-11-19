<template>
    <div>
    <div>
    <div class="sticky">
        <div class="sticky_container">
            <nuxt-link to="/">
                <img src="../static/assets/img/lumex_logo.svg" alt="lumex logo">
            </nuxt-link>
            <div class="contacts">
                <p>
                    <span >+380 66 108-2211</span>
                    <span >г.Харьков, ул.Сумская 26</span>
                </p>
                <p>
                    <span >+380 57 714-3074</span>
                    <span >info@lumex.in.ua</span>
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
                        <nuxt-link to="category">Телефония</nuxt-link><span>▾</span>
                        <!-- DROPDOWN -->
                        <div class="nav_dropdown">
                            <div class="dropdown_container">
                                <div class="left drp-list">
                                    <nuxt-link to="/category">Телефония</nuxt-link>
                                    <ul>
                                        <li class="list_trigger" data-card="cloud_tel">Облачная атс</li>
                                        <li class="list_trigger" data-card="ip_tel">Ip атс</li>
                                        <li class="list_trigger" data-card="analog_tel">Аналоговая атс</li>
                                    </ul>
                                </div>
                                <div class="right">
                                    <div class="cards_wrapper">
                                        <div class="inner_container">
                                            <div class="product_card drp_card list_trigger" data-card="cloud_tel">
                                                <div class="card-img">
                                                    <div></div>
                                                    <img src="../static/assets/img/ukraine.jpg" alt="">
                                                </div>
                                                <div class="card-content">
                                                    <p class="c_title fs24">Lumex</p>
                                                    <p class="fc_grey">
                                                        Мы делаем сложные решения простыми. Надежность и удобство облачных технологий позволяют создать современную и многофункциональную АТС
                                                    </p>
                                                </div>
                                                <div class="card-button_container">
                                                    <a href="#" class="primary_button">
                                                        <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                                            <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product_card drp_card list_trigger " data-card="ip_tel">
                                                <div class="card-img">
                                                    <div></div>
                                                    <img src="../static/assets/img/ukraine.jpg" alt="">
                                                </div>
                                                <div class="card-content">
                                                    <p class="c_title fs24">Lumex</p>
                                                    <p class="fc_grey">
                                                        Мы делаем сложные решения простыми. Надежность и удобство облачных технологий позволяют создать современную и многофункциональную АТС
                                                    </p>
                                                </div>
                                                <div class="card-button_container">
                                                    <a href="#" class="primary_button">
                                                        <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                                            <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product_card drp_card list_trigger" data-card="analog_tel">
                                                <div class="card-img">
                                                    <div></div>
                                                    <img src="../static/assets/img/ukraine.jpg" alt="">
                                                </div>
                                                <div class="card-content">
                                                    <p class="c_title fs24">Lumex / Cloudcalls</p>
                                                    <p class="fc_grey">
                                                        Мы делаем сложные решения простыми. Надежность и удобство облачных технологий позволяют создать современную и многофункциональную АТС
                                                    </p>
                                                </div>
                                                <div class="card-button_container">
                                                    <a href="#" class="primary_button">
                                                        <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                                            <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- DROPDOWN -->
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-trigger">
                        <a href="category.html">Видеонаблюдение</a><span>▾</span>
                        <!-- DROPDOWN -->
                        <div class="nav_dropdown">
                            <div class="dropdown_container">
                                <div class="left drp-list">
                                    <a href="category.html" class="">Видеонаблюдение</a>
                                    <ul>
                                        <li class="list_trigger" data-card="video_1">Облачная атс</li>
                                        <li class="list_trigger" data-card="video_2">Ip атс</li>
                                        <li class="list_trigger" data-card="video_3">Аналоговая атс</li>
                                    </ul>
                                </div>
                                <div class="right">
                                    <div class="cards_wrapper">
                                        <div class="inner_container">
                                            <div class="product_card drp_card list_trigger" data-card="video_1">
                                                <div class="card-img">
                                                    <div></div>
                                                    <img src="../static/assets/img/ukraine.jpg" alt="">
                                                </div>
                                                <div class="card-content">
                                                    <p class="c_title fs24">Cloudcalls</p>
                                                    <p class="fc_grey">
                                                        Мы делаем сложные решения простыми. Надежность и удобство облачных технологий позволяют создать современную и многофункциональную АТС
                                                    </p>
                                                </div>
                                                <div class="card-button_container">
                                                    <a href="#" class="primary_button">
                                                        <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                                            <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product_card drp_card list_trigger" data-card="video_2">
                                                <div class="card-img">
                                                    <div></div>
                                                    <img src="../static/assets/img/ukraine.jpg" alt="">
                                                </div>
                                                <div class="card-content">
                                                    <p class="c_title fs24">Cloudcalls</p>
                                                    <p class="fc_grey">
                                                        Мы делаем сложные решения простыми. Надежность и удобство облачных технологий позволяют создать современную и многофункциональную АТС
                                                    </p>
                                                </div>
                                                <div class="card-button_container">
                                                    <a href="#" class="primary_button">
                                                        <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                                            <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product_card drp_card list_trigger" data-card="video_3">
                                                <div class="card-img">
                                                    <div></div>
                                                    <img src="../static/assets/img/ukraine.jpg" alt="">
                                                </div>
                                                <div class="card-content">
                                                    <p class="c_title fs24">Lumex / Cloudcalls</p>
                                                    <p class="fc_grey">
                                                        Мы делаем сложные решения простыми. Надежность и удобство облачных технологий позволяют создать современную и многофункциональную АТС
                                                    </p>
                                                </div>
                                                <div class="card-button_container">
                                                    <a href="#" class="primary_button">
                                                        <svg class="btn_svg" enable-background="new 0 0 21 14" viewBox="0 0 21 14">
                                                            <path d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- DROPDOWN -->
                    </div>
                </li>
                <li class="nav-item">
                    <a href="contacts.html" class="nav-trigger">Системы контроля доступа</a>
                </li>
            </ul>
        </nav>

        <!-- MOBILE MENU -->

        <div class="mob_menu">
            <a href="index.html" class="mob_logo"><img src="../static/assets/img/logo1.png" alt=""></a>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li class="m_li">Телефония<div>▾</div>
                            <ul class="dropdown_container_mobile">
                                <li><a href="/category.html">Телефония</a></li>
                                <li><a href="/category.html">Телефония</a></li>
                                <li><a href="/contacts.html">Телефония</a></li>
                            </ul>
                        </li>
                        <li class="m_li">Видеонаблюдение<div>▾</div>
                            <ul class="dropdown_container_mobile">
                                <li><a href="/category.html">Видеонаблюдение</a></li>
                                <li><a href="/category.html">Видеонаблюдение</a></li>
                                <li><a href="/contacts.html">Видеонаблюдение</a></li>
                            </ul>
                        </li>
                        <li class="m_li"><a href="/contacts.html">Контакты</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</div>
    <!-- HEADER -->
    </div>
</template>