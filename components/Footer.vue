<template>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row align-items-start text-start gy-4">
        <!-- العمود 1: الشعار وروابط التواصل -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <div class="d-flex flex-column align-items-start">
            <img
              src="/images/icons/logo.png"
              alt="Logo"
              class="mb-3"
              style="width: 160px"
            />
            <div class="d-flex gap-3 mt-3 social-links">
              <a href="https://www.facebook.com"
                ><i class="bi bi-facebook fs-5"></i
              ></a>
              <a href="https://www.youtube.com"
                ><i class="bi bi-youtube fs-5"></i
              ></a>
              <a href="https://www.instagram.com"
                ><i class="bi bi-instagram fs-5"></i
              ></a>
              <a href="https://www.twitter.com"><i class="bi bi-x fs-5"></i></a>
            </div>
          </div>
        </div>

        <!-- العمود 2: روابط التنقل -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <h5 class="mb-3 fw-bold">Home</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink
                to="/about"
                class="text-white text-decoration-none d-block py-1"
                :class="{ 'fw-bold text-warning': isActive('/about') }"
                >About us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/media"
                class="text-white text-decoration-none d-block py-1"
                :class="{ 'fw-bold text-warning': isActive('/media') }"
                >Media center</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-white text-decoration-none d-block py-1"
                :class="{ 'fw-bold text-warning': isActive('/contact') }"
                >Contact Us</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- العمود 3: الفئات -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <h5 class="mb-3 fw-bold">Electronics</h5>
          <ul class="list-unstyled">
            <li v-for="category in categoryStore.categories" :key="category">
              <NuxtLink
                :to="`/category/${encodeURIComponent(category)}`"
                class="text-white text-decoration-none d-block py-1"
                :class="{
                  'fw-bold text-warning': isActive(
                    `/category/${encodeURIComponent(category)}`
                  ),
                }"
              >
                {{ category }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- العمود 4: معلومات الاتصال -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <h5 class="mb-3 fw-bold">Contact us</h5>
          <p class="mb-2">
            <i class="bi bi-telephone-fill me-2"></i> +971 00 000 0000
          </p>
          <p class="mb-2">
            <i class="bi bi-telephone-fill me-2"></i> +971 0 000 0000
          </p>
          <p><i class="bi bi-envelope-fill me-2"></i> info@sample.com</p>
        </div>
      </div>

      <!-- خط -->
      <hr class="my-4 bg-white" />

      <!-- الحقوق -->
      <div class="text-center small text-white">
        © Developer Test 2024. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categories";

const route = useRoute();
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchCategories();
});

const isActive = (path: string) =>
  route.path === path || route.path.startsWith(path + "/");
</script>

<style scoped>
.social-links a {
  color: white;
  transition: color 0.3s ease;
}
.social-links a:hover {
  color: #ff5722;
}
@media (max-width: 767px) {
  .col-12 {
    margin-bottom: 1.5rem;
  }
}
</style>
