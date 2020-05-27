export default {
  mode: 'spa',

  head: {
    titleTemplate: '%s :: Luke Carr',

    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap'
      }
    ]
  },

  loading: {
    color: '#fff'
  },

  css: ['sal.js/dist/sal.css', '~/assets/scss/base.scss'],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss']
}
