<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { provide, createComponent } from "@vue/composition-api";
import store, { StoreKey } from "../store";

export default createComponent({
  name: "Recipes",
  setup() {
    provide(StoreKey, store());
    return {};
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
