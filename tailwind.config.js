/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      display: ['Helvetica Neue'],
      body: ['Open Sans, sans-serif', 'Verdana', 'sans-serif']
    },
    inset: {
      0: 0,
      auto: 'auto',
      '1/2': '50%'
    },
    // extend: {
    //   colors: {
    //     gray: {
    //       '909': '#0A181C',
    //     }
    //   }
    // }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
