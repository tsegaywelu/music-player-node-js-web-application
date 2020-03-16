var merge = require('webpack-merge') //webpack ኣብ webpack.test.conf.js configure ጌሮዮ አየ
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
