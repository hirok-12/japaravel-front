// https://v3.nuxtjs.org/api/configuration/nuxt.config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Japaravel',
      meta: [
        { charaset: 'utf-8' },
        {
          namae: 'viewport',
          content: 'width=device-width, user-scalable=yes,initial-scale=1.0',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        },
      ],
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
})
