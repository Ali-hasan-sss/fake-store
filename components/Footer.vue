<template>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <!-- العمود 1: الشعار وروابط التواصل -->
        <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
          <div class="d-flex flex-column align-items-start">
            <!-- <img
              src="/images/icons/logo.png"
              alt="Logo"
              class="mb-3"
              style="width: 200px"
            /> -->
            <div class="d-flex gap-3 mt-3 social-links">
              <a href="#"><i class="bi bi-facebook fs-5"></i></a>
              <a href="#"><i class="bi bi-instagram fs-5"></i></a>
              <a href="#"><i class="bi bi-twitter fs-5"></i></a>
              <a href="#"><i class="bi bi-x fs-5"></i></a>
            </div>
          </div>
        </div>

        <!-- العمود 2: الروابط الديناميكية -->
        <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
          <div class="row">
            <div
              v-for="(section, index) in navSections"
              :key="index"
              class="col-6"
            >
              <h5 class="mb-3">{{ section.title }}</h5>
              <ul class="list-unstyled">
                <li v-for="(link, idx) in section.links" :key="idx">
                  <NuxtLink
                    :to="link.path"
                    class="text-white text-decoration-none d-block py-1"
                    :class="{ 'fw-bold text-warning': isActive(link.path) }"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- العمود 3: معلومات الاتصال -->
        <div class="col-md-4 col-sm-6">
          <h5 class="mb-3">Contact us</h5>
          <p class="mb-2">
            <i class="bi bi-telephone-fill me-2"></i> +971 000 000 0000
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

const route = useRoute();

const isActive = (path: string) => route.path === path;

// البيانات الديناميكية للقوائم
const navSections = [
  {
    title: "Home",
    links: [
      { label: "About us", path: "/about" },
      { label: "Media center", path: "/media" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Electronics",
    links: [
      { label: "Jewelry", path: "/category/jewelry" },
      { label: "Men Clothing", path: "/category/men-clothing" },
      { label: "Women Clothing", path: "/category/women-clothing" },
    ],
  },
];
</script>

<style scoped>
.social-links a {
  color: white;
  transition: color 0.3s ease;
}
.social-links a:hover {
  color: #ff5722;
}
</style>
