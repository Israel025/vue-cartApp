<template>
  <div>
    <Lister :products="allProducts" productImg="pc-img"/>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Lister from "./common/ProductsLister";

export default {
  
  components: {
    Lister
  },

  computed: {
    ...mapGetters({
      allProducts: "getAllProducts",

    }),

  }
};
</script>

<style scoped>
</style>
