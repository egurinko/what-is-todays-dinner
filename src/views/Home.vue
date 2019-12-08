<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif;"
  >
    <Loader />
    <Header />
    <Recipes />
    <Emotion />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";
import Header from "../components/Header.vue";
import Recipes from "../components/Recipes.vue";
import Emotion from "../components/Emotion.vue";
import Footer from "../components/Footer.vue";
import Loader from "../components/Loader.vue";

export default createComponent({
  name: "Home",
  components: {
    Loader,
    Header,
    Recipes,
    Emotion,
    Footer
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
