<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categories";
import { useRouter, useRoute } from "vue-router";
import SearchBar from "~/components/SearchBar.vue";
import { useCartStore } from "@/stores/carts";
const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();

function goToAccount() {
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    router.push("/profile");
  } else {
    router.push("/register");
  }
}
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchCategories();
});

function isActive(path: string) {
  return route.path === path || route.path.startsWith(path + "/");
}
</script>

<template>
  <header class="bg-white border-bottom">
    <div class="container-fluid px-5">
      <nav class="navbar navbar-expand-lg navbar-light py-0">
        <div class="container-fluid px-0">
          <!-- logo -->
          <NuxtLink to="/" class="navbar-brand">
            <img
              src="/images/icons/logoBlack.png"
              alt="Logo"
              style="width: 110px"
            />
          </NuxtLink>
          <!-- button for mobile and tablete -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarMain">
            <div class="d-none d-lg-block category-scroll flex-grow-1 w-100">
              <ul
                class="navbar-nav mx-auto w-100 mt-5 mb-lg-0 fw-bold text-uppercase flex-row flex-nowrap gap-2"
                style="min-width: 100%"
              >
                <li
                  v-for="category in categoryStore.categories"
                  :key="category"
                  class="nav-item"
                >
                  <NuxtLink
                    :to="`/category/${encodeURIComponent(category)}`"
                    class="nav-link text-dark px-1"
                    :class="{
                      'active-link': isActive(
                        `/category/${encodeURIComponent(category)}`
                      ),
                    }"
                  >
                    {{ category }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <!-- الفئات عمودية للموبايل/تابليت -->
            <ul class="navbar-nav mt-3 mb-2 fw-bold text-uppercase d-lg-none">
              <li
                v-for="category in categoryStore.categories"
                :key="category"
                class="nav-item"
              >
                <NuxtLink
                  :to="`/category/${encodeURIComponent(category)}`"
                  class="nav-link text-dark"
                  :class="{
                    'active-link': isActive(
                      `/category/${encodeURIComponent(category)}`
                    ),
                  }"
                >
                  {{ category }}
                </NuxtLink>
              </li>
            </ul>

            <!-- عناصر البحث والأيقونات: مجمعة في عنصر واحد للموبايل/تابليت -->
            <ul class="navbar-nav d-lg-none">
              <li class="nav-item">
                <div class="d-flex align-items-center gap-3 mt-2">
                  <SearchBar />
                  <button
                    @click="goToAccount"
                    class="btn p-0 border-0 bg-transparent text-dark"
                  >
                    <i class="bi bi-person fs-5"></i>
                  </button>
                  <NuxtLink to="/wishlist" class="text-dark"
                    ><i class="bi bi-heart fs-5"></i
                  ></NuxtLink>
                  <NuxtLink to="/cart" class="text-dark position-relative">
                    <i class="bi bi-bag fs-5"></i>
                    <span
                      v-if="cartStore.totalItems > 0"
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white"
                      style="font-size: 0.6rem"
                    >
                      {{ cartStore.totalItems }}
                    </span>
                  </NuxtLink>
                </div>
              </li>
            </ul>

            <!-- روابط التنقل: مجمعة في عنصر واحد للموبايل/تابليت -->
            <ul class="navbar-nav d-lg-none mt-3">
              <li class="nav-item">
                <div
                  class="d-flex flex-column gap-2 text-uppercase small align-items-start"
                >
                  <NuxtLink
                    to="/"
                    class="text-decoration-none text-dark"
                    :class="{ 'active-link': isActive('/') }"
                    >Home</NuxtLink
                  >
                  <NuxtLink
                    to="/about"
                    class="text-decoration-none text-dark"
                    :class="{ 'active-link': isActive('/about') }"
                    >About Us</NuxtLink
                  >
                  <NuxtLink
                    to="/media"
                    class="text-decoration-none text-dark"
                    :class="{ 'active-link': isActive('/media') }"
                    >Media Center</NuxtLink
                  >
                  <NuxtLink
                    to="/contact"
                    class="text-decoration-none text-dark"
                    :class="{ 'active-link': isActive('/contact') }"
                    >Contact Us</NuxtLink
                  >
                </div>
              </li>
            </ul>

            <!-- البحث والأيقونات وروابط التنقل: كما هي للديسكتوب -->
            <div class="d-none d-lg-block ms-auto">
              <div
                class="d-flex justify-content-end align-items-center gap-1 py-2 flex-nowrap text-uppercase small nav-links-row"
              >
                <NuxtLink
                  to="/"
                  class="text-decoration-none text-dark"
                  :class="{ 'active-link': isActive('/') }"
                  >Home</NuxtLink
                >
                <NuxtLink
                  to="/about"
                  class="text-decoration-none text-dark"
                  :class="{ 'active-link': isActive('/about') }"
                  >About Us</NuxtLink
                >
                <NuxtLink
                  to="/media"
                  class="text-decoration-none text-dark"
                  :class="{ 'active-link': isActive('/media') }"
                  >Media Center</NuxtLink
                >
                <NuxtLink
                  to="/contact"
                  class="text-decoration-none text-dark"
                  :class="{ 'active-link': isActive('/contact') }"
                  >Contact Us</NuxtLink
                >
              </div>
              <!-- البحث والأيقونات تحتها -->
              <div class="d-flex align-items-center gap-3 mt-2">
                <SearchBar />
                <button
                  @click="goToAccount"
                  class="btn p-0 border-0 bg-transparent text-dark"
                >
                  <i class="bi bi-person fs-5"></i>
                </button>
                <NuxtLink to="/wishlist" class="text-dark"
                  ><i class="bi bi-heart fs-5"></i
                ></NuxtLink>
                <NuxtLink to="/cart" class="text-dark position-relative">
                  <i class="bi bi-bag fs-5"></i>
                  <span
                    v-if="cartStore.totalItems > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white"
                    style="font-size: 0.6rem"
                  >
                    {{ cartStore.totalItems }}
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.active-link {
  color: #fff !important;
  background: #111 !important;
  border-radius: 6px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}
.category-scroll {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #bbb #fff;
  width: 100%;
  display: block;
}

.category-scroll::-webkit-scrollbar {
  height: 6px;
}

.category-scroll::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 4px;
}

.category-scroll::-webkit-scrollbar-track {
  background: #fff;
}

/* تقييد العرض داخل الفئة نفسها */
.category-scroll .nav-item {
  flex-shrink: 0;
  min-width: max-content;
}

.category-scroll .nav-link {
  padding: 0.3rem 0.6rem;
  font-size: 0.97rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

.nav-links-row {
  flex-wrap: nowrap !important;
  margin-bottom: 0;
  padding-bottom: 0;
  gap: 1rem !important;
}
.nav-links-row > * {
  white-space: nowrap;
}
.header,
.navbar,
.navbar > .container-fluid,
.navbar-collapse {
  overflow-x: auto !important;
}
</style>
