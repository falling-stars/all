const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: resolve(__dirname, '../m/main'),
    vue: ['vue', 'vuex', 'vue-router']
  },
  output: {
    path: resolve(__dirname, '../dist-m'),
    filename: '[name].js?[chunkhash:8]',
    chunkFilename: '[name].js?[chunkhash:8]'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
      {test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.vue$/, loader: ['vue-loader']},
      {
        test: /favicon\.ico/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.ico$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'assets/images/[name].[hash].[ext]',
            limit: 5000
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vue',
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../m/template.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '~': resolve(__dirname, '../m')
    }
  },
  devtool: 'source-map'
}