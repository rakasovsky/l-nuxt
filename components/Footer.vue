<template>

<!-- FOOTER -->
<footer>
    <div class="footer_top">
        <a href="#" class="footer-logo"><img src="../static/assets/img/lumex_logo.svg" alt=""></a>
        <div class="footer_container">
            <div class="footer_about">
                <p class="label fs24">О нас</p>
                <p>
                    Облачные и аппаратные решения в области безопасности и связи. Сервис и обслуживание.
                </p>
            </div>
            <div class="footer_contacts">
                <p class="label fs24">Контакты</p>
                <p><nuxt-link to="/contact">г.Харьков, ул.Сумская 26</nuxt-link></p>
                <p><a href="tel://380577143074">+380 57 714-3074</a></p>
                <p><a href="tel://0661082211">+380 66 108-2211</a></p>
                <a href="mailto:info@lumex.in.ua"> info@lumex.in.ua</a>
                <a href="mailto:support@lumex.in.ua"> support@lumex.in.ua</a>
            </div>
            <div class="footer_about">
                <p class="label fs24">Работая с нами</p>
                <p>
                    Вы получаете: высокое качество обслуживание от специалистов. Гарантию. Быструю обработку заказов. Оборудование на подмену. Свяжитесь с нами сейчас!
                </p>
            </div>
        </div>
    </div>
    <div class="footer_bottom">
        <div class="copyright">
            <p><span class="copyright_year"></span> <span class="lumex">L</span>umex.</p> 
            <p>All Rights Reserved</p>
        </div>
    </div>
</footer>
 <!-- FOOTER -->

</template>


<script>
export default {

    mounted () {
        const copyright = document.querySelector('.copyright_year')

        const newCopyright = new Date();
        const newCopyYear = newCopyright.getFullYear();
        copyright.textContent = `${newCopyYear}`
        
    }
}
</script>