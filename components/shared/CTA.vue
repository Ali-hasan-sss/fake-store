<template>
  <div class="my-1 mt-3">
    <div
      class="d-flex gap-4 justify-content-center align-items-center"
      style="width: 100%; height: 200px; background-color: #ecec1c"
    >
      <p class="m-0 fw-bold mt-3">{{ content }}</p>
      <PrimaryButton
        :to="link"
        :buttonText="btnLabel"
        buttonStyle="text-white"
        :buttonColor="'#111111'"
        iconClass="bi bi-arrow-right"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "~/components/shared/primaryButton.vue";
defineProps<{
  content: string;
  btnLabel: string;
  link: string;
}>();
</script>
