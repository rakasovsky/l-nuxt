<template>
  <div class="breadcrumbs" v-if="breadcrumbs && breadcrumbs.length > 0">
    <ul>
      <li class="fs15" v-for="cr in breadcrumbs" :key="cr.url">
        <n-link :to="cr.url">
          {{ cr.title }}
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      breadcrumbs: 'breadcrumbs'
    })
  }
}
</script>

<style  scoped>
  .breadcrumbs {
        position: absolute;
        top: 140px;
        left: 8.5%;
        z-index: 50;
  }
   .breadcrumbs ul {
     display: flex;
   }
   .breadcrumbs ul li {
      display: inline;
   }
   .breadcrumbs ul li::after {
      content: '/\00a0';
      padding: 8px;
      color: black;
   }
   .breadcrumbs ul li:last-child:after {
    content: '';
   }
   .breadcrumbs ul li a {
     color: #a8a8a8;
      text-decoration: none;
   }
    .breadcrumbs ul li a:hover {
        color: #333;
    }
</style>