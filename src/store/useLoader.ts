import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import { ref } from "@vue/composition-api";

const loader = ref<boolean>(false);

const useLoader = () => {
  const changeToLoading = () => {
    loader.value = true;
  };

  const changeToLoaded = () => {
    loader.value = false;
  };

  return {
    loader,
    changeToLoading,
    changeToLoaded
  };
};

export default useLoader;