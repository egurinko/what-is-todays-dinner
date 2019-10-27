<template>
  <nav id="header" class="gradient fixed w-full z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex justify-center flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center ">
        <p
          class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <svg
            class="h-8 fill-current inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline
              points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
              class="check"
              fill="#FFFF"
            ></polyline>
            <circle fill="#FFFF" cx="12" cy="8" r="7" class="circle"></circle>
          </svg>
          今日の晩御飯は？
        </p>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "Header"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
