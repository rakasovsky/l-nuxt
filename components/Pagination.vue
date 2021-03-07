<template>
    <div id="app" v-cloak>
        <h2><a target="_blank" href="https://www.npmjs.com/package/vue-pagination-2">Vue Pagination 2</a></h2>
        <p>Selected page: {{page}}</p>
        <pagination :records="10000" v-model="page" :per-page="100" @paginate="callback">
        </pagination>
    </div>
</template>

<script>
 import {Pagination} from 'vue-pagination-2'
export default {
   components: {
       Pagination,
   },
   data: {
    page: 45
  },
  methods: {
    callback: function(page) {
      console.log(`Page ${page} was selected. Do something about it`);
    }
  }
}
</script>