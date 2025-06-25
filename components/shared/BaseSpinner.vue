<!-- components/shared/BaseSpinner.vue -->
<template>
  <div
    class="spinner-border"
    :class="[`spinner-border-${size}`, customClass]"
    role="status"
    :style="spinnerStyle"
  >
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  size?: "sm" | "lg" | "xl" | "";
  width?: string;
  height?: string;
  customClass?: string;
}>();

const spinnerStyle = computed(() => ({
  width: props.width || "1rem",
  height: props.height || "1rem",
}));
</script>
