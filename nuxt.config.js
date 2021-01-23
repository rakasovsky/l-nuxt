const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  loading: { color: '#3B8070' },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lumex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'static/styles/style.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/swiper.js', mode: 'client' },
    { src: '@/plugins/vue-modal.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
   
  ],


  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-gmaps', {
      key: 'AIzaSyCj0CTmW0SEtwx7gz6zkgokJASsemggRfE',
     
    }],
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['cart'] //  If not entered, “localStorage” is the default value
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { loaders }) {
      config.module.rules.push({
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }  
          }
        ]
      })
     
    }
  },
  transpile: ['gsap']
}
