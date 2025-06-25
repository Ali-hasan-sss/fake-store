export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  plugins: ["~/plugins/bootstrap.client.ts"],
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
        },
      ],
    },
  },
});
