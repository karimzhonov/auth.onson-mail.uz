// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
    public: {
      NUXT_APP_BACKEND_HOST: process.env.NUXT_APP_BACKEND_HOST,
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-telegram-auth',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'dark',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'ru', language: 'ru', name: 'Русский', file: 'ru.json', cache: false },
      { code: 'uz', language: 'uz', name: 'O\'zbek', file: 'uz.json', cache: false }
    ],
    defaultLocale: 'ru'
  },
})