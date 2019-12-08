import { ref, InjectionKey } from "@vue/composition-api";

const useLoader = () => {
  const loading = ref<boolean>(false);

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

export type UseLoader = ReturnType<typeof useLoader>;
export const LoaderKey: InjectionKey<UseLoader> = Symbol("UseLoader");
