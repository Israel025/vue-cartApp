<template>
  <div>
    <Lister :products="notebooks" productImg="pc-img"/>   
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
      notebooks: "getNotebooks"
    }),        

  },

}
</script>

<style scoped>

</style>
