<template>
  <section class="bg-secondary">
    <div class="max-w-7xl mx-auto px-8 py-12">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="text-left">
          <p class="text-lg font-medium leading-8 text-base/60">
            Introducing Design Data Platform
          </p>
          <h1
            class="mt-3 text-[3.5rem] w-min font-bold leading-[4rem] tracking-tight text-base border-b-2 border-spacing-2 border-b-primary"
          >
            BM2015
          </h1>
          <p class="mt-6 text-lg leading-relaxed max-w-lg text-base/80">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically.
          </p>

          <div class="mt-6 flex items-start justify-start gap-4">
            <a
              href="#"
              class="transform rounded-md border-2 border-base/40 px-5 py-3 font-medium text-sm transition-colors hover:bg-base hover:text-white uppercase"
              >Get started for free</a
            >
          </div>
        </div>

        <div class="grid gap-12 items-center grid-cols-2 mt-8 md:mt-0">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Plant",
};
</script>

<style lang="scss" scoped></style>
