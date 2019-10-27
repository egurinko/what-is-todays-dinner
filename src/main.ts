import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
import App from "./App.vue";
import '@/assets/css/tailwind.css';

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}

new Vue({
  render: h => h(App)
}).$mount("#app");
