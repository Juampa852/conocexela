export default {
  /* vue: {
    config: {
      productionTip: true,
      devtools: true,
      silent: false
    }
  }, */
  mode: 'universal',
  /*
   ** Headers of the page
    Original: <process.env.npm_package_description || ''> en contentent de description y en Title
   */
  head: {
    title: 'ConoceXela - Encántate por la ciudad de Quetzaltenango',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' },
      { name: 'og:url', content: 'http://conocexela.info' },
      { name: 'og:title', content: 'ConoceXela - Encántate por la ciudad de Quetzaltenango' },
      { name: 'og:locale', content: 'es_ES' },
      { name: 'og:site_name', content: 'ConoceXela' },
      {
        hid: 'description',
        name: 'description',
        content: 'Dar a conocer información sobre Quetzaltenango, Guatemala (Xela) a las personas locales y turistas interesados'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@ajusa/lit@latest/dist/lit.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'aos/dist/aos.css',
    'animate.css/animate.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vue2-google-maps.js', ssr: false },
    { src: '~/plugins/parallax.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  robots: {
    UserAgent: '*',
    Allow: [
      '/',
      '/lugares',
      '/cultura',
      '/comida'
    ],
    Sitemap: 'http://conocexela.info/sitemap.xml'
  },
  sitemap: {
    hostname: 'http://conocexela.info',
    path: '/sitemap.xml',
    generate: false,
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      '/',
      '/lugares',
      '/cultura',
      '/comida'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
