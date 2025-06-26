<template>
  <div class="container my-5" style="max-width: 400px">
    <div class="card shadow border-0">
      <div class="card-body p-4">
        <h4 class="text-center fw-bold mb-4">
          {{ isLogin ? "Login" : "Create Account" }}
        </h4>

        <!-- Toggle Switch -->
        <div class="form-check form-switch d-flex justify-content-center mb-4">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="toggleAuth"
            v-model="isLogin"
          />
          <label class="form-check-label ms-2" for="toggleAuth">
            {{
              isLogin ? "I dont have an account" : "I olready have an account"
            }}
          </label>
        </div>

        <form @submit.prevent="handleSubmit">
          <!-- Full Name (Register only) -->
          <div v-if="!isLogin" class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              v-model="form.fullName"
              type="text"
              id="fullName"
              class="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <!-- Password -->
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="form.password"
              type="password"
              id="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" class="btn btn-dark w-100 mt-3">
            {{ isLogin ? "Login" : "Register" }}
          </button>

          <div v-if="message" class="alert alert-info mt-3 text-center">
            {{ message }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLogin = ref(true);
const message = ref("");

const form = ref({
  fullName: "",
  email: "",
  password: "",
});

function handleSubmit() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (isLogin.value) {
    const found = users.find(
      (u: any) =>
        u.email === form.value.email && u.password === form.value.password
    );

    if (found) {
      localStorage.setItem("currentUser", JSON.stringify(found));
      router.push("/");
    } else {
      message.value = "Invalid email or password";
    }
  } else {
    const exists = users.find((u: any) => u.email === form.value.email);

    if (exists) {
      message.value = "Email already registered.";
      return;
    }

    const newUser = {
      fullName: form.value.fullName,
      email: form.value.email,
      password: form.value.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    router.push("/");
  }
}
</script>
