<template>
  <div class="antiowerflow_container">
    <Header />
    <section class="category">
      <div class="seo">
        <h1>Организация систем контроля доступа в Харькове</h1>
        <h2>Продажа СКУД ( сетевые, биометрические, турникеты, автономные)</h2>
        <h2>Интеграция систем контроля и управления доступом</h2>
      </div>
      <div class="category_container">
        <div class="category_cover skud_cover lumex__content"></div>
        <div class="category_text lumex__video">
          <div class="cloud__block4 sks">
            <h3 class="h_title fs42">{{ $t("tsivr1") }}</h3>
            <p class="fs24">
              {{ $t("tsivr1_1") }}
            </p>
            <p class="fs24">
              {{ $t("tsivr1_2") }}
            </p>
          </div>
          <a href="" class="primary_button vertical-button">
            <span>IVR</span>
          </a>
          <div class="transform90">
            <span class="fs15">Lumex IVR</span>
          </div>
        </div>
      </div>
    </section>

    <section class="lumex_team joc" id="s_cov19">
      <div class="team_left">
        <div>
          <p class="label txt3">
            <span class="lumex">L</span>umex / Interactive voice response
          </p>
          <p class="fs24 txt3">{{ $t("tsivr2") }}</p>
          <ul style="margin-top: 10px" class="category-list">
            <li><span class="checkmark"></span>{{ $t("tsivr2_1") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr2_2") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr2_3") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr2_4") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr2_5") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr2_6") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr2_7") }}</li>
          </ul>
        </div>
      </div>
      <div class="team_right cov19_skud cctv txt3">
        <a href="" class="primary_button vertical-button">
          <span>Asterisk</span>
          <svg>
            <path
              d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </section>

    <section class="category_diogram category_diogram2 joc2" id="s_auto">
      <div class="diogram_left">
        <div class="cloud__block4 jt">
          <p class="label txt3"><span class="lumex">L</span>umex / Asterisk</p>
          <h3 class="h_title fs24 txt3">{{ $t("tsivr3") }}</h3>
          <ul style="margin-top: 10px" class="category-list">
            <li><span class="checkmark"></span>{{ $t("tsivr3_1") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr3_2") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr3_3") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr3_4") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr3_5") }}</li>
            <li><span class="checkmark"></span>{{ $t("tsivr3_6") }}</li>
          </ul>
        </div>
      </div>
      <div class="diogram_right cat_block-img auto_skud np_fix txt3">
        <a href="" class="primary_button vertical-button">
          <span>What We Do</span>
          <svg>
            <path
              d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </section>
    <section class="lumex_team joc" id="s_cov19">
      <div class="team_left">
        <div>
          <p class="label txt3"><span class="lumex">L</span>umex / Asterisk</p>
          <h3 class="h_title fs24 txt3">{{ $t("tsivr4") }}</h3>
          <p class="txt3">{{ $t("tsivr4_1") }}</p>
          <p class="txt3">{{ $t("tsivr4_2") }}</p>
        </div>
      </div>
      <div class="team_right cov19_skud cctv txt3">
        <a href="" class="primary_button vertical-button">
          <span>Asterisk</span>
          <svg>
            <path
              d="m14.4 1-.7.7 5 4.8h-18.7v1h18.8l-5.2 5.5.8.7 6.3-6.7z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </section>
 
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
.txt3 {
  margin-bottom: 12px;
}
</style>