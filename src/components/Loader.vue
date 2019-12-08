<template>
  <div
    class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
    style="background: rgba(0,0,0,.7);"
    v-if="loading"
  >
    <PacmanLoader :loading="loading" />
  </div>
</template>

<script lang="ts">
import { createComponent, inject } from "@vue/composition-api";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import useLoader from "../store/useLoader";
import { StoreKey } from "../store";

export default createComponent({
  name: "Loader",
  components: {
    PacmanLoader
  },
  setup() {
    const store = inject(StoreKey);
    if (!store) return;

    return {
      loading: store.loading
    };
  }
});
</script>

<style lang="stylus"></style>
