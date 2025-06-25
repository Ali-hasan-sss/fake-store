// stores/categories.ts
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [] as string[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchCategories() {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        // fakestore API endpoint لجلب الفئات
        const response = await $api.get<string[]>("/products/categories");
        this.categories = response.data;
      } catch {
        this.error = "فشل تحميل الفئات";
      } finally {
        this.loading = false;
      }
    },
  },
});
