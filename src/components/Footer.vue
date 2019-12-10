<template>
  <!--Footer-->
  <div>
    <section>
      <div
        class="container mx-auto text-center py-6 mb-12"
        id="footer-message-container"
      >
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
        >
          相手を幸せにしよう！
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <h3 class="my-5 text-3xl leading-tight">
          きっとできるはず・・・
        </h3>
      </div>
    </section>
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
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted } from "@vue/composition-api";
import useScrollMagic from "../store/useScrollMagic";

export default createComponent({
  name: "Footer",
  setup() {
    const {
      addFadeOnElementId,
      addScrollToElementId,
      scrollToElement
    } = useScrollMagic();

    onMounted(async () => {
      addFadeOnElementId("#footer-message-container");
    });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#footer-message-container
  opacity: 0
  transition: all 0.8s
  transition-timing-function: ease-in;
#footer-message-container.show
  opacity: 1
  transform: translateY(10px);
</style>
