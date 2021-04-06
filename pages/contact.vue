<template>
    <div>
    <Header />
        <div class="seo">
            <h1>Люмекс Сервис | Продажа и обслуживание видеонаблюдения | атс | скуд</h1>
            <h2>Сервисный центр</h2>
            <h2>Точка выдачи</h2>
        </div>
        <div class="top">
        </div>
        <div class="contact_container">
            <div class="wrapper">
                <div class="contact_form  lumex__video">
                    <h3 class="h_title fs42 fc_white">{{$t('contact_page1')}}</h3>
                    <p class="label fc_grey">{{$t('contact_page2')}}</p>
                    <div class="alert_msg">

                    </div>
                    <Form />
                </div>
                <div class="contact_map lumex__content">
                    <div id="map" style="width: 50vw; height: 100%; margin-left: 15%;">
                        <!-- <GMap
                        ref="gMap"
                        language="ru"
                        style="height: 100%"
                        :center="{lat: locations[0].lat, lng: locations[0].lng}"
                        :options="{fullscreenControl: false, styles: mapStyle, mapTypeControl: false}"
                        :zoom="17"
                        >
                        <GMapMarker
                            v-for="location in locations"
                            :key="location.id"
                            :position="{lat: location.lat, lng: location.lng}"
                            :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
                            @click="currentLocation = location"
                        >
                            <GMapInfoWindow :options="{maxWidth: 200}">
                            <code>
                              <p>Lumex</p>
                              <p>Время работы:</p>
                              <p>9:00 - 18:00</p>
                              <p>Суббота, воскресенье - выходной</p>
                            </code>
                            </GMapInfoWindow>
                        </GMapMarker>
                     
                        </GMap> -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.7343920955113!2d36.23160531571502!3d49.99758897941549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e5bf0e8cb1%3A0xd59c30fffef7c545!2z0LLRg9C70LjRhtGPINCh0YPQvNGB0YzQutCwLCAyNiwg0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1suk!2sua!4v1615919982234!5m2!1suk!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="lumex_info content">
                        <h4 class="title fs24"><span class="lumex">L</span>umex</h4>
                        <p>Харьков</p>
                        <p>Сумская 26</p>
                        <p><a href="tell://+380577143074">+380 57 714-3074</a></p>
                        <p><a href="tell://0661082211">+380 66 108-2211</a></p>
                        <p><a href="mailto:info@lumex.in.ua">info@lumex.in.ua</a></p>
                        <p><a href="mailto:support@lumex.in.ua">support@lumex.in.ua</a></p>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </div>
</template>


<script>
export default {
    head: {
        title: 'Lumex.in.ua | Харьков | Купить IP АТС  Видеонаблюдение Ремонт',
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Офис фирмы Люмекс | продажа и обслуживание оборудования атс | видеонаблюдение | системы контроля доступа'
        },
        {
            hid: 'keywords',
            name: 'keywords',
            content: 'Облачная телефония, Виртуальная АТС, GSM-шлюз, IP-АТС, продажа, установка, сервис'
          }
        ],
    },

    data() {
        return {
            currentLocation: {},
            locations: [
                {lat: 49.997589,
                 lng:36.233797}
            ],
            pins: {
            selected:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACf0lEQVRIiZ3UP4gdVRQG8N9Zdh+WIUYRCTILi0gqEQ1hLTKwIFaCxRKXFEEIIliltLK1sREbLQIaZGMRCRGbEHUKUQkiCouIBPdVIZVICMsyb9ljMfPiZHbe7sOvGO6ce+/3nT/3nHAItsvRYshVYgOryTOB5G5wG5uoiqquZ3HEbPKlZ0N8gFcwyuHDe/ievFRUk1/nFhiXoxfwFZ7u73WFOuu/sV5U9bf98wsDnq+k7JLv4jLWkieCx1O+jA/JB4mUx1NeG5ejFw+NoMm5a3itNd3DBdwqqnq/F6WUZ0JcwUobzQ9YK6p6dzCCkKfxaja/Nd4sqvpmnxyKqrZcTX5Kzqe835pPa2o2nKLkHEbNS8mruNknHkjBbXxCSrmI8zMFQqw2pSPYHPJ8KJLgc0I0GT8zUwAnO2XZOoq849oWps6c7O4s9k52PJ7ZIgeQ7TcPcByswZ3O8VPzCgSniIUmSfHXTIHgm6nnITbG5ehAn/QxLkew0TE90mx9gi+TnaZ5vJGUcwTwfPJ2m6IaXxwm8HtwK5poHgs+3S5HZevlI9gul6YjZTM41r6gnzXN9hAHKjkuR6v4DlPWneSz4Aq5RezjOZwjLxLH2vLuE68vV/WNowQWko9xcXi0pRAP38x0HdxIsb7cG92zpulT+A1PDu0P4H7Kl5aryZ/9jcFXUlT1PfJSspcdezs523X6LzXeGyKfKdAgrpKX+8R9JNfx0UyW2QKMy9FxfK03Xzr4g1wrqsnd/yXQiCytED/ixDQ5bWEf4OxyNfnlsPtHdmpRTe5gPfmnY94JLhxFPpdAg6yCd4LdEHt4l7g+z825R2Y7l97CCbxfVPXePPf+Beaf7x2BXz2wAAAAAElFTkSuQmCC",
            notSelected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACf0lEQVRIiZ3UP4gdVRQG8N9Zdh+WIUYRCTILi0gqEQ1hLTKwIFaCxRKXFEEIIliltLK1sREbLQIaZGMRCRGbEHUKUQkiCouIBPdVIZVICMsyb9ljMfPiZHbe7sOvGO6ce+/3nT/3nHAItsvRYshVYgOryTOB5G5wG5uoiqquZ3HEbPKlZ0N8gFcwyuHDe/ievFRUk1/nFhiXoxfwFZ7u73WFOuu/sV5U9bf98wsDnq+k7JLv4jLWkieCx1O+jA/JB4mUx1NeG5ejFw+NoMm5a3itNd3DBdwqqnq/F6WUZ0JcwUobzQ9YK6p6dzCCkKfxaja/Nd4sqvpmnxyKqrZcTX5Kzqe835pPa2o2nKLkHEbNS8mruNknHkjBbXxCSrmI8zMFQqw2pSPYHPJ8KJLgc0I0GT8zUwAnO2XZOoq849oWps6c7O4s9k52PJ7ZIgeQ7TcPcByswZ3O8VPzCgSniIUmSfHXTIHgm6nnITbG5ehAn/QxLkew0TE90mx9gi+TnaZ5vJGUcwTwfPJ2m6IaXxwm8HtwK5poHgs+3S5HZevlI9gul6YjZTM41r6gnzXN9hAHKjkuR6v4DlPWneSz4Aq5RezjOZwjLxLH2vLuE68vV/WNowQWko9xcXi0pRAP38x0HdxIsb7cG92zpulT+A1PDu0P4H7Kl5aryZ/9jcFXUlT1PfJSspcdezs523X6LzXeGyKfKdAgrpKX+8R9JNfx0UyW2QKMy9FxfK03Xzr4g1wrqsnd/yXQiCytED/ixDQ5bWEf4OxyNfnlsPtHdmpRTe5gPfmnY94JLhxFPpdAg6yCd4LdEHt4l7g+z825R2Y7l97CCbxfVPXePPf+Beaf7x2BXz2wAAAAAElFTkSuQmCC"
            },
            mapStyle: [
                        {
                            elementType: 'geometry',
                            stylers: [
                                {
                                    color: 'black'
                                }
                            ]
                        },
                        {
                            elementType: 'labels.icon',
                            stylers: [
                                {
                                    visibility: 'off'
                                }
                            ]
                        },
                        {
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: '#616161'
                                }
                            ]
                        },
                        {
                            elementType: 'labels.text.stroke',
                            stylers: [
                                {
                                    color: '#f5f5f5'
                                }
                            ]
                        },
                        {
                            featureType: 'administrative.land_parcel',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: '#bdbdbd'
                                }
                            ]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    color: '#eeeeee'
                                }
                            ]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: '#757575'
                                }
                            ]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    // color: '#e5e5e5'
                                    color: '#ffe029'
                                }
                            ]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: 'black'
                                }
                            ]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    // color: '#ffe029'
                                    color: '#a8a8a8'
                                }
                            ]
                        },
                        {
                            featureType: 'road.arterial',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: 'black'
                                }
                            ]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    // color: '#ffe029'
                                    color: '#a8a8a8'
                                }
                            ]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: '#616161'
                                }
                            ]
                        },
                        {
                            featureType: 'road.local',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: 'black'
                                }
                            ]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    color: '#e5e5e5'
                                }
                            ]
                        },
                        {
                            featureType: 'transit.station',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    color: '#eeeeee'
                                }
                            ]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [
                                {
                                    color: '#c9c9c9'
                                }
                            ]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    color: '#9e9e9e'
                                }
                            ]
                        }
            ],
      
        }
    },

      mounted() {
        // GSAP
        const tl = gsap.timeline();

        tl.from(".lumex__content", {duration: 2,   x: 1500});
        tl.from(".content",{duration:2, opacity:0, y:200, stagger: 0.25});
        gsap.from(".lumex__video", {duration: 2, scale: 0.3,  x: -1500});

        
      }
}
</script>

<style>
    .GMap__Wrapper {
        height: 100%  !important;
    }
</style>