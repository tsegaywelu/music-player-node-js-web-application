var merge = require('webpack-merge') //webpack ኣብ webpack.test.conf.js configure ጌሮዮ አየ
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
