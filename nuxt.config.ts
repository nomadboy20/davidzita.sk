// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ['~/assets/main.scss'],
    modules: [
        '@nuxtjs/web-vitals',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ]
})
