<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif;"
  >
    <Header />
    <Hero />
    <Recipes />
    <Emotion />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Recipes from "./components/Recipes.vue";
import Emotion from "./components/Emotion.vue";
import Footer from "./components/Footer.vue";

export default createComponent({
  name: "app",
  components: {
    Header,
    Hero,
    Recipes,
    Emotion,
    Footer
  }
});
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

.gradient
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);

h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
