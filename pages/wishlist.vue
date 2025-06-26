<template>
  <div class="container my-5">
    <h2 class="text-center fw-bold mb-4">My Wishlist</h2>

    <div class="row">
      <div
        v-for="product in wishlist"
        :key="product.id"
        class="col-md-4 col-sm-6 mb-4"
      >
        <ProductCard :product="product" :onAddToCart="handleAddToCart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/cards/ProductCard.vue";
import type { Product } from "@/typings/products";

// Sample wishlist products
const wishlist: Product[] = [
  {
    id: 1,
    title: "Smart Watch for Men",
    price: 120,
    description: "A sleek smartwatch compatible with all platforms.",
    category: "electronics",
    image: "/images/a.jpg",
    rating: { rate: 4.5, count: 32 },
  },
  {
    id: 2,
    title: "Diamond Women's Bracelet",
    price: 250,
    description: "A beautiful bracelet encrusted with gemstones.",
    category: "jewelry",
    image: "/images/aa.jpg",
    rating: { rate: 4.8, count: 18 },
  },
  {
    id: 3,
    title: "Men's Sports T-shirt",
    price: 45,
    description: "Made from high-quality breathable fabric.",
    category: "men clothing",
    image: "/images/aaa.jpg",
    rating: { rate: 4.2, count: 41 },
  },
];

const handleAddToCart = (product: Product) => {
  console.log(`Product added to cart: ${product.title}`);
};
</script>
