<template>
  <!--Footer-->
  <footer class="bg-white">
    <div class="container mx-auto  px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <a
            class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <!--Icon from: http://www.potlabicons.com/ -->
            <svg
              class="h-8 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline
                points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                class="check"
                fill="#d53369"
              ></polyline>
              <circle
                fill="#d53369"
                cx="12"
                cy="8"
                r="7"
                class="circle"
              ></circle>
            </svg>
            今日の晩御飯は？
          </a>
        </div>

        <div class="flex-1 pt-4">
          <a
            href="https://github.com/egurinko"
            class="mx-5 uppercase text-gray-500 no-underline hover:underline hover:text-orange-500"
            >GitHub</a
          >
          <a
            href="https://twitter.com/egurinko"
            class="mx-5 uppercase text-gray-500 no-underline hover:underline hover:text-orange-500"
            >Twitter</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "Footer"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
