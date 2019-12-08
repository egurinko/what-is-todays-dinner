<template>
  <Provider>
    <Home />
  </Provider>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";
import Home from "./views/Home.vue";
import Provider from "./components/Provider.vue";

export default createComponent({
  name: "app",
  components: {
    Provider,
    Home
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
