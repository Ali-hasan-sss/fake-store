// stores/products.ts
import { defineStore } from "pinia";
import type { Product } from "~/typings/products";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        const response = await $api.get<Product[]>("/products");
        this.products = response.data;
      } catch {
        this.error = "فشل تحميل المنتجات";
      } finally {
        this.loading = false;
      }
    },

    async fetchProduct(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        const response = await $api.get<Product>(`/products/${id}`);
        this.selectedProduct = response.data;
      } catch {
        this.error = "فشل تحميل المنتج";
      } finally {
        this.loading = false;
      }
    },

    // because fakeApi we fetch by categoryName *** usually we use get product by category id
    async fetchProductsByCategory(categoryName: string | number) {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        const response = await $api.get<Product[]>(
          `/products/category/${categoryName}`
        );
        this.products = response.data;
      } catch {
        this.error = "فشل تحميل المنتجات حسب الفئة";
      } finally {
        this.loading = false;
      }
    },
  },
});
