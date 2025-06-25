<template>
  <div class="card product-card shadow-sm border-0 h-100 d-flex flex-column">
    <img
      :src="product.image"
      alt="صورة المنتج"
      class="card-img-top"
      style="height: 250px; object-fit: contain"
    />
    <div
      class="card-body text-center d-flex flex-column justify-content-between flex-grow-1"
    >
      <div>
        <h5 class="card-title mb-2 product-title">{{ product.title }}</h5>
        <p class="card-text fw-bold mb-3">{{ product.price }} $</p>
      </div>

      <div class="d-flex justify-content-center gap-2 mt-auto">
        <NuxtLink
          :to="`/products/${product.id}`"
          class="btn btn-outline-primary btn-sm"
        >
          VIEW PRODUCT
        </NuxtLink>
        <button
          class="btn btn-success btn-sm"
          :disabled="loading"
          @click="handleAddToCart"
        >
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-if="!loading">ADD TO CART</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { NuxtLink } from "#components";
import type { Product } from "@/typings/products";

const props = defineProps<{
  product: Product;
  onAddToCart?: (product: Product) => Promise<void> | void;
}>();

const loading = ref(false);

const handleAddToCart = async () => {
  if (!props.onAddToCart) return;
  loading.value = true;
  try {
    await props.onAddToCart(props.product);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.product-card {
  min-height: 420px;
  max-height: 420px;
}

.product-title {
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
