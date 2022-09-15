<template>
  <section class="relative bg-white">
    <img
      class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
      src="../assets/hero.png"
      alt="Couple on a bed with a dog"
    />

    <div
      class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"
    ></div>

    <div
      class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex cenas"
    >
      <div class="max-w-xl text-center sm:text-left cenas-1">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          BM
          <strong class="font-extrabold text-rose-700"> 2025 </strong>
        </h1>

        <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
          Encontro de alta performance
        </p>

        <div class="flex flex-wrap mt-8 text-center gap-4">
          <a
            class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
            href="/get-started"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped></style>
