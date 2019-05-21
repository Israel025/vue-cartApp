<template>
  <div id="app">
    <TopMenu>
      <router-link to="/cart">
        <cartBtn>
          <p>Cart</p>
          <span class="counter" v-if="cartNotEmpty()">
           {{cartItems.length}}
          </span>
        </cartBtn>
      </router-link>
    </TopMenu>

    <router-view></router-view>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import TopMenu from "./components/common/Header";
import cartBtn from "./components/common/cartBtn";

export default {

  name: "app",
  
  components: {
    TopMenu,
    cartBtn
  },

  methods:{
    // ...mapActions({

    // }),

    cartNotEmpty() {
      return this.cartItems.length > 0;
    },

  },

  computed:{
    ...mapGetters({
      cartItems: "getCartItems",

    }),

  }
};
</script>

<style >
</style>

<style>

@import "./assets/css/normalize.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
}

.counter {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
