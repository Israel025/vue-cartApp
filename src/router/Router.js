import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from "../components/AllProducts";
import AboutPage from "../components/AboutPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    }
  ],
});
