import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
/**
 * Initialize the vue app and mount to the
 * root component id.
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
