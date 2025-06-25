<script setup>
import { ref, onMounted } from "vue";
import HeroButton from "~/components/shared/primaryButton.vue";

const activeIndex = ref(0);
onMounted(() => {
  const carousel = document.getElementById("heroCarousel");
  if (carousel) {
    carousel.addEventListener("slid.bs.carousel", (event) => {
      const active = carousel.querySelector(".carousel-item.active");
      const index = [...carousel.querySelectorAll(".carousel-item")].indexOf(
        active
      );
      activeIndex.value = index;
    });
  }
});

const slides = [
  {
    id: 1,
    title: "SALE",
    text: "ACCESS A LIMITED SELECTION WITH UP TO 70% OFF",
    buttonText: "Shop Now",
    buttonLink: "/products",
    image: "/Images/Header.jpg",
    buttonStyle: "btn-dark",
  },
  {
    id: 2,
    title: "Hot Deals",
    text: "Get the best offers before they end",
    buttonText: "Explore Deals",
    buttonLink: "/",
    image: "/Images/Header.jpg",
    buttonStyle: "btn-dark",
  },
];
</script>

<template>
  <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <!-- الشرائح -->
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="{ active: index === 0 }"
      >
        <!-- طبقة خلفية ساطعة للشاشات الصغيرة -->
        <div
          class="d-md-none position-absolute top-0 start-0 w-100 h-100"
          style="background-color: rgba(255, 255, 255, 0.7); z-index: 1"
        ></div>

        <div
          class="hero-slide position-relative d-flex justify-content-center align-items-center"
          :style="`background-image: url(${slide.image}); height: 80vh; background-size: cover; background-position: center;`"
        >
          <div class="container position-relative text-white text-start">
            <div
              class="col-12 text-black col-md-6 position-relative"
              style="width: 300px"
            >
              <div class="position-relative z-2">
                <h1 class="display-4 fw-bold">{{ slide.title }}</h1>
                <p class="fs-5 fw-bold">{{ slide.text }}</p>
                <HeroButton
                  :to="slide.buttonLink"
                  :buttonText="slide.buttonText"
                  :buttonStyle="slide.buttonStyle"
                  button-color="#111111"
                  iconClass="bi bi-arrow-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-indicators-custom d-flex justify-content-center mt-3">
    <button
      v-for="(slide, index) in slides"
      :key="slide.id"
      type="button"
      data-bs-target="#heroCarousel"
      :data-bs-slide-to="index"
      :class="{ active: index === activeIndex }"
      :aria-current="index === 0 ? 'true' : null"
      class="indicator-dot"
    ></button>
  </div>
</template>
<style scoped>
.carousel-indicators-custom .indicator-dot {
  background-color: #000;
  width: 20px;
  height: 3px;
  margin: 0 5px;
  border: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.carousel-indicators-custom .indicator-dot.active,
.carousel-indicators-custom .indicator-dot:hover {
  opacity: 1;
}
</style>
