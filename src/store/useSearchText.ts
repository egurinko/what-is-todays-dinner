import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import { ref } from "@vue/composition-api";

const searchText = ref<string>("");

const useSearchText = () => {
  return {
    searchText
  };
};

export default useSearchText;
