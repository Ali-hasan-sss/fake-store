<script setup lang="ts">
import type { Product } from "@/typings/products";
import { API_BASE_URL } from "@/utils/api";
import { useCartStore } from "@/stores/carts";
import ProductCard from "@/components/cards/ProductCard.vue";
import BaseSpinner from "~/components/shared/BaseSpinner.vue";

const cartStore = useCartStore();

const {
  data: products,
  pending,
  error,
  //هنا استخدمت useAsyncData قصدا لانني لا اريد اختفاء المنتجات اثناء اعادة التحميل
} = useAsyncData<Product[]>("products", () =>
  $fetch(`${API_BASE_URL}/products`)
);

const handleAddToCart = async (product: Product) => {
  await cartStore.addProduct(product.id, 1);
};
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold text-center">ALL PRPDUCTS</h2>

    <div v-if="pending">
      <div class="d-flex align-items-center justify-content-center">
        <BaseSpinner customClass="text-primary" width="3rem" height="3rem" />
      </div>
    </div>
    <div v-else-if="error">error fetching data</div>

    <div class="row" v-else>
      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 col-sm-6 mb-4"
      >
        <ProductCard :product="product" :onAddToCart="handleAddToCart" />
      </div>
    </div>
  </div>
</template>
