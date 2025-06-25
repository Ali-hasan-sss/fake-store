<template>
  <div class="card product-card">
    <div class="image-container">
      <img
        :src="product.image"
        alt="Product Image"
        class="img-fluid product-image"
      />
    </div>
    <div class="card-body text-center text-muted content">
      <p class="mb-2">{{ product.description }}</p>
      <p class="mb-0">
        <span class="price me-2">{{ product.price }}</span>
        <del>{{ product.oldPrice }}</del>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  image: string;
  description: string;
  price: string;
  oldPrice?: string;
}

defineProps<{
  product: Product;
}>();
</script>

<style scoped>
.product-card {
  width: 250px;
  height: 350px;
  transition: transform 0.3s ease;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border: none;
}

.product-card:hover {
  transform: scale(1.05);
}

.image-container {
  height: 75%;
  overflow: hidden;
  box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 0 10px;
}

.price {
  font-weight: bold;
  color: rgb(16, 17, 16);
}
</style>
