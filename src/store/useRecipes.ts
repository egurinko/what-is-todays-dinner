import axios from "axios";
import { onMounted, reactive, toRefs, ref } from "@vue/composition-api";
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

  const run = (): void => {
    const { changeToLoading, changeToLoaded } = useLoader();
    changeToLoading();

    axios
      .get(`${domain}/api/recipes`, {
        params: {
          searchText: recipeState.searchText
        }
      })
      .then(data => {
        addRecipes(data.data);
      })
      .finally(() => {
        changeToLoaded();
      });
  };

  const addRecipes = (recipes: Recipes): void => {
    recipeState.recipes = [...recipes];
  };

  const filterRecipes = (): void => {
    run();
  };

  onMounted(() => {
    run();
  });

  return {
    ...toRefs(recipeState),
    filterRecipes,
    addRecipes
  };
}
