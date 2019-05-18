<template>
  <div id="app">
    <TopMenu>
      <router-link to="/cart">
        <cartBtn class="btn">
          <p>Cart</p>
        </cartBtn>
      </router-link>
      
    </TopMenu>

    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from "./components/common/Header";
import cartBtn from "./components/common/cartBtn";

export default {
  name: "app",
  components: {
    TopMenu,
    cartBtn,
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


</style>
