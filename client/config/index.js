//documentation ኣብዚ ኣሎ  http://vuejs-templates.github.io/webpack .
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    
    // npm install --save-dev compression-webpack-plugin  ኣዚኣ ወሳኒት እያ run ቅድሚ ምካና
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    
    // `npm run build --report` ኩሉ ንምራኣይ
    
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    
    // ኣብዚ ኣንቢበዮ https://github.com/webpack/css-loader#sourcemaps
    
    cssSourceMap: false
  }
}
