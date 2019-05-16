<template>
<div></div>
  
</template>
<script>
export default {
  
}
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
</script>
<style scoped>

</style>

