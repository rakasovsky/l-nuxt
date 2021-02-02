<template>
  <div class="block">
    <client-only>
      <a
        :href="'#'"
        class="cartButton"
        :disabled="!productsQuantity > 0 "
        @click.prevent="onClickHandler"
      >
        <div v-if="productsQuantity > 0" class="quantity">
          {{ productsQuantity }}
        </div>
        <!-- <CartSvg :class="$style.svg1" /> -->
        <!-- <button class="svg1">C</button> -->
        <img class="svg_cart" src="@/assets/svg/cart.svg">
      </a>
    </client-only>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import CartSvg from '@/assets/svg/shopping-cart.svg?inline'
export default {
  components: {
    // CartSvg
  },
  computed: {
    ...mapState({
      products: state => state.cart.products
    }),
    productsQuantity () {
      if (this.products) {
        return this.products.length
      } else return 0
    }
  },
  methods: {
    onClickHandler () {
      this.$modal.show('customer-cart')
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  // position: relative;
    // top: 150px;
    // z-index: 500;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 50px;
    height: 100%;
    width: 50px;
    background: #5a5959;  
}
.cartButton {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 45px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.svg_cart {
  width: 50%;
  height: 50%;
}
.svg1 {
  margin-right: 3px;
  width: 40px;
  height: 40px;
  background-color: rebeccapurple;
  fill: #000;
  // noselect
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
}
.quantity {
    position: absolute;
    right: 15px;
    top: 5px;
    border-radius: 2px;
    background-color: #ff0000;
    width: 15px;
    color: #fff;
    height: 16px;
    text-align: center;
    line-height: 20px;
    font-size: 0.7rem;
    font-weight: 600;
  // noselect
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
}
</style>