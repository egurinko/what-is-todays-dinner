import axios from "axios";
import domain from "../utils/domain";
import { Recipes } from "../store/useRecipes";

export const getRecipes = (searchText: string): Promise<Recipes> => {
  return axios
    .get(`${domain}/api/recipes`, {
      params: {
        searchText: searchText
      }
    })
    .then(data => {
      return Promise.resolve(data.data);
    });
};
