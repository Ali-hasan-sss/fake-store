<template>
  <div class="container mt-5 position-relative">
    <ClientOnly>
      <h2 class="mb-4">{{ title }}</h2>
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :space-between="10"
        :breakpoints="breakpoints"
        :navigation="{
          prevEl: prevBtnRef,
          nextEl: nextBtnRef,
        }"
        @activeIndexChange="onActiveIndexChange"
        ref="swiperRef"
        class="mySwiper"
      >
        <SwiperSlide v-for="(product, index) in products" :key="index">
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
      <!-- أزرار التنقل -->
      <button ref="prevBtnRef" class="custom-nav-btn prev">
        <i class="bi bi-arrow-left"></i>
      </button>

      <button ref="nextBtnRef" class="custom-nav-btn next">
        <i class="bi bi-arrow-right"></i>
      </button>

      <!-- مؤشرات مخصصة -->
      <div
        class="carousel-indicators-custom d-flex justify-content-center mt-3"
      >
        <button
          v-for="(product, index) in products"
          :key="index"
          type="button"
          class="indicator-dot"
          :class="{ active: index === activeIndex }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./shared/SliderProductCard.vue";

defineProps<{
  title: string;
  products: {
    image: string;
    description: string;
    price: string;
    oldPrice?: string;
  }[];
}>();

const breakpoints = {
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
};

const prevBtnRef = ref(null);
const nextBtnRef = ref(null);

// هنا استخدمنا any لتجنب الخطأ
const swiperRef = ref<any>(null);

const activeIndex = ref(0);

function onActiveIndexChange(swiper: any) {
  activeIndex.value = swiper.realIndex;
}

function goToSlide(index: number) {
  if (swiperRef.value?.swiper) {
    swiperRef.value.swiper.slideToLoop(index);
  }
}
</script>

<style scoped>
.mySwiper {
  position: relative;
  padding: 20px 0;
}

.custom-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: 2px solid black;
  color: black;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 18px;
  border-radius: 0;
  transition: background-color 0.3s;
}

.custom-nav-btn:hover {
  background-color: #f1f1f1;
}

.custom-nav-btn.prev {
  left: 10px;
}

.custom-nav-btn.next {
  right: 10px;
}

.carousel-indicators-custom {
  gap: 8px;
}

.indicator-dot {
  width: 20px;
  height: 2px;
  border: 1px solid #333;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 4px;
}

.indicator-dot.active {
  background-color: #333;
  border-color: #333;
}
</style>
