<template>
  <div class="wrapper">
    <div v-for="product in products" :key="product.id">
      <nuxt-link :to="`/product/${product.pSlug}`">
        <p>{{ product.pName }}</p>
        <img
          class="image"
        />
      </nuxt-link>
      <p>Price {{ product.pPrice }}</p>
      <BuyButton :product="product" />
    </div>
  </div>
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'
export default {
  components: {
    BuyButton
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  justify-content: space-between;
}
.wrapper div {
    /* margin: 1em; */
}
.wrapper div p { 
    max-width: 270px;
    height: 35px;
}
.image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>