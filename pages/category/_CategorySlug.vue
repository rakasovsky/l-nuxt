<template>
    <div>
    <Header />
    <div class="top"></div>
    <Breadcrumbs />
    <SubcategoriesList :subcategories="subcategories" />
    <Footer />
    </div>
</template>

<script>
import SubcategoriesList from "~~/components/common/SubcategoriesList"
import Breadcrumbs from '~~/components/common/Breadcrumbs.vue'
import { mapState } from "vuex"
export default {
    head: {
        title: 'Lumex - каталог товаров',
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Home page description2'
        }
        ],
    },
    components: {
         SubcategoriesList,
         Breadcrumbs,
    },
    async asyncData ({ app, route, params, error, store }) {
        try {
         await store.dispatch('getSubcategoriesList', {route})
        } catch (err) {
        console.log(err)
        return error({
            statusCode: 404,
            message: 'Подкатегории не найдены или сервер не доступен'
        })
        }
    },
    computed: {
    ...mapState({
      subcategories: 'subcategoriesList'
    })
    },
    mounted () {
        const catBlck2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".cat_block2",
            start: "top bottom"
        }
        })
        catBlck2.from(".cat_block2",{duration:1, opacity:0, y:200, stagger:0.5});
        document.querySelectorAll(".cat_block2").forEach(function (f) {
        const qa = gsap.timeline({
        defaults: { duration: 1 },
        paused: true,
        });
        var tf = f.querySelector(".title__front");
        var tfd = f.querySelector(".title__front div");
        var tb = f.querySelector(".title__back");
        var tbd = f.querySelector(".title__back div");
        qa.to(tf, { duration: 0.5, y: 20, opacity: 1 })
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