<template>
    <client-only>
       <VueSlickCarousel :arrows="true" :dots="true">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </VueSlickCarousel>
    </client-only>    
</template>

// <script>
//   import VueSlickCarousel from 'vue-slick-carousel'
//   // optional style for arrows & dots
//   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

//   export default {
//     name: 'MyComponent',
//     components: { VueSlickCarousel },
//   }
// </script>