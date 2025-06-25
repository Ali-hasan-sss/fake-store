<script setup lang="ts">
import { useCartStore } from "@/stores/carts";
import { onMounted } from "vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.fetchCart();
});

const increaseQuantity = (productId: number, currentQty: number) => {
  cartStore.updateProductQuantity(productId, currentQty + 1);
};

const decreaseQuantity = (productId: number, currentQty: number) => {
  cartStore.updateProductQuantity(productId, currentQty - 1);
};
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-4">🛒 سلة التسوق</h2>

    <div v-if="cartStore.loading">جاري تحميل السلة...</div>
    <div v-else-if="cartStore.error" class="text-danger">
      {{ cartStore.error }}
    </div>

    <div v-else>
      <div v-if="cartStore.cart && cartStore.cart.products.length">
        <ul class="list-group">
          <li
            v-for="item in cartStore.cart.products"
            :key="item.productId"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              المنتج: <strong>{{ item.productId }}</strong>
              <br />

              <div class="d-flex align-items-center gap-2 mt-1">
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="decreaseQuantity(item.productId, item.quantity)"
                  :disabled="item.quantity <= 1"
                >
                  -
                </button>
                <span
                  >الكمية: <strong>{{ item.quantity }}</strong></span
                >
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="increaseQuantity(item.productId, item.quantity)"
                >
                  +
                </button>
              </div>
            </div>

            <button
              class="btn btn-danger btn-sm"
              @click="cartStore.removeProduct(item.productId)"
            >
              حذف
            </button>
          </li>
        </ul>

        <p class="mt-3">
          <strong>إجمالي عدد المنتجات: </strong>{{ cartStore.totalItems }}
        </p>

        <button class="btn btn-warning" @click="cartStore.deleteCart()">
          حذف السلة بالكامل
        </button>
      </div>

      <div v-else>
        <p>السلة فارغة.</p>
      </div>
    </div>
  </div>
</template>
