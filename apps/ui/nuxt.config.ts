// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
  devtools: { enabled: true },
  modules: ["@wagmi/vue/nuxt", "@nuxtjs/tailwindcss"],
});
