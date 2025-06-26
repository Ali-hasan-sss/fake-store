import { defineStore } from "pinia";
import type { Cart, CartProduct } from "~/typings/carts";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: null as Cart | null,
    loading: false,
    error: null as string | null,
    userId: 1,
    updatingItemId: null as number | null,
  }),

  getters: {
    totalItems: (state) =>
      state.cart?.products.reduce((sum, p) => sum + p.quantity, 0) ?? 0,
  },

  actions: {
    async fetchCart() {
      this.loading = true;
      try {
        const { $api } = useNuxtApp();
        const response = await $api.get<Cart>(`/carts/${this.userId}`);
        this.cart = response.data;
      } catch {
        this.error = "فشل تحميل السلة";
      } finally {
        this.loading = false;
      }
    },

    async createCart(initialProduct: CartProduct) {
      const { $api } = useNuxtApp();
      const response = await $api.post<Cart>("/carts", {
        userId: this.userId,
        date: new Date().toISOString(),
        products: [initialProduct],
      });
      this.cart = response.data;
    },

    async addProduct(productId: number, quantity = 1) {
      this.loading = true;
      try {
        const { $api } = useNuxtApp();

        if (!this.cart) {
          await this.createCart({ productId, quantity });
          return;
        }

        const existingProduct = this.cart.products.find(
          (p) => p.productId === productId
        );

        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          this.cart.products.push({ productId, quantity });
        }

        const response = await $api.put<Cart>(`/carts/${this.cart.id}`, {
          date: new Date().toISOString(),
          products: this.cart.products,
        });

        this.cart = response.data;
      } catch {
        this.error = "فشل إضافة المنتج إلى السلة";
      } finally {
        this.loading = false;
      }
    },

    async updateProductQuantity(productId: number, quantity: number) {
      if (!this.cart) return;
      this.updatingItemId = productId;
      this.loading = true;
      try {
        const { $api } = useNuxtApp();

        const productIndex = this.cart.products.findIndex(
          (p) => p.productId === productId
        );

        if (productIndex === -1) return;

        if (quantity <= 0) {
          this.cart.products.splice(productIndex, 1);
        } else {
          this.cart.products[productIndex].quantity = quantity;
        }

        const response = await $api.put<Cart>(`/carts/${this.cart.id}`, {
          date: new Date().toISOString(),
          products: this.cart.products,
        });

        this.cart = response.data;
      } catch {
        this.error = "فشل تعديل كمية المنتج";
      } finally {
        this.loading = false;
      }
    },

    async removeProduct(productId: number) {
      if (!this.cart) return;

      this.loading = true;
      try {
        const { $api } = useNuxtApp();

        this.cart.products = this.cart.products.filter(
          (p) => p.productId !== productId
        );

        const response = await $api.put<Cart>(`/carts/${this.cart.id}`, {
          date: new Date().toISOString(),
          products: this.cart.products,
        });

        this.cart = response.data;
      } catch {
        this.error = "فشل حذف المنتج من السلة";
      } finally {
        this.loading = false;
      }
    },

    async deleteCart() {
      this.loading = true;
      try {
        const { $api } = useNuxtApp();

        await $api.delete(`/carts/${this.cart?.id}`);
        this.cart = null;
      } catch {
        this.error = "فشل حذف السلة";
      } finally {
        this.loading = false;
      }
    },
  },
});
