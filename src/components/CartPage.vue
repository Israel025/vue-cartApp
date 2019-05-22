<template>
  <div class="cart-box">
    <ul class="cart-listing">
      <li v-for="(item, index) in getCartItems" :key="index" class="eachItem">
        <div>
          <img :src="item.image" alt class="product-image">
        </div>

        <div>
          <h3 class="item-name">{{ item.name }}</h3>
        </div>

        <div class="costings">
          <p class="cst">
            <span>Price:</span>
            <span>$ {{ item.price }}</span>
          </p>
          <p class="cst">
            <span>Qty:</span>
            <span>
              <pre>   x   2{{ }}</pre>
            </span>
          </p>
          <p class="item-total cst">
            <span>Total:</span>
            <span>$ {{item.price}}.00</span>
          </p>
        </div>

        <div class="add-rem">
          <p class="inStck"><span>In Stock: {{item.stockQty}} unit(s)</span></p>
          <p><button class="remove-btn" @click="remove(index)">Remove Item</button></p>
          <p class="cst">
            <button class="reduce-btn">reduce -</button>
            <button class="add-btn">add +</button>
          </p>
        </div>
      </li>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>You currently have no item in the cart...</h3>
      <router-link to="./">Clik here... to go shopping</router-link>
    </div>
    <h3 class="grand-total" v-if="hasProduct()">Grand Total: $ {{ totalPrice() }}.00</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCartItems"])
  },

  methods: {
    ...mapActions(["removeItem"]),
    hasProduct() {
      return this.getCartItems.length > 0;
    },
    totalPrice() {
      return this.getCartItems.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    remove(index) {
      this.removeItem(index);
    }
  }
};
</script>

<style scoped>
.cart-box {
  width: 100%;
  max-width: 950px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  box-sizing: border-box;
  padding: 0.5em;
}

.cart-listing {
  padding: 0;
}

.eachItem {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 2fr;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  margin: 1em 0;
}

.eachItem * {
  place-self: center;
}
.product-image {
  grid-column: 1/2;
  width: 50%;
}

.item-name {
  box-sizing: border-box;
}

.item-total {
  font-size: 1em;
  font-weight: bold;
  border-radius: 3px;
  box-shadow: 5px 7px 10px #2e2b2b;
}

.costings {
  display: initial;
  flex-flow: column wrap;
  place-self: stretch;
  margin-left: 2.8em;
}

.cst, .incr-dec{
  display: flex;
  width: 100%;
  align-self: flex-start;
  justify-content: space-between;
}

.add-rem {
  display: initial;
  flex-flow: column wrap;
  place-self: stretch;
  justify-content: center;
  margin: auto;
}

.remove-btn {
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  font-size: 1em;
  background-color: #e91919fb;
  color: #fff;
  cursor: pointer;
  padding: .5em;
}

.inStck{
  border-radius: 3px;
  box-shadow: 5px 7px 10px #db821b91;
}

.grand-total {
  font-size: 1.7em;
  font-weight: bold;
  align-self: flex-end;
  box-shadow: 0px 0px 25px #1ada1abe;
}

.reduce-btn{
  margin-right: .5em;
  cursor: pointer;
  border-radius: 3px;
  background-color: #f0850cfb;
  color: #fff;
  border: 0;padding: .2em;
}

.add-btn{
  margin-left: .5em;
  cursor: pointer;
  border-radius: 3px;
  background-color: #1f9707fb;
  color: #fff;
  border: 0;padding: .2em;  
}

.checkout-message {
  font-size: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
