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
    ],

    script: [
      {
        src: '/sal.js'
      }
    ]
  },

  loading: {
    color: '#fff'
  },

  css: ['~/assets/scss/sal.scss', '~/assets/scss/base.scss'],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss']
}
