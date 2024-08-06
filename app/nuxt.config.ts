// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-swiper', "nuxt-viewport", "@nuxtjs/seo"],

  site: {
    url: 'https://bentofolio.zachl.tech',
    name: 'Zach\'s Bentofolio',
    description: 'A bento grid style portfolio to show off my skills and experience :D - a pocket portfolio!',
    defaultLocale: 'en',
  },

  compatibilityDate: '2024-07-29',
})