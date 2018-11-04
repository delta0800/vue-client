const pkg = require('./package')
const path = require('path')
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'VueBlog, Vuejs, Nodejs, 服务端渲染, ssr, Nuxtjs'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '一个基于Nxutjs开发的小型博客应用，让你可以为所欲为的分享自己的知识和创作'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css', '~assets/css/reset.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui', '@/plugins/icon'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxy: {
    '/admin': {
      target: 'http://localhost:4000',
      changeOrigin: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // get and remove file loader
      const rule = config.module.rules.find(
        r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/'
      )
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)
      // add it again, but now without 'assets\/svg'
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        exclude: /(assets\/icons)/,
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      })

      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/icons')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    }
  }
}
