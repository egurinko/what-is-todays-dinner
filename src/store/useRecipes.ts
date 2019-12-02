import Vue from "vue";
import VueCompositionApi, { ref } from "@vue/composition-api";
Vue.use(VueCompositionApi);

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
};

export type Recipes = Recipe[];

const currentRecipes = ref<Recipes>([]);
const allRecipes = ref<Recipes>([]);

const useRecipes = () => {
  const initRecipes = (recipes: Recipes) => {
    currentRecipes.value = recipes;
    allRecipes.value = recipes;
  };

  const filterCurrentRecipes = (ingredient: string) => {
    if (ingredient === "") {
      currentRecipes.value = allRecipes.value;
    } else {
      currentRecipes.value = allRecipes.value.filter(recipe => {
        return recipe.recipeMaterial.includes(ingredient);
      });
    }
  };

  return {
    allRecipes,
    currentRecipes,
    initRecipes,
    filterCurrentRecipes
  };
};

export default useRecipes;
