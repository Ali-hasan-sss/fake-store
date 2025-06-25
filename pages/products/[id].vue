<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/products";
import { useCartStore } from "@/stores/carts";
import type { Product } from "@/typings/products";
import BaseSpinner from "~/components/shared/BaseSpinner.vue";
const route = useRoute();
const productId = Number(route.params.id);

const productStore = useProductStore();
const cartStore = useCartStore();

const product = ref<Product | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  try {
    await productStore.fetchProduct(productId);
    product.value = productStore.selectedProduct;
    error.value = null;
  } catch {
    error.value = "error fetching data";
  } finally {
    loading.value = false;
  }
});

const addToCart = async () => {
  if (!product.value) return;
  await cartStore.addProduct(product.value.id, 1);
};
</script>

<template>
  <div class="container py-5">
    <div v-if="loading">
      <div class="d-flex align-items-center justify-content-center">
        <BaseSpinner customClass="text-primary" width="3rem" height="3rem" />
      </div>
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="product">
      <div class="row">
        <div class="col-md-6">
          <img
            :src="product.image"
            alt="صورة المنتج"
            class="img-fluid"
            style="max-height: 400px; object-fit: contain"
          />
        </div>
        <div class="col-md-6">
          <h2>{{ product.title }}</h2>
          <p class="fw-bold">{{ product.price }} $</p>
          <p>{{ product.description }}</p>

          <button class="btn btn-success" @click="addToCart">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>PRODUCT NOT FOUND</p>
    </div>
  </div>
</template>
