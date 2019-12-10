import { computed, ref, toRefs, watch, reactive } from "@vue/composition-api";

type PageState = {
  perPage: number;
  total: number;
};

export default function usePagination() {
  const pageState: PageState = reactive({
    perPage: 9,
    total: 1
  });

  const _currentPage = ref<number>(1);
  const currentPage = computed(() => _currentPage.value);

  const lastPage = computed(() =>
    pageState.total ? Math.ceil(pageState.total / pageState.perPage) : 1
  );

  const offset = computed(() =>
    Math.min((currentPage.value - 1) * pageState.perPage, pageState.total || 0)
  );

  const setCurrentPage = (currentPage: number) => {
    if (typeof currentPage !== "number") return;
    _currentPage.value = minmax(currentPage, 1, lastPage.value);
  };

  const setTotalPage = (total: number) => {
    pageState.total = total;
  };

  const goPreviousPage = () => setCurrentPage(currentPage.value - 1);
  const goNextPage = () => setCurrentPage(currentPage.value + 1);
  const goFirstPage = () => setCurrentPage(1);
  const goLastPage = () => setCurrentPage(lastPage.value);

  watch(
    [() => pageState.total, () => pageState.perPage],
    () => {
      if (_currentPage.value > lastPage.value) {
        _currentPage.value = lastPage.value;
      }
    },
    { lazy: true }
  );

  return {
    ...toRefs(pageState),
    currentPage,
    lastPage,
    offset,
    goNextPage,
    goPreviousPage,
    goFirstPage,
    goLastPage,
    setCurrentPage,
    setTotalPage
  };
}

export type UsePagination = ReturnType<typeof usePagination>;

function minmax(val: number, min: number, max: number) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}
