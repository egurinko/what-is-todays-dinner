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

const currentRecipes = ref<Recipes>([]);
const allRecipes = ref<Recipes>([]);

const useRecipes = () => {
  const initRecipes = (recipes: Recipes) => {
    currentRecipes.value = recipes;
    allRecipes.value = recipes;
  };

  return {
    allRecipes,
    currentRecipes,
    initRecipes,
  };
};

export default useRecipes;
