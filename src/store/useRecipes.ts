import Vue from "vue";
import axios from "axios";
import VueCompositionApi, { ref } from "@vue/composition-api";
Vue.use(VueCompositionApi);

import useLoader from "./useLoader";
import domain from "../utils/domain";

export type Recipe = {
  foodImageUrl: string;
  recipeDescription: string;
  recipePublishday: string;
  shop: number;
  pickup: number;
  recipeId: number;
  nickname: string;
  smallImageUrl: string;
  recipeMaterial: string[];
  recipeIndication: string;
  recipeCost: string;
  rank: number;
  recipeUrl: string;
  mediumImageUrl: string;
  recipeTitle: string;
}

export type Recipes = Recipe[];

const recipes = ref<Recipes>([]);

const useRecipes = () => {
  const initRecipes = () => {
    const { changeToLoading, changeToLoaded } = useLoader();
    changeToLoading();
    axios
      .get(`${domain}/api/recipes`)
      .then(data => {
        recipes.value = data.data;
      })
      .finally(() => {
        changeToLoaded();
      });
  };

  return {
    recipes,
    initRecipes
  };
};

export default useRecipes;
