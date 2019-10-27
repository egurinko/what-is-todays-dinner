<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <a
          class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <svg
            class="h-8 fill-current inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline
              points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
              class="check"
            ></polyline>
            <circle cx="12" cy="8" r="7" class="circle"></circle>
          </svg>
          LANDING
        </a>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center p-1 text-orange-800 hover:text-gray-900"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block py-2 px-4 text-black font-bold no-underline"
              href="#"
              >Active</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#"
              >link</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#"
              >link</a
            >
          </li>
        </ul>
        <button
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
        >
          Action
        </button>
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
<style scoped lang="stylus">
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
