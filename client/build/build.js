require('./songversion')()// እዚኣ ጥራሕ version እያ check ትገብር 

process.env.NODE_ENV = 'production'

var ora = require('ora')     //እዚኣቶም ኩሎም "module" ድሓር ሰርች ምስ ኣበየኒ install ጌረ  ሰሪሐ
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,                                    //እዞም boolean ዥተጠቀምኩ ምእንታን components add ክገብር እየ
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: you love amharic music than tigrigna music .\n' +
      '  Opening index.html over file:// won\'t work for to day.\n'
    ))
  })
})
