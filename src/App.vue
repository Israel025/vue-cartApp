<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
    
  </div>
</template>

<script>
import MyHeader from "./components/common/Header";
import CartBtn from "./components/common/cartBtn";

export default {
  name: "app",
  components: {
    MyHeader
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
  color: #2c3e50;
}

.btn{
  color: #ffffff;
  }
</style>
