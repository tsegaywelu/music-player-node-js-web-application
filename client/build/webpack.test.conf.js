//እዚ webpack config እዩ  unit tests ድማ ተጠቂመሉ.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseConfig, {
  
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      
      // ከመይ ከም ዝሰርሕ ኣብዚ ኣሎ https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

//  app entry ኣየድልን
delete webpackConfig.entry

module.exports = webpackConfig
