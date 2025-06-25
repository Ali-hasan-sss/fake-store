// plugins/api.ts
import axios from "axios";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: process.env.API_BASE_URL || "https://fakestoreapi.com",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // إضافة توكن من الكوكيز (مثلاً)
  api.interceptors.request.use((config) => {
    const cookies = (nuxtApp as any).$cookies;
    const token = cookies?.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  nuxtApp.provide("api", api);
});
