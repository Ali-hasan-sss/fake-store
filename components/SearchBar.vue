<template>
  <div class="position-relative w-100" style="max-width: 300px">
    <form
      @submit.prevent
      class="d-flex align-items-center bg-light px-2 rounded"
      style="height: 38px"
    >
      <input
        v-model="query"
        type="search"
        placeholder="Search"
        class="form-control form-control-sm border-0 bg-transparent no-outline"
        @input="handleSearch"
      />
      <button type="submit" class="btn btn-sm border-0 bg-transparent p-0">
        <i class="bi bi-search text-dark"></i>
      </button>
    </form>

    <!--  search result -->
    <div
      v-if="query && filteredProducts.length"
      class="position-absolute bg-white shadow rounded mt-1 p-2"
      style="width: 100%; z-index: 999"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="d-flex align-items-center mb-2 border-bottom pb-2"
        style="gap: 10px"
      >
        <img
          :src="product.image"
          alt="product"
          width="50"
          height="50"
          style="object-fit: contain"
        />
        <div class="flex-grow-1">
          <div class="fw-bold">{{ product.name }}</div>
          <div class="text-muted small">{{ product.price }} USD</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// test data
const products = ref([
  {
    id: 1,
    name: "Smart Watch",
    price: 99.99,
    image: "/images/a.jpg",
  },
  {
    id: 2,
    name: "Gold Ring",
    price: 149.99,
    image: "/images/aa.jpg",
  },
  {
    id: 3,
    name: "Men Jacket",
    price: 59.99,
    image: "/images/aaa.jpg",
  },
  {
    id: 4,
    name: "Leather Bag",
    price: 79.99,
    image: "/Images/aaaa.jpg",
  },
]);

const query = ref("");

const filteredProducts = computed(() =>
  products.value.filter((p) =>
    p.name.toLowerCase().includes(query.value.toLowerCase())
  )
);

function handleSearch() {
  //
  // try {
  //   const response = await $fetch('/api/search', {
  //     method: 'GET',
  //     params: { q: query.value },
  //   })
  //   products.value = response.data
  // } catch (error) {
  //   console.error('Search failed:', error)
  // }
}
</script>

<style scoped>
.no-outline:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>
