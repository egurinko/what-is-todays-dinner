import { ref } from "@vue/composition-api";

const loading = ref<boolean>(false);

const useLoader = () => {
  const changeToLoading = () => {
    loading.value = true;
  };

  const changeToLoaded = () => {
    loading.value = false;
  };

  return {
    loading,
    changeToLoading,
    changeToLoaded
  };
};

export default useLoader;
