<script setup>
import imagePath from "../assets/map.png";
</script>

<template>
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-8 py-12">
      <div class="text-left">
        <!-- <p class="text-lg font-medium leading-8 text-base/60">
          Introducing Design Data Platform
        </p> -->
        <h1
          class="md:mt-3 text-4xl md:text-[3.5rem] w-min font-bold leading-[4rem] tracking-tight text-base/100 border-b-2 border-spacing-2 border-b-primary"
        >
          Localização
        </h1>
        <p class="mt-6 text-lg leading-relaxed max-w-xl text-base/80">
          O acesso ao evento é feito através do Portão Oeste da Base Aérea.<br />
          Dirija-se ao local, seguindo estas coordenadas: 39.81737, -8.89581
        </p>
      </div>
    </div>
  </section>
  <div class="relative w-full">
    <iframe
      class="w-full h-[370px] md:h-[500px]"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Q1NUqRI5V3r3NM1F2pLFdOact0is0Yw
    &q=39.81737+-8.89581"
    >
    </iframe>
    <div
      class="w-full md:w-[400px] bg-base md:bg-base/90 md:rounded-lg relative md:absolute md:right-8 p-8 md:top-1/2 md:transform md:-translate-y-1/2"
    >
      <div class="text-left">
        <p class="text-lg font-medium leading-8 text-primary">Endereço</p>
        <h1
          class="mt-0 text-3xl font-bold leading-relaxed tracking-tight text-white border-b-2 pb-4 border-b-primary"
        >
          Portão Oeste
          <br />
          Base Aérea Nº5
          <br />
          Monte Real, Leiria
        </h1>
        <!-- <p
          class="mt-6 text-xl leading-relaxed text-white w-fit border-b-2 border-spacing-2 border-b-primary"
        >
          Specify helps
        </p>
        <p class="mt-3 text-base leading-relaxed max-w-lg text-white/80">
          Specify helps you unify your brand identity by collecting
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInfo",
};
</script>

<style lang="scss" scoped></style>
