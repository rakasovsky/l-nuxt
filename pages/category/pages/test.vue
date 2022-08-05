<template>
  <div class="antiowerflow_container">
    <Header />
    <div class="seo">
      <h1>Организация систем контроля доступа в Харькове</h1>
      <h2>Продажа СКУД ( сетевые, биометрические, турникеты, автономные)</h2>
      <h2>Интеграция систем контроля и управления доступом</h2>
    </div>
    <div class="bp_page_wrapper">
      <section class="bp_head">
        <div>
          <h3 class="h_title fs42">{{ $t("tssks1") }}</h3>
          <p class="fs24">
            {{ $t("tssks1_1") }}
          </p>
          <p class="fs24">
            {{ $t("tssks1_2") }}
          </p>
        </div>
      </section>
      <section class="bp_container">
        <div class="wrapper">
          <img src="~/static/assets/img/cyberpunk2077.jpg" alt="" />
          <div class="article">
            <p class="fs24">
              {{ $t("tssks1_2") }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Продажа и обслуживание систем контроля доступа в Харькове",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Lumex - системы безопасности и связи: Продажа, установка и настройка видеодомофонов, турникетов и шлагбаумов, систем контроля доступа, детекция температуры тела, для борьбы с Covid-19. Готовые решения для IT-компаний, Бизнес-центров, Производственных помещений, Складов и Парковок",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Система контроля доступа, домофон, видеодомофон, турникеты, шлагбаумы, детекция температуры COV19",
      },
    ],
  },
  mounted() {
    const tl = gsap.timeline();

    tl.from(".lumex__content", { duration: 2, x: 1500 });

    gsap.from(".lumex__video", { duration: 2, scale: 0.3, x: -1500 });

    const JoC = gsap.timeline({
      scrollTrigger: {
        trigger: ".joc",
        start: "top bottom",
      },
    });
    JoC.from(".txt3", { duration: 1, opacity: 0, y: 100, stagger: 0.25 });

    const JoC2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".joc2",
        start: "top bottom",
      },
    });
    JoC2.from(".jt", { duration: 1, opacity: 0, y: 100, stagger: 0.25 });
  },
};
</script>

<style scoped>
.lumex_team .team_left div {
  max-width: 100%;
}
</style>