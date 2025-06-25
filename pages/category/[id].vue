<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/products";
import { useCartStore } from "@/stores/carts";
import { onMounted, ref } from "vue";
import type { Product } from "~/typings/products";
import ProductCard from "@/components/cards/ProductCard.vue";
import BaseSpinner from "~/components/shared/BaseSpinner.vue";

const route = useRoute();
const categoryId = route.params.id as string;

const productStore = useProductStore();
const cartStore = useCartStore();

const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    await productStore.fetchProductsByCategory(categoryId);
    error.value = null;
  } catch (e) {
    error.value = "error fetchind data";
  } finally {
    loading.value = false;
  }
});

const addToCart = async (product: Product) => {
  await cartStore.addProduct(product.id, 1);
};
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold h1 text-center">{{ categoryId }}</h2>

    <div v-if="loading">
      <div class="d-flex align-items-center justify-content-center">
        <BaseSpinner customClass="text-primary" width="3rem" height="3rem" />
      </div>
    </div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else>
      <div v-if="!productStore.products.length">
        <p>NO PRODUCT FOUND</p>
      </div>
      <div class="row" v-else>
        <div
          v-for="product in productStore.products"
          :key="product.id"
          class="col-md-4 col-sm-6 mb-4"
        >
          <ProductCard :product="product" :onAddToCart="addToCart" />
        </div>
      </div>
    </div>
  </div>
</template>
