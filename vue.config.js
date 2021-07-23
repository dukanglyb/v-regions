const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  pages: {
    index: {
      title: '2021最新省市区县级联动',
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        static: resolve('static'),
        components: resolve('examples/components'),
        assets: resolve('examples/assets'),
        views: resolve('examples/views'),
      },
    },
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .include.add('/examples')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => options);
    
  },
  outputDir: 'lib',
  productionSourceMap: false,
  devServer: {
    port: 3000,
    hot: true,
    open: 'Google Chrome',
  },
};
