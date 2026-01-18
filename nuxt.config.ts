// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Disable SSR for SPA mode
  ssr: false,

  // Modules
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/eslint'],

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss',
  },
})
