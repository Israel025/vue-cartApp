<template>
  <div>
    <Lister :products="smartphones"/>   
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import Lister from "./common/ProductsLister";
export default {
  
  components:{
    Lister,
  },

  computed:{
    ...mapGetters({
      smartphones: "getSmartphones"
    }),

  },

}
</script>

<style>

</style>
