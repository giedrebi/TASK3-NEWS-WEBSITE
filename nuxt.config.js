export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ts-app',
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
      {
        rel: "stylesheet",
        href: 'href="https://fonts.googleapis.com/css?family=Poppins',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue2-timeago/dist/vue2-timeago.css'
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-masonry.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  axios: {
    // proxy: true
  },
  colorMode: {
    // preference: 'system', // default value of $colorMode.preference
    // fallback: 'light', // fallback value if not system preference found
    // hid: 'nuxt-color-mode-script',
    // globalName: '__NUXT_COLOR_MODE__',
    // componentName: 'ColorModePicker',
    // classPrefix: '',
    // classSuffix: '-mode',
    // storageKey: 'nuxt-color-mode'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}

