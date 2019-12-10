<template>
  <div class="pagination container mx-auto flex justify-center">
    <div v-if="pagination.currentPage.value - 1 > 0">
      <a class="mx-1" href="#" @click.prevent="$emit('setCurrentPage', 1)"
        >&lt;</a
      >
      <a class="mx-1" href="#" @click.prevent="$emit('goPreviousPage')"
        >{{ pagination.currentPage.value - 1 }}
      </a>
    </div>
    <span class="current text-teal-500 mx-1"
      ><strong>{{ pagination.currentPage.value }}</strong></span
    >
    <div
      v-if="
        pagination.currentPage.value + 1 <= pagination.lastPage.value &&
          pagination.total.value > 9
      "
    >
      <a class="mx-1" href="#" @click.prevent="$emit('goNextPage')">{{
        pagination.currentPage.value + 1
      }}</a>
      <a
        href="#"
        class="mx-1"
        @click.prevent="$emit('setCurrentPage', pagination.lastPage.value)"
        >&gt;</a
      >
    </div>
  </div>
</template>

<script>
import { createComponent } from "@vue/composition-api";
export default createComponent({
  props: {
    pagination: Object
  }
});
</script>

<style lang="stylus" scoped>
.pagination
  font-size: 1.2rem;
  & a,
  .current
    display: inline-block;
    border: 1px solid #ccc;
    line-height: 1rem;
    min-width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
</style>
