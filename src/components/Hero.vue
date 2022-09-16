<script setup>
import imagePath from "../assets/hero.png";
</script>

<template>
  <div>
    <nav class="bg-secondary border-b-4 border-b-primary py-4">
      <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-x-8">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              <img class="h-12" src="../assets/bm2025-logo.svg" alt="mb2025" />
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <!-- <nav class="hidden md:block" aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">Header navigation</h2>

              <ul class="flex items-center text-sm gap-6 font-raleway">
                <li>
                  <a
                    class="text-base font-semibold transition hover:text-base/50"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    class="text-base font-semibold transition hover:text-base/50"
                    href="/"
                  >
                    Workshops
                  </a>
                </li>

                <li>
                  <a
                    class="text-base font-semibold transition hover:text-base/50"
                    href="/"
                  >
                    Speakers
                  </a>
                </li>

                <li>
                  <a
                    class="text-base font-semibold transition hover:text-base/50"
                    href="/"
                  >
                    Sobre
                  </a>
                </li>
              </ul>
            </nav> -->

            <div class="flex items-center gap-4">
              <div class="sm:gap-4 sm:flex">
                <a
                  class="hidden sm:block transform rounded-md border-2 border-base/40 px-5 py-1.5 font-medium text-sm transition-colors hover:bg-base hover:text-white uppercase"
                  href="https://invtdu.to/_0pm71"
                  target="_blank"
                >
                  Inscrever
                </a>
              </div>

              <!-- <div class="block md:hidden">
                <button
                  class="p-2 text-base rounded transition hover:text-base/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <header
      class="w-full bg-contain relative md:bg-cover bg-center h-auto md:h-[400px] lg:h-[500px] overflow-hidden bg-[#A8A7A5]"
    >
      <img
        class="w-full max-w-none max-h-max md:-mt-24 xl:-mt-60"
        src="https://nunofmmarques.github.io/bm2025/dist/assets/hero.png"
        alt="montepio"
      />
      <div
        class="bg-white/90 absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-"
      >
        <img
          class="h-[25px] md:h-[50px] max-w-none"
          src="https://nunofmmarques.github.io/bm2025/dist/assets/montepio.svg"
          alt="montepio"
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped></style>
