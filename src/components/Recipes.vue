<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        レシピ
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div
        class="w-full md:w-1/3 p-6 flex flex-col flex-shrink"
        v-for="(recipe, index) in recipes"
        :key="index"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <a
            :href="recipe.recipeUrl"
            class="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              class="h-56 w-full object-cover object-center"
              :src="recipe.foodImageUrl"
              alt="recipeTitle"
            />
            <div class="w-full font-bold text-xl text-gray-800 px-6 mt-4">
              {{ recipe.recipeTitle }}
            </div>
            <p class="text-gray-800 text-base px-6 mb-2">
              {{ recipe.recipeDescription }}
            </p>
          </a>
        </div>
        <div
          class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow  px-6 py-3"
        >
          <span class="text-gray-600 text-base mr-4">
            調理時間：{{ recipe.recipeIndication }}
          </span>
          <span class="text-gray-600 text-base">
            1食あたり：{{ recipe.recipeCost }}
          </span>
        </div>
      </div>
    </div>
    <div class="container mx-auto pt-4 pb-12">
      {{ pagination.currentPage.value }}
      <Pagination
        :pagination="pagination"
        @setCurrentPage="pagination.setCurrentPage($event)"
        @goPreviousPage="pagination.goPreviousPage()"
        @goNextPage="pagination.goNextPage()"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { createComponent, inject, onMounted } from "@vue/composition-api";
import useRecipes from "../store/useRecipes";
import useLoader from "../store/useLoader";
import domain from "../utils/domain";
import { StoreKey, Store } from "../store";
import { recipe } from "../api/index";
import Pagination from "./Pagination.vue";

export default createComponent({
  name: "Recipes",
  components: {
    Pagination
  },
  setup() {
    const store = inject(StoreKey);
    if (!store) return;

    onMounted(async () => {
      run(store);
    });

    const setCurrentPage = (e: number) => {
      set(e, store);
    };

    const goPreviousPage = () => {
      goPriv(store);
    };

    const goNextPage = () => {
      goNext(store);
    };

    return {
      recipes: store.recipes,
      pagination: {
        setCurrentPage,
        goPreviousPage,
        goNextPage,
        currentPage: store.currentPage,
        lastPage: store.lastPage,
        total: store.total
      }
    };
  }
});

const run = async (store: Store): Promise<void> => {
  store.changeToLoading();
  const data = await recipe.getRecipes(
    store.searchText.value,
    store.currentPage.value
  );
  store.addRecipes(data.data);
  store.setCurrentPage(data.pageInfo.currentPage);
  store.setTotalPage(data.pageInfo.total);
  store.changeToLoaded();
};

const set = (e: number, store: Store): void => {
  store.setCurrentPage(e);
  run(store);
};

const goPriv = (store: Store): void => {
  store.setCurrentPage(store.currentPage.value - 1);
  run(store);
};

const goNext = (store: Store): void => {
  store.setCurrentPage(store.currentPage.value + 1);
  run(store);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
