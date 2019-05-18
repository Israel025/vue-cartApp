import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from "../components/AllProducts";
import Notebooks from "../components/Notebooks";
import Smartphones from "../components/Smartphones";
import Cartpage from "../components/CartPage";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },

    {
      path: '/notebooks',
      name: 'notebooks',
      component: Notebooks,
    },

    {
      path: '/smartphones',
      name: 'smartphones',
      component: Smartphones,
    },

    {
      path: '/cart',
      name: 'cart',
      component: Cartpage,
    }
  ],
});
