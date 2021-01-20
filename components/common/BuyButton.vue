<template>
  <div v-if="product">
    <button
      class="buy"
      v-if="!isProductAdded"
      @click.prevent="buyClickHandler"
    >
      Купить
    </button>
    <a
      class="added"
      v-else
      href="#"
      @click.prevent="addedClickHandler"
    >
      Товар в корзине
    </a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      products: state => state.cart.products
    }),
    isProductAdded () {
      return this.products.find(p => p.id === this.product.id)
    }
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
      removeProduct: 'cart/removeProduct'
    }),
    buyClickHandler () {
      this.addProduct(this.product)
    },
    addedClickHandler () {
      this.removeProduct(this.product.id)
    }
  }
}
</script>

<style scoped>
    .buy {
        background-color: yellow; 
        border: none;
        color: #000;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .added {
        text-decoration: none;
        border-bottom: 2px dotted;
    }
</style>