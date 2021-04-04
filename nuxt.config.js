export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ibook',
    htmlAttrs: {
      lang: 'pt',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],
  plugins: ['@/plugins/accessor'],
  components: [ { path: '@/components', pathPrefix: false } ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],

  styleResources: {
    scss: ['@/components/bosons/*.scss'],
   },

  axios: {
    baseURL: 'https://ibook-api.herokuapp.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },
  //   router: {
  //   middleware: ['authenticated']
  // }
}
