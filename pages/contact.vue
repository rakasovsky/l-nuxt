<template>
    <div>
    <Header />
        <div class="top">
        </div>
        <div class="contact_container">
            <div class="wrapper">
                <div class="contact_form  lumex__video">
                    <h3 class="h_title fs42 fc_white">Слыш, купи!</h3>
                    <p class="label fc_grey">Облачные и аппаратные решения в области безопасности и связи. Сервис и обслуживание.</p>
                    <div class="alert_msg">

                    </div>
                    <Form />
                </div>
                <div class="contact_map lumex__content">
                    <div id="map" style="width: 50vw; height: 100%; margin-left: 15%;">

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
        <script type="text/javascript">
                function initMap() {
                const myLatLng = {lat: 49.997589, lng:36.233797};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 17,
                    center: myLatLng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    styles: [
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
                });
                new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title: "Hello World!",
                });
            }
            
            </script>
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj0CTmW0SEtwx7gz6zkgokJASsemggRfE&callback=initMap" type="text/javascript"></script>
                </div>
            </div>
        </div>
    <Footer />
    </div>
</template>


<script>
export default {
      mounted() {
        // GSAP
        const tl = gsap.timeline();

        tl.from(".lumex__content", {duration: 2,   x: 1500});
        tl.from(".content",{duration:2, opacity:0, y:200, stagger: 0.25});
        gsap.from(".lumex__video", {duration: 2, scale: 0.3,  x: -1500});
      }
}
</script>