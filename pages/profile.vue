<template>
  <div class="container my-5">
    <div class="position-relative rounded mb-5 shadow">
      <img
        src="/images/cover.jpg"
        alt="Cover"
        class="w-100"
        style="height: 200px; object-fit: cover"
      />
      <div
        class="position-absolute top-100 start-50 translate-middle"
        style="width: 120px; height: 120px; transform: translate(-50%, -50%)"
      >
        <img
          src="/images/profile.jpg"
          alt="Profile"
          class="rounded-circle border border-3 border-white w-100 h-100"
          style="object-fit: cover"
        />
      </div>
    </div>

    <div class="text-center mt-5 pt-3">
      <h3 class="fw-bold mb-1">{{ user.fullName }}</h3>
      <p class="text-muted">{{ user.email }}</p>

      <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <button class="btn btn-outline-dark px-4 py-2" @click="editProfile">
          <i class="bi bi-pencil me-2"></i> Edit Profile
        </button>
        <button class="btn btn-dark px-4 py-2" @click="logout">
          <i class="bi bi-box-arrow-right me-2"></i> Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const user = ref({ fullName: "", email: "" });

onMounted(() => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    user.value = JSON.parse(currentUser);
  } else {
    router.push("/register");
  }
});

function logout() {
  localStorage.removeItem("currentUser");
  router.push("/");
}

function editProfile() {
  alert("Edit feature is not implemented yet.");
}
</script>
