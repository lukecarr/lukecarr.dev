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
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Luke Carr'
      },
      {
        name: 'application-name',
        content: 'Luke Carr'
      },
      {
        name: 'msapplication-TileColor',
        content: '#5c677d'
      },
      {
        name: 'msapplication-config',
        content: '/icons/browserconfig.xml?v=GvbpmoowYb'
      },
      {
        name: 'theme-color',
        content: '#5c677d'
      }
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png?v=GvbpmoowYb'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png?v=GvbpmoowYb'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png?v=GvbpmoowYb'
      },
      {
        rel: 'manifest',
        href: '/icons/site.webmanifest?v=GvbpmoowYb'
      },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg?v=GvbpmoowYb',
        color: '#5c677d'
      },
      {
        rel: 'shortcut icon',
        href: '/icons/favicon.ico?v=GvbpmoowYb'
      }
    ]
  },

  loading: {
    color: '#fff'
  },

  css: ['animate.css/animate.css', '~/assets/scss/base.scss'],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss']
}
