<template>
  <div>
    <Lister :products="smartphones"/>   
  </div>
</template>

<script>
import Lister from "./common/ProductsLister";
export default {
  components:{
    Lister,
  },

  computed:{
    smartphones() {
      return this.$store.state.smartphones;
    },

  },

}
</script>

<style>

</style>
