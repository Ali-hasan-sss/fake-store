<template>
  <section
    class="jeeilry-banner my-4 d-flex justify-content-start align-items-end p-5 text-center"
  >
    <HeroButton
      to="/category/jewelery"
      buttonText="SEE MORE"
      buttonStyle="text-dark"
      buttonColor="#ffffff"
      iconClass="bi bi-arrow-right"
    />
  </section>
</template>

<script setup>
import HeroButton from "~/components/shared/primaryButton.vue";
</script>

<style scoped>
.jeeilry-banner {
  background-image: url("/images/jewelry.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 400px;
  width: 100%;
}
</style>
