<template>
    <div>
    <Header />
    <Nuxt />
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


        const catBlck = gsap.timeline({
        scrollTrigger: {
            trigger: ".cat_block", 
            start: "top bottom"
        }
        })

        catBlck.from(".cat_block",{duration:1, opacity:0, y:200, stagger:0.5});



        // For catalog page
        const catBlck2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".cat_block2", 
            start: "top bottom"
        }
        })

        catBlck2.from(".cat_block2",{duration:1, opacity:0, y:200, stagger:0.5});
        // For catalog page

        const lbl = gsap.timeline({
        scrollTrigger: {
            trigger: ".lbl",
            start: "top bottom"
        }
        })

        lbl.from(".lbl",{duration:1, opacity:0, x:-100}),
        lbl.from(".txt", {duration:1, opacity:0, y: 100,stagger: 0.25})


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

        // GSAP
    }
}
</script>