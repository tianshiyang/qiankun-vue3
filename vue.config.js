const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: config => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = "umd"
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`
  },
})
