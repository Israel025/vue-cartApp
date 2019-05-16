<template>
  <div id="app">
    <Header></Header>
    
  </div>
</template>

<script>
import Header from "./components/common/Header";

export default {
  name: "app",
  components: {
    Header,
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
</style>
