import Vue from "vue";
import "./utils/compositionPlugin";
import "@/assets/css/tailwind.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
