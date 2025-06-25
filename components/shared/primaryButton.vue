<template>
  <NuxtLink
    :to="to"
    class="position-relative d-inline-block mt-3 hero-button-wrapper"
  >
    <div
      class="btn rounded-0 d-flex gap-2 align-items-center px-4 py-2 hero-button"
      :class="buttonStyle"
      :style="buttonColorStyle"
    >
      {{ buttonText }}
      <i :class="iconClass" class="fs-5"></i>
    </div>
    <div class="hero-button-shadow" :style="buttonColorStyle"></div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  to: string;
  buttonText: string;
  buttonStyle?: string;
  iconClass?: string;
  buttonColor?: string;
}>();

const buttonColorStyle = computed(() => ({
  "--btn-color": props.buttonColor || "#007bff",
}));
</script>

<style scoped>
.hero-button-wrapper {
  display: inline-block;
  position: relative;
  text-decoration: none;
}

.hero-button {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  border: none;

  background-color: var(--btn-color);
  color: white;
}

.hero-button-shadow {
  position: absolute;
  z-index: 1;
  top: 6px;
  left: 6px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--btn-color);
  pointer-events: none;
  transition: all 0.3s ease;
  background-color: transparent;
}

.hero-button-wrapper:hover .hero-button {
  transform: translate(6px, 6px);
}
</style>
