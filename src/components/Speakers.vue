<template>
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-8 py-12">
      <div class="text-left">
        <!--  <p class="text-lg font-medium leading-8 text-base/60">
          Introducing Design Data Platform
        </p> -->
        <h1
          class="md:mt-3 text-4xl md:text-[3.5rem] w-min font-bold leading-[4rem] tracking-tight text-base border-b-2 border-spacing-2 border-b-primary"
        >
          Agenda
        </h1>
        <!--  <p class="mt-6 text-lg leading-relaxed max-w-lg text-base/80">
          Specify helps you unify your brand identity by collecting, storing and
          distributing design tokens and assets — automatically.
        </p> -->
      </div>

      <!-- timeline -->
      <div class="max-w-2xl mx-auto mt-12">
        <div class="grid gap-x-32 sm:grid-cols-2">
          <ol class="relative border-l border-gray-700">
            <Event timeEvent="9h" name="Chegar" color="text-base-900" />
            <Event timeEvent="10h" name="Começar" color="text-base-900" />
            <Event timeEvent="10h05" name="Novo ciclo" color="text-base-900" />
            <Event timeEvent="10h50" name="Aproximar" color="text-base-900" />
            <Event timeEvent="11h20" name="Pausa" color="text-primary" />
            <Event timeEvent="11h50" name="Renovar" color="text-base-900" />
            <Event timeEvent="12h20" name="Inovar" color="text-base-900" />
            <Event timeEvent="12h45" name="Almoço" color="text-primary" />
          </ol>
          <ol class="relative border-l border-gray-700">
            <Event timeEvent="14h15" name="Recomeçar" color="text-base-900" />
            <Event timeEvent="14h20" name="Escutar" color="text-base-900" />
            <Event timeEvent="14h25" name="Questionar" color="text-base-900" />
            <Event timeEvent="15h05" name="Pausa" color="text-primary" />
            <Event timeEvent="15h35" name="Comunicar" color="text-base-900" />
            <Event timeEvent="16h35" name="Entregar" color="text-base-900" />
            <Event timeEvent="17h05" name="Regressar" color="text-base-900" />
          </ol>
        </div>
      </div>

      <!-- <div class="grid gap-12 items-center grid-cols-2 md:grid-cols-4 mt-20">
        <div class="space-y-4 text-center">
          <img
            class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 shadow-xl"
            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
            alt="woman"
            loading="lazy"
            width="640"
            height="805"
          />
          <div>
            <h4 class="text-2xl">Hentoni Doe</h4>
            <span class="block text-sm text-gray-500">CEO-Founder</span>
          </div>
        </div>
        <div class="space-y-4 text-center">
          <img
            class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 shadow-xl"
            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
            alt="man"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div>
            <h4 class="text-2xl">Jonathan Doe</h4>
            <span class="block text-sm text-gray-500"
              >Chief Technical Officer</span
            >
          </div>
        </div>
        <div class="space-y-4 text-center">
          <img
            class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 shadow-xl"
            src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div>
            <h4 class="text-2xl">Anabelle Doe</h4>
            <span class="block text-sm text-gray-500"
              >Chief Operations Officer</span
            >
          </div>
        </div>
        <div class="space-y-4 text-center">
          <img
            class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 shadow-xl"
            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div>
            <h4 class="text-2xl">Anabelle Doe</h4>
            <span class="block text-sm text-gray-500"
              >Chief Operations Officer</span
            >
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import Event from "./Event.vue";
</script>

<script>
export default {
  name: "Speakers",
};
</script>

<style lang="scss" scoped></style>
