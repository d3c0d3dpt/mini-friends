// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Início",
    titleTemplate: "%s - MINI & Friends",

    htmlAttrs: {
      lang: "pt",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      {
        hid: "title",
        name: "title",
        content: "MINI & Friends 08-10-2022",
      },
      {
        hid: "description",
        name: "description",
        content: "Passeio a Caminha / Ponte de Lima",
      },
    ],
  },

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
    },
  },
});
