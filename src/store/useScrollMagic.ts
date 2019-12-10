import { reactive, watch, toRefs } from "@vue/composition-api";
import Scrollmagic from "scrollmagic";
import SmoothScroll from "smooth-scroll";

const useScrollMagic = () => {
  const state = reactive({
    fadeOnElementId: "",
    scrollToElementId: ""
  });

  const addFadeOnElementId = (id: string): void => {
    state.fadeOnElementId = id;
  };

  const addScrollToElementId = (id: string): void => {
    state.scrollToElementId = id;
  };

  const scrollToElement = (): void => {
    const scroll = new SmoothScroll();
    const anchor = document.querySelector(state.scrollToElementId);
    const options: any = { speed: 800, easing: "easeOutCubic" };
    scroll.animateScroll(anchor, null, options);
  };

  watch(
    () => state.fadeOnElementId,
    () => {
      const controller = new Scrollmagic.Controller();
      new Scrollmagic.Scene({
        triggerElement: state.fadeOnElementId
      })
        .setClassToggle(state.fadeOnElementId, "show")
        .addTo(controller);
    }
  );

  return {
    addFadeOnElementId,
    addScrollToElementId,
    scrollToElement,
    ...toRefs(state)
  };
};

export default useScrollMagic;

export type useScrollMagic = ReturnType<typeof useScrollMagic>;
