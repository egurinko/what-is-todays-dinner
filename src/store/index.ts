import { InjectionKey } from "@vue/composition-api";
import useLoader from "./useLoader";
import useRecipes from "./useRecipes";

export default function store() {
  return {
    ...useRecipes(),
    ...useLoader()
  };
}

export type Store = ReturnType<typeof store>;
export const StoreKey: InjectionKey<Store> = Symbol("Store");
