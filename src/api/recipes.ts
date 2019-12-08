import axios from "axios";
import domain from "../utils/domain";
import { Recipes } from "../store/useRecipes";

type Result = {
  data: Recipes;
  pageInfo: {
    endCursor: number;
    total: number;
    currentPage: number;
  };
};

export const getRecipes = (
  searchText: string,
  currentPage = 1
): Promise<Result> => {
  return axios
    .get(`${domain}/api/recipes`, {
      params: {
        searchText,
        currentPage
      }
    })
    .then(data => {
      return Promise.resolve(data.data);
    });
};
