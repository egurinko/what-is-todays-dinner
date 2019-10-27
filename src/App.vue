<template>
  <div>
    <Header />
    <main class="my-16 mx-auto">
      <router-view />
    </main>
    <Hero />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";

export default createComponent({
  name: "app",
  components: {
    Header,
    Hero,
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
</style>
