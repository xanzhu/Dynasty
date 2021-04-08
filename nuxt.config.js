
export default {
  render: {
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'script-src': ["'self'"]
        // 'style-src': ["'self'"]
      },
      addMeta: false
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  modern: 'client',
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'bg-black'
    },
    title: 'Home — xanzhu',
    meta: [
      { charset: 'utf-8' },
      { name: 'http-equiv', content: 'Content-Security-Policy' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'xanzhu.com is currently being developed. Check back soon!' },
      { hid: 'keywords', name: 'keywords', content: 'xanzhu, design, news, music, fashion, technology, tech, media, security, Apple, Android, Google' },
      { property: 'og:type', type: 'website' },
      { property: 'og:title', content: 'XANZHU' },
      { property: 'og:description', content: 'xanzhu.com is a large scale project which is currently being developed!' },
      { property: 'og:url', content: 'https://xanzhu.com' },
      { property: 'og:image', content: '/favicon-DF42.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-DF21.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-DF42.png' },
      { rel: 'mask-icon', href: '/safari-DF01.svg', color: '#ff0000' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    fallback: '404.html',
    interval: 100
  }
}
