const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.config-base')
const production = process.env.NODE_ENV === 'production' ? 1 : 0
module.exports = merge(base, {
  entry: {
    bundle: resolve(__dirname, '../pc/main')
  },
  output: {
    path: resolve(__dirname, '../dist-pc'),
    filename: production ? '[name].js?[chunkhash]' : '[name].js',
    chunkFilename: production ? '[name].js?[chunkhash]' : '[name].js',
    publicPath: '/'
  },
  optimization: production ? {
    splitChunks: {
      cacheGroups: {
        manifest: {
          test: /[\\/]node_modules[\\/]/,
          name: 'manifest',
          chunks: 'all'
        }
      }
    }
  } : {},
  devServer: production ? {} : {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    contentBase: resolve(__dirname, '../dist-pc'),
    proxy: {
      '/api': {
        target: 'https://m.xxx.com/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '~': resolve(__dirname, '../pc')
    }
  },
  plugins: [].concat(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../pc/template.html')
    }),
    production ? [] : [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  )
})
