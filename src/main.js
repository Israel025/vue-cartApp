import Vue from "vue";
import App from "./App.vue";
import router from "./router/Router";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>',
// });