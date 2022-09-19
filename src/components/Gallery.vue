<template>
  <div class="relative">
    <section class="splide" aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img alt="img1" src="https://picsum.photos/1280/800" />
          </li>
          <li class="splide__slide">
            <img alt="img1" src="https://picsum.photos/1280/700" />
          </li>
          <li class="splide__slide">
            <img alt="img1" src="https://picsum.photos/1280/900" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});

export default {
  name: "Cta",
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 768px) {
  .splide__slide img {
    margin: 0 auto;
    width: 100%;
  }
}
@media only screen and (min-width: 769px) {
  .splide__slide img {
    margin: 0 auto;
    height: 500px;
  }
}
</style>
