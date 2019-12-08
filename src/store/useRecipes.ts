import Vue from "vue";
import axios from "axios";
import VueCompositionApi, { ref, onMounted } from "@vue/composition-api";
import useLoader from "./useLoader";
import domain from "../utils/domain";
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

const useRecipes = () => {
  const currentRecipes = ref<Recipes>([]);
  const allRecipes = ref<Recipes>([]);
  const searchText = ref<string>("");

  const getRecipes = () => {
    const { changeToLoading, changeToLoaded } = useLoader();
    changeToLoading();

    axios
      .get(`${domain}/api/recipes`)
      .then(data => {
        const result = data.data;
        currentRecipes.value = result;
        allRecipes.value = result;
      })
      .finally(() => {
        changeToLoaded();
      });
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

  onMounted(() => {
    getRecipes();
  });

  return {
    allRecipes,
    currentRecipes,
    getRecipes,
    filterCurrentRecipes
  };
};

export default useRecipes;
