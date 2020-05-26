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
        src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
        integrity: 'sha256-pQBbLkFHcP1cy0C8IhoSdxlm0CtcH5yJ2ki9jjgR03c=',
        crossorigin: 'anonymous'
      }
    ]
  },

  loading: {
    color: '#fff'
  },

  css: ['~/assets/scss/base.scss', 'aos/dist/aos.css'],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss']
}
