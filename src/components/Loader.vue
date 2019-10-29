<template>
  <div
    class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
    style="background: rgba(0,0,0,.7);"
    v-if="loader"
  >
    <PacmanLoader :loading="loader" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import useLoader from "../store/useLoader";

export default createComponent({
  name: "Loader",
  components: {
    PacmanLoader
  },
  setup() {
    const { loader } = useLoader();
    return {
      loader
    };
  }
});
</script>

<style lang="stylus"></style>
