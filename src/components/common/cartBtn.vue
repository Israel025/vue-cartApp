<template>
  <Button class="btn">
    <slot></slot>
    <img src="../../assets/images/cart.svg" alt="Cart Icon" class="crtIco">
  </Button>  
</template>
<script>
export default {
  
}
// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })
</script>
<style scoped>
.btn{
  background: rgb(6, 153, 13);
  cursor: pointer;
  outline: none;
  border: .04em solid rgb(231, 231, 231);
  border-radius: 9px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
}
.crtIco{
  height: 40px;
  width: 40px;
}
.btn > p{
  margin: auto;
  font-weight: bold;
}
</style>

