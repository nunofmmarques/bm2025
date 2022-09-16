<template>
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-8 py-12">
      <div class="text-left">
        <p class="text-lg font-medium leading-8 text-base/60">
          Introducing Design Data Platform
        </p>
        <h1
          class="md:mt-3 text-4xl md:text-[3.5rem] w-min font-bold leading-[4rem] tracking-tight text-base border-b-2 border-spacing-2 border-b-primary"
        >
          BM2015
        </h1>
        <p class="mt-6 text-lg leading-relaxed max-w-lg text-base/80">
          Specify helps you unify your brand identity by collecting, storing and
          distributing design tokens and assets — automatically.
        </p>
      </div>

      <!-- timeline -->
      <div class="max-w-2xl mx-auto mt-12">
        <div class="grid gap-32 sm:grid-cols-2">
          <ol class="relative border-l border-gray-700">
            <Event timeEvent="9h" name="Welcome coffee | Chegar" />
            <Event timeEvent="10h" name="Boas-vindas | Começar" />
            <Event timeEvent="10h05" name="Entrevista CA | Novo ciclo" />
            <Event timeEvent="10h50" name="Painel Erasmus | Aproximar" />
            <Event timeEvent="11h20H" name="Coffee Break" />
            <Event timeEvent="11h35" name="Painel Trainees | Renovar" />
            <Event timeEvent="12h05" name="Intervenção FAP – Base | Inovar" />
            <Event timeEvent="12h30" name="Almoçar" />
          </ol>
          <ol class="relative border-l border-gray-700">
            <Event timeEvent="14h30" name="Recomeçar" />
            <Event timeEvent="14h35" name="Clientes | Escutar" />
            <Event timeEvent="14h40" name="C-LAB | Conhecer" />
            <Event timeEvent="15h30" name="Coffe Break" />
            <Event timeEvent="15h45" name="Talk Inspiração | Comunicar" />
            <Event timeEvent="16h45" name="CEO Pedro Leitão | Entregar" />
            <Event timeEvent="17h" name="Regressar" />
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
