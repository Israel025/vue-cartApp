<template>
  <div class="prodDiv">
    <ul class="productsUl">
      <li v-for="(item) in products" :key="item.id" class="item">
        <div class="sections">
          <img :src="item.image" :alt="item.name" :class="item.id.startsWith('SP')?'':productImg">
        </div>
        <div class="sections">
          <h3>{{item.name}}</h3>
        </div>
        <div class="sections price">
          <span>Price: ${{item.price}}</span>
          <span>In Stock: {{item.stockQty}} unit(s)</span>
        </div>
        <div class="sections">
          <Bttn @click.native="addProductToCart(item)">
            <p>Add to Cart</p>
          </Bttn>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Bttn from "./cartBtn";

export default {
  props: ["products", "productImg"],

  components: {
    Bttn
  },

  methods:{
    ...mapActions({
      addToCart: "addItem",
    }),

    addProductToCart(item){
      this.addToCart(item);
    }
  },

  computed:{
    
    
  }
};
</script>

<style>
.prodDiv {
  display: flex;
  flex-direction: column;
}
.productsUl {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.item {
  width: 300px;
  background-color: rgb(243, 242, 241);
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-radius: 7px;
}

.sections{
  display: flex;
}

.price {
    width: 100%;
    align-self: flex-start;
    justify-content: space-between;
    margin-bottom: .5em;
  }

.pc-img{
  height: 12em;
  width: 16em;
}
</style>
