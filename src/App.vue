<template>
  <div id="app">
    <TopMenu>
      <router-link to="/cart">
        <cartBtn>
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
    cartBtn
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

.btn-circle {
  width: 25px;
  height: 25px;
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
