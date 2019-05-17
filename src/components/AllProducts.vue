<template>
<div>
  <h1>Hello world i am all products</h1>
  <!-- <pre>{{products}}</pre> -->
  <ul>
    <div v-for="(p, index) in products" :key="index">
      {{p.name}}
    </div>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    products(){
      return this.$store.state.smartphones;
    }
  }
}
</script>

<style>

</style>
