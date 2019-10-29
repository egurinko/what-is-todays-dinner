import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import { ref } from "@vue/composition-api";

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
  const getRecipes = (newRecipes: Recipes) => {
    recipes.value = newRecipes;
  };

  return {
    recipes,
    getRecipes
  };
};

export default useRecipes;
