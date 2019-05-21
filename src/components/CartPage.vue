<template>
  <div class="cart-box">
    <ul class="cart-listing">
      <li v-for="(item, index) in getCartItems" :key="index" class="eachItem">
        <div>
          <img :src="item.image" alt="" class="product-image">
        </div>

        <div>
          <h3 class="product-name">{{ item.name }}</h3>
        </div>

        <div>         
          <span class="product-price">Price: $ {{ item.price }},00 </span>
          <span>Qty: {{ }}</span>
          <span>Total: {{item.stockQty}} unit(s)</span>
        </div>

        <div>
          <button class="product-remove" @click="remove(index)">X</button>
          <button class="">-</button>
          <button class="">+</button>
           <span>In Stock: {{item.stockQty}} unit(s)</span>
        </div>        
      </li>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="hasProduct()">
      Grand Total: $ {{ totalPrice() }}, 00
    </h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      "getCartItems",
    ]),
  },

  methods: {
    ...mapActions([
      "removeItem",
    ]),
    hasProduct() {
      return this.getCartItems.length > 0;
    },
    totalPrice() {
      return this.getCartItems.reduce((current, next) =>
        current + next.price, 0);
    },
    remove(index) {
      this.removeItem(index);
    },
  },
};
</script>

<style scoped>

  .cart-box {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    box-sizing: border-box;
    padding: .5em;
  }

  .cart-listing {
    padding: 0;
  }

  .eachItem {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
