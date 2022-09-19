<template>
  <section class="bg-primary">
    <div class="p-8 md:p-12 lg:px-16">
      <div class="max-w-lg mx-auto text-center">
        <h2
          class="text-3xl md:text-[3rem] font-bold leading-[4rem] tracking-tight text-base/100"
        >
          Ainda não se inscreveu?
        </h2>

        <p class="text-base/80 sm:mt-4">
          A inscrição no evento é obrigatória para acesso ao recinto.<br />
          Caso ainda não o tenha feito, registe-se aqui.
        </p>

        <a
          href="https://bm-2025.pt/inscrever"
          target="_blank"
          class="transform mt-6 inline-block rounded-md bg-base text-secondary border-2 border-base/40 px-5 py-3 font-medium text-sm transition-colors hover:bg-secondary hover:text-base/100 uppercase"
          >Inscreva-se</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cta",
};
</script>

<style lang="scss" scoped></style>
