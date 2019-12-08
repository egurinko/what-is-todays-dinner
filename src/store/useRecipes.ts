import axios from "axios";
import {
  onMounted,
  reactive,
  toRefs,
  InjectionKey,
  inject
} from "@vue/composition-api";
import useLoader from "./useLoader";
import domain from "../utils/domain";
import { StoreKey } from "./index";

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

type RecipeState = {
  recipes: Recipes;
  searchText: string;
};

export default function useRecipes() {
  const recipeState: RecipeState = reactive({
    recipes: [],
    searchText: ""
  });

  const addRecipes = (recipes: Recipes): void => {
    recipeState.recipes = [...recipes];
  };

  return {
    ...toRefs(recipeState),
    addRecipes
  };
}

export type UseRecipes = ReturnType<typeof useRecipes>;
export const RecipesKey: InjectionKey<UseRecipes> = Symbol("UseRecipes");
