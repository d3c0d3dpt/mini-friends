// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],

  colorMode: {
    preference: "system",
    fallback: "light",

    // DaisyUI
    dataValue: "theme",
    classSuffix: "",
  },

  googleFonts: {
    download: false,

    families: {
      Audiowide: true,
      "Open Sans": true,
    },
  },
});
