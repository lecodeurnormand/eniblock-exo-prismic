import { apiEndpoint } from './sm.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eniblock-exo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  svg:{
    vueSvgLoader: {
    // vue-svg-loader options
  },
    svgSpriteLoader: {
    // svg-sprite-loader options
  },
    fileLoader: {
    // file-loader options
  }
},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // // SCSS file in the project
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/prismic',
    ["@nuxtjs/svg"],  
  ],
  styleResources: {
    scss: [
        '~/assets/scss/style.scss',
    ]
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  prismic: {
    endpoint: apiEndpoint,
    modern: true,
    // apiOptions:{
      routes:[
        {
          type: 'page',
          path: '/:uid'
        },
      ]
    // }
    /* see configuration for more */
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@prismicio/vue","vue-slicezone"],

  }
}
