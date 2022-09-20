<template>
  <li class="mb-10 ml-4">
    <div class="absolute w-3 h-3 bg-base rounded-full -left-1.5"></div>
    <p class="mb-1 text-base font-normal leading-none text-base/50">
      {{ timeEvent }}
    </p>
    <h3 class="text-lg font-semibold" :class="color">
      {{ name }}
    </h3>
    <!-- <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Get access to over 20+ pages including a dashboard layout, charts, kanban
      board, calendar, and pre-order E-commerce &amp; Marketing pages.
    </p> -->
  </li>
</template>

<script>
export default {
  name: "Event",
  props: ["timeEvent", "name", "color"],
};
</script>

<style lang="scss" scoped></style>
