<template>
  <div>
    <Lister :products="notebooks" productImg="pc-img"/>   
  </div>
</template>

<script>
import Lister from "./common/ProductsLister";
export default {
  
  components:{
    Lister,
  },

  computed:{
    notebooks() {
      return this.$store.state.notebooks;
    },

  },

}
</script>

<style scoped>

</style>
