const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})

const withImages = require('next-images')
module.exports = withImages()

