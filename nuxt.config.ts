export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: true },
  css: ["@/assets/css/global.css", "vuetify/styles"],
  modules: ["vuetify-nuxt-module", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "light", // یا dark
      },
      defaults: {
        global: {
          ripple: true,
        },
      },
      rtl: true, // 👈 اینو اضافه کن
    },
  },
  build: {
    transpile: ["vuetify"],
  },
});
