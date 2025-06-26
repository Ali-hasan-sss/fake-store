<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold text-center">🛒 Shopping Cart</h2>

    <div v-if="cartStore.loading && !cartStore.cart" class="text-center">
      Loading your cart...
    </div>

    <div v-else-if="cartStore.error" class="text-danger text-center">
      {{ cartStore.error }}
    </div>

    <div v-else>
      <div v-if="cartStore.cart && cartStore.cart.products.length">
        <div class="row">
          <div
            v-for="item in cartStore.cart.products"
            :key="item.productId"
            class="col-md-4 col-sm-6 mb-4"
          >
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 class="card-title">Product ID: {{ item.productId }}</h5>
                  <p class="card-text">
                    Quantity:
                    <span class="fw-bold">{{ item.quantity }}</span>
                  </p>

                  <div class="d-flex gap-2 align-items-center mb-3">
                    <button
                      class="btn btn-sm btn-outline-secondary"
                      @click="decreaseQuantity(item.productId, item.quantity)"
                      :disabled="
                        item.quantity <= 1 || isUpdating(item.productId)
                      "
                    >
                      -
                    </button>

                    <div v-if="isUpdating(item.productId)">
                      <span class="spinner-border spinner-border-sm"></span>
                    </div>
                    <div v-else>
                      <span>{{ item.quantity }}</span>
                    </div>

                    <button
                      class="btn btn-sm btn-outline-secondary"
                      @click="increaseQuantity(item.productId, item.quantity)"
                      :disabled="isUpdating(item.productId)"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  class="btn btn-sm btn-danger mt-auto"
                  @click="cartStore.removeProduct(item.productId)"
                  :disabled="isUpdating(item.productId)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <p class="fw-bold">Total Items: {{ cartStore.totalItems }}</p>

          <button
            class="btn btn-outline-dark px-4 mx-3 py-2"
            @click="cartStore.deleteCart()"
            :disabled="cartStore.loading"
          >
            Clear Cart
          </button>

          <button class="btn btn-dark px-4 py-2" @click="checkout">
            Checkout
          </button>
        </div>
      </div>

      <div v-else class="text-center">
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/carts";
import { onMounted } from "vue";

const cartStore = useCartStore();
//ملاحظة منتجات السلة ترجع فقط بمعرف المستخدم ومعرف المنتج لذلك لا يتم عرض بظاقة المنتج كاملة صورة وعنوان وسعر والخ يمكن جلب المنتج حسب المعرف من حالة المنتجات المخزنة في الستور ولكن للتقيت بالوقت قمت بكتابة هذه الملاحظة
onMounted(() => {
  cartStore.fetchCart();
});

const increaseQuantity = (productId: number, currentQty: number) => {
  cartStore.updateProductQuantity(productId, currentQty + 1);
};

const decreaseQuantity = (productId: number, currentQty: number) => {
  if (currentQty > 1) {
    cartStore.updateProductQuantity(productId, currentQty - 1);
  }
};

const isUpdating = (productId: number) => {
  return cartStore.updatingItemId === productId;
};

const checkout = () => {
  alert("Proceeding to checkout...");
};
</script>
