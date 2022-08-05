const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

// export default {
//   // Target (https://go.nuxtjs.dev/config-target)
//   target: 'static',
module.exports = {
  ...(!isDev && {
    modern: 'client'
  }),
  loading: { color: '#3B8070' },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lumex',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'author', name: 'author', content: 'Rrr' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js",async: false,defer: true},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js",async: false,defer: true},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"}
    ]
  },
  router: {
    prefetchLinks: false
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'static/styles/style.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/swiper.js', mode: 'client' },
    { src: '@/plugins/vue-modal.js', mode: 'client' },
    { src: '@/plugins/vue-pagination.js'}
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
    // 'nuxt-lazy-load',
    'cookie-universal-nuxt',
    ['nuxt-gmaps', {
      key: 'AIzaSyCj0CTmW0SEtwx7gz6zkgokJASsemggRfE',
     
    }],
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['cart'] //  If not entered, “localStorage” is the default value
    }],
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'en'
      },
    locales: [
      {
        name: 'RU',
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js'
      },
      {
        name: 'UA',
        code: 'ua',
        iso: 'ua-UA',
        file: 'ua-UA.js'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ua',
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: isDev ? 'http://localhost:3000/' : 'http://1896990.lumex.web.hosting-test.net/'
   // baseURL: isDev ? 'http://localhost:3000/static/' : 'https://domain/api'
  },
  render: {
    http2: {
        push: true,
        pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
      },
    compressor: false,
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  // optimizeCss: false,
  //   filenames: {
  //     app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
  //     chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
  //     css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
  //     img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
  //     font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
  //     video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
  //   },
  //   ...(!isDev && {
  //     html: {
  //       minify: {
  //         collapseBooleanAttributes: true,
  //         decodeEntities: true,
  //         minifyCSS: true,
  //         minifyJS: true,
  //         processConditionalComments: true,
  //         removeEmptyAttributes: true,
  //         removeRedundantAttributes: true,
  //         trimCustomFragments: true,
  //         useShortDoctype: true
  //       }
  //     }
  //   }),
  //   splitChunks: {
  //     layouts: true,
  //     pages: true,
  //     commons: true
  //   },
  //   optimization: {
  //     minimize: !isDev
  //   },
  //   ...(!isDev && {
  //     extractCSS: {
  //       ignoreOrder: true
  //     }
  //   }),
  //   transpile: ['vue-lazy-hydration', 'intersection-observer'],
  //   postcss: {
  //     plugins: {
  //       ...(!isDev && {
  //         cssnano: {
  //           preset: ['advanced', {
  //             autoprefixer: false,
  //             cssDeclarationSorter: false,
  //             zindex: false,
  //             discardComments: {
  //               removeAll: true
  //             }
  //           }]
  //         }
  //       })
  //     },
  //     ...(!isDev && {
  //       preset: {
  //         browsers: 'cover 99.5%',
  //         autoprefixer: true
  //       }
  //     }),

  //     order: 'cssnanoLast'
  //   },
  //   extend (config, ctx) {
  //     const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
  //     const vueSvgLoader = [
  //       {
  //         loader: 'vue-svg-loader',
  //         options: {
  //           svgo: false
  //         }
  //       }
  //     ]
  //     const imageMinPlugin = new ImageminPlugin({
  //       pngquant: {
  //         quality: '5-30',
  //         speed: 7,
  //         strip: true
  //       },
  //       jpegtran: {
  //         progressive: true

  //       },
  //       gifsicle: {
  //         interlaced: true
  //       },
  //       plugins: [
  //         imageminMozjpeg({
  //           quality: 70,
  //           progressive: true
  //         })

  //       ]
  //     })
  //     if (!ctx.isDev) config.plugins.push(imageMinPlugin)

  //     config.module.rules.forEach(rule => {
  //       if (rule.test.toString() === ORIGINAL_TEST) {
  //         rule.test = /\.(png|jpe?g|gif|webp)$/i
  //         rule.use = [
  //           {
  //             loader: 'url-loader',
  //             options: {
  //               limit: 1000,
  //               name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
  //             }
  //           }
  //         ]
  //       }
  //     })


      
  //   },
    extend(config, { loaders, isClient }) {
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
      // if (isClient) {
      //   config.devtool = '#source-map'
      // }
    },
  }
}




