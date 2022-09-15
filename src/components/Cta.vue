<template>
  <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

  <aside class="bg-primary/70">
    <div class="p-8 md:p-12 lg:px-16">
      <div class="max-w-lg mx-auto text-center">
        <h2
          class="mt-3 text-3xl md:text-[3.5rem] font-bold leading-[4rem] tracking-tight text-bas"
        >
          Interessado?
        </h2>

        <p class="text-base/80 sm:mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
          officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
          consequuntur exercitationem incidunt tempora nisi?
        </p>

        <a
          href="#"
          class="transform mt-6 inline-block rounded-md bg-base text-secondary border-2 border-base/40 px-5 py-3 font-medium text-sm transition-colors hover:bg-secondary hover:text-base/100 uppercase"
          >Get started for free</a
        >
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Cta",
};
</script>

<style lang="scss" scoped></style>
