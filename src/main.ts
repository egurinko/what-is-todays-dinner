import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

import App from "./App.vue";
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;


new Vue({
  render: h => h(App)
}).$mount("#app");
