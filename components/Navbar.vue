<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categories";
import { useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRouter();

onMounted(() => {
  categoryStore.fetchCategories();
});
</script>

<template>
  <ClientOnly>
    <header class="bg-white border-bottom">
      <div class="container-fluid px-5">
        <!-- Navbar الرئيسية -->
        <nav class="navbar navbar-expand-lg navbar-light py-0">
          <div class="container-fluid px-0">
            <!-- الشعار -->
            <NuxtLink to="/" class="navbar-brand">
              <img
                src="/Images/Icons/LogoBlack.png"
                alt="Logo"
                style="width: 110px"
              />
            </NuxtLink>

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
              <!-- روابط الفئات -->
              <ul
                class="navbar-nav mx-auto mt-5 mb-lg-0 fw-bold text-uppercase"
              >
                <li
                  v-for="category in categoryStore.categories"
                  :key="category"
                  class="nav-item"
                >
                  <!-- رابط الفئة، مع تحويل النص ليكون URL صديق -->
                  <NuxtLink
                    :to="`/category/${encodeURIComponent(category)}`"
                    class="nav-link text-dark"
                  >
                    {{ category }}
                  </NuxtLink>
                </li>
              </ul>

              <!-- البحث والأيقونات -->
              <div>
                <!-- الشريط العلوي: روابط علوية -->
                <div
                  class="d-flex justify-content-end align-items-center gap-3 py-3 flex-wrap text-uppercase small"
                >
                  <NuxtLink to="/" class="text-decoration-none text-dark"
                    >Home</NuxtLink
                  >
                  <NuxtLink to="/about" class="text-decoration-none text-dark"
                    >About Us</NuxtLink
                  >
                  <NuxtLink to="/media" class="text-decoration-none text-dark"
                    >Media Center</NuxtLink
                  >
                  <NuxtLink to="/contact" class="text-decoration-none text-dark"
                    >Contact Us</NuxtLink
                  >
                  <span class="fw-bold">AR</span>
                </div>
                <div class="d-flex align-items-center gap-3 mt-2 mt-lg-0">
                  <form
                    class="d-flex align-items-center bg-light px-2 rounded"
                    style="height: 32px"
                  >
                    <input
                      type="search"
                      placeholder="Search"
                      class="form-control form-control-sm border-0 bg-transparent"
                    />
                    <button
                      type="submit"
                      class="btn btn-sm border-0 bg-transparent p-0"
                    >
                      <i class="bi bi-search text-dark"></i>
                    </button>
                  </form>

                  <NuxtLink to="/account" class="text-dark"
                    ><i class="bi bi-person fs-5"></i
                  ></NuxtLink>
                  <NuxtLink to="/wishlist" class="text-dark"
                    ><i class="bi bi-heart fs-5"></i
                  ></NuxtLink>
                  <NuxtLink to="/cart" class="text-dark position-relative">
                    <i class="bi bi-bag fs-5"></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white"
                      style="font-size: 0.6rem"
                      >2</span
                    >
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </ClientOnly>
</template>
