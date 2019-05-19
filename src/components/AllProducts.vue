<template>
  <div>
    <Lister :products="allProducts" productImg="pc-img"/>
  </div>
</template>

<script>
import Lister from "./common/ProductsLister";
export default {
  components: {
    Lister
  },

  computed: {
    allProducts() {
      return this.$store.state.notebooks.concat(this.$store.state.smartphones);
    },

    imgClass(allProducts) {
      if (item.id.startsWith("SP")) {
        return "";
      }

      if (item.id.startsWith("PC")) {
        return "pc-img";
      }
    }
  }
};
</script>

<style scoped>
</style>
