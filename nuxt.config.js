export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'toshkent-yodgorlik',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", integrity:"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}
    ]
  },

  loading: {
   continuous: true,
   color: '#3A8DDA',
   height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/assets/sass/index.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/strapi'
  ],

   i18n: {
      locales: [
         {
            code: 'uz',
            file: 'uz.json'
         },
         {
           code: 'ru',
           file: 'ru.json'
         },
         {
            code: 'en',
            file: 'en.json'
         },
      ],
      lazy: true,
      langDir: '~/locales/',
      defaultLocale: 'uz'
   },

   strapi: {
      entities: [
         { name: 'home', type: 'single' }
      ]
   },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
